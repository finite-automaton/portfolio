import Link from "next/link";
import Chevron from "../../Icons/Chevron";
import styles from "./links.module.css";
import { useEffect, useState } from "react";

const LinkOut = ({
  href,
  content,
  animation,
}: {
  href: string;
  content: string;
  animation: string;
}) => {
  return (
    <Link
      href={href}
      className={`${styles.linkOutWrapper} ${animation}
    `}
    >
      <p className={styles.linkText}>{content}</p>
      <Chevron className={styles.chevron} />
    </Link>
  );
};

export const Links = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(document.getElementById("links")!);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="links">
      <LinkOut
        href={"/projects"}
        content="Projects"
        animation={
          isIntersecting ? `${styles.slideIn} ${styles.animationDelay1}` : ""
        }
      />
      <LinkOut
        href={"/contact"}
        content="Contact"
        animation={
          isIntersecting ? `${styles.slideIn} ${styles.animationDelay2}` : ""
        }
      />
      <LinkOut
        href={"/blog"}
        content="Blog"
        animation={
          isIntersecting ? `${styles.slideIn} ${styles.animationDelay3}` : ""
        }
      />
    </section>
  );
};

export default Links;
