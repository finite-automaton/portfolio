import { LANGS, getDictionary, Dictionary } from "@/app/dictionaries";
import { useState, useEffect, useContext } from "react";
import dictEn from "../../../public/dictionaries/en.json";
import { TranslationContext } from "../components/Provider/Provider";

export const useTranslation = () => {

  const [langDict, setLangDict] = useState(dictEn);
  const {currentLang, setCurrentLang} = useContext(TranslationContext)

  useEffect(() => {
    if (currentLang === LANGS.DE) {
      fetch("/langs/de")
        .then((res) => res.json())
        .then((data) => setLangDict(data));
    }
    if (currentLang === LANGS.EN) {
      fetch("/langs/en")
        .then((res) => res.json())
        .then((data) => setLangDict(data));
    }
  }, [currentLang]);

  return { currentLang, setCurrentLang, langDict };
};
