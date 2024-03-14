import Image from "next/image";

import personalPhotoHor from "../../../../../public/switzerland-hor-crop.jpg";
import personalPhotoVer from "../../../../../public/switzerland-large.jpg";
import homeStyles from "../home.module.css";

import styles from "./personalBio.module.css";
import { useContext } from "react";
import { TranslationContext } from "../../Provider/Provider";

export const PersonalBio = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <section className={homeStyles.section}>
      <div className={styles.contentWrapper}>
        <div
          className={`${styles.verticalImageContainer} ${styles.mobileHidden}`}
        >
          <Image
            className={`${styles.mainImage}`}
            src={personalPhotoVer}
            fill
            alt="hiking in the swiss alps"
          />
        </div>
        <div className={styles.personalBioWrapper}>
          <h1 className={homeStyles.title}>
            {langDict.personalBio.personalTitle}
          </h1>
          <div className={homeStyles.textGroup}>
            <p className={homeStyles.text}>{langDict.personalBio.personal1}</p>
            <p />
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
            className={`${styles.mainImage} ${styles.desktopHidden}`}
            src={personalPhotoHor}
            fill
            alt="hiking in the swiss alps"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
