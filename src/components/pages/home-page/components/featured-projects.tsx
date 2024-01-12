import { PageSection } from "components/page";

const copy = {
  title: "Featured Projects",
  description: "Some projects that I'm proud of.",
};

export const FeaturedProjects: React.FC = () => {
  return (
    <PageSection>
      <div className="space-y-1.5">
        <h2
          className="text-xl font-bold text-secondary md:text-2xl"
          id="projects"
        >
          {copy.title}
        </h2>
        <p className="text-lg text-hint">{copy.description}</p>
      </div>
      <div />
    </PageSection>
  );
};
