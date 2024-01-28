import styles from "./bio.module.css";
import { useTranslation } from "@/app/hooks/useTranslation";

export const Bio = () => {
  const { langDict } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.textGroup}>
        <p className={styles.text}>{langDict.bio.work}</p>
      </div>
    </section>
  );
};

export default Bio;
