import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./global.css";
import styles from "./layout.module.css";
import { Provider } from "./components/Provider";
import { Navigation } from "./components/Navigation/Navigation";

const comfortaa = Comfortaa({ subsets: ["latin"], weight: "400" });

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
    <html lang="en" className={comfortaa.className}>
      <body className={styles.body}>
        <Provider>
          <>
            <Navigation />
            <main>{children}</main>
          </>
        </Provider>
      </body>
    </html>
  );
}
