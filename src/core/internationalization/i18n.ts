import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./jsons/en.json";
import translationPt from "./jsons/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    pt: { translation: translationPt },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
