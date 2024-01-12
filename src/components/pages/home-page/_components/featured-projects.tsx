import { PageSection } from "components/page";

export const FeaturedProjects: React.FC = () => {
  return (
    <PageSection>
      <div className="space-y-1.5">
        <h2
          className="text-xl md:text-2xl font-bold text-secondary"
          id="projects"
        >
          Featured Projects
        </h2>
        <p className="text-lg text-hint">Some projects that I'm proud of.</p>
      </div>
      <div />
    </PageSection>
  );
};
