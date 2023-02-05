import { Page } from "components/ui/page";
import type { NextPage } from "next";
import { ProjectsFeed } from "./projects-feed";

export const ProjectsPage: NextPage = () => {
  return (
    <Page title="Projects">
      <Page.Heading
        description="Things I've worked on over the years."
        title="Projects"
      />
      <section>
        <ProjectsFeed />
      </section>
    </Page>
  );
};
