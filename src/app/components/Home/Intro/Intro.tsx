"use client";

import Image from "next/image";
import styles from "./intro.module.css";
import profilePic from "../../../../../public/profile.png";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useContext } from "react";
import { TranslationContext } from "../../Provider/Provider";

export const Intro = () => {
  const {  currentLangDict: langDict  } =  useContext(TranslationContext);
  const isMobile = useMediaQuery("(max-width: 772px)");

  return (
    <section className={styles.section}>
      {isMobile ? (
        <div className={styles.profileWrapperMobile}>
          <h1 className={styles.title}>{langDict.introduction.greeting}</h1>
          <Image
            className={styles.profilePictureMobile}
            src={profilePic}
            alt={"Picture of John Fletcher"}
            priority
          />
          <div className={styles.textGroupMobile}>
            <p className={styles.text}>{langDict.introduction.jobTitle1}</p>
            <p className={styles.text}>{langDict.introduction.jobTitle2}</p>
          </div>
        </div>
      ) : (
        <div className={styles.profileWrapperDesktop}>
          <Image
            className={styles.profilePictureDesktop}
            src={profilePic}
            alt={"Picture of John Fletcher"}
            layout="responsive"
            height={200}
            width={200}
            priority
          />
          <div className={styles.textGroupDesktop}>
            <h1 className={styles.titleDesktop}>
              {langDict.introduction.greeting}
            </h1>
            <p className={styles.text}>{langDict.introduction.jobTitle1}</p>
            <p className={styles.text}>{langDict.introduction.jobTitle2}</p>
          </div>
        </div>
      )}
      <Image
        className={styles.chevron}
        src="/chevron-down-solid.svg"
        alt="down-facing-chevron"
        height={50}
        width={50}
        priority
      />
    </section>
  );
};

export default Intro;
