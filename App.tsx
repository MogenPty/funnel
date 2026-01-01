import type React from "react";
import { DefaultLanding } from "./components/DefaultLanding";
import { IndustryView } from "./components/IndustryView";
import { Loading } from "./components/Loading";
import { FUNERAL_CONTENT, LEGAL_CONTENT } from "./constants";
import type { Industry } from "./types";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [industry, setIndustry] = useState<Industry>("NONE");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hostname = window.location.hostname;

    if (hostname.startsWith("funeral") || hostname.startsWith("www.funeral")) {
      setIndustry("FUNERAL");
    } else if (
      hostname.startsWith("legal") ||
      hostname.startsWith("www.legal")
    ) {
      setIndustry("LEGAL");
    } else {
      setIndustry("NONE");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
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
