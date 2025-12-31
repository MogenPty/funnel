
import React from 'react';
import { Button } from './Button';

export const DefaultLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              M
            </div>
            <span className="text-4xl font-extrabold tracking-tighter">MOGEN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Industry-Specific CRM <br/><span className="text-indigo-600">Built for South Africa</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose your sector to see how Mogen can transform your operations with localized compliance and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-indigo-600 transition-all cursor-pointer text-left" onClick={() => window.location.href = 'https://funeral.mogen.co.za'}>
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-3xl">⚱️</div>
            <h2 className="text-2xl font-bold mb-2">Funeral Services</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Manage arrangements, compliance forms, and families with compassion.</p>
            <Button themeColor="indigo" className="w-full">View Funnel</Button>
          </div>

          <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-600 transition-all cursor-pointer text-left" onClick={() => window.location.href = 'https://legal.mogen.co.za'}>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-3xl">⚖️</div>
            <h2 className="text-2xl font-bold mb-2">Legal Practice</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Automate matter management, billing, and conflict checks for your firm.</p>
            <Button themeColor="blue" className="w-full">View Funnel</Button>
          </div>
        </div>
        
        <p className="text-slate-500 text-sm">
          Using a custom domain? Hostname detection will automatically serve the correct industry version.
        </p>
      </div>
    </div>
  );
};
