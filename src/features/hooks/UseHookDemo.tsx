import { use, Suspense, useState, createContext } from "react";
import { Loader2 } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

// 1. Promise Demo
const fetchMessage = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello from the Promise!"), 2000);
  });

function Message({ messagePromise }: { messagePromise: Promise<string> }) {
  const message = use(messagePromise);
  return <p className="text-xl font-medium text-primary">{message}</p>;
}

// 2. Context Demo
const ThemeContext = createContext("light");

function ThemedMessage({ show, label }: { show: boolean; label: string }) {
  if (!show) return null;
  // 'use' can be called conditionally!
  const theme = use(ThemeContext);
  return (
    <p className="text-sm text-muted-foreground">
      {label} {theme}
    </p>
  );
}

export default function UseHookDemo() {
  const [promise, setPromise] = useState<Promise<string> | null>(null);
  const [showContext, setShowContext] = useState(false);
  const { t } = useTranslation();
  const demoT = t.features.hooks.use;

  const startFetch = () => {
    setPromise(fetchMessage());
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="space-y-6">
          {/* Promise Section */}
          <div className="p-6 rounded-xl border bg-card space-y-4">
            <h4 className="font-medium">{demoT.promiseTitle}</h4>
            <button
              onClick={startFetch}
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
            >
              {demoT.fetchButton}
            </button>

            <div className="min-h-[60px] flex items-center">
              {promise ? (
                <Suspense
                  fallback={
                    <div className="flex items-center text-muted-foreground">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      {demoT.loading}
                    </div>
                  }
                >
                  <Message messagePromise={promise} />
                </Suspense>
              ) : (
                <span className="text-muted-foreground text-sm">
                  {demoT.startPrompt}
                </span>
              )}
            </div>
          </div>

          {/* Context Section */}
          <div className="p-6 rounded-xl border bg-card space-y-4">
            <h4 className="font-medium">{demoT.contextTitle}</h4>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="show-context"
                checked={showContext}
                onChange={(e) => setShowContext(e.target.checked)}
                className="h-4 w-4 rounded border-primary text-primary focus:ring-primary"
              />
              <label htmlFor="show-context" className="text-sm">
                {demoT.showContext}
              </label>
            </div>
            <ThemedMessage show={showContext} label={demoT.contextValue} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`import { use, Suspense } from "react";

function Message({ messagePromise }) {
  // 'use' suspends until the promise resolves
  const message = use(messagePromise);
  return <p>{message}</p>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Message messagePromise={somePromise} />
    </Suspense>
  );
}

function ThemedComponent({ show }) {
  if (show) {
    // 'use' works conditionally!
    const theme = use(ThemeContext);
    return <div className={theme} />;
  }
  return null;
}`}
        />
      </div>
    </div>
  );
}
