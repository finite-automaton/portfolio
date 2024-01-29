"use client";

import Image from "next/image";
import styles from "./intro.module.css";
import profilePic from "../../../../../public/profile.png";
import { useTranslation } from "@/app/hooks/useTranslation";

export const Intro = () => {
  const { langDict } = useTranslation();

  return (
    <section className={styles.section}>
      {
        // mobile
      }
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
      {
        // desktop
      }
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
        <Image
          className={styles.chevron}
          src="/chevron-down-solid.svg"
          alt="down-facing-chevron"
          height={50}
          width={50}
          priority
        />
      </div>
    </section>
  );
};

export default Intro;
