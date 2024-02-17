import { useContext } from "react";
import Image from "next/image";

import typescriptLogo from "../../../../../public/Typescript_logo_2020.svg";
import reactLogo from "../../../../../public/React-icon.svg";
import scalaLogo from "../../../../../public/scala-spiral.png";
import pythonLogo from "../../../../../public/Python-logo-notext.svg";

import { TranslationContext } from "../../Provider/Provider";

import styles, { techLogoWrapper } from "./professionalBio.module.css";
import homeStyles from "../home.module.css";

const logos = [typescriptLogo, reactLogo, scalaLogo, pythonLogo];

export const ProfessionalBio = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);
  return (
    <section className={homeStyles.section}>
      <h1 className={homeStyles.title}>My Professional Background</h1>
      <div className={homeStyles.textGroup}>
        <p className={homeStyles.text}>{langDict.bio.work}</p>
      </div>
      <div className={styles.techLogos}>
        {logos.map((logoSrc) => (
          <div className={techLogoWrapper} key={logoSrc}>
            <Image className={styles.logo} src={logoSrc} fill alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalBio;
