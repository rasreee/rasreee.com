import { projects } from "domains/project/constants";
import type { Project } from "domains/project/types";

import type { Pagination } from "lib/pagination";

export const getProjects = ({
  limit,
  offset,
}: Required<Pagination>): Promise<Project[]> => {
  return Promise.all(projects.slice(offset, offset + limit));
};

export const getFeaturedProjects = async ({
  limit,
  offset,
}: Required<Pagination>): Promise<Project[]> => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(offset, offset + limit);
  return Promise.resolve(featuredProjects);
};
