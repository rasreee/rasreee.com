import { Page, PageHeader, PageSection } from "components/page";

import { projects } from "modules/project/constants";

import { ProjectsList } from "./projects-list";

export const ProjectsPage: React.FC = () => {
  return (
    <Page>
      <PageSection>
        <PageHeader
          title="Projects"
          description="Showcase of my personal projects and professional works so far."
        />
      </PageSection>
      <PageSection>
        <ProjectsList data={projects} />
      </PageSection>
    </Page>
  );
};
