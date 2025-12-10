import { useActionState } from "react";
import CodeBlock from "@/components/CodeBlock";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

// Simulated server action
async function updateName(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const name = formData.get("name") as string;

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!name) {
    return "Name is required";
  }

  if (name.toLowerCase() === "error") {
    return "Simulated error occurred";
  }

  return null; // No error
}

export default function UseActionStateDemo() {
  const [error, submitAction, isPending] = useActionState(updateName, null);
  const { t } = useTranslation();
  const demoT = t.features.actions.useActionState;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{demoT.title}</h3>
          <p className="text-muted-foreground">{demoT.description}</p>
        </div>

        <div className="p-6 rounded-xl border bg-card">
          <form action={submitAction} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {demoT.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={demoT.placeholder}
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {demoT.button.pending}
                </>
              ) : (
                demoT.button.default
              )}
            </button>

            {error && (
              <div className="text-sm text-destructive font-medium">
                {error}
              </div>
            )}

            {!error && !isPending && (
              <div className="text-sm text-muted-foreground">
                {demoT.success}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-muted-foreground">
          {demoT.codeTitle}
        </h4>
        <CodeBlock
          code={`// Define the action
async function updateName(prevState, formData) {
  const name = formData.get("name");
  await new Promise(r => setTimeout(r, 1000));
  if (!name) return "Name is required";
  return null;
}

// In your component
const [error, submitAction, isPending] = 
  useActionState(updateName, null);

return (
  <form action={submitAction}>
    <input name="name" />
    <button disabled={isPending}>
      {isPending ? "Updating..." : "Update"}
    </button>
    {error && <p>{error}</p>}
  </form>
);`}
          fullCode={`import { useActionState } from "react";

// Simulated server action
async function updateName(prevState, formData) {
  const name = formData.get("name");

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!name) {
    return "Name is required";
  }

  if (name.toLowerCase() === "error") {
    return "Simulated error occurred";
  }

  return null; // No error
}

export default function App() {
  const [error, submitAction, isPending] = useActionState(updateName, null);

  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">useActionState Demo</h3>
          <p className="text-muted-foreground">
            Manage form state and pending states with the new useActionState hook
          </p>
        </div>

        <div className="p-6 rounded-xl border bg-card">
          <form action={submitAction} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your name (try 'error')"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              {isPending ? "Updating..." : "Update Name"}
            </button>

            {error && (
              <div className="text-sm text-destructive font-medium">
                {error}
              </div>
            )}

            {!error && !isPending && (
              <div className="text-sm text-muted-foreground">
                Try submitting with empty input or type "error"
              </div>
            )}
          </form>
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
