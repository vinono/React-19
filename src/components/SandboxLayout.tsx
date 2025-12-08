import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import { useTranslation } from "@/context/LanguageContext";

interface SandboxLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export default function SandboxLayout({
  title,
  description,
  children,
  className,
}: SandboxLayoutProps) {
  const { t } = useTranslation();

  return (
    <div className={cn("max-w-5xl mx-auto space-y-8", className)}>
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.common.backToHome}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
