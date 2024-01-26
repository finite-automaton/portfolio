"use client";

import { useState } from "react";

import styles from "./navigation.module.css";

import { LANGS } from "@/app/dictionaries";
import { useTranslation } from "@/app/hooks/useTranslation";

export const Navigation = () => {
  const { currentLang, setCurrentLang, langDict } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const MenuIcon = ({
    fill = "white",
    stroke = "white",
    onClick,
  }: {
    fill?: string;
    stroke?: string;
    className?: string;
    onClick?: () => void;
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        onClick={onClick}
      >
        <path
          d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
          stroke={stroke}
          fill={fill}
        />
      </svg>
    );
  };

  return (
    <>
      <div
        className={`${styles.menuIconWrapper} ${
          isNavOpen ? styles.menuIconOpen : styles.menuIconClose
        }`}
      >
        <MenuIcon
          stroke={isNavOpen ? "white" : "#ECBC55"}
          fill={isNavOpen ? "white" : "#ECBC55"}
          onClick={() => setIsNavOpen((isOpen) => !isOpen)}
        />
      </div>
      <>
        {isNavOpen && (
          <div
            className={styles.overlay}
            onClick={() => setIsNavOpen((isOpen) => !isOpen)}
          />
        )}
        <nav className={`${isNavOpen ? styles.nav : styles.navClosed}`}>
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.link}>
                {langDict.navigation.home}
              </a>
            </li>
            <li>
              <a href="/" className={styles.link}>
                {langDict.navigation.cv}
              </a>
            </li>
            <li>
              <a href="/" className={styles.link}>
                {langDict.navigation.projects}
              </a>
            </li>
            <li className={styles.langSelector}>
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
            </li>
          </ul>
        </nav>
      </>
    </>
  );
};
