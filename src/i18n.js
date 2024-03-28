import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Expanded translations with Dutch (nl)
const resources = {
  en: {
    translation: {
      "Services": "Services",
      "Industries": "Industries",
      "Clients": "Clients",
      "Company": "Company",
      "Contact us": "Contact us",
      "Processes based on simplicity and functionality": "Processes based on simplicity and functionality",
      "As mentioned in the study Production of Flax Fibers for Biocomposites, flax fiber is extracted from a renewable source, which means that it is a recyclable, degradable, and sustainable material.": "As mentioned in the study Production of Flax Fibers for Biocomposites, flax fiber is extracted from a renewable source, which means that it is a recyclable, degradable, and sustainable material.",
      "Making and impact art.": "Making and impact art.",
      "Our mission is to be a booster for the digital evolution of business": "Our mission is to be a booster for the digital evolution of business",
      "Complete control": "Complete control",
      "Every decision, from how you monetize your story to how long it stays online, it is up to you.": "Every decision, from how you monetize your story to how long it stays online, it is up to you.",
      "Brand": "Brand",
      "With the ability to command every pixel, each story can be designed to fit your brand.": "With the ability to command every pixel, each story can be designed to fit your brand.",
      "Immersive": "Immersive",
      "Web Stories allow you to feature full screen video, photos, and audio, seamlessly.": "Web Stories allow you to feature full screen video, photos, and audio, seamlessly.",
      "Build your ideal story today": "Build your ideal story today",
      // Other English translations...
    }
  },
  ru: {
    translation: {
        "Services": "Услуги",
        "Industries": "Индустрии",
        "Clients": "Клиенты",
        "Company": "О компании",
        "Contact us": "Связаться с нами",
        "Processes based on simplicity and functionality": "Процессы, основанные на простоте и функциональности",
        "Making and impact art.": "Создание и воздействие искусства.",
        "Our mission is to be a booster for the digital evolution of business": "Наша миссия: ускорять цифровое развитие компаний",
        "Complete control": "Полный контроль",
        "Every decision, from how you monetize your story to how long it stays online, it is up to you.": "Каждое решение, от того, как вы монетизируете свою историю до того, как долго она будет оставаться в сети, зависит от вас.",
        "Brand": "Бренд",
        "With the ability to command every pixel, each story can be designed to fit your brand.": "Благодаря возможности управлять каждым пикселем каждая история может быть разработана в соответствии с вашим брендом.",
        "Immersive": "Захватывающий",
        "Web Stories allow you to feature full screen video, photos, and audio, seamlessly.": "Веб-истории позволяют легко размещать полноэкранное видео, фотографии и аудио.",
        "Build your ideal story today": "Создайте свою идеальную историю уже сегодня",
      // Other Russian translations...
    }
  },
  kk: { // Kazakh translations
    translation: {
      "Welcome to React": "Welkom bij React",
      // Other Dutch translations...
    }
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
