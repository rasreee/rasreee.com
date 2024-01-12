import type { Project } from "modules/project/types";

export type ProjectCardProps = Project;

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return <div className="p-3">{JSON.stringify(props)}</div>;
};
