import { ProjectCard } from "modules/project/components/project-card";
import type { Project } from "modules/project/types";

export type ProjectsListProps = {
  data: Project[];
};

export const ProjectsList: React.FC<ProjectsListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((project) => (
        <li key={`project-${project.id}`}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
};
