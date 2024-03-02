import Link from "next/link";
import styles from "./intro.module.css";

type Props = {
  handleStartButtonClick: () => void;
};

export default function Intro({ handleStartButtonClick }: Props) {
  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.echte}>Echt</span>
        <span className={styles.oder}>oder</span>
        <span className={styles.fake}>Fake</span>
      </h1>
      <p className={styles.text}>
        Können Sie erkennen, ob eine Bewertung echt oder gefälscht ist?
      </p>
      <p className={styles.text}>
        Testen Sie sich anhand von zehn zufälligen Bewertungen.
      </p>
      <p className={styles.text}>Daten von:</p>
      <Link
        href="https://github.com/hdaSprachtechnologie/OpinionSpam"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkText}
      >
        <p className={styles.text}>HDA Sprachtechnologie</p>
      </Link>
      <button className={styles.startButton} onClick={handleStartButtonClick}>
        Los geht&apos;s!
      </button>
    </>
  );
}
