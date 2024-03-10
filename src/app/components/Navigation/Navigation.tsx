"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LANGS } from "@/app/dictionaries";
import { TranslationContext } from "../Provider/Provider";

import styles from "./navigation.module.css";

const translationExclusionPages = ["real-or-fake"];

export const Navigation = () => {
  const { currentLang, currentLangDict, setCurrentLang } =
    useContext(TranslationContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathName = usePathname();
  const excludeTranslations = translationExclusionPages.some((page) =>
    pathName.includes(page)
  );

  const NavItem = ({ href, text }: { href: string; text: string }) => {
    return (
      <li key={text}>
        <Link
          href={href}
          className={`
            ${
              pathName.includes(href)
                ? styles.navItemActive
                : styles.navItemInactive
            }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          <p className={styles.navItem}>{text}</p>
        </Link>
      </li>
    );
  };

  const navLinks = [
    { href: "/", text: currentLangDict.navigation.home },
    { href: "/projects", text: currentLangDict.navigation.projects },
    { href: "/blog", text: currentLangDict.navigation.blog },
    { href: "/contact", text: currentLangDict.navigation.contact },
  ];

  const MenuItems = () => {
    return (
      <ul className={styles.navList}>
        {navLinks.map((link) => NavItem({ href: link.href, text: link.text }))}
      </ul>
    );
  };

  const LangSelector = () => {
    return excludeTranslations ? null : (
      <div className={styles.langSelector}>
        <button
          className={`${styles.navItem} ${styles.langButton} ${
            currentLang === LANGS.EN && styles.active
          }`}
          onClick={() => {
            setCurrentLang(LANGS.EN);
          }}
        >
          EN
        </button>
        <p>/</p>

        <button
          className={`${styles.navItem} ${styles.langButton} ${
            currentLang === LANGS.DE && styles.active
          }`}
          onClick={() => {
            setCurrentLang(LANGS.DE);
          }}
        >
          DE
        </button>
      </div>
    );
  };

  return (
    <>
      {isNavOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsNavOpen((isOpen) => !isOpen)}
        />
      )}
      <div className={styles.header}>
        <button
          className={styles.menuIconWrapper}
          onClick={() => setIsNavOpen((isOpen) => !isOpen)}
        >
          <div
            className={`${styles.navIconBar} ${
              isNavOpen && styles.navBarTopOpen
            }`}
          />
          <div
            className={`${styles.navIconBar} ${
              isNavOpen && styles.navBarMiddleOpen
            }`}
          />
          <div
            className={`${styles.navIconBar} ${
              isNavOpen && styles.navBarBottomOpen
            }`}
          />
        </button>
        <nav
          className={`${
            isNavOpen ? styles.navMobileOpen : styles.navMobileClosed
          }`}
        >
          <MenuItems />
        </nav>

        <nav className={styles.navDesktop}>
          <MenuItems />
        </nav>

        <LangSelector />
      </div>
    </>
  );
};

export default Navigation;
