"use client";

import { LANGS } from "@/app/dictionaries";
import { createContext, useState } from "react";

export const TranslationContext = createContext({
  currentLang: LANGS.EN,
  setCurrentLang: (lang: LANGS) => {},
});

export const Provider = ({ children }: { children: JSX.Element }) => {
  const [currentLang, setCurrentLang] = useState(LANGS.EN);
  return (
    <TranslationContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </TranslationContext.Provider>
  );
};
