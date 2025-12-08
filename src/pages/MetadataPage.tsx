import SandboxLayout from "@/components/SandboxLayout";
import MetadataDemo from "@/features/metadata/MetadataDemo";
import StylesheetDemo from "@/features/metadata/StylesheetDemo";
import { useTranslation } from "@/context/LanguageContext";

export default function MetadataPage() {
  const { t } = useTranslation();

  return (
    <SandboxLayout
      title={t.pages.metadata.title}
      description={t.pages.metadata.description}
    >
      <section className="space-y-8">
        <MetadataDemo />
        <div className="h-px bg-border" />
        <StylesheetDemo />
      </section>
    </SandboxLayout>
  );
}
