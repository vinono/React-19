import { useDeferredValue, useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

export default function UseDeferredValueDemo() {
  const [value, setValue] = useState("");
  // New in React 19: optional initial value
  const deferredValue = useDeferredValue(value, "");
  const { t } = useTranslation();
  const demoT = t.features.hooks.useDeferredValue;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">{demoT.label}</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder={demoT.placeholder}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="text-xs text-muted-foreground mb-1">
                {demoT.realtime}
              </div>
              <div className="font-mono break-all">{value || "..."}</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/10">
              <div className="text-xs text-primary mb-1">{demoT.deferred}</div>
              <div className="font-mono break-all">
                {deferredValue || "..."}
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">{demoT.note}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`function Search({ query }) {
  // New: Pass an initial value as the second argument
  const deferredQuery = useDeferredValue(query, "");

  return (
    <>
      <Results query={deferredQuery} />
    </>
  );
}`}
        />
      </div>
    </div>
  );
}
