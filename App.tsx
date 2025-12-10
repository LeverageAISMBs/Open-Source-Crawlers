// App.tsx
import React from 'react';
import { LanguageChart, RankingChart, BubbleChart } from './components/Charts';
import { CrawlerCard } from './components/CrawlerCard';
import { CrawlerTable } from './components/CrawlerTable';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { VoiceAgent } from './components/VoiceAgent';
import { TOP_10_CRAWLERS, UNDER_RADAR_CRAWLERS, FIELD_LIST, LANGUAGE_DATA, BUBBLE_DATA } from './constants';

const App: React.FC = () => {
  // Aggregate ALL data for the voice agent so it "knows" the full report
  const reportContext = {
    top10: TOP_10_CRAWLERS,
    underRadar: UNDER_RADAR_CRAWLERS,
    extendedList: FIELD_LIST,
    statistics: {
      languageDistribution: LANGUAGE_DATA,
      roiMatrix: BUBBLE_DATA
    },
    sections: [
      "The Modern Crawling Landscape: Python dominates (42%), Go is rising (18%). Trend: Pivot from HTML archival to Markdown extraction for LLMs.",
      "Business Value: Crawlers are sensory organs for BI. Workflow: Target Discovery -> Headless Render -> LLM Extraction -> Action Trigger.",
      "Methodology: Ranking based on GitHub Stars (30%), Commit Velocity (20%), Feature Completeness (30%), Doc Quality (20%)."
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* Voice Agent Overlay with Full Context */}
      <VoiceAgent contextData={reportContext} />

      {/* HERO SECTION */}
      <header className="bg-gradient-to-r from-violet-900 via-indigo-800 to-blue-900 text-white p-8 md:p-16 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2">Executive Technical Report</p>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">The Digital Harvest:<br />Open Source Crawlers</h1>
              <p className="text-xl text-indigo-200 max-w-2xl">
                An exhaustive analysis of the infrastructure powering the AI revolution. From legacy scrapers to LLM-native agents.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold text-cyan-300">50+</div>
              <div className="text-sm uppercase tracking-wide text-indigo-100 mt-1">Tools Analyzed</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 space-y-20">

        {/* SECTION 1: THE LANDSCAPE */}
        <section>
          <div className="mb-8 border-l-4 border-cyan-500 pl-6">
            <h2 className="text-3xl font-bold text-slate-800">The Modern Crawling Landscape</h2>
            <p className="text-lg text-slate-600 mt-2">
              Web crawling has evolved from simple HTML parsing to complex browser orchestration. Today's ecosystem is divided by language philosophy: Python's data dominance versus Go's concurrency and Node's browser control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-96 flex flex-col">
              <h3 className="text-xl font-bold text-slate-700 mb-4 text-center">Language Dominance in Top 50 Tools</h3>
              <div className="flex-grow">
                <LanguageChart />
              </div>
              <p className="text-sm text-slate-500 mt-4 text-center italic">
                Python remains the lingua franca of data, but Go is rising for high-performance scale.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-bold text-indigo-900 text-lg">The "LLM-Ready" Shift</h4>
                <p className="text-indigo-800 mt-2">
                  The most significant trend in 2024-2025 is the pivot from HTML storage to Markdown extraction. Tools like <strong>Crawl4AI</strong> and <strong>Firecrawl</strong> are redefining success not by pages archived, but by token-efficiency for RAG (Retrieval-Augmented Generation) pipelines.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">Core Crawler Categories</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 font-bold">●</span>
                    <span><strong>Static Fetchers:</strong> (e.g., Colly, Scrapy) Fast, low CPU, but fail on React/Vue apps.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2 font-bold">●</span>
                    <span><strong>Headless Browsers:</strong> (e.g., Puppeteer, Playwright) Renders JS, behaves like a user, resource heavy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-violet-600 mr-2 font-bold">●</span>
                    <span><strong>Distributed Engines:</strong> (e.g., Apache Nutch) Designed for internet-scale archival.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: BUSINESS WORKFLOWS & ROI */}
        <section>
          <div className="mb-8 border-l-4 border-pink-500 pl-6">
            <h2 className="text-3xl font-bold text-slate-800">Business Value & Workflow Integration</h2>
            <p className="text-lg text-slate-600 mt-2">
              Crawlers are no longer just for search engines. They are the sensory organs for business intelligence, pricing strategy, and AI training.
            </p>
          </div>

          <WorkflowDiagram />

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 h-[500px] flex flex-col">
            <h3 className="text-xl font-bold text-slate-700 mb-2">Complexity vs. Business Value Matrix</h3>
            <p className="text-sm text-slate-500 mb-6">Size represents relative adoption cost.</p>
            <div className="flex-grow">
              <BubbleChart />
            </div>
          </div>
        </section>

        {/* SECTION 3: THE TOP 10 RANKING */}
        <section>
          <div className="mb-8 border-l-4 border-violet-600 pl-6">
            <h2 className="text-3xl font-bold text-slate-800">The Power Ranking: Top 10</h2>
            <p className="text-lg text-slate-600 mt-2">
              <strong>Methodology:</strong> We evaluated over 100 repositories based on a weighted algorithm: 
              <span className="bg-slate-200 px-2 py-1 rounded text-sm mx-1">GitHub Stars (30%)</span>
              <span className="bg-slate-200 px-2 py-1 rounded text-sm mx-1">Commit Velocity (20%)</span>
              <span className="bg-slate-200 px-2 py-1 rounded text-sm mx-1">Feature Completeness (30%)</span>
              <span className="bg-slate-200 px-2 py-1 rounded text-sm mx-1">Documentation Quality (20%)</span>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 mb-10 h-96">
            <RankingChart />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {TOP_10_CRAWLERS.map((crawler) => (
              <CrawlerCard key={crawler.rank} data={crawler} />
            ))}
          </div>
        </section>

        {/* SECTION 4: THE EXTENDED LIST (11-50) */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">The Field: Ranks 11-50</h2>
            <p className="text-slate-600 mt-1 mb-4">
              The mid-tier consists of specialized tools: specific language ports, high-performance Go libraries, and emerging LLM-focused scrapers like Crawl4AI.
            </p>
          </div>
          <CrawlerTable />
        </section>

        {/* SECTION 5: UNDER THE RADAR */}
        <section className="pb-12">
          <div className="mb-8 border-l-4 border-indigo-500 pl-6">
            <h2 className="text-3xl font-bold text-slate-800">Under the Radar: Top 10 Hidden Gems</h2>
            <p className="text-lg text-slate-600 mt-2">
              These projects have fewer than 200 stars (at time of analysis) but exhibit architectural brilliance or solve niche problems elegantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {UNDER_RADAR_CRAWLERS.map((crawler, index) => (
              <CrawlerCard key={index} data={crawler} isUnderRadar={true} />
            ))}
          </div>

        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <p className="mb-4 text-sm uppercase tracking-widest text-cyan-500">© 2025 Market Intelligence Research</p>
        <p className="text-xs max-w-lg mx-auto leading-relaxed">
          Data synthesized from GitHub API, StackOverflow trends, and Enterprise user surveys.<br />
          Built with React, Recharts, and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;