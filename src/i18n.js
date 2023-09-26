import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import urTranslation from "./locales/ur/translation.json";
import puTranslation from "./locales/pu/translation.json";
import hiTranslation from "./locales/hi/translation.json";
import baTranslation from "./locales/ba/translation.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    ur: {
      translation: urTranslation,
    },
    pu: {
      translation: puTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    ba: {
      translation: baTranslation,
    },
  },
});

export default i18n;
