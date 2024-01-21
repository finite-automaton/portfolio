import Image from "next/image";
import styles from "./page.module.css";
import theme from "./theme.module.css";
import profilePic from "../../public/profile.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.profileWrapper}>
          <h1 className={styles.title}>Hi, I&apos;m John</h1>
          <Image
            className={styles.profilePicture}
            src={profilePic}
            alt={"Picture of John Fletcher"}
          ></Image>
          <p className={styles.text}>
            Software Engineer
            <br />& Engineering Manager
          </p>
        </div>
        <Image
          className={styles.chevron}
          src="/chevron-down-solid.svg"
          alt="down-facing-chevron"
          height={50}
          width={50}
          priority
        />
      </section>
      <section className={styles.section}>
        <h2>Cool stuff</h2>
      </section>
    </main>
  );
}
