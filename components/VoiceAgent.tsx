// components/VoiceAgent.tsx
import React, { useState, useEffect } from 'react';
import { useLiveAgent } from '../hooks/useLiveAgent';

interface VoiceAgentProps {
  contextData: any; // The report data to feed the agent
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({ contextData }) => {
  // Construct the system instruction from the FULL report data
  const systemInstruction = `
    You are 'Sarah', the AI Lead Analyst for 'The Digital Harvest' executive report.
    You are an expert Systems Architect and Senior Software Engineer.
    
    Your goal is to answer questions about the Open Source Crawler market based on the data below.
    Speak professionally but conversationally. Be concise.

    CORE KNOWLEDGE BASE:
    1. MARKET LANDSCAPE:
       - ${JSON.stringify(contextData.sections)}
       - ${JSON.stringify(contextData.statistics)}

    2. TOP 10 CRAWLERS (The Power Ranking):
       ${JSON.stringify(contextData.top10)}

    3. HIDDEN GEMS (Under the Radar):
       ${JSON.stringify(contextData.underRadar)}

    4. THE EXTENDED FIELD (Ranks 11-50):
       ${JSON.stringify(contextData.extendedList)}

    GUIDELINES:
    - If asked about "best for python", mention Scrapy (#1) or Crawl4AI (#47) for LLMs.
    - If asked about "best for speed", mention Colly (#4, Go).
    - If asked about "browser automation", mention Puppeteer (#2) or Playwright (#3).
    - If asked about specific ranks 11-50, look up the 'extendedList'.
    - Provide specific rank numbers when discussing tools.
  `;

  const { isActive, isSpeaking, start, stop, error } = useLiveAgent({ systemInstruction });
  const [showCallout, setShowCallout] = useState(false);

  // Trigger entrance animation and callout on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCallout(true);
    }, 1500); // Delay slightly to let page load
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isActive) {
      stop();
    } else {
      start();
      setShowCallout(false); // Hide callout once interaction starts
    }
  };

  // Avatar Image Source - Professional Female, Light Background for visibility on dark button
  const avatarUrl = "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&eyebrows=default&eyes=default&mouth=smile&top=longHairStraight&hairColor=4a312c&skinColor=f8d25c&clothing=blazerAndShirt&clothingColor=262e33&backgroundColor=cffafe";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 animate-slide-up">
      
      {/* 1. Intuitive Callout Bubble (Draws attention) */}
      <div 
        className={`
          transition-all duration-500 ease-in-out transform origin-bottom-right
          ${showCallout && !isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}
          bg-white text-slate-800 px-4 py-3 rounded-2xl rounded-tr-none shadow-xl border border-indigo-100 max-w-xs cursor-pointer hover:bg-slate-50
        `}
        onClick={handleClick}
      >
        <div className="flex justify-between items-start">
            <div className="text-sm font-medium">
              <span className="block font-bold text-indigo-600 mb-1 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 Lead Analyst
              </span>
              I've analyzed 50+ crawlers. Ask me about the Top 10 or hidden gems!
            </div>
            <button 
                onClick={(e) => { e.stopPropagation(); setShowCallout(false); }}
                className="text-slate-400 hover:text-slate-600 ml-2 font-bold"
            >
                ×
            </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white text-xs px-3 py-1 rounded shadow-lg animate-bounce">
          {error}
        </div>
      )}

      {/* 2. Status Label (Context aware) */}
      {isActive && (
        <div className={`
          bg-slate-900/95 backdrop-blur text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/10
          transition-all duration-300 ${isSpeaking ? 'scale-110 border-green-400/50 text-green-300' : 'scale-100 border-red-400/50 text-slate-300'}
        `}>
          {isSpeaking ? 'Sarah is speaking...' : 'Sarah is listening...'}
        </div>
      )}

      {/* 3. Main Avatar Button */}
      <div className="relative group">
        
        {/* Glow/Pulse Effects */}
        {isActive ? (
            // Active State Ripples
            <>
                <div className={`absolute -inset-1 rounded-full opacity-75 animate-ping ${isSpeaking ? 'bg-green-400' : 'bg-red-500'}`}></div>
                <div className={`absolute -inset-0.5 rounded-full opacity-50 blur-sm ${isSpeaking ? 'bg-green-400' : 'bg-red-500'}`}></div>
            </>
        ) : (
            // Idle State Subtle Glow
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        )}

        <button
          onClick={handleClick}
          className={`
            relative w-20 h-20 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 overflow-hidden bg-slate-900
            ${isActive 
              ? 'scale-110 ring-2 ring-white' 
              : 'hover:scale-105 ring-4 ring-slate-50 hover:ring-cyan-100'
            }
          `}
          aria-label={isActive ? "Stop Voice Agent" : "Start Voice Agent"}
        >
          {/* Avatar Image with Light Background built-in */}
          <img 
            src={avatarUrl} 
            alt="AI Analyst Sarah" 
            className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Overlay for Stop Icon when Active */}
          {isActive && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px] transition-opacity hover:bg-black/50">
                <div className="bg-red-500 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
          )}
        </button>
      </div>
      
      {/* Global Style for Entrance Animation */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
