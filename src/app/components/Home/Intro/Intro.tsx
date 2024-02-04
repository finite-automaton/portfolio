"use client";

import { useContext } from "react";
import Image from "next/image";

import profilePic from "../../../../../public/profile-cropped.webp";
import { TranslationContext } from "../../Provider/Provider";

import styles from "./intro.module.css";

export const Intro = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <section className={styles.section}>
      {
        // mobile
      }
      <div className={styles.profilePictureWrapperMobile}>
        <Image
          className={styles.profilePictureMobile}
          src={profilePic}
          alt={"Picture of John Fletcher"}
          fill
          priority
        />
      </div>
      <div className={styles.profileWrapperMobile}>
        <h1 className={styles.title}>{langDict.introduction.greeting}</h1>
        <div className={styles.textGroupMobile}>
          <p className={styles.text}>{langDict.introduction.jobTitle1}</p>
          <p className={styles.text}>{langDict.introduction.jobTitle2}</p>
        </div>
        <Image
          className={styles.chevron}
          src="/chevron-down-solid.svg"
          alt="down-facing-chevron"
          height={50}
          width={50}
          priority
        />
      </div>
      {
        // desktop
      }
      <div className={styles.profilePictureWrapperDesktop}>
        <Image
          className={styles.profilePictureDesktop}
          src={profilePic}
          alt={"Picture of John Fletcher"}
          fill
          priority
        />
      </div>
      <div className={styles.profileWrapperDesktop}>
        <div className={styles.textGroupDesktop}>
          <h1 className={styles.titleDesktop}>
            {langDict.introduction.greeting}
          </h1>
          <p className={styles.text}>{langDict.introduction.jobTitle1}</p>
          <p className={styles.text}>{langDict.introduction.jobTitle2}</p>
          <Image
            className={styles.chevron}
            src="/chevron-down-solid.svg"
            alt="down-facing-chevron"
            height={50}
            width={50}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
