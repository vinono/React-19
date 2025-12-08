import SandboxLayout from "@/components/SandboxLayout";
import ServerComponentsDemo from "@/features/server/ServerComponentsDemo";
import ContextDemo from "@/features/server/ContextDemo";
import { useTranslation } from "@/context/LanguageContext";

export default function ServerPage() {
  const { t } = useTranslation();

  return (
    <SandboxLayout
      title={t.pages.server.title}
      description={t.pages.server.description}
    >
      <section className="space-y-8">
        <ServerComponentsDemo />
        <div className="h-px bg-border" />
        <ContextDemo />
      </section>
    </SandboxLayout>
  );
}
