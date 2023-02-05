import PageHeading from "components/ui/page-heading";
import type { NextPage } from "next";
import { ProjectsFeed } from "./projects-feed";

export const ProjectsPage: NextPage = () => {
  return (
    <>
      <PageHeading
        description="Things I've worked on over the years."
        title="Projects"
      />
      <section>
        <ProjectsFeed />
      </section>
    </>
  );
};
