"use client";

import { Dictionary, LANGS, NestedDictionary } from "@/app/dictionaries";
import { createContext, useEffect, useState } from "react";
import dictEn from "../../../../public/dictionaries/en.json";
import { getLanguageDictionary } from "@/app/actions";

export const TranslationContext = createContext({
  currentLang: LANGS.EN,
  setCurrentLang: (lang: LANGS) => {},
  currentLangDict: dictEn,
  setCurrentLangDict: (dict: Dictionary) => {},
});

export const Provider = ({ children }: { children: JSX.Element }) => {
  const [currentLang, setCurrentLang] = useState(LANGS.EN);
  const [currentLangDict, setCurrentLangDict] = useState(dictEn);

  useEffect(() => {
    // if (!localLangLoaded) {
    //   const localLang = localStorage.getItem("lang") as LANGS;
    //   localLang && setCurrentLang(localLang);
    //   setLocalLangLoaded(true);
    //   return;
    // }
    const updateLangDict = async () => {
      const langDict: Dictionary = await getLanguageDictionary(currentLang);
      setCurrentLangDict(langDict);
      // localStorage.setItem("lang", currentLang);
    };
    console.log(currentLang)
    updateLangDict();
  }, [currentLang]);

  useEffect(() => {
    console.log("instantiated!");
  }, []);
  return (
    <TranslationContext.Provider
      value={{
        currentLang,
        setCurrentLang,
        currentLangDict,
        setCurrentLangDict,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
