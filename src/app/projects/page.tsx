"use client";

import Image, { StaticImageData } from "next/image";
import Chevron from "../components/Icons/Chevron";
import styles from "./page.module.css";
import hypergraph from "../../../public/hypergraph-diagram.png";
import realOrFake from "../../../public/real-or-fake.png";

import Link from "next/link";
import { useContext } from "react";
import { TranslationContext } from "../components/Provider/Provider";

type Project = {
  image: StaticImageData;
  projectInfo: {
    title: string;
    descriptionShort: string;
    descriptionLong: string;
  };
  linkHref: string;
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.linkHref}>
      <div className={styles.projectCard}>
        <div className={`${styles.imageWrapper} ${styles.hideMobile}`}>
          <Image src={project.image} alt="" fill />
        </div>
        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>{project.projectInfo.title}</h2>
          <p className={`${styles.hideDesktop}`}>
            {project.projectInfo.descriptionShort}
          </p>
          <p className={`${styles.hideMobile}`}>
            {project.projectInfo.descriptionLong}
          </p>
        </div>
        <Chevron className={styles.chevron} />
      </div>
    </Link>
  );
}

export default function Projects() {
  const { currentLangDict: langDict } = useContext(TranslationContext);

  const projects = [
    {
      image: hypergraph,
      projectInfo: {
        title: langDict.projects.hypergraphTitle,
        descriptionShort: langDict.projects.hypergraphDescriptionShort,
        descriptionLong: langDict.projects.hypergraphDescriptionLong,
      },
      linkHref: "/projects/explainable-hypergraphs",
    },
    {
      image: realOrFake,
      projectInfo: {
        title: langDict.projects.realorfakeTitle,
        descriptionShort: langDict.projects.realorfakeDescriptionShort,
        descriptionLong: langDict.projects.realorfakeDescriptionLong,
      },
      linkHref: "/projects/real-or-fake",
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{langDict.projects.title}</h1>
      {projects.map((project) => (
        <ProjectCard key={project.linkHref} project={project} />
      ))}
    </main>
  );
}
