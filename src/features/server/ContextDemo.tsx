import { createContext, useState, use } from "react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

// Create a context
const ThemeContext = createContext<{
  theme: string;
  toggle: () => void;
} | null>(null);

function ThemedButton() {
  // Consume context using 'use' (or useContext)
  const context = use(ThemeContext);
  const { t } = useTranslation();
  const demoT = t.features.server.context;

  if (!context) return null;

  return (
    <button
      onClick={context.toggle}
      className={`px-4 py-2 rounded-md transition-colors ${
        context.theme === "dark"
          ? "bg-slate-800 text-white hover:bg-slate-700"
          : "bg-amber-100 text-amber-900 hover:bg-amber-200"
      }`}
    >
      {demoT.button.replace("{theme}", context.theme)}
    </button>
  );
}

export default function ContextDemo() {
  const [theme, setTheme] = useState("light");
  const { t } = useTranslation();
  const demoT = t.features.server.context;

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card space-y-6">
          <div className="flex items-center justify-center p-8 rounded-lg bg-muted/20">
            {/* New Syntax: Context as Provider */}
            <ThemeContext value={{ theme, toggle }}>
              <ThemedButton />
            </ThemeContext>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`const ThemeContext = createContext('light');

function App() {
  return (
    // Old: <ThemeContext.Provider value="dark">
    // New: Just <ThemeContext>!
    <ThemeContext value="dark">
      <ThemedButton />
    </ThemeContext>
  );
}`}
          fullCode={`import { createContext, useState, use } from "react";

// Create a context
const ThemeContext = createContext(null);

function ThemedButton() {
  // Consume context using 'use' hook
  const context = use(ThemeContext);

  if (!context) return null;

  return (
    <button
      onClick={context.toggle}
      className={\`px-4 py-2 rounded-md transition-colors \${
        context.theme === "dark"
          ? "bg-slate-800 text-white hover:bg-slate-700"
          : "bg-amber-100 text-amber-900 hover:bg-amber-200"
      }\`}
    >
      Toggle to {context.theme === "dark" ? "light" : "dark"} mode
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="p-8 font-sans max-w-md">
      <h1 className="text-3xl font-bold mb-6">Context as Provider Demo</h1>

      <div className="p-6 rounded-lg border border-gray-200 space-y-6">
        <p className="text-sm text-gray-600">
          React 19: Use context directly as provider, no .Provider needed!
        </p>
        
        <div className="flex items-center justify-center p-8 rounded-lg bg-gray-50">
          {/* New Syntax: Context as Provider */}
          <ThemeContext value={{ theme, toggle }}>
            <ThemedButton />
          </ThemeContext>
        </div>

        <div className="text-sm font-mono bg-gray-100 px-3 py-2 rounded">
          Current theme: <span className="font-bold">{theme}</span>
        </div>
      </div>
    </div>
  );
}`}
        />
      </div>
    </div>
  );
}
