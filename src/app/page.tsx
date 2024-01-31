"use client";

import { Bio } from "./components/Home/Bio";
import { Intro } from "./components/Home/Intro";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <Bio />
    </div>
  );
}
