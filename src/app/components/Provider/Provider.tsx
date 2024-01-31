"use client";

import { createContext, useEffect, useState } from "react";
import dictEn from "../../../../public/dictionaries/en.json";
import { LANGS, Dictionary } from "@/app/dictionaries";
import { getLanguageDictionary } from "@/app/actions";

export const TranslationContext = createContext({
  currentLang: LANGS.EN,
  setCurrentLang: (lang: LANGS) => {},
  currentLangDict: dictEn as Dictionary,
});

export const Provider = ({ children }: { children: JSX.Element }) => {
  const [currentLang, setCurrentLang] = useState(LANGS.EN);
  const [currentLangDict, setCurrentLangDict] = useState<Dictionary>(dictEn);
  const [localLangLoaded, setLocalLangLoaded] = useState(false);

  useEffect(() => {
    const localLang = localStorage.getItem("lang") as LANGS;
    const updateLangDict = async () => {
      const langDict: Dictionary = await getLanguageDictionary(localLang);
      setCurrentLangDict(langDict);
      setCurrentLang(localLang);
    };

    if (localLang) {
      updateLangDict();
    } else {
      localStorage.setItem("lang", LANGS.EN);
    }
    setLocalLangLoaded(true);
  }, []);

  useEffect(() => {
    if (localLangLoaded) {
      const updateLangDict = async () => {
        const langDict: Dictionary = await getLanguageDictionary(currentLang);
        setCurrentLangDict(langDict);
      };
      updateLangDict();
      localStorage.setItem("lang", currentLang);
    }
  }, [currentLang, localLangLoaded]);

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
