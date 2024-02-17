"use client";

import { ProfessionalBio } from "./components/Home/ProfessionalBio";
import { Intro } from "./components/Home/Intro";
import PersonalBio from "./components/Home/PersonalBio/PersonalBio";
import Links from "./components/Home/Links/Links";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <ProfessionalBio />
      <PersonalBio />
      <Links />
    </div>
  );
}
