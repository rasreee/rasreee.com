import type { ProjectConfig } from "domains/project/types";

export type ProjectCardProps = ProjectConfig;

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return <div className="p-3">{JSON.stringify(props)}</div>;
};
