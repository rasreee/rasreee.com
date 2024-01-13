import { Page, PageHeader, PageSection } from "components/page";

import { ProjectsList } from "modules/project/components/projects-list";
import { projects } from "modules/project/constants";

export const ProjectsPage: React.FC = () => {
  // const { data } = useSWR("/projects", () => getProjects());

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
