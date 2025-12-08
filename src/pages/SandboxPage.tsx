import { Sandpack } from "@codesandbox/sandpack-react";
import SandboxLayout from "@/components/SandboxLayout";
import { useTranslation } from "@/context/LanguageContext";

import { useSearchParams } from "react-router-dom";
import LZString from "lz-string";

const DEFAULT_CODE = `import { use, Suspense, useState } from "react";

// Mock data fetching
const fetchMessage = () => new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello from React 19! 🚀");
  }, 1500);
});

// Cache the promise
const messagePromise = fetchMessage();

function Message({ promise }: { promise: Promise<string> }) {
  // New use() API to read promises directly in render
  const message = use(promise);
  return (
    <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 animate-in fade-in zoom-in">
      {message}
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6">React 19 Playground</h1>
      
      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Interactive State</h2>
          <button 
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Count: {count}
          </button>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Async Component (use API)</h2>
          <Suspense fallback={
            <div className="p-4 bg-gray-100 text-gray-500 rounded-lg animate-pulse">
              Loading message...
            </div>
          }>
            <Message promise={messagePromise} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}`;

export default function SandboxPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  
  const getInitialCode = () => {
    const encodedCode = searchParams.get("code");
    if (encodedCode) {
      try {
        const decoded = LZString.decompressFromEncodedURIComponent(encodedCode);
        if (decoded) return decoded;
      } catch (e) {
        console.error("Failed to decompress code:", e);
      }
    }
    return DEFAULT_CODE;
  };

  const code = getInitialCode();

  return (
    <SandboxLayout
      title={t.common.sandbox}
      description={t.home.heroSubtitle}
      className="max-w-[1600px]"
    >
      <div className="border border-border/50 rounded-xl overflow-hidden shadow-xl">
        <Sandpack
          template="react-ts"
          theme="dark"
          files={{
            "/App.tsx": code,
            "/index.tsx": {
              code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
              hidden: true,
            },
          }}
          options={{
            showNavigator: false,
            showLineNumbers: true,
            showInlineErrors: true,
            editorHeight: 600,
            showTabs: true,
          }}
          customSetup={{
            dependencies: {
              "react": "^19.0.0",
              "react-dom": "^19.0.0",
              "lucide-react": "latest",
            },
          }}
        />
      </div>
    </SandboxLayout>
  );
}
