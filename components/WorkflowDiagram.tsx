// components/WorkflowDiagram.tsx
import React from 'react';

const Step: React.FC<{ title: string; subtitle: string; color: string }> = ({ title, subtitle, color }) => (
  <div className="relative z-10 w-40 flex-shrink-0">
    <div className={`${color} p-4 rounded shadow-lg font-bold text-white transition-transform hover:scale-105`}>
      {title}
    </div>
    <div className="text-xs text-slate-400 mt-2">{subtitle}</div>
  </div>
);

const Arrow: React.FC = () => (
  <div className="flex-1 h-8 md:h-1 relative flex items-center justify-center">
    <span className="hidden md:block absolute right-[-8px] text-slate-400 text-xl">▶</span>
    <span className="block md:hidden text-slate-400 text-xl py-2">▼</span>
  </div>
);

export const WorkflowDiagram: React.FC = () => {
  return (
    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl mb-12 text-white overflow-x-auto">
      <h3 className="text-center text-cyan-400 font-bold mb-8 tracking-widest uppercase">E2E Workflow: Intelligent Market Monitoring</h3>
      
      <div className="flex flex-col md:flex-row justify-between items-center min-w-[600px] text-center gap-4 md:gap-0">
        
        <Step 
            title="Target Discovery" 
            subtitle="Seed URLs & sitemaps" 
            color="bg-pink-600" 
        />
        <Arrow />
        
        <Step 
            title="Headless Render" 
            subtitle="Bypass Anti-Bot & Hydrate JS" 
            color="bg-indigo-600" 
        />
        <Arrow />
        
        <Step 
            title="LLM Extraction" 
            subtitle="HTML to JSON Schema" 
            color="bg-violet-600" 
        />
        <Arrow />
        
        <Step 
            title="Action Trigger" 
            subtitle="Dynamic Pricing Update" 
            color="bg-cyan-600" 
        />

      </div>
    </div>
  );
};
