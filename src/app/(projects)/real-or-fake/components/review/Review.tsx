import styles from "./review.module.css";
import { Review } from "../../types";

type Props = {
  reviewData: Review;
};

export default function Review({ reviewData }: Props) {
  return (
    <div className={styles.reviewCard}>
      <h1 className={styles.productTitle}>{reviewData.product}</h1>
      <div className={styles.reviewsInfo}>
        <p className={styles.wideText}>
          Totale Rezensionen <span>{reviewData.ratings}</span>
        </p>
        <p className={styles.wideText}>
          <span className={styles.stars}>★★★★★</span>
          <span>{reviewData.fiveStarCount}</span>
        </p>
        <p className={styles.wideText}>
          <span className={styles.stars}> ★☆☆☆☆ </span>
          <span>{reviewData.oneStarCount}</span>
        </p>
      </div>
      <p>Diese Rezension</p>
      <div className={styles.thisReview}>
        <p className={styles.headline}>{`«${reviewData.headline}»`}</p>
        <p className={`${styles.stars} ${styles.userRating}`}>
          <span>{"★".repeat(reviewData.thisRating)}</span>
          <span>{"☆".repeat(5 - reviewData.thisRating)}</span>
        </p>
        <p className={styles.reviewText}>{reviewData.reviewText}</p>
      </div>
    </div>
  );
}
