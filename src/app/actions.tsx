"use server";

import { LANGS, getDictionary } from "./dictionaries";

export async function getLanguageDictionary(language: LANGS) {
  return getDictionary(language);
}
