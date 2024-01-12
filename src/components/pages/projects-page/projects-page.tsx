import Layout from "components/layout";
import { PageHeader, PageSection } from "components/page";

import { projects } from "domains/project/constants";

import { ProjectCard } from "./project-card";

export const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <PageSection>
        <PageHeader
          title="Projects"
          description="Showcase of my personal projects and professional works so far."
        />
      </PageSection>
      <PageSection>
        {projects.map((project) => (
          <ProjectCard key={`project-${project.id}`} {...project} />
        ))}
      </PageSection>
    </Layout>
  );
};
