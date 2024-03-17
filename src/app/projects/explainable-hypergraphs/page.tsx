"use client";

import { Document, pdfjs, Page } from "react-pdf";
import styles from "./page.module.css";

import { useResizeObserver } from "@wojtekmaj/react-hooks";

import { useCallback, useContext, useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Chevron from "@/app/components/Icons/Chevron";
import Link from "next/link";
import { TranslationContext } from "@/app/components/Provider/Provider";

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const url =
  "httpss://nrsfmmznkpuwntpz.public.blob.vercel-storage.com/dissertation-Gqw6lf3Kn3sTVc8lnkY36txWCNAJ2M.pdf";

const resizeObserverOptions = {};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ExplainabeHypergraphs() {
  const { currentLangDict: langDict } = useContext(TranslationContext);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  function PageSelector({ down }: { down?: boolean }) {
    const pageUp = () => {
      if (pageNumber === numPages) {
        return;
      }
      setPageNumber((currentPage) => currentPage + 1);
    };

    const pageDown = () => {
      if (pageNumber === 1) {
        return;
      }
      setPageNumber((currentPage) => currentPage - 1);
    };

    const disable =
      (down && pageNumber === 1) || (!down && pageNumber === numPages);

    return (
      <div
        className={`${styles.clickArea} ${disable && styles.clickAreaDisable}`}
        onClick={down ? pageDown : pageUp}
      >
        <Chevron
          className={down ? styles.leftChevron : styles.rightChevron}
          fill={disable ? "grey" : "black"}
          stroke={disable ? "grey" : "black"}
        />
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <h1>{langDict.dissertation.title}</h1>
      <p>{langDict.dissertation.description1}</p>
      <p>{langDict.dissertation.description2}</p>
      <p>{langDict.dissertation.description3}</p>

      <p>
        {langDict.dissertation.description4}{" "}
        <Link
          href={
            "httpss://github.com/finite-automaton/explainable-hypergraphs-dementia-prediction"
          }
          className={styles.link}
        >
          {langDict.dissertation.description5}
        </Link>
        .
      </p>
      <h2>{langDict.dissertation.videoTitle}</h2>
      <div className={styles.videoContainer}>
        <iframe
          src="httpss://www.youtube.com/embed/3XZBMwB8N64"
          className={styles.video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Explainable Hypergraphs"
        />
      </div>
      <h2>{langDict.dissertation.documentTitle}</h2>
      <p>
        {langDict.dissertation.documentDescription1}{" "}
        <Link href={url} className={styles.link}>
          {langDict.dissertation.documentDescription2}
        </Link>{" "}
        {langDict.dissertation.documentDescription3}
      </p>
      <div ref={setContainerRef}>
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          className={styles.document}
        >
          <Page pageNumber={pageNumber} width={containerWidth || 400} />
          <div className={styles.pdfMenu}>
            <PageSelector down />
            <span>
              {pageNumber} / {numPages}
            </span>
            <PageSelector />
          </div>
        </Document>
      </div>
    </main>
  );
}
