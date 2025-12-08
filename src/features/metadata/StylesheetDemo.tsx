import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

export default function StylesheetDemo() {
  const [activeStyle, setActiveStyle] = useState<"default" | "high">("default");
  const { t } = useTranslation();
  const demoT = t.features.metadata.stylesheet;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card space-y-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveStyle("default")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeStyle === "default"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
              }`}
            >
              {demoT.default}
            </button>
            <button
              onClick={() => setActiveStyle("high")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeStyle === "high"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
              }`}
            >
              {demoT.high}
            </button>
          </div>

          <div className="p-8 rounded-lg border-2 border-dashed text-center transition-all duration-500 demo-box">
            <p className="text-lg font-medium">{demoT.boxText}</p>
            <p className="text-sm mt-2 opacity-70">{demoT.boxNote}</p>
          </div>

          {/* 
            In a real app, these would point to actual CSS files.
            For this demo, we'll simulate the effect with inline styles 
            because we don't want to mess up the global styles of this showcase.
            
            However, the syntax shown below is exactly how it works in React 19.
          */}
          <style>{`
            .demo-box {
              background-color: ${
                activeStyle === "default" ? "hsl(var(--muted))" : "transparent"
              };
              border-color: ${
                activeStyle === "default"
                  ? "hsl(var(--border))"
                  : "hsl(var(--primary))"
              };
              color: ${
                activeStyle === "default"
                  ? "hsl(var(--foreground))"
                  : "hsl(var(--primary))"
              };
            }
          `}</style>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`// Low precedence (default)
<link 
  rel="stylesheet" 
  href="standard.css" 
  precedence="default" 
/>

// High precedence (overrides default)
<link 
  rel="stylesheet" 
  href="theme.css" 
  precedence="high" 
/>

// React ensures 'high' comes after 'default' 
// in the DOM, regardless of render order.`}
        />
      </div>
    </div>
  );
}
