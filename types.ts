export type Industry = "FUNERAL" | "LEGAL" | "NONE";

export interface Feature {
  title: string;
  description: string;
}

export interface FeatureSection {
  category: string;
  features: Feature[];
}

export interface PainPoint {
  title: string;
  description: string;
}

export interface IndustryContent {
  entityName: string;
  title: string;
  headline: string;
  subheadline: string;
  description: string;
  heroImage: string;
  icon: string;
  url: string;
  painPoints: PainPoint[];
  featureSections: FeatureSection[];
  themeColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface WaitlistFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  budget: string;
  message?: string;
}
