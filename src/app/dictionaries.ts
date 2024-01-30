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
