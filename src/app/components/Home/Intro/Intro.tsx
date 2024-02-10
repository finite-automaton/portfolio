"use client";

import { useContext } from "react";
import Image from "next/image";

import profilePic from "../../../../../public/profile-cropped.webp";
import { TranslationContext } from "../../Provider/Provider";

import styles from "./intro.module.css";

const DownChevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={styles.chevron}
  >
    <path
      className={styles.chevronPath}
      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
    />
  </svg>
);

export const Intro = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <section className={styles.section}>
      <div className={styles.profilePictureWrapper}>
        <Image
          className={styles.profilePicture}
          src={profilePic}
          alt={"Picture of John Fletcher"}
          fill
          priority
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.profileWrapper}>
          <h1 className={styles.title}>{langDict.introduction.greeting}</h1>
          <div className={styles.textGroup}>
            <p className={styles.text}>{langDict.introduction.jobTitle1}</p>
            <p className={styles.text}>{langDict.introduction.jobTitle2}</p>
          </div>
          <DownChevron />
        </div>
      </div>
    </section>
  );
};

export default Intro;
