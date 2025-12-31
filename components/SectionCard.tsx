import type React from "react";
import type { FeatureSection } from "@/types";

interface SectionProps {
  sIdx: number;
  themeColor: string;
  section: FeatureSection;
}

export const SectionCard: React.FC<SectionProps> = ({
  sIdx,
  themeColor,
  section,
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
        <span
          className={`w-8 h-8 rounded-full bg-${themeColor}-600 flex items-center justify-center text-white text-sm`}
        >
          {sIdx + 1}
        </span>
        <span>{section.category}</span>
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {section.features.map((feature, fIdx) => (
          <div
            key={`${feature.title}-${fIdx}`}
            className="group relative bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all"
          >
            <h4 className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition">
              {feature.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
