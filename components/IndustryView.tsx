import type React from "react";
import type { Industry, IndustryContent } from "../types";
import { Button } from "./Button";
import { Footer } from "./Footer";
import { SectionCard } from "./SectionCard";
import { WaitlistForm } from "./WaitlistForm";

interface IndustryViewProps {
  industry: Industry;
  content: IndustryContent;
}

export const IndustryView: React.FC<IndustryViewProps> = ({
  industry,
  content,
}) => {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 bg-${content.themeColor}-600 rounded-lg flex items-center justify-center text-white font-bold`}
            >
              {content.entityName.substring(0, 1).toUpperCase()}
            </div>
            <span className="text-xl font-bold tracking-tight">
              {content.entityName}
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium opacity-70">
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#benefits" className="hover:text-indigo-600 transition">
              Benefits
            </a>
            <a href="#join" className="hover:text-indigo-600 transition">
              Waitlist
            </a>
          </div>
          <a href="#join">
            <Button themeColor={content.themeColor} size="sm">
              Get Started
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8 text-center lg:text-left">
            <div
              className={`inline-block px-4 py-1.5 bg-${content.themeColor}-100 dark:bg-${content.themeColor}-900/30 text-${content.themeColor}-700 dark:text-${content.themeColor}-300 rounded-full text-sm font-semibold tracking-wide uppercase`}
            >
              BETA PROGRAM NOW OPEN
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {content.headline}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
              {content.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a href="#join">
                <Button
                  themeColor={content.themeColor}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Join the Beta
                </Button>
              </a>
              <a href="#features">
                <Button
                  variant="outline"
                  themeColor={content.themeColor}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className={`absolute -inset-4 bg-${content.themeColor}-600/20 rounded-3xl blur-3xl -z-10 animate-pulse`}
            ></div>
            <img
              src={content.heroImage}
              alt="Professional Environment"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-video lg:aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section
        id={"benefits"}
        className="py-20 bg-slate-50 dark:bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">
              Stop Fighting With Your Systems
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              South African business owners face unique challenges. We solve
              them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.painPoints.map((point, idx) => (
              <div
                key={`${point.title}-${idx}`}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg flex items-center justify-center mb-6`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id={"features"} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">
              Powerful Features, Simplified
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to manage your{" "}
              {industry === "FUNERAL" ? "home" : "firm"} effectively without the
              complexity of legacy software.
            </p>
          </div>

          <div className="space-y-20">
            {content.featureSections.map((section, sIdx) => (
              <SectionCard
                key={`${section.title}`}
                sectionNumber={sIdx + 1}
                themeColor={content.themeColor}
                section={section}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section id={"join"} className="py-20 lg:py-32 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-${content.themeColor}-600/5 dark:bg-${content.themeColor}-600/10`}
        ></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">Ready to modernize?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Join our exclusive beta waitlist and be the first to transform
              your business.
            </p>
          </div>
          <WaitlistForm industry={industry} themeColor={content.themeColor} />
        </div>
      </section>

      {/* Footer */}
      <Footer themeColor={content.themeColor} />
    </div>
  );
};
