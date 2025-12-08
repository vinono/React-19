import { useTranslation } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center bg-muted rounded-lg p-1 border border-border/50">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
          language === "en"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        En
      </button>
      <button
        onClick={() => setLanguage("zh")}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
          language === "zh"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        中
      </button>
    </div>
  );
}
