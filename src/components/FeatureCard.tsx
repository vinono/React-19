import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { useTranslation } from "@/context/LanguageContext";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  link,
  delay = 0,
  className,
}: FeatureCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-xl tracking-tight">{title}</h3>
      </div>

      <p className="text-muted-foreground mb-6 line-clamp-2">{description}</p>

      <Link
        to={link}
        className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
      >
        {t.home.learnMore}{" "}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
