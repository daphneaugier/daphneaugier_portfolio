import { createContext } from "react";

export const languages = {
  en: "en",
  fr: "fr",
};

export const LanguageContext = createContext({
  lang: languages.en,
  setLang: () => {},
});