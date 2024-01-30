"use client";

import Image from "next/image";

import linkedInLogo from "../../../public/linkedin.png";
import githubLogo from "../../../public/github-mark-white.png";
import { create } from "@/app/actions";

import { useTranslation } from "../hooks/useTranslation";
import styles from "./page.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import { TranslationContext } from "../components/Provider/Provider";

export default function Contact() {
  const {  currentLangDict: langDict  } =  useContext(TranslationContext);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.socials}>
        <Link
          href={"https://www.linkedin.com/in/john-fletcher-4353b976/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={linkedInLogo}
            alt={"linkedIn logo"}
            height={40}
            width={40}
            priority
          />
        </Link>

        <Link
          href={"https://github.com/finite-automaton"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={githubLogo}
            alt={"github logo"}
            height={40}
            width={40}
            priority
          />
        </Link>
      </div>
      {!hasSubmittedForm ? (
        <>
          {" "}
          <h1 className={styles.textInfo}>{langDict.contact.sendEmail}</h1>
          <form
            action={create}
            className={styles.contactForm}
            onSubmit={() => {
              setHasSubmittedForm(true);
            }}
          >
            <label htmlFor="name" className={styles.formLabel}>
              {langDict.contact.name}
            </label>
            <input
              type="text"
              name="name"
              className={styles.input}
              required
              minLength={2}
            />
            <label htmlFor="subject" className={styles.formLabel}>
              {langDict.contact.email}
            </label>
            <input
              type="email"
              name="email"
              className={styles.input}
              required
            />

            <label htmlFor="subject" className={styles.formLabel}>
              {langDict.contact.subject}
            </label>
            <input
              type="text"
              name="subject"
              className={styles.input}
              required
              minLength={2}
            />
            <label htmlFor="subject" className={styles.formLabel}>
              {langDict.contact.message}
            </label>
            <textarea
              name="message"
              className={styles.messageInput}
              rows={4}
              required
              minLength={5}
            />
            <button type="submit" className={styles.sendButton}>
              {langDict.contact.send}
            </button>
          </form>{" "}
        </>
      ) : (
        <h1 className={styles.textInfo}>{langDict.contact.thanks}</h1>
      )}
    </div>
  );
}
