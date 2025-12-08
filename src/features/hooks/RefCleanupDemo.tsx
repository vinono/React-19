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
        />
      </div>
    </div>
  );
}
