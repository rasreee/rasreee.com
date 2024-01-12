import type { GithubLanguage } from "domains/github/types";

export type ProjectConfig = {
  id: number;
  title: string;
  description: string;
  updatedAt: string;
  gitUrl: string;
  stars: number;
  demoUrl?: string;
  featured?: boolean;
  language?: GithubLanguage;
};
