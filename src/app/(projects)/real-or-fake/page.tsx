"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "./page.module.css";
import Intro from "./components/intro/Intro";
import Review from "./components/review/Review";
import realReviews from "./static/real.json";
import fakeReviews from "./static/fake.json";

enum Phase {
  NEW = "new",
  GUESSING = "guessing",
  GUESSED = "guessed",
  ROUND_OVER = "round_over",
}

type GameState = {
  phase: Phase;
  cards: Review[] | undefined;
  currentCardIndex: number;
  isCorrect: boolean | undefined;
  usedIds: string[];
  correctCount: number;
  totalCount: number;
};

type MainGameProps = {
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
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

function shuffleArray(array: Review[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getUniqueReviews = (reviews: Review[]): Review[] => {
  const uniqueReviews = new Set();
  while (uniqueReviews.size < 5) {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    uniqueReviews.add(reviews[randomIndex]);
  }
  return Array.from(uniqueReviews) as Review[];
};

const getReviews = (gameState: GameState) => {
  const freshRealReviews = realReviews.filter(
    (review) => !gameState.usedIds.includes(review.id)
  );
  const freshFakeReviews = fakeReviews.filter(
    (review) => !gameState.usedIds.includes(review.id)
  );

  const fiveRealReviews = getUniqueReviews(freshRealReviews);
  const fiveFakeReviews = getUniqueReviews(freshFakeReviews);

  // to do - set game state if < 5 left in either
  return shuffleArray(fiveRealReviews.concat(fiveFakeReviews));
};

const MainGame = ({ gameState, setGameState }: MainGameProps) => {
  console.log(gameState);

  useEffect(() => {
    const gameCards = getReviews(gameState);
    const realIds = gameCards.map((review) => review.id);
    const fakeIds = gameCards.map((review) => review.id);
    setGameState((currentState) => {
      return {
        ...currentState,
        cards: gameCards,
        currentCardIndex: 0,
        usedIds: currentState.usedIds.concat(realIds).concat(fakeIds),
      };
    });
  }, []);

  const handleChoiceClick = (choice: boolean, currentCard?: Review) => {
    const isCorrectChoice = currentCard && choice === currentCard.isSpam;
    setGameState((gameState) => {
      return {
        ...gameState,
        correct: isCorrectChoice,
        correctCount: isCorrectChoice
          ? gameState.correctCount + 1
          : gameState.correctCount,
        totalCount: gameState.totalCount + 1,
        phase: Phase.GUESSED,
      };
    });

    console.log(currentCard && choice === currentCard.isSpam);
  };

  const handleContinueClick = () => {
    setGameState((gameState) => {
      return {
        ...gameState,
        phase: Phase.GUESSING,
        currentCardIndex: gameState.currentCardIndex + 1,
      };
    });
  };

  return (
    <div className={styles.gameWrapper}>
      {gameState.cards && (
        <>
          <Review reviewData={gameState.cards[gameState.currentCardIndex]} />
          <div className={styles.options}>
            <button
              className={styles.optionButton}
              onClick={() =>
                handleChoiceClick(
                  false,
                  gameState.cards && gameState.cards[gameState.currentCardIndex]
                )
              }
              disabled={gameState.phase !== Phase.GUESSING}
            >
              Echte
            </button>
            <button
              className={styles.optionButton}
              onClick={() =>
                handleChoiceClick(
                  true,
                  gameState.cards && gameState.cards[gameState.currentCardIndex]
                )
              }
              disabled={gameState.phase !== Phase.GUESSING}
            >
              Fake
            </button>
          </div>
          {gameState.phase === "guessed" && (
            <>
              <div className={styles.guessResult}>
                <p>{gameState.isCorrect ? "Richtig!" : "Falsch"}</p>
                <p>
                  {gameState.cards[gameState.currentCardIndex].isSpam
                    ? `Gründe:`
                    : `Das war eine echte Renzension!`}
                </p>
                {gameState.cards[gameState.currentCardIndex].isSpam && (
                  <p>
                    `${gameState.cards[gameState.currentCardIndex].spamReason}`
                  </p>
                )}
                <button
                  className={`${styles.continueButton} ${styles.optionButton}`}
                  onClick={handleContinueClick}
                >
                  Weiter
                </button>
              </div>
              <div className={styles.overlay}></div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default function RealOrFake() {
  const [gameState, setGameState] = useState<GameState>({
    phase: Phase.NEW,
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
        phase: Phase.GUESSING,
      };
    });
  };

  console.log(gameState);
  return (
    <>
      {gameState.phase === "new" ? (
        <Intro handleStartButtonClick={handleStartButtonClick} />
      ) : (
        <MainGame gameState={gameState} setGameState={setGameState} />
      )}
    </>
  );
}
