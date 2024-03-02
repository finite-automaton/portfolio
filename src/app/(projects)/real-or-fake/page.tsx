"use client";

import { useState } from "react";

import styles from "./page.module.css";
import Intro from "./components/intro/Intro";
import Review from "./components/review/Review";
import { MainGame } from "./components/maingame/MainGame";

export enum Phase {
  INTRO = "intro",
  NEW = "new",
  GUESSING = "guessing",
  GUESSED = "guessed",
  ROUND_OVER = "round_over",
  END = "end",
}

export type GameState = {
  phase: Phase;
  cards: Review[] | undefined;
  currentCardIndex: number;
  isCorrect: boolean | undefined;
  usedIds: string[];
  correctCount: number;
  totalCount: number;
};

export type Review = {
  id: string;
  isSpam: boolean;
  product: string;
  ratings: number;
  fiveStarCount: number;
  oneStarCount: number;
  thisRating: number;
  headline: string;
  reviewText: string;
  spamReason: string;
};

export default function RealOrFake() {
  const [gameState, setGameState] = useState<GameState>({
    phase: Phase.INTRO,
    usedIds: [],
    isCorrect: undefined,
    cards: undefined,
    currentCardIndex: 0,
    correctCount: 0,
    totalCount: 0,
  });

  const handleStartButtonClick = () => {
    setGameState(() => {
      return {
        ...gameState,
        phase: Phase.NEW,
      };
    });
  };

  console.log(gameState);
  return (
    <main className={styles.main}>
      {gameState.phase === Phase.INTRO ? (
        <Intro handleStartButtonClick={handleStartButtonClick} />
      ) : (
        <MainGame gameState={gameState} setGameState={setGameState} />
      )}
    </main>
  );
}
