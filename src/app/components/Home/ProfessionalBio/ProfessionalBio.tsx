import { useContext } from "react";

import { TranslationContext } from "../../Provider/Provider";

import homeStyles from "../home.module.css";

export const ProfessionalBio = () => {
  const { currentLangDict: langDict } = useContext(TranslationContext);
  return (
    <section className={homeStyles.section}>
      <h1 className={homeStyles.title}>My Professional Background</h1>
      <div className={homeStyles.textGroup}>
        <p className={homeStyles.text}>{langDict.bio.work}</p>
      </div>
    </section>
  );
};

export default ProfessionalBio;
