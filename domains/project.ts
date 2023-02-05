import type { GithubLanguage } from "lib/github/types";

export type Project = {
  id: string;
  description: string;
  image?: string;
  title: string;
  updatedAt: string;
  demoUrl?: string;
  gitUrl: string;
  featured?: boolean;
  stars?: number;
  language?: GithubLanguage;
};

export const mockProjects: Project[] = [
  {
    id: "ijan",
    title: "iJan Payroll Portal",
    description:
      "A web app for managing payroll and hourly timesheets. Employees can clock in/out throughout the work day to track their hours. Supervisors can review timesheets and approve them or request changes.",
    demoUrl: "https://www.ijancompany.com",
    gitUrl: "https://github.com/rasreee/ijan",
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: "cmdk",
    title: "⌘K Modal Component",
    description:
      "Implementation of a ⌘K Modal with search. Inspired by the UI found on many doc websites like tailwindcss.com.",
    gitUrl: "https://github.com/rasreee/cmd-k-search-modal-react",
    demoUrl: "https://cmd-k-search-modal-react.vercel.app",
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: "@rasri/log",
    title: "@rasri/log",
    description:
      "Simple and universal and extra-light (1kB) logger for Node.js, with prefix, time and colors.",
    gitUrl: "https://github.com/rasreee/rasri-log",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "connect-n-react",
    title: "Connect N Game",
    description:
      "Extension of the classic Connect 4 game but with an arbitrary number N in a line to win.",
    gitUrl: "https://github.com/rasreee/connect-n-react",
    demoUrl: "https://connect-n-react.vercel.app",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "calendar-optimization-visualization",
    title: "Calendar Optimization Visualization",
    description: "A visualization of optimized calendar events.",
    gitUrl: "A visualization of optimized calendar events using dummy data",
    demoUrl: "https://calendar-optimization-visualization.vercel.app",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "awesomesolana",
    title: "AwesomeSolana.dev",
    description:
      'Website for curating "Awesome" Solana development resources, in particular open-source Github repos, real-world examples of coding on Solana, tutorials, and more',
    gitUrl: "https://github.com/rasreee/awesomesolana",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "clockwork",
    title: "Clockwork",
    description:
      "Blockchain automation engine for Solana. Schedule transactions and automate smart-contracts without relying on centralized infrastructure.",
    gitUrl: "https://github.com/clockwork-xyz/clockwork",
    demoUrl: "https://www.clockwork.xyz",
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: "rust-labs",
    title: "Rust Labs",
    description:
      "Collection of introductary programming exercises and guides for Rust. Includes guides on Rust installation/setup and debugging using GDB.",
    gitUrl: "https://github.com/rasreee/rust-labs",
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: "csv-to-notion-cli",
    title: "CSV to Notion CLI",
    description:
      "CLI that ingests data from a CSV file, transforms it, updates a Notion database with it. Built  using the Notion JS SDK and TypeScript.",
    gitUrl: "https://github.com/rasreee/notion-js-playground",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "rasreee.com",
    title: "rasreee.com",
    description: "Personal Website",
    gitUrl: "https://github.com/rasreee/rasreee.com",
    demoUrl: "https://rasreee.com",
    updatedAt: new Date().toISOString(),
  },
];
