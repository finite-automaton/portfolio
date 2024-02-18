import Image from "next/image";

import hikingScotland from "../../../../../public/hiking_scotland.jpeg";
import hikingRain from "../../../../../public/hiking_rain.jpg";
import homeStyles from "../home.module.css";

import styles from "./personalBio.module.css";
import { useContext } from "react";
import { TranslationContext } from "../../Provider/Provider";

export const PersonalBio = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <section className={homeStyles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.personalBioWrapper}>
          <h1 className={homeStyles.title}>Interests</h1>
          <div className={homeStyles.textGroup}>
            <p className={homeStyles.text}>{langDict.personalBio.personal1}</p>
            <p/>
            <p className={`${homeStyles.text} ${styles.desktopHidden}`}>
              {langDict.personalBio.personal2}
            </p>
            <p className={`${homeStyles.text} ${styles.mobileHidden}`}>
              {langDict.personalBio.personal3}
            </p>
            <p className={`${homeStyles.text} ${styles.mobileHidden}`}>
              {langDict.personalBio.personal4}
            </p>
            <p className={`${homeStyles.text} ${styles.mobileHidden}`}>
              {langDict.personalBio.personal5}
            </p>
            <p className={`${homeStyles.text} ${styles.mobileHidden}`}>
              {langDict.personalBio.personal6}
            </p>
          </div>
        </div>
        <div className={`${styles.imageWrapper} ${styles.desktopHidden}`}>
          <Image
            className={styles.mainImage}
            src={hikingScotland}
            fill
            alt=""
          />
        </div>
        <div className={`${styles.imageWrapper} ${styles.mobileHidden}`}>
          <Image className={styles.mainImage} src={hikingRain} fill alt="" />
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
