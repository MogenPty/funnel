import type React from "react";
import { useState } from "react";
import type { WaitlistFormData } from "../types";
import { Button } from "./Button";

interface WaitlistFormProps {
  industryTitle: string;
  themeColor: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  industryTitle,
  themeColor,
}) => {
  const [formData, setFormData] = useState<Partial<WaitlistFormData>>({
    budget: "R500–R1000",
    industryTitle,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Call
    try {
      console.log("Submitting form data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-300">
        <div
          className={`w-16 h-16 bg-${themeColor}-100 dark:bg-${themeColor}-900/30 rounded-full flex items-center justify-center mx-auto mb-6`}
        >
          <svg
            className={`w-8 h-8 text-${themeColor}-600`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>logo</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Thank you for your interest in Mogen. We'll reach out to{" "}
          <strong>{formData.email}</strong> as soon as we launch our beta.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-800"
    >
      <h3 className="text-2xl font-bold mb-6 text-center">
        Join the Beta Waitlist
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 opacity-70"
            >
              Full Name
            </label>
            <input
              required
              type="text"
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="Thabo Mokoena"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium mb-1 opacity-70"
            >
              Business Name
            </label>
            <input
              required
              type="text"
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="Enterprise Solutions"
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 opacity-70"
            >
              Work Email
            </label>
            <input
              required
              type="email"
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="thabo@company.co.za"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-1 opacity-70"
            >
              Phone Number
            </label>
            <input
              required
              type="tel"
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              placeholder="082 123 4567"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-medium mb-1 opacity-70"
            >
              Industry
            </label>
            <input
              readOnly
              value={industryTitle}
              className="w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-500 cursor-not-allowed outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium mb-1 opacity-70"
            >
              Expected Monthly Budget
            </label>
            <select
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            >
              <option value="R200–R500">R200–R500</option>
              <option value="R500–R1000">R500–R1000</option>
              <option value="R1000–R2000">R1000–R2000</option>
              <option value="R2000+">R2000+</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1 opacity-70"
          >
            Message (Optional)
          </label>
          <textarea
            rows={3}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none transition"
            placeholder="Tell us about your specific needs..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          themeColor={themeColor}
          className="w-full py-4 text-lg"
        >
          {loading ? "Sending..." : "Secure My Spot"}
        </Button>
      </div>
    </form>
  );
};
