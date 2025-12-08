import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { useTranslation } from "@/context/LanguageContext";

// A component that renders a submit button and reads status from the parent form
function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  const { t } = useTranslation();
  const demoT = t.features.actions.useFormStatus;

  return (
    <div className="space-y-4">
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full"
      >
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {demoT.button.pending}
          </>
        ) : (
          demoT.button.default
        )}
      </button>

      {pending && (
        <div className="text-xs text-muted-foreground animate-pulse">
          {demoT.submitting
            .replace("{method}", String(method))
            .replace("{action}", String(action))}
        </div>
      )}

      {data && (
        <div className="text-xs text-green-500">
          {demoT.submitted.replace("{email}", data.get("email") as string)}
        </div>
      )}
    </div>
  );
}

export default function UseFormStatusDemo() {
  const { t } = useTranslation();
  const demoT = t.features.actions.useFormStatus;

  const action = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Subscribed:", formData.get("email"));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card">
          <form action={action} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {demoT.label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={demoT.placeholder}
              />
            </div>

            {/* SubmitButton uses useFormStatus internally */}
            <SubmitButton />
          </form>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Subscribe"}
    </button>
  );
}

function App() {
  return (
    <form action={submitAction}>
      <input name="email" />
      <SubmitButton /> {/* No props needed! */}
    </form>
  );
}`}
        />
      </div>
    </div>
  );
}
