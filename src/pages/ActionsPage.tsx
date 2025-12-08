import SandboxLayout from "@/components/SandboxLayout";
import UseActionStateDemo from "@/features/actions/UseActionStateDemo";
import UseFormStatusDemo from "@/features/actions/UseFormStatusDemo";
import UseOptimisticDemo from "@/features/actions/UseOptimisticDemo";
import { useTranslation } from "@/context/LanguageContext";

export default function ActionsPage() {
  const { t } = useTranslation();

  return (
    <SandboxLayout
      title={t.pages.actions.title}
      description={t.pages.actions.description}
    >
      <section className="space-y-8">
        <UseActionStateDemo />
        <div className="h-px bg-border" />
        <UseFormStatusDemo />
        <div className="h-px bg-border" />
        <UseOptimisticDemo />
      </section>
    </SandboxLayout>
  );
}
