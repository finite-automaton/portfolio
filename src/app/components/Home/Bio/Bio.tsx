import { useContext } from "react";

import { TranslationContext } from "../../Provider/Provider";

import styles from "./bio.module.css";

export const Bio = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);
  return (
    <section className={styles.section}>
      <div className={styles.textGroup}>
        <p className={styles.text}>{langDict.bio.work}</p>
      </div>
    </section>
  );
};

export default Bio;
