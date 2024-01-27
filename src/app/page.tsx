"use client";

import styles from "./page.module.css";
import { Intro } from "./components/Home/Intro";
import { Bio } from "./components/Home/Bio";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Bio />
    </main>
  );
}
