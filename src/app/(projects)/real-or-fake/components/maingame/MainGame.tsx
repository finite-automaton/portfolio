import { Dispatch, SetStateAction, useEffect } from "react";

import realReviews from "../../static/real.json";
import fakeReviews from "../../static/fake.json";
import { GameState, Phase, Review as ReviewT } from "../../page";
import Review from "../review/Review";

import styles from "./maingame.module.css";

type MainGameProps = {
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
};

function shuffleArray(array: ReviewT[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getUniqueReviews = (reviews: ReviewT[]): ReviewT[] => {
  const uniqueReviews = new Set();
  while (uniqueReviews.size < 5) {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    uniqueReviews.add(reviews[randomIndex]);
  }
  return Array.from(uniqueReviews) as ReviewT[];
};

const getReviews = (gameState: GameState) => {
  const freshRealReviews = realReviews.filter(
    (review: ReviewT) => !gameState.usedIds.includes(review.id)
  );
  const freshFakeReviews = fakeReviews.filter(
    (review: ReviewT) => !gameState.usedIds.includes(review.id)
  );

  if (freshFakeReviews.length < 5 || freshRealReviews.length < 5) {
    return [];
  }

  const fiveRealReviews = getUniqueReviews(freshRealReviews);
  const fiveFakeReviews = getUniqueReviews(freshFakeReviews);

  return shuffleArray(fiveRealReviews.concat(fiveFakeReviews));
};

export const MainGame = ({ gameState, setGameState }: MainGameProps) => {
  console.log(gameState);

  useEffect(() => {
    console.log(gameState);
    if (gameState.phase === Phase.NEW) {
      const gameCards = getReviews(gameState);
      if (gameCards.length === 0) {
        setGameState((currentState) => {
          return {
            ...currentState,
            phase: Phase.END,
            cards: gameCards,
            currentCardIndex: 0,
            totalCount: 0,
            correctCount: 0,
            isCorrect: undefined,
          };
        });
        return;
      }
      const ids = gameCards.map((review) => review.id);
      setGameState((currentState) => {
        return {
          ...currentState,
          cards: gameCards,
          currentCardIndex: 0,
          totalCount: 0,
          correctCount: 0,
          usedIds: currentState.usedIds.concat(ids),
          isCorrect: undefined,
        };
      });
    }
  }, [gameState.phase]);

  useEffect(() => {
    if (gameState.totalCount === 10) {
      setGameState((currentState) => {
        return {
          ...currentState,
          phase: Phase.ROUND_OVER,
        };
      });
    }
  }, [gameState.totalCount]);

  const handleChoiceClick = (choice: boolean, currentCard?: ReviewT) => {
    const isCorrectChoice = currentCard && choice === currentCard.isSpam;
    setGameState((gameState) => {
      return {
        ...gameState,
        isCorrect: isCorrectChoice,
        correctCount: isCorrectChoice
          ? gameState.correctCount + 1
          : gameState.correctCount,
        totalCount: gameState.totalCount + 1,
        phase:
          gameState.currentCardIndex === 9 ? Phase.ROUND_OVER : Phase.GUESSED,
      };
    });
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

  const handlePlayAgain = () => {
    setGameState((gameState) => {
      return {
        ...gameState,
        phase: Phase.NEW,
        currentCardIndex: 0,
      };
    });
  };

  return (
    <>
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
              disabled={
                gameState.phase !== Phase.GUESSING &&
                gameState.phase !== Phase.NEW
              }
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
              disabled={
                gameState.phase !== Phase.GUESSING &&
                gameState.phase !== Phase.NEW
              }
            >
              Fake
            </button>
          </div>
          {gameState.phase === Phase.GUESSED && (
            <>
              <div className={styles.guessResult}>
                <p>{gameState.isCorrect ? "Richtig!" : "Falsch"}</p>
                {gameState.isCorrect ? (
                  <svg
                    className={styles.pulse}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <polyline
                      fill="none"
                      stroke="#42a047"
                      stroke-miterlimit="10"
                      stroke-width="4"
                      points="6,27.5 17,38.5 42,13.5"
                    ></polyline>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className={styles.pulse}
                  >
                    <path
                      fill="#F44336"
                      d="M21.5 4.5H26.501V43.5H21.5z"
                      transform="rotate(45.001 24 24)"
                    ></path>
                    <path
                      fill="#F44336"
                      d="M21.5 4.5H26.5V43.501H21.5z"
                      transform="rotate(135.008 24 24)"
                    ></path>
                  </svg>
                )}
                <div className={styles.guessExplanation}>
                  <p>
                    {gameState.cards[gameState.currentCardIndex].isSpam
                      ? `Das war eine Fake Renzension`
                      : `Das war eine echte Renzension!`}
                  </p>
                  {gameState.cards[gameState.currentCardIndex].isSpam && (
                    <p>
                      Gründe:{" "}
                      {gameState.cards[gameState.currentCardIndex].spamReason}
                    </p>
                  )}
                </div>
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
          <p className={styles.score}>
            Spielstand: {gameState.correctCount} / {gameState.totalCount}
          </p>
        </>
      )}
      {gameState.phase === Phase.ROUND_OVER && (
        <>
          <div className={styles.finalResult}>
            <p>
              {gameState.correctCount < 5
                ? "Es ist nicht so einfach!"
                : "Gut gemacht!"}
            </p>
            <p>
              <span className={`${styles.pulse} ${styles.inlineBlock}`}>
                {gameState.correctCount}
              </span>{" "}
              / {gameState.totalCount}
            </p>

            <button className={styles.playAgain} onClick={handlePlayAgain}>
              Wieder Spielen
            </button>
          </div>
          <div className={styles.overlay}></div>
        </>
      )}
      {gameState.phase === Phase.END && (
        <>
          <div className={styles.guessResult}>
            <p>Es gibt kein mehr Rezensionen!</p>
          </div>
          <div className={styles.overlay}></div>
        </>
      )}
    </>
  );
};
