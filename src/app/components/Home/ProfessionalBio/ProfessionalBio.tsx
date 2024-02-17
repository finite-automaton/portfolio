import { useContext } from "react";
import Image from "next/image";

import typescriptLogo from "../../../../../public/Typescript_logo_2020.svg";
import reactLogo from "../../../../../public/React-icon.svg";
import scalaLogo from "../../../../../public/scala-spiral.png";
import pythonLogo from "../../../../../public/Python-logo-notext.svg";
import axaLogo from "../../../../../public/AXA_Logo.svg";
import dlgLogo from "../../../../../public/DLG_logo_cropped.jpg";
import tideLogo from "../../../../../public/Tide_Logo_Blue_RGB.svg";
import depopLogo from "../../../../../public/depop.webp";
import bathLogo from "../../../../../public/bath_logo.jpeg";

import { TranslationContext } from "../../Provider/Provider";

import styles, { techLogoWrapper } from "./professionalBio.module.css";
import homeStyles from "../home.module.css";
import Chevron from "../../Icons/Chevron";

const logos = [typescriptLogo, reactLogo, scalaLogo, pythonLogo];

const TimeLineCard = ({
  date,
  text,
  icon,
}: {
  date?: string;
  text?: string;
  icon?: any;
}) => {
  return (
    <li className={styles.timelineItem}>
      <div className={styles.timelineItemTitle}>
        {icon && (
          <div className={styles.iconWrapper}>
            <Image src={icon} fill alt="" className={styles.logo} />
          </div>
        )}
        <h1 className={styles.timelineCardDate}>{date}</h1>
      </div>

      <div className={styles.timelineCard}>
        <p className={styles.timelineText}>{text}</p>
      </div>
    </li>
  );
};

const Background = ({ className }: { className: string }) => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  return (
    <div className={className}>
      <h1 className={homeStyles.title}>My Professional Background</h1>
      <div className={homeStyles.textGroup}>
        <p className={homeStyles.text}>{langDict.bio.work}</p>
      </div>
      <div className={styles.techLogos}>
        {logos.map((logoSrc) => (
          <div className={techLogoWrapper} key={logoSrc}>
            <Image className={styles.techLogo} src={logoSrc} fill alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeLine = ({ className }: { className: string }) => {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  const cardData = [
    {
      date: "2024",
      text: langDict.professionalExperience["2024"],
      icon: bathLogo,
    },
    {
      date: "2022",
      text: langDict.professionalExperience["2022"],
      icon: depopLogo,
    },
    {
      date: "2018",
      text: langDict.professionalExperience["2018"],
      icon: depopLogo,
    },
    {
      date: "2017",
      text: langDict.professionalExperience["2017"],
      icon: tideLogo,
    },
    {
      date: "2016",
      text: langDict.professionalExperience["2016"],
      icon: dlgLogo,
    },
    {
      date: "2015",
      text: langDict.professionalExperience["2015"],
      icon: axaLogo,
    },
  ];
  return (
    <div className={className}>
      <h1 className={styles.timelineTitle}>Experience</h1>
      <div className={styles.timelineWrapper}>
        <ul className={styles.timeline}>
          {cardData.map((card) => {
            return <TimeLineCard key={card.date} {...card} />;
          })}
        </ul>
      </div>
      <div className={styles.scrollHint}>
        <Chevron className={styles.scrollHintChevron} />
      </div>
    </div>
  );
};

export const ProfessionalBio = () => {
  return (
    <>
      <div className={styles.mobileLayout}>
        <Background className={homeStyles.section} />
        <TimeLine className={homeStyles.section} />
      </div>

      <section className={styles.desktopSection}>
        <Background className={styles.halfSection} />
        <TimeLine className={styles.halfSection} />
      </section>
    </>
  );
};

export default ProfessionalBio;
