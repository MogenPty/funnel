import type React from "react";
import type { Feature } from "../types";

interface FeatureCardProps {
  themeColor: string;
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  themeColor,
  feature,
}) => {
  return (
    <div
      className={`group relative bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-${themeColor}-500/50 transition-all`}
    >
      <h4
        className={`text-lg font-bold mb-2 group-hover:text-${themeColor}-600 transition`}
      >
        {feature.title}
      </h4>
      <p
        className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed`}
      >
        {feature.description}
      </p>
    </div>
  );
};
