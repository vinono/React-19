import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

export default function RefCleanupDemo() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("Mounted");
  const { t } = useTranslation();
  const demoT = t.features.hooks.refCleanup;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShow(!show)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              {show ? demoT.unmount : demoT.mount}
            </button>
            <div className="text-sm font-mono bg-muted px-3 py-1 rounded">
              {demoT.status} {status}
            </div>
          </div>

          <div className="h-32 flex items-center justify-center border-2 border-dashed rounded-lg bg-muted/20">
            {show && (
              <div
                ref={() => {
                  // Ref callback
                  setStatus("Mounted");

                  // Cleanup function
                  return () => {
                    setStatus("Unmounted");
                  };
                }}
                className="px-4 py-2 bg-primary/10 text-primary rounded font-medium animate-in fade-in zoom-in duration-300"
              >
                {demoT.monitored}
              </div>
            )}
          </div>

          {/* Activity Log removed as we are using status for simplicity */}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`<input
  ref={(ref) => {
    // Ref created
    console.log('mounted');

    // Return a cleanup function!
    return () => {
      console.log('cleanup');
    };
  }}
/>`}
          fullCode={`import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("Mounted");

  return (
    <div className="p-8 font-sans max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Ref Cleanup Demo</h1>

      <div className="p-6 rounded-lg border border-gray-200 space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShow(!show)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {show ? "Unmount Component" : "Mount Component"}
          </button>
          <div className="text-sm font-mono bg-gray-100 px-3 py-1 rounded">
            Status: {status}
          </div>
        </div>

        <div className="h-32 flex items-center justify-center border-2 border-dashed rounded-lg bg-gray-50">
          {show && (
            <div
              ref={() => {
                // Ref callback
                setStatus("Mounted");
                console.log("Component mounted");

                // Cleanup function
                return () => {
                  setStatus("Unmounted");
                  console.log("Component cleanup");
                };
              }}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded font-medium"
            >
              Monitored Component
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600">
          Toggle the component to see the ref cleanup function in action. Check the console for logs!
        </p>
      </div>
    </div>
  );
}`}
        />
      </div>
    </div>
  );
}
