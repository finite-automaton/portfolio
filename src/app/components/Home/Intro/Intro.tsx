import Image from "next/image";
import styles from "./intro.module.css";
import profilePic from "../../../../../public/profile.png";
import { useTranslation } from "@/app/hooks/useTranslation";

export const Intro = () => {
  const { langDict } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.profileWrapper}>
        <h1 className={styles.title}>{langDict.introduction.greeting}</h1>
        <Image
          className={styles.profilePicture}
          src={profilePic}
          alt={"Picture of John Fletcher"}
          priority
        />
        <div className={styles.textGroup}>
          <p className={styles.text}>{langDict.introduction.jobTitle1}</p>
          <p className={styles.text}>{langDict.introduction.jobTitle2}</p>
        </div>
      </div>
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
