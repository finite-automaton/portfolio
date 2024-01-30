"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LANGS } from "@/app/dictionaries";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

import styles from "./navigation.module.css";
import { TranslationContext } from "../Provider/Provider";

export const Navigation = () => {
  const { currentLang, currentLangDict, setCurrentLang } =
    useContext(TranslationContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 772px)");
  const pathName = usePathname();

  useEffect(() => {
    console.log('mounted');
  }, [])

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

  const NavItem = ({ href, text }: { href: string; text: string }) => {
    return (
      <li key={text}>
        <a
          href={href}
          className={
            pathName === href ? styles.navItemActive : styles.navItemInactive
          }
        >
          {text}
        </a>
      </li>
    );
  };

  const navLinks = [
    { href: "/", text: currentLangDict.navigation.home },
    { href: "/contact", text: currentLangDict.navigation.contact },
    { href: "/projects", text: currentLangDict.navigation.projects },
  ];

  const MenuItems = () => {
    return (
      <ul className={isMobile ? styles.navListMobile : styles.navListDesktop}>
        {navLinks.map((link) => NavItem({ href: link.href, text: link.text }))}
        <li
          className={`${styles.langSelector} ${
            !isMobile && styles.langSelectorDesktop
          }`}
          key={"langSelector"}
        >
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
    );
  };

  return isMobile ? (
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
        <nav
          className={`${
            isNavOpen ? styles.navMobileOpen : styles.navMobileClosed
          }`}
        >
          {" "}
          <MenuItems />
        </nav>
      </>
    </>
  ) : (
    <nav className={styles.navDesktop}>
      <MenuItems />
    </nav>
  );
};

export default Navigation;
