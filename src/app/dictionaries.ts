import de from "../../public/dictionaries/de.json";
import en from "../../public/dictionaries/en.json";

export interface Dictionary {
  [key: string]: NestedDictionary;
}

export interface NestedDictionary {
  [key: string]: string;
}

export enum LANGS {
  EN = "en",
  DE = "de",
}

const dictionaries: Record<string, object> = {
  de: de,
  en: en,
};

export const getDictionary = (locale: string) => dictionaries[locale];
