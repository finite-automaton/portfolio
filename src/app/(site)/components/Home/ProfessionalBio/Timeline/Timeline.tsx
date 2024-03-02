import { useContext } from "react";
import Image from "next/image";

import axaLogo from "../../../../../../../public/AXA_Logo.svg";
import dlgLogo from "../../../../../../../public/DLG_logo_cropped.jpg";
import tideLogo from "../../../../../../../public/Tide_Logo_Blue_RGB.svg";
import depopLogo from "../../../../../../../public/depop.webp";
import bathLogo from "../../../../../../../public/bath_logo.jpeg";
import Chevron from "../../../Icons/Chevron";
import { TranslationContext } from "@/app/(site)/components/Provider/Provider";

import styles from "./timeline.module.css";

const TimelineCard = ({
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

export const Timeline = () => {
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
    <div className={styles.timelineSection}>
      <h1 className={styles.timelineTitle}>
        {langDict.professionalExperience.title}
      </h1>
      <div className={styles.timelineWrapper}>
        <ul className={styles.timeline}>
          {cardData.map((card) => {
            return <TimelineCard key={card.date} {...card} />;
          })}
        </ul>
      </div>
      <div className={styles.scrollHint}>
        <Chevron className={styles.scrollHintChevron} />
      </div>
    </div>
  );
};

export default Timeline;
