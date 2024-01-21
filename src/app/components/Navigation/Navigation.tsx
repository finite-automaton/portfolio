"use client";

import styles from "./navigation.module.css";

import { LANGS } from "@/app/dictionaries";
import { useTranslation } from "@/app/hooks/useTranslation";

export const Navigation = () => {
  const { currentLang, setCurrentLang, langDict } = useTranslation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          {langDict.navigation.home}
        </a>
        <a href="/" className={styles.link}>
          {langDict.navigation.cv}
        </a>
        <a href="/" className={styles.link}>
          {langDict.navigation.projects}
        </a>
      </nav>
      <div className={styles.langSelector}>
        <button
          className={`${styles.langButton} ${
            currentLang === LANGS.EN && styles.active
          }`}
          onClick={() => {
            setCurrentLang(LANGS.EN);
          }}
        >
          EN
        </button>{" "}
        /{" "}
        <button
          className={`${styles.langButton} ${
            currentLang === LANGS.DE && styles.active
          }`}
          onClick={() => {
            setCurrentLang(LANGS.DE);
          }}
        >
          DE
        </button>
      </div>
    </header>
  );
};
