import styles from "@/app/page.module.css";
import localStyles from "./bio.module.css";
import { useTranslation } from "@/app/hooks/useTranslation";

export const Bio = () => {
  const { langDict } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={localStyles.textGroup}>
        <p className={localStyles.text}>{langDict.bio.one}</p>
        <p className={localStyles.text}>{langDict.bio.two}</p>
      </div>
    </section>
  );
};
