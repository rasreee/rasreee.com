import { Layout } from "@/components/layout";
import { PageHeader, PageSection } from "@/components/page";
import { SocialLinks } from "@/components/social/social-links";

export default function Page() {
  return (
    <Layout>
      <PageSection>
        <PageHeader title="About" />
        <div className="mt-8 md:mt-10">
          <SocialLinks />
        </div>
      </PageSection>
    </Layout>
  );
}
