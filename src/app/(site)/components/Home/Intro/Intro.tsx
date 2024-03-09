"use client";

import { useContext } from "react";
import Image from "next/image";

import profileCropped from "../../../../../../public/profile-cropped.jpg";
import profile from "../../../../../../public/profile.jpg";
import { TranslationContext } from "../../Provider/Provider";

import styles from "./intro.module.css";
import Chevron from "../../Icons/Chevron";

export const Intro = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.profilePictureWrapperDesktop}>
          <Image
            className={`${styles.profilePictureDesktop}`}
            src={profile}
            alt={"Picture of John Fletcher"}
            width={3024}
            height={4032}
          />
        </div>
        <div className={styles.profileWrapper}>
          <h1 className={styles.title}>{langDict.introduction.greeting}</h1>
          <div className={styles.profilePictureWrapperMobile}>
            <Image
              className={`${styles.profilePictureMobile}`}
              src={profileCropped}
              alt={"Picture of John Fletcher"}
              width={1525}
              height={1525}
            />
          </div>
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
