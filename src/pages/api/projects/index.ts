import { createLogger } from "@rasri/log";
import type { Project } from "domains/project";
import { projects } from "domains/project";
import type { ApiRequest, ApiResponse } from "lib/next-api";
import type { Pagination } from "lib/pagination";
import { getPagination } from "lib/pagination";
import { serializeError } from "lib/serialize-error";

const logger = createLogger("projectsApiHandler");

const getProjects = ({
  limit,
  offset,
}: Required<Pagination>): Promise<Project[]> => {
  return Promise.all(projects.slice(offset, offset + limit));
};

const getFeaturedProjects = async ({
  limit,
  offset,
}: Required<Pagination>): Promise<Project[]> => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(offset, offset + limit);
  return await Promise.resolve(featuredProjects);
};

export interface GetProjectsParams {
  featured?: boolean;
}

export default async function projectsApiHandler(
  req: ApiRequest<GetProjectsParams>,
  res: ApiResponse<Project[]>
) {
  const featured = req.query.featured;

  logger.info(req.query);

  try {
    let projects;

    if (featured) {
      projects = await getFeaturedProjects(getPagination(req.query));
    } else {
      projects = await getProjects(getPagination(req.query));
    }

    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json(serializeError(err));
  }
}
