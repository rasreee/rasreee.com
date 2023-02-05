"use client";

import { ProjectsFeed } from "components/features/projects/projects-feed";
import PageHeading from "components/ui/page-heading";

const ProjectsPage = async () => {
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

export default ProjectsPage;
