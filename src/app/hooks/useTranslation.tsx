import { Dictionary } from "@/app/dictionaries";
import { useState, useEffect, useContext } from "react";
import { getLanguageDictionary } from "../actions";

import dictEn from "../../../public/dictionaries/en.json";
import { TranslationContext } from "@/app/components/Provider/Provider";

export const useTranslation = () => {
  const [langDict, setLangDict] = useState<Dictionary>(dictEn);
  const { currentLang, setCurrentLang } = useContext(TranslationContext);

  useEffect(() => {
    const updateLangDict = async () => {
      const langDict: Dictionary = await getLanguageDictionary(currentLang);
      setLangDict(langDict);
    };
    updateLangDict();
  }, [currentLang]);

  return { currentLang, setCurrentLang, langDict };
};
