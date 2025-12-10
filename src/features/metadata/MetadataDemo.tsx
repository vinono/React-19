import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

export default function MetadataDemo() {
  const [title, setTitle] = useState("React 19 Showcase");
  const [description, setDescription] = useState(
    "Exploring the new features of React 19"
  );
  const { t } = useTranslation();
  const demoT = t.features.metadata.metadata;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{demoT.pageTitle}</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                {demoT.metaDescription}
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted/50 text-sm">
            <p className="text-muted-foreground mb-2">{demoT.note}</p>
            <div className="font-mono text-xs text-muted-foreground">
              &lt;!-- Injected by React --&gt;
              <br />
              &lt;title&gt;{title}&lt;/title&gt;
              <br />
              &lt;meta name="description" content="{description}" /&gt;
            </div>
          </div>

          {/* The actual metadata tags being rendered */}
          <title>{title}</title>
          <meta name="description" content={description} />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`function BlogPost({ post }) {
  return (
    <article>
      {/* Render metadata directly in the component! */}
      <title>{post.title}</title>
      <meta name="description" content={post.summary} />
      
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`}
          fullCode={`import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("React 19 Showcase");
  const [description, setDescription] = useState(
    "Exploring the new features of React 19"
  );

  return (
    <div className="p-8 font-sans max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Metadata Tags Demo</h1>

      <div className="p-6 rounded-lg border border-gray-200 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium block">Page Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium block">
              Meta Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gray-50 text-sm">
          <p className="text-gray-600 mb-2">
            React 19 can render these tags in the document head:
          </p>
          <div className="font-mono text-xs text-gray-500">
            &lt;!-- Injected by React --&gt;
            <br />
            &lt;title&gt;{title}&lt;/title&gt;
            <br />
            &lt;meta name="description" content="{description}" /&gt;
          </div>
        </div>

        {/* The actual metadata tags being rendered */}
        <title>{title}</title>
        <meta name="description" content={description} />
      </div>
    </div>
  );
}`}
        />
      </div>
    </div>
  );
}
