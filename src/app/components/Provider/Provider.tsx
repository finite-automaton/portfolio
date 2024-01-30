"use client";

import { LANGS, } from "@/app/dictionaries";
import { createContext, useEffect, useState } from "react";
import dictEn from "../../../../public/dictionaries/en.json";
import dictDe from "../../../../public/dictionaries/de.json";

export const TranslationContext = createContext({
  currentLang: LANGS.EN,
  setCurrentLang: (lang: LANGS) => {},
  currentLangDict: dictEn,
});

export const Provider = ({ children }: { children: JSX.Element }) => {
  const [currentLang, setCurrentLang] = useState(LANGS.EN);
  const [currentLangDict, setCurrentLangDict] = useState(dictEn);
  const [localLangLoaded, setLocalLangLoaded] = useState(false);

  useEffect(() => {
    const localLang = localStorage.getItem("lang") as LANGS;
    if (!!localLang) {
      localLang && setCurrentLang(localLang);
      setLocalLangLoaded(true);
      localLang === LANGS.EN
        ? setCurrentLangDict(dictEn)
        : setCurrentLangDict(dictDe);
      setCurrentLang(localLang);
    }
  }, []);

  useEffect(() => {
    if (localLangLoaded) {
      currentLang === LANGS.EN
        ? setCurrentLangDict(dictEn)
        : setCurrentLangDict(dictDe);
      localStorage.setItem("lang", currentLang);
    }
  }, [currentLang, localLangLoaded]);

  useEffect(() => {
    console.log("instantiated!");
  }, []);
  return (
    <TranslationContext.Provider
      value={{
        currentLang,
        setCurrentLang,
        currentLangDict,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
