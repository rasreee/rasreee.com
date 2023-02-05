import type { Project } from "domains/project";
import { mockProjects } from "domains/project";
import type { ApiRequest, ApiResponse } from "lib/next-api";
import invariant from "lib/utils/invariant";
import { serializeError } from "lib/utils/serialize-error";
import { wait } from "lib/utils/wait";

const getProject = async (id: string): Promise<Project> => {
  await wait();
  const found = mockProjects.find((project) => project.id === id);
  if (found) {
    return found;
  } else {
    throw new Error(`No project found with id=${id}`);
  }
};

export type GetProjectParams = { id: string };

export default async function handler(
  req: ApiRequest<GetProjectParams>,
  res: ApiResponse<Project>
) {
  try {
    const id = req.query.id;
    invariant(typeof id === "string", `Invalid id param: ${id}`);

    const project = await getProject(id);

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json(serializeError(err));
  }
}
