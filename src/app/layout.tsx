import type { Metadata } from "next";
import { Neuton } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { Navigation } from "./components/Navigation";
import { Provider } from "./components/Provider";

const forum = Neuton({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "John Fletcher's personal site.",
  description: "Personal website for John Fletcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={forum.className}>
      <body className={styles.body}>
        <Provider>
          <>
            <Navigation />
            {children}
          </>
        </Provider>
      </body>
    </html>
  );
}
