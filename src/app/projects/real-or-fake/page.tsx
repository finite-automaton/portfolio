"use client";

import { useState } from "react";

import styles from "./page.module.css";
import Intro from "./components/intro/Intro";
import { MainGame } from "./components/maingame/MainGame";
import { GameState, Phase } from "./types";

export default function RealOrFake() {
  const [gameState, setGameState] = useState<GameState>({
    phase: Phase.INTRO,
    usedIds: [],
    isCorrect: undefined,
    cards: [],
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
