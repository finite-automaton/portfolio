import styles from "./professionalExperience.module.css";

const cardData = [
  { date: "2015", text: "A long story about going to England" },
  { date: "2016", text: "A long story about going to England" },
  { date: "2017", text: "A long story about going to England" },
  { date: "2015", text: "A long story about going to England" },
  { date: "2016", text: "A long story about going to England" },
  { date: "2017", text: "A long story about going to England" },
];

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
      {" "}
      <h1 className={styles.timelineCardDate}>{date}</h1>
      <div className={styles.timelineCard}>
        <p>{text}</p>
      </div>
    </li>
  );
};

export const ProfessionalExperience = () => (
  <section className={styles.section}>
    <h1 className={styles.timelineTitle}>Professional Experience</h1>
    <div className={styles.timelineWrapper}>
      <ul className={styles.timeline}>
        {cardData.map((card) => {
          return <TimeLineCard key={card.text} {...card} />;
        })}
      </ul>
    </div>
  </section>
);

export default ProfessionalExperience;
