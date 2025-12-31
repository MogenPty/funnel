import type React from "react";
import { useEffect, useState } from "react";
import { DefaultLanding } from "./components/DefaultLanding";
import { IndustryView } from "./components/IndustryView";
import { FUNERAL_CONTENT, LEGAL_CONTENT } from "./constants";
import type { Industry, IndustryContent } from "./types";

const App: React.FC = () => {
  const [industry, setIndustry] = useState<Industry>("NONE");
  const [content, setContent] = useState<IndustryContent>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect hostname to serve the correct version
    const hostname = window.location.hostname;

    if (hostname.includes("funeral")) {
      setIndustry("FUNERAL");
    } else if (hostname.includes("legal")) {
      setIndustry("LEGAL");
    } else {
      setIndustry("NONE");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (industry === "NONE") return <DefaultLanding />;

  return (
    <IndustryView
      industry={industry}
      content={industry === "FUNERAL" ? FUNERAL_CONTENT : LEGAL_CONTENT}
    />
  );
};

export default App;
