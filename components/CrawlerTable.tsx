// components/CrawlerTable.tsx
import React from 'react';
import { FIELD_LIST } from '../constants';

export const CrawlerTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto max-h-[600px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="uppercase tracking-wider border-b-2 border-slate-100 bg-slate-50 sticky top-0 z-10 shadow-sm">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-600">Rank</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-600">Name</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-600">Language</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-600">License</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-600">GitHub</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {FIELD_LIST.map((crawler) => (
              <tr key={crawler.rank} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">#{crawler.rank}</td>
                <td className="px-6 py-4 font-bold text-indigo-700">{crawler.name}</td>
                <td className="px-6 py-4 text-slate-600">{crawler.language}</td>
                <td className="px-6 py-4">
                    <span className="text-slate-500 text-xs uppercase bg-slate-100 px-2 py-1 rounded inline-block">
                        {crawler.license}
                    </span>
                </td>
                <td className="px-6 py-4">
                  <a 
                    href={`https://${crawler.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-medium hover:underline"
                  >
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
