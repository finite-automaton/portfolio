"use client";

import { Document, pdfjs, Page } from "react-pdf";
import styles from "./page.module.css";

import { useResizeObserver } from "@wojtekmaj/react-hooks";

import { useCallback, useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Chevron from "@/app/components/Icons/Chevron";
import Link from "next/link";

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const url =
  "https://nrsfmmznkpuwntpz.public.blob.vercel-storage.com/dissertation-Gqw6lf3Kn3sTVc8lnkY36txWCNAJ2M.pdf";

const resizeObserverOptions = {};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ExplainabeHypergraphs() {
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
      <h1>
        Explainable Hypergraph Neural Networks for the Prediction of Dementia
        Progression
      </h1>
      <p>
        I conducted my MSc Computer Science dissertation in the filed of medical
        informatics. Specifically, I wanted to explore if it is possible to
        reliably classify the risk of dementia progression using only clinical
        data with an emerging Machine Learning technique using hypergraphs to
        express relationships between risk factors.
      </p>

      <p>
        The project was succesful and achieved a very good classifiction
        accuracy of 79% supported by robust capability distinguishing true/false
        negative and positive cases.
      </p>

      <p>The dissertation achieved a distinction award.</p>
      <h2>Video overview</h2>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/3XZBMwB8N64"
          className={styles.video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Explainable Hypergraphs"
        />
      </div>
      <h2>Read the dissertation</h2>
      <p>
        You can download the dissertation <Link href={url} className={styles.link}>here</Link> or read
        the dissertation below.
      </p>
      <div ref={setContainerRef}>
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          className={styles.document}
        >
          <Page pageNumber={pageNumber} width={containerWidth} />
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
