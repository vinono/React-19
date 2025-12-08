import { Server, Monitor, ArrowRight } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

export default function ServerComponentsDemo() {
  const { t } = useTranslation();
  const demoT = t.features.server.serverComponents;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="space-y-6">
          {/* Visual Explanation */}
          <div className="p-6 rounded-xl border bg-card space-y-6">
            <div className="flex items-center justify-between gap-4 text-sm">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 w-1/3">
                <Server className="w-8 h-8 text-blue-500" />
                <span className="font-semibold text-blue-500">
                  {demoT.server.title}
                </span>
                <span className="text-xs text-center text-muted-foreground whitespace-pre-line">
                  {demoT.server.desc}
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 text-muted-foreground">
                <span className="text-xs">{demoT.serialization}</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-xs">{demoT.stream}</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 w-1/3">
                <Monitor className="w-8 h-8 text-green-500" />
                <span className="font-semibold text-green-500">
                  {demoT.client.title}
                </span>
                <span className="text-xs text-center text-muted-foreground whitespace-pre-line">
                  {demoT.client.desc}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <code className="px-2 py-0.5 rounded bg-muted text-sm font-mono">
                    'use server'
                  </code>
                  <span className="text-sm text-muted-foreground">
                    {demoT.useServer}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="px-2 py-0.5 rounded bg-muted text-sm font-mono">
                    'use client'
                  </code>
                  <span className="text-sm text-muted-foreground">
                    {demoT.useClient}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`// actions.ts
'use server'

export async function create(formData) {
  await db.create(formData);
}

// Button.tsx
'use client'

import { create } from './actions';

export default function Button() {
  return (
    <button onClick={() => create(...) }>
      Save
    </button>
  );
}`}
        />
      </div>
    </div>
  );
}
