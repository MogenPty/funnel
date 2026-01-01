import type React from "react";

interface FooterProps {
  themeColor: string;
}

export const Footer: React.FC<FooterProps> = ({ themeColor }) => {
  //get this year from date
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:row items-center justify-between opacity-70 text-sm">
        <div>© {year} Mogen CRM. Built for South African Professionals.</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/privacy"
            className={`hover:text-${themeColor}-600 transition`}
          >
            Privacy
          </a>
          <a
            href="/terms"
            className={`hover:text-${themeColor}-600 transition`}
          >
            Terms
          </a>
          <a
            href="/support"
            className={`hover:text-${themeColor}-600 transition`}
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};
