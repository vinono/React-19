import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { cn } from "@/lib/utils";
import { RotateCcw, Play } from "lucide-react";
import LZString from "lz-string";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  onChange?: (code: string) => void;
}

export default function CodeBlock({
  code,
  language = "tsx",
  className,
  onChange,
}: CodeBlockProps) {
  const [value, setValue] = useState(code);

  useEffect(() => {
    setValue(code);
  }, [code]);

  const handleValueChange = (newCode: string) => {
    setValue(newCode);
    onChange?.(newCode);
  };

  const highlight = (input: string) => {
    // Fallback to javascript if language not found
    const grammar = Prism.languages[language] || Prism.languages.javascript;
    return Prism.highlight(input, grammar, language);
  };

  return (
    <div
      className={cn(
        "relative rounded-xl bg-[#2d2d2d] font-mono text-sm overflow-hidden shadow-sm group border border-border/50",
        className
      )}
    >
      <div className="absolute top-2 right-2 flex items-center gap-2 z-10 transition-opacity opacity-0 group-hover:opacity-100">
        {value !== code && (
          <button
            onClick={() => setValue(code)}
            className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-white/70 hover:text-white"
            title="Reset code"
            aria-label="Reset code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
        <span className="text-xs text-white/40 select-none px-2 py-1 rounded bg-black/20">
          {language}
        </span>
        <button
          onClick={() => {
            const encoded = LZString.compressToEncodedURIComponent(value);
            window.open(`/sandbox?code=${encoded}`, "_blank");
          }}
          className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-white/70 hover:text-white flex items-center gap-1"
          title="Open in Sandbox"
          aria-label="Open in Sandbox"
        >
          <Play className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">Run</span>
        </button>
      </div>

      <div className="max-h-[600px] overflow-auto custom-scrollbar">
        <Editor
          value={value}
          onValueChange={handleValueChange}
          highlight={highlight}
          padding={20}
          className="font-mono min-h-[100px]"
          style={{
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
            fontSize: 14,
            backgroundColor: "transparent",
            color: "#ccc", // fallback color
          }}
          textareaClassName="focus:outline-none"
        />
      </div>
    </div>
  );
}
