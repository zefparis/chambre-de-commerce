import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en", "zh", "ar", "pt", "es", "ja", "ko", "ru", "tr", "hi", "sw"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
});

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  zh: "中文",
  ar: "العربية",
  pt: "Português",
  es: "Español",
  ja: "日本語",
  ko: "한국어",
  ru: "Русский",
  tr: "Türkçe",
  hi: "हिन्दी",
  sw: "Kiswahili",
};
