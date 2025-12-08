import { createContext, useState, use, type ReactNode } from "react";
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

// Create Context
const LanguageContext = createContext<LanguageContextType | null>(null);

// Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      return saved === "zh" ? "zh" : "en";
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const value = {
    language,
    setLanguage,
    t: dictionaries[language],
  };

  return (
    // React 19: <Context> as provider
    <LanguageContext value={value}>{children}</LanguageContext>
  );
}

// Custom Hook using React 19 'use' API
// eslint-disable-next-line react-refresh/only-export-components
export function useTranslation() {
  const context = use(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
