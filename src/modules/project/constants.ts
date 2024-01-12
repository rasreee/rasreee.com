import type { GithubLanguage } from "modules/github/types";
import type { Project } from "modules/project/types";

// eslint-disable-next-line @typescript-eslint/naming-convention
let id = -1;

const toProject = ({
  ...options
}: {
  title: string;
  description: string;
  gitUrl: string;
  stars: number;
  updatedAt: string;
  demoUrl?: string;
  featured?: boolean;
  language?: GithubLanguage;
}): Project => {
  id += 1;
  return { id, ...options };
};

const NOW_DATE = new Date().toISOString();
const baseProject = { stars: 0, updatedAt: NOW_DATE };

export const projects: Project[] = [
  {
    title: "iJan Payroll",
    description:
      "A web app for a commercial cleaning company to manage payroll, used by over 200 cleaners and managers over 2+ years.",
    demoUrl: "https:/admin.ijancompany.com",
    gitUrl: "https://github.com/rasreee/ijan",
    featured: true,
    ...baseProject,
  },
  {
    title: "⌘K Modal Component",
    description:
      "Implementation of a ⌘K Modal with search. Inspired by the UI found on many doc websites like tailwindcss.com.",
    gitUrl: "https://github.com/rasreee/ksearch",
    demoUrl: "https://ksearch.vercel.app",
    featured: true,
    ...baseProject,
  },
  {
    title: "Connect N Game",
    description:
      "Extension of the classic Connect 4 game but with an arbitrary number N in a line to win.",
    gitUrl: "https://github.com/rasreee/connectn",
    demoUrl: "https://connectn.vercel.app",
    ...baseProject,
  },
  {
    title: "AwesomeSolana.dev",
    description:
      "A search engine for Solana developers to browse open-source projects and learning resources like articles and videos.",
    gitUrl: "https://github.com/rasreee/awesomesolana.dev",
    ...baseProject,
  },
  {
    title: "Clockwork",
    description:
      "Blockchain automation engine for Solana. Schedule transactions and automate smart-contracts without relying on centralized infrastructure.",
    gitUrl: "https://github.com/clockwork-xyz/clockwork",
    demoUrl: "https://www.clockwork.xyz",
    featured: true,
    ...baseProject,
  },
  {
    title: "Rust Labs",
    description:
      "Collection of introductary programming exercises and guides for Rust. Includes guides on Rust installation/setup and debugging using GDB.",
    gitUrl: "https://github.com/rasreee/rust-labs",
    featured: true,
    ...baseProject,
  },
  {
    title: "CSV to Notion CLI",
    description:
      "CLI that ingests data from a CSV file, transforms it, updates a Notion database with it. Built  using the Notion JS SDK and TypeScript.",
    gitUrl: "https://github.com/rasreee/csv-to-notion-database",
    ...baseProject,
  },
  {
    title: "rasreee.com",
    description: "Personal Website",
    gitUrl: "https://github.com/rasreee/rasreee.com",
    demoUrl: "https://rasreee.com",
    ...baseProject,
  },
].map(toProject);
