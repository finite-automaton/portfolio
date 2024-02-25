import { useContext } from "react";
import Image from "next/image";

import typescriptLogo from "../../../../../../public/Typescript_logo_2020.svg";
import reactLogo from "../../../../../../public/React-icon.svg";
import scalaLogo from "../../../../../../public/scala-spiral.png";
import pythonLogo from "../../../../../../public/Python-logo-notext.svg";
import { TranslationContext } from "../../Provider/Provider";
import homeStyles from "../home.module.css";
import { Timeline } from "./Timeline";

import styles from "./professionalBio.module.css";

const logos = [typescriptLogo, reactLogo, scalaLogo, pythonLogo];

const Background = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <div className={styles.professionalBioSection}>
      <div className={styles.professionalBioTextContent}>
        <h1 className={homeStyles.title}>{langDict.professionalBio.title}</h1>
        <div className={homeStyles.textGroup}>
          <p className={homeStyles.text}>{langDict.professionalBio.work}</p>
        </div>
      </div>
      <div className={styles.techLogos}>
        {logos.map((logoSrc) => (
          <div className={styles.techLogoWrapper} key={logoSrc}>
            <Image className={styles.techLogo} src={logoSrc} fill alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProfessionalBio = () => {
  return (
    <div>
      <Background />
      <Timeline />
    </div>
  );
};

export default ProfessionalBio;
