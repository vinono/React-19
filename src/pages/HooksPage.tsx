import SandboxLayout from "@/components/SandboxLayout";
import UseHookDemo from "@/features/hooks/UseHookDemo";
import RefCleanupDemo from "@/features/hooks/RefCleanupDemo";
import UseDeferredValueDemo from "@/features/hooks/UseDeferredValueDemo";
import { useTranslation } from "@/context/LanguageContext";

export default function HooksPage() {
  const { t } = useTranslation();

  return (
    <SandboxLayout
      title={t.pages.hooks.title}
      description={t.pages.hooks.description}
    >
      <section className="space-y-8">
        <UseHookDemo />
        <div className="h-px bg-border" />
        <RefCleanupDemo />
        <div className="h-px bg-border" />
        <UseDeferredValueDemo />
      </section>
    </SandboxLayout>
  );
}
