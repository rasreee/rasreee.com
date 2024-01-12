import type { GithubLanguage } from "modules/github/types";

export type Project = {
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
