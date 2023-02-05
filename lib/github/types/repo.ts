import type { GithubLanguage } from "./language";

export type GithubRepo = {
  name: string;
  url: string;
  description: string | null;
  updatedAt: string;
  stars: number;
  forks: number;
  language: GithubLanguage;
  homepageUrl: string;
};
