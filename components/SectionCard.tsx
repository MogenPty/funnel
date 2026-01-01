import type React from "react";
import type { FeatureSection } from "../types";
import { FeatureCard } from "./FeatureCard";

interface SectionProps {
  sectionNumber: number;
  themeColor: string;
  section: FeatureSection;
}

export const SectionCard: React.FC<SectionProps> = ({
  sectionNumber,
  themeColor,
  section,
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
        <span
          className={`w-8 h-8 rounded-full bg-${themeColor}-600 flex items-center justify-center text-white text-sm`}
        >
          {sectionNumber}
        </span>
        <span>{section.category}</span>
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {section.features.map((feature, fIdx) => (
          <FeatureCard
            key={`${feature.title}-${fIdx}`}
            themeColor={themeColor}
            feature={feature}
          />
        ))}
      </div>
    </div>
  );
};
