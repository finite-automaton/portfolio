"use client";

import { useContext } from "react";
import Image from "next/image";

import profilePic from "../../../../../public/profile-cropped.webp";
import { TranslationContext } from "../../Provider/Provider";

import styles from "./intro.module.css";
import Chevron from "../../Icons/Chevron";

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
          <Chevron className={styles.chevron} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
