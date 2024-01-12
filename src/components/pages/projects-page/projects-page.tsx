import Layout from "~/components/layout";
import { PageHeader, PageSection } from "~/components/page";

export const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <PageSection>
        <PageHeader
          title="Projects"
          description="Showcase of my personal projects and professional works so far."
        />
      </PageSection>
    </Layout>
  );
};
