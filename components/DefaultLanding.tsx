import type React from "react";
import { getAllIndustries } from "../utils/contentLoader";
import { SectorCard } from "./SectorCard";

export const DefaultLanding: React.FC = () => {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  const industries = getAllIndustries();

  const sectors = industries.map((industry) => ({
    title: industry.title,
    description: industry.description,
    icon: industry.icon,
    themeColor: industry.themeColor,
    handleRedirect: () => handleRedirect(industry.url),
  }));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              M
            </div>
            <span className="text-4xl font-extrabold tracking-tighter">
              MOGEN PTY
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Industry-Specific CRM <br />
            <span className="text-indigo-600">Built for South Africa</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose your sector to see how Mogen Pty Ltd can transform your
            operations with localized compliance and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector) => (
            <SectorCard
              key={sector.title}
              title={sector.title}
              description={sector.description}
              icon={sector.icon}
              themeColor={sector.themeColor}
              handleRedirect={sector.handleRedirect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
