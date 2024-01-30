import { Dictionary } from "@/app/dictionaries";
import { useEffect, useContext } from "react";
import { getLanguageDictionary } from "../actions";

import { TranslationContext } from "@/app/components/Provider/Provider";

export const useTranslation = () => {
  const { currentLang, setCurrentLang, currentLangDict, setCurrentLangDict } =
    useContext(TranslationContext);

  // useEffect(() => {
  //   const localLang = localStorage.getItem("lang") as LANGS;
  //   localLang && setCurrentLang(localLang);
  //   return;
  // }, []);

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
    updateLangDict();
  }, [currentLang]);

  return { currentLang, currentLangDict, setCurrentLang };
};
