import { Layout } from "@/components/layout";
import { PageHeader, PageSection } from "@/components/page";
import { SocialLinks } from "@/components/social/social-links";

export default function Home() {
  return (
    <Layout>
      <PageSection className="py-16 md:py-24">
        <span className="font-mono text-secondary">Hi, my name is</span>
        <PageHeader
          title="Lesley Chang"
          description="Software Engineer - Helping teams build core software from the ground up."
        />
        <div className="mt-8 md:mt-10">
          <SocialLinks />
        </div>
      </PageSection>
      {/* <PageSection>
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
      </PageSection> */}
    </Layout>
  );
}
