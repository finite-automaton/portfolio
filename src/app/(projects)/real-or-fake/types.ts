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
