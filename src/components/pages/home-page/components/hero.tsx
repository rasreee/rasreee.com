"use client";

import { useAnalytics } from "components/analytics";
import { ButtonLink } from "components/button-link";
import { PageHeader, PageSection } from "components/page";

import { author } from "config/author";

import { SocialLinks } from "modules/social/components/social-links";

const HeroLinks: React.FC = () => {
  const analytics = useAnalytics();

  const handleCapture = (eventName: string) => {
    return () => {
      analytics.capture(eventName);
    };
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Projects Link */}
      <ButtonLink className="md:text-lg" href="/projects">
        Explore my projects
      </ButtonLink>
      {/* Resume Link */}
      <ButtonLink
        className="md:text-lg"
        href={author.resume}
        onClick={handleCapture("'View resume' link clicked")}
      >
        View resume
      </ButtonLink>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <PageSection className="py-16 md:py-24">
      <span className="font-mono text-secondary">Hi, my name is</span>
      <PageHeader
        title="Lesley Chang"
        description="Software Engineer. Helping teams build core software from the ground up."
      />
      <div className="mt-6 space-y-1 text-sm text-hint md:space-y-1.5 md:text-base">
        <p>⚙️ Previously: Product Engineer @ Ampersand</p>
        <p>📚 Data Science/Statistics @ UC Berkeley</p>
      </div>
      <div className="mt-8 space-y-8 md:space-y-10">
        <HeroLinks />
        <SocialLinks />
      </div>
    </PageSection>
  );
};
