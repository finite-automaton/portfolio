import { useContext } from "react";
import styles from "./bio.module.css";
import { TranslationContext } from "../../Provider/Provider";

export const Bio = () => {
  const {  currentLangDict: langDict  } =  useContext(TranslationContext);
  return (
    <section className={styles.section}>
      <div className={styles.textGroup}>
        <p className={styles.text}>{langDict.bio.work}</p>
      </div>
    </section>
  );
};

export default Bio;
