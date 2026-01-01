import type React from "react";
import { Button } from "./Button";

interface SectorCardProps {
  title: string;
  description: string;
  icon: string;
  themeColor: string;
  handleRedirect: (url: string) => void;
}

export const SectorCard: React.FC<SectorCardProps> = ({
  title,
  description,
  icon,
  themeColor,
  handleRedirect,
}) => {
  return (
    <div
      className={`group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-${themeColor}-600 transition-all cursor-pointer text-left`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-16 h-16 bg-${themeColor}-100 dark:bg-${themeColor}-900/30 text-${themeColor}-600 rounded-xl flex items-center justify-center text-3xl`}
        >
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{description}</p>
      <Button
        themeColor={themeColor}
        className="w-full"
        onClick={() => handleRedirect()}
      >
        View Sector
      </Button>
    </div>
  );
};
