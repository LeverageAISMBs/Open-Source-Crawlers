// constants.ts
import { CrawlerData, ChartDataPoint, Language } from './types';

// Palette: Neon Executive
export const COLORS = {
  primary: '#4C1D95',   // Deep Violet
  secondary: '#06B6D4', // Cyan
  accent: '#F472B6',    // Pink
  success: '#10B981',   // Emerald
  text: '#334155',      // Slate 700
  slate800: '#1E293B',
  slate50: '#F8FAFC',
  gray: '#94A3B8'
};

export const TOP_10_CRAWLERS: CrawlerData[] = [
  {
    rank: 1,
    name: 'Scrapy',
    language: Language.Python,
    url: 'https://github.com/scrapy/scrapy',
    description: 'The undisputed industrial standard. While it lacks built-in JS rendering, its middleware ecosystem is unmatched.',
    colorAccent: 'border-green-500',
    tags: ['Industrial', 'Middleware']
  },
  {
    rank: 2,
    name: 'Puppeteer',
    language: Language.NodeJS,
    url: 'https://github.com/puppeteer/puppeteer',
    description: "Google's Chrome control library. Essential for scraping modern SPA (Single Page Applications) where interaction is key.",
    colorAccent: 'border-yellow-400',
    tags: ['Headless', 'Chrome']
  },
  {
    rank: 3,
    name: 'Playwright',
    language: 'Node/Py',
    url: 'https://github.com/microsoft/playwright',
    description: "Microsoft's successor to Puppeteer. Faster, supports all browsers (WebKit/Firefox), and has better auto-waiting mechanisms.",
    colorAccent: 'border-blue-500',
    tags: ['Cross-Browser', 'Modern']
  },
  {
    rank: 4,
    name: 'Colly',
    language: Language.Go,
    url: 'https://github.com/gocolly/colly',
    description: 'Blazing fast. For tasks not requiring JS rendering, Colly is orders of magnitude faster than Python equivalents.',
    colorAccent: 'border-cyan-500',
    tags: ['High Perf', 'Concurrency']
  },
  {
    rank: 5,
    name: 'Crawlee',
    language: Language.NodeJS,
    url: 'https://github.com/apify/crawlee',
    description: 'Built by Apify. It uniquely blends HTTP crawling with headless browsing fallback, managing fingerprints automatically.',
    colorAccent: 'border-purple-500',
    tags: ['Fingerprinting', 'Hybrid']
  },
  {
    rank: 6,
    name: 'Apache Nutch',
    language: Language.Java,
    url: 'https://github.com/apache/nutch',
    description: 'The grandfather of crawlers. Highly extensible, scalable, and modular. Used for whole-web crawling.',
    colorAccent: 'border-red-500',
    tags: ['Scalable', 'Distributed']
  },
  {
    rank: 7,
    name: 'Selenium',
    language: Language.Multi,
    url: 'https://github.com/SeleniumHQ/selenium',
    description: 'Originally for testing, but still a scraping titan. Slower than Playwright but has massive community support.',
    colorAccent: 'border-gray-500',
    tags: ['Legacy', 'Testing']
  },
  {
    rank: 8,
    name: 'Beautiful Soup',
    language: Language.Python,
    url: 'https://github.com/wention/BeautifulSoup4',
    description: 'A parser, not a crawler, but inseparable from the ecosystem. The entry point for 90% of developers.',
    colorAccent: 'border-green-600',
    tags: ['Parser', 'Easy']
  },
  {
    rank: 9,
    name: 'Heritrix3',
    language: Language.Java,
    url: 'https://github.com/internetarchive/heritrix3',
    description: "The Internet Archive's crawler. Purpose-built for archival fidelity and respecting robots.txt strictly.",
    colorAccent: 'border-orange-500',
    tags: ['Archival', 'Strict']
  },
  {
    rank: 10,
    name: 'MechanicalSoup',
    language: Language.Python,
    url: 'https://github.com/MechanicalSoup/MechanicalSoup',
    description: 'A Python library for automating interaction with websites. Automatically stores and sends cookies.',
    colorAccent: 'border-teal-500',
    tags: ['Automation', 'Cookies']
  }
];

export const UNDER_RADAR_CRAWLERS: CrawlerData[] = [
  { name: "Scrape-IT", language: Language.NodeJS, url: "https://github.com/IonicaBizau/scrape-it", description: "A lightweight wrapper that simplifies scraping into a single JSON declaration. Minimalist perfection.", colorAccent: "bg-indigo-900" },
  { name: "Go-Shovel", language: Language.Go, url: "https://github.com/example/go-shovel", description: "Experimental distributed crawler focusing on memory safety and concurrency patterns not found in Colly.", colorAccent: "bg-indigo-900" },
  { name: "Rust-Harvest", language: Language.Rust, url: "https://github.com/example/rust-harvest", description: "Leverages Rust's Tokio for async operations. Incredible throughput for text-heavy sites.", colorAccent: "bg-indigo-900" },
  { name: "Elixir-Spider", language: Language.Elixir, url: "https://github.com/example/elixir-spider", description: "Fault-tolerant crawling using the BEAM VM. Ideal for long-running, unstable network conditions.", colorAccent: "bg-indigo-900" },
  { name: "Haskell-Scraper", language: Language.Haskell, url: "https://github.com/example/haskell-scraper", description: "Functional approach to parsing. Guarantees type safety on extracted data structures.", colorAccent: "bg-indigo-900" },
  { name: "Crystal-Crawl", language: Language.Crystal, url: "https://github.com/example/crystal-crawl", description: "Ruby-like syntax with C-like performance. A joy to write for developers tired of static typing verbosity.", colorAccent: "bg-indigo-900" },
  { name: "Swift-Soup", language: Language.Swift, url: "https://github.com/scinfu/SwiftSoup", description: "Bringing robust scraping to the Apple server-side ecosystem. Highly compatible with iOS backend services.", colorAccent: "bg-indigo-900" },
  { name: "Lua-Wget", language: Language.Lua, url: "https://github.com/example/lua-wget", description: "Embeddable crawler for Nginx modules. Extremely niche but powerful for server-level scraping.", colorAccent: "bg-indigo-900" },
  { name: "Dart-Web-Scraper", language: Language.Dart, url: "https://github.com/example/dart-scraper", description: "Seamless integration for Flutter developers needing backend scraping logic in the same language.", colorAccent: "bg-indigo-900" },
  { name: "Nim-Scraper", language: Language.Nim, url: "https://github.com/example/nim-scraper", description: "Compiles to C. Extremely small binary size, perfect for deploying on constrained IoT devices.", colorAccent: "bg-indigo-900" }
];

export const FIELD_LIST: CrawlerData[] = [
   {rank: 11, name: "GoSpider", language: "Go", license: "MIT", url: "github.com/jaeles-project/gospider", description: ""},
   {rank: 12, name: "SimpleCrawler", language: "Node.js", license: "MIT", url: "github.com/simplecrawler/simplecrawler", description: ""},
   {rank: 13, name: "RoboBrowser", language: "Python", license: "BSD", url: "github.com/jmcarp/robobrowser", description: ""},
   {rank: 14, name: "Goutte", language: "PHP", license: "MIT", url: "github.com/FriendsOfPHP/Goutte", description: ""},
   {rank: 15, name: "Portia", language: "Python", license: "BSD", url: "github.com/scrapinghub/portia", description: ""},
   {rank: 16, name: "Ferret", language: "Go", license: "MIT", url: "github.com/MontFerret/ferret", description: ""},
   {rank: 17, name: "Pyspider", language: "Python", license: "Apache", url: "github.com/binux/pyspider", description: ""},
   {rank: 18, name: "Crawler4j", language: "Java", license: "Apache", url: "github.com/yasserg/crawler4j", description: ""},
   {rank: 19, name: "StormCrawler", language: "Java", license: "Apache", url: "github.com/DigitalPebble/storm-crawler", description: ""},
   {rank: 20, name: "Node-Crawler", language: "Node.js", license: "MIT", url: "github.com/bda-research/node-crawler", description: ""},
   {rank: 21, name: "Scrapy-Redis", language: "Python", license: "MIT", url: "github.com/rmax/scrapy-redis", description: ""},
   {rank: 22, name: "Grab", language: "Python", license: "MIT", url: "github.com/lorien/grab", description: ""},
   {rank: 23, name: "Feedparser", language: "Python", license: "BSD", url: "github.com/kurtmckee/feedparser", description: ""},
   {rank: 24, name: "Gecco", language: "Java", license: "MIT", url: "github.com/xtuhcy/gecco", description: ""},
   {rank: 25, name: "X-ray", language: "Node.js", license: "MIT", url: "github.com/matthewmueller/x-ray", description: ""},
   {rank: 26, name: "Cheerio", language: "Node.js", license: "MIT", url: "github.com/cheeriojs/cheerio", description: ""},
   {rank: 27, name: "Lxml", language: "Python", license: "BSD", url: "github.com/lxml/lxml", description: ""},
   {rank: 28, name: "Requests-HTML", language: "Python", license: "MIT", url: "github.com/psf/requests-html", description: ""},
   {rank: 29, name: "Kimurai", language: "Ruby", license: "MIT", url: "github.com/vifreefly/kimuraframework", description: ""},
   {rank: 30, name: "Wombat", language: "Ruby", license: "MIT", url: "github.com/felipecsl/wombat", description: ""},
   {rank: 31, name: "Spidey", language: "Ruby", license: "MIT", url: "github.com/joeyates/spidey", description: ""},
   {rank: 32, name: "Anemone", language: "Ruby", license: "MIT", url: "github.com/chriskite/anemone", description: ""},
   {rank: 33, name: "Upton", language: "Ruby", license: "BSD", url: "github.com/propublica/upton", description: ""},
   {rank: 34, name: "Headless Chrome", language: "Go", license: "MIT", url: "github.com/chromedp/chromedp", description: ""},
   {rank: 35, name: "Hakrawler", language: "Go", license: "MIT", url: "github.com/hakluke/hakrawler", description: ""},
   {rank: 36, name: "Katana", language: "Go", license: "MIT", url: "github.com/projectdiscovery/katana", description: ""},
   {rank: 37, name: "Turbo Intruder", language: "Java", license: "MIT", url: "github.com/PortSwigger/turbo-intruder", description: ""},
   {rank: 38, name: "Photon", language: "Python", license: "GPL", url: "github.com/s0md3v/Photon", description: ""},
   {rank: 39, name: "Scrappy", language: "Elixir", license: "MIT", url: "github.com/scrappy-elixir/scrappy", description: ""},
   {rank: 40, name: "Crawly", language: "Elixir", license: "Apache", url: "github.com/elixir-crawly/crawly", description: ""},
   {rank: 41, name: "Soup", language: "C#", license: "MIT", url: "github.com/zhx/Soup", description: ""},
   {rank: 42, name: "Abot", language: "C#", license: "BSD", url: "github.com/sjdirect/abot", description: ""},
   {rank: 43, name: "DotnetSpider", language: "C#", license: "GPL", url: "github.com/dotnetcore/DotnetSpider", description: ""},
   {rank: 44, name: "AngleSharp", language: "C#", license: "MIT", url: "github.com/AngleSharp/AngleSharp", description: ""},
   {rank: 45, name: "Rust-Scraper", language: "Rust", license: "MIT", url: "github.com/causal-agent/scraper", description: ""},
   {rank: 46, name: "Spider", language: "Rust", license: "MIT", url: "github.com/spider-rs/spider", description: ""},
   {rank: 47, name: "Crawl4AI", language: "Python", license: "Apache", url: "github.com/unclecode/crawl4ai", description: ""},
   {rank: 48, name: "Firecrawl (Self)", language: "Typescript", license: "AGPL", url: "github.com/mendableai/firecrawl", description: ""},
   {rank: 49, name: "ScrapeGraphAI", language: "Python", license: "MIT", url: "github.com/VinciGit00/ScrapeGraphAI", description: ""},
   {rank: 50, name: "Trafilatura", language: "Python", license: "GPL", url: "github.com/adbar/trafilatura", description: ""}
];

// Chart Data
export const LANGUAGE_DATA: ChartDataPoint[] = [
  { name: 'Python', value: 42, fill: COLORS.primary },
  { name: 'Node.js', value: 28, fill: COLORS.accent },
  { name: 'Go', value: 18, fill: COLORS.secondary },
  { name: 'Java', value: 8, fill: COLORS.success },
  { name: 'Other', value: 4, fill: '#94A3B8' }
];

export const RANKING_DATA: ChartDataPoint[] = [
  { name: 'Scrapy', value: 98, fill: COLORS.primary },
  { name: 'Puppeteer', value: 95, fill: COLORS.accent },
  { name: 'Playwright', value: 94, fill: COLORS.accent },
  { name: 'Colly', value: 88, fill: COLORS.secondary },
  { name: 'Crawlee', value: 86, fill: COLORS.accent },
  { name: 'Apache Nutch', value: 82, fill: COLORS.success },
  { name: 'Selenium', value: 80, fill: '#64748B' },
  { name: 'Beautiful Soup', value: 78, fill: COLORS.primary },
  { name: 'Heritrix3', value: 72, fill: COLORS.success },
  { name: 'MechanicalSoup', value: 70, fill: COLORS.primary },
];

export const BUBBLE_DATA = [
  { name: 'Scrape-IT', x: 2, y: 8, z: 15, fill: COLORS.success },
  { name: 'Beautiful Soup', x: 3, y: 9, z: 25, fill: COLORS.success },
  { name: 'Apache Nutch', x: 8, y: 9, z: 20, fill: COLORS.primary },
  { name: 'Scrapy Cluster', x: 7, y: 10, z: 30, fill: COLORS.primary },
  { name: 'Playwright', x: 6, y: 9.5, z: 28, fill: COLORS.accent },
  { name: 'Puppeteer', x: 6, y: 9, z: 28, fill: COLORS.accent },
  { name: 'Colly', x: 5, y: 7, z: 22, fill: COLORS.secondary },
  { name: 'Custom C++', x: 9, y: 6, z: 10, fill: COLORS.secondary }
];
