import { projects } from "modules/project/constants";
import type { Project } from "modules/project/types";

import type { Pagination } from "lib/pagination";

export const getProjects = (
  { offset, limit }: Required<Pagination> = { offset: 0, limit: 10 }
): Promise<Project[]> => {
  return Promise.all(projects.slice(offset, offset + limit));
};

export const getFeaturedProjects = async (
  { offset, limit }: Required<Pagination> = { offset: 0, limit: 10 }
): Promise<Project[]> => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(offset, offset + limit);
  return Promise.resolve(featuredProjects);
};
