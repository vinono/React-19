import { useOptimistic, useState, useRef } from "react";
import { Send, User } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

interface Message {
  id: string;
  text: string;
  sending: boolean;
}

export default function UseOptimisticDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello there!", sending: false },
  ]);
  const { t } = useTranslation();
  const demoT = t.features.actions.useOptimistic;

  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage: string) => [
      ...state,
      {
        id: Math.random().toString(),
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function sendMessage(formData: FormData) {
    const text = formData.get("message") as string;
    if (!text) return;

    // 1. Optimistic update happens immediately via addOptimisticMessage
    addOptimisticMessage(text);

    // Reset form immediately for better UX
    formRef.current?.reset();

    // 2. Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 3. Actual state update
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(), text, sending: false },
    ]);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="flex flex-col h-[400px] rounded-xl border bg-card overflow-hidden">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-muted/30">
            {optimisticMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${
                  msg.sending ? "opacity-70" : "opacity-100"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-background border px-4 py-2 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm">
                  <p className="text-sm">{msg.text}</p>
                  {msg.sending && (
                    <span className="text-[10px] text-muted-foreground italic">
                      {demoT.sending}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-background border-t">
            <form action={sendMessage} ref={formRef} className="flex gap-2">
              <input
                name="message"
                type="text"
                placeholder={demoT.placeholder}
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                autoComplete="off"
              />
              <button
                type="submit"
                className="h-10 w-10 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`function Chat({ messages }) {
  const [optimisticMessages, addOptimisticMessage] = 
    useOptimistic(
      messages,
      (state, newMessage) => [
        ...state,
        { text: newMessage, sending: true }
      ]
    );

  async function action(formData) {
    const text = formData.get("message");
    addOptimisticMessage(text);
    await sendMessage(text);
  }

  return (
    <div>
      {optimisticMessages.map(m => (
        <div style={{ opacity: m.sending ? 0.5 : 1 }}>
          {m.text}
        </div>
      ))}
      <form action={action}>
        <input name="message" />
      </form>
    </div>
  );
}`}
          fullCode={`import { useOptimistic, useState, useRef } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello there!", sending: false },
  ]);

  const formRef = useRef(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        id: Math.random().toString(),
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function sendMessage(formData) {
    const text = formData.get("message");
    if (!text) return;

    // 1. Optimistic update happens immediately
    addOptimisticMessage(text);

    // Reset form immediately for better UX
    formRef.current?.reset();

    // 2. Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 3. Actual state update
    setMessages((prev) => [
      ...prev,
      { id: Math.random().toString(), text, sending: false },
    ]);
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">useOptimistic Demo</h3>
          <p className="text-muted-foreground">
            Update UI optimistically before async operations complete
          </p>
        </div>

      <div className="flex flex-col h-[400px] rounded-xl border bg-card overflow-hidden">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-muted/30">
          {optimisticMessages.map((msg) => (
            <div
              key={msg.id}
              className={\`flex items-end gap-2 \${
                msg.sending ? "opacity-70" : "opacity-100"
              }\`}
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                👤
              </div>
              <div className="bg-background border px-4 py-2 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm">
                <p className="text-sm">{msg.text}</p>
                {msg.sending && (
                  <span className="text-[10px] text-muted-foreground italic">
                    Sending...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-background border-t">
          <form action={sendMessage} ref={formRef} className="flex gap-2">
            <input
              name="message"
              type="text"
              placeholder="Type a message..."
              className="flex h-10 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoComplete="off"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Send
            </button>
          </form>
        </div>
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
