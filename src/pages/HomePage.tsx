import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Link as LinkIcon,
  Server,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";
import { useTranslation } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useTranslation();

  const features = [
    {
      title: t.features.actions.title,
      description: t.features.actions.description,
      icon: Zap,
      link: "/actions",
      delay: 0.1,
    },
    {
      title: t.features.hooks.title,
      description: t.features.hooks.description,
      icon: LinkIcon,
      link: "/hooks",
      delay: 0.2,
    },
    {
      title: t.features.server.title,
      description: t.features.server.description,
      icon: Server,
      link: "/server",
      delay: 0.3,
    },
    {
      title: t.features.metadata.title,
      description: t.features.metadata.description,
      icon: FileText,
      link: "/metadata",
      delay: 0.4,
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              {t.home.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.home.heroSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <Link
              to="/actions"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              {t.home.getStarted} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://react.dev/blog/2024/04/25/react-19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all"
            >
              {t.home.learnMore}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">{t.home.featuresTitle}</h2>
          <p className="text-muted-foreground">{t.home.featuresSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}
