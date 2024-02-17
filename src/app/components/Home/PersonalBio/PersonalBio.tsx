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
            <p className={homeStyles.text}>{langDict.bio.personal1}</p>
            <p className={homeStyles.text}>{langDict.bio.personal2} </p>
          </div>
        </div>
        <div className={`${styles.imageWrapper} ${styles.mobileImage}`}>
          <Image
            className={styles.mainImage}
            src={hikingScotland}
            fill
            alt=""
          />
        </div>
        <div className={`${styles.imageWrapper} ${styles.desktopImage}`}>
          <Image className={styles.mainImage} src={hikingRain} fill alt="" />
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
