import Image from "next/image";

import hikingScotland from "../../../../../public/hiking_scotland.jpeg";
import homeStyles from "../home.module.css";

import styles from "./personalBio.module.css";
import { useContext } from "react";
import { TranslationContext } from "../../Provider/Provider";

export const PersonalBio = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <section className={homeStyles.section}>
      <h1 className={homeStyles.title}>Interests</h1>

      <div className={homeStyles.textGroup}>
        <p className={homeStyles.text}>{langDict.bio.personal1}</p>
        <p className={homeStyles.text}>{langDict.bio.personal2} </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image className={styles.mainImage} src={hikingScotland} fill alt="" />
      </div>
    </section>
  );
};

export default PersonalBio;
