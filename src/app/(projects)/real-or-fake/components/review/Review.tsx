import styles from "./review.module.css";
import { Review } from "../../page";

type Props = {
  reviewData: Review;
};

export default function Review({ reviewData }: Props) {
  return (
    <div className={styles.reviewCard}>
      <p className={styles.productTitle}>{reviewData.product}</p>
      <div className={styles.reviewsInfo}>
        <p>Totale Rezensionen: {reviewData.ratings}</p>
        <p>⭐️⭐️⭐️⭐️⭐️ {reviewData.fiveStarCount}</p>
        <p>⭐️✩✩✩✩{reviewData.oneStarCount}</p>
      </div>
      <div className={styles.thisReview}>
        <p>{reviewData.headline}</p>
        <p>{reviewData.reviewText}</p>
      </div>
      <p>
        {"⭐️".repeat(reviewData.thisRating)}
        {"✩".repeat(5 - reviewData.thisRating)}
      </p>
    </div>
  );
}
