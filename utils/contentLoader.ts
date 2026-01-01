import type { IndustryContent } from "../types";

// Load all JSON files from the specific directory relative to this file
// effectively loading from ../content/*.json
const industryFiles = import.meta.glob("../content/*.json", {
  eager: true,
}) as Record<string, IndustryContent>;

export const getAllIndustries = (): IndustryContent[] => {
  return Object.values(industryFiles);
};

export const getIndustryByDomain = (
  hostname: string
): IndustryContent | undefined => {
  const industries = getAllIndustries();

  return industries.find((industry) => {
    try {
      if (!industry.url) return false;
      const industryUrl = new URL(industry.url);
      return (
        hostname === industryUrl.hostname ||
        hostname === `www.${industryUrl.hostname}`
      );
    } catch (e) {
      console.warn(`Invalid URL in industry config: ${industry.entityName}`, e);
      return false;
    }
  });
};
