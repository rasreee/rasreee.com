import Link from "next/link";

import { PageHeader, PageSection } from "components/page";
import { Button } from "components/ui/button";

import { SocialLinks } from "modules/social/components/social-links";

export const Hero: React.FC = () => {
  return (
    <PageSection className="py-16 md:py-24">
      <span className="font-mono text-secondary">Hi, my name is</span>
      <PageHeader
        title="Lesley Chang"
        description="Software Engineer. Helping teams build core software from the ground up."
      />
      <div className="mt-3 space-y-6 md:mt-6">
        <Button asChild variant="outline" className="">
          <Link href="/about">Learn more about me</Link>
        </Button>
        <SocialLinks />
      </div>
    </PageSection>
  );
};
