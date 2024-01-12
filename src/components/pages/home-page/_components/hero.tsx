import type { FC } from "react";

import { PageHeader, PageSection } from "~/components/page";
import { SocialLinks } from "~/components/social/social-links";

export const Hero: FC = () => {
  return (
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
  );
};