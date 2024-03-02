import type { Metadata } from "next";
import Link from "next/link";
import { Kanit } from "next/font/google";
import "../global.css";
import styles from "./layout.module.css";
import Chevron from "../(site)/components/Icons/Chevron";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "John Fletcher's personal site.",
  description: "Personal website for John Fletcher.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.className}>
      <body className={styles.body}>
        <nav className={styles.nav}>
          <Link href="/projects" className={styles.link}>
            <Chevron
              className={styles.backChevron}
            />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
