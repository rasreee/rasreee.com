import { Page } from "components/ui/page";
import type { Project } from "domains/project";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

export const ProjectDetailsPage: NextPage = () => {
  const id = useRouter().query["id"] as string;
  const { data: project, error } = useSWR<Project>(() =>
    id ? `/api/projects/${id}` : null
  );

  return (
    <Page title={id ? `${id} | projects` : `projects`}>
      {project && (
        <Page.Heading description={project.description} title={project.title} />
      )}
      <section>{error && <div>Error: {error?.message}</div>}</section>
    </Page>
  );
};
