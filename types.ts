// types.ts

export enum Language {
  Python = 'Python',
  NodeJS = 'Node.js',
  Go = 'Go',
  Java = 'Java',
  Rust = 'Rust',
  Elixir = 'Elixir',
  Haskell = 'Haskell',
  Crystal = 'Crystal',
  Swift = 'Swift',
  Lua = 'Lua',
  Dart = 'Dart',
  Nim = 'Nim',
  PHP = 'PHP',
  Ruby = 'Ruby',
  CSharp = 'C#',
  Multi = 'Multi',
  Typescript = 'Typescript'
}

export interface CrawlerData {
  rank?: number;
  name: string;
  language: Language | string;
  license?: string;
  url: string;
  description: string;
  tags?: string[]; // For UI badges
  colorAccent?: string; // Tailwind class or hex
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
  // For scatter/bubble
  x?: number;
  y?: number;
  z?: number;
  label?: string;
}

export interface WorkflowStepData {
  title: string;
  subtitle: string;
  colorClass: string;
}
