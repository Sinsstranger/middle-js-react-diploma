import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import localeRu from "@lang/ru.json";
import localeEn from "@lang/en.json";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: localeEn,
  },
  ru: {
    translation: localeRu,
  },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // Работает не правильно
  .init({
    resources,
    // lng: "ru",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    saveMissing: true,
    supportedLngs: ["en", "ru"],
    cleanCode: true,
  });

export default i18n;
