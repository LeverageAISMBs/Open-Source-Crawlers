// components/CrawlerCard.tsx
import React, { useState, useCallback } from 'react';
import { CrawlerData } from '../types';

interface CrawlerCardProps {
  data: CrawlerData;
  isUnderRadar?: boolean;
}

export const CrawlerCard: React.FC<CrawlerCardProps> = ({ data, isUnderRadar = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = useCallback(() => {
    if (isExpanded) {
      window.open(data.url, '_blank', 'noopener,noreferrer');
    } else {
      setIsExpanded(true);
    }
  }, [isExpanded, data.url]);

  // Dynamic Styles
  const containerBaseClass = isUnderRadar 
    ? "group bg-indigo-900 text-indigo-50 relative overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1"
    : `group bg-white rounded-lg shadow border-t-4 ${data.colorAccent} p-6 transition-all duration-300 ease-out cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1`;

  const expandedClass = isExpanded
    ? "transform scale-[1.02] shadow-2xl ring-2 ring-offset-2 ring-cyan-400 z-10"
    : "hover:scale-[1.01]";

  return (
    <div 
      className={`${containerBaseClass} ${expandedClass} ${isUnderRadar ? 'rounded-xl p-6 shadow-lg' : ''}`}
      onClick={handleClick}
    >
      {/* Badge for Under Radar */}
      {isUnderRadar && (
        <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
          Gem
        </div>
      )}

      {/* Header Section */}
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-bold transition-colors duration-300 ${isUnderRadar ? 'text-xl text-cyan-300 group-hover:text-cyan-200' : 'text-2xl text-slate-800 group-hover:text-indigo-900'}`}>
          {data.rank ? `#${data.rank} ` : ''}{data.name}
        </h3>
        
        {!isUnderRadar && (
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
            data.language.includes('Python') ? 'bg-green-100 text-green-800' :
            data.language.includes('Node') ? 'bg-yellow-100 text-yellow-800' :
            data.language.includes('Go') ? 'bg-cyan-100 text-cyan-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {data.language}
          </span>
        )}
        
        {isUnderRadar && (
           <span className="text-sm opacity-80">{data.language}</span>
        )}
      </div>

      {/* Content */}
      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-90'}`}>
         <p className={`mt-2 text-sm leading-relaxed ${isUnderRadar ? 'text-indigo-100' : 'text-slate-600'}`}>
           {data.description}
         </p>
         
         {/* Expanded Extra Info */}
         {isExpanded && (
           <div className="mt-4 pt-4 border-t border-dashed border-gray-300/30">
             <div className="flex flex-wrap gap-2 mb-3">
               {data.tags?.map((tag, idx) => (
                 <span key={idx} className="text-xs bg-black/10 px-2 py-1 rounded text-current">
                   {tag}
                 </span>
               ))}
             </div>
             
             <div className="flex items-center justify-center bg-cyan-500/10 p-2 rounded text-center group-hover:bg-cyan-500/20 transition-colors">
                <span className={`text-sm font-bold ${isUnderRadar ? 'text-cyan-300' : 'text-cyan-700'}`}>
                  Click again to visit Repository ➔
                </span>
             </div>
           </div>
         )}
      </div>

      {/* Hint if not expanded */}
      {!isExpanded && (
        <div className="mt-6 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
           <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isUnderRadar ? 'text-cyan-300' : 'text-slate-400 group-hover:text-cyan-600'}`}>
             Click to expand
           </span>
        </div>
      )}
    </div>
  );
};
