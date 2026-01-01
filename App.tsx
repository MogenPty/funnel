import type React from "react";
import { useEffect, useState } from "react";
import { DefaultLanding } from "./components/DefaultLanding";
import { IndustryView } from "./components/IndustryView";
import { Loading } from "./components/Loading";
import type { IndustryContent } from "./types";
import { getIndustryByDomain } from "./utils/contentLoader";

const App: React.FC = () => {
  const [content, setContent] = useState<IndustryContent | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hostname = window.location.hostname;
    const matchedContent = getIndustryByDomain(hostname);

    if (matchedContent) {
      setContent(matchedContent);
    } else {
      setContent(undefined);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!content) return <DefaultLanding />;

  return <IndustryView content={content} />;
};

export default App;
