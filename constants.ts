import type { IndustryContent } from "./types";

export const FUNERAL_CONTENT: IndustryContent = {
  entityName: "Bury-Me-Smiling Undertakers",
  title: "Funeral Services",
  headline: "The CRM Built Exclusively for South African Funeral Homes",
  subheadline:
    "Streamline arrangements, manage compliance, and provide compassionate service with South Africa's first modern funeral management platform.",
  heroImage:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
  description:
    "Manage arrangements, compliance forms, and families with compassion.",
  url: "https://funeral.mogen.co.za",
  icon: "⚰️",
  themeColor: "indigo", // Tailwind base color
  secondaryColor: "slate",
  accentColor: "purple",
  painPoints: [
    {
      title: "Paperwork Overload",
      description:
        "Spending hours on manual entry for death notices and contracts.",
    },
    {
      title: "Scheduling Conflicts",
      description: "Double-booked chapels or hearses causing family distress.",
    },
    {
      title: "Compliance Risks",
      description:
        "Maintaining audit trails for BI-1663 and health regulations.",
    },
    {
      title: "Inventory Leakage",
      description: "Loss of track on caskets, urns, and floral arrangements.",
    },
  ],
  featureSections: [
    {
      category: "Client & Case Management",
      features: [
        {
          title: "Arrangement Tracking",
          description:
            "Real-time status of every funeral from pickup to burial.",
        },
        {
          title: "Deceased & Family Portal",
          description:
            "Unified database for records and family communication logs.",
        },
        {
          title: "Aftercare Follow-ups",
          description:
            "Automated check-ins to build long-term community relationships.",
        },
      ],
    },
    {
      category: "Operations",
      features: [
        {
          title: "Service Scheduling",
          description: "Visual calendar for staff, vehicles, and facilities.",
        },
        {
          title: "Inventory Control",
          description:
            "Stock management for caskets, monuments, and materials.",
        },
      ],
    },
    {
      category: "Compliance & Admin",
      features: [
        {
          title: "SA Compliance Ready",
          description:
            "Built-in audit trails and forms for South African regulatory standards.",
        },
        {
          title: "Custom Contracts",
          description:
            "Generate digital-ready forms and service agreements instantly.",
        },
      ],
    },
  ],
};

export const LEGAL_CONTENT: IndustryContent = {
  entityName: "It Wasn't Me Attorneys",
  title: "Legal Practice",
  headline: "The CRM Built Exclusively for South African Law Firms",
  subheadline:
    "Scale your practice with automated client intake, trust accounting readiness, and secure matter management tailored for SA legal professionals.",
  heroImage:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
  description:
    "Automate matter management, billing, and conflict checks for your firm.",
  url: "https://legal.mogen.co.za",
  icon: "⚖️",
  themeColor: "blue",
  secondaryColor: "amber",
  accentColor: "slate",
  painPoints: [
    {
      title: "Billable Hour Leaks",
      description:
        "Missing thousands in revenue due to undocumented time spent on cases.",
    },
    {
      title: "Deadline Misses",
      description:
        "Fragmented calendars leading to critical court dates being overlooked.",
    },
    {
      title: "Conflict of Interest",
      description: "Manual checks are slow and prone to errors during intake.",
    },
    {
      title: "Trust Account Chaos",
      description: "Struggling to reconcile client funds with case progress.",
    },
  ],
  featureSections: [
    {
      category: "Matter Management",
      features: [
        {
          title: "Unified Matter View",
          description:
            "Every email, document, and note in one secure timeline.",
        },
        {
          title: "Conflict Checking",
          description:
            "Automated database scans during every new client intake.",
        },
        {
          title: "Document Storage",
          description:
            "Encrypted storage for sensitive case files and evidence.",
        },
      ],
    },
    {
      category: "Operations & Billing",
      features: [
        {
          title: "Time & Billing Tracking",
          description: "One-click timers and instant invoice generation.",
        },
        {
          title: "Trust Accounting Ready",
          description:
            "Separate ledgers for client funds to stay compliant with LPC rules.",
        },
      ],
    },
    {
      category: "Communication",
      features: [
        {
          title: "Secure Logs",
          description: "Immutable logs of all professional correspondence.",
        },
        {
          title: "Deadline Tracking",
          description:
            "Automated reminders for Prescription dates and Court filings.",
        },
      ],
    },
  ],
};
