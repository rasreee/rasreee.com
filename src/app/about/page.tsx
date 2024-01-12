"use client";

import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";

import { useAnalytics } from "components/analytics";
import { Page, PageHeader, PageSection } from "components/page";
import { Button } from "components/ui/button";

import { author } from "config/author";

import { SocialLinks } from "modules/social/components/social-links";

export default function AboutPage() {
  const analytics = useAnalytics();

  return (
    <Page>
      <PageSection>
        <PageHeader
          title="About"
          description="Software Engineer - Helping teams build core software from the ground up."
        />
        <div className="mt-5 md:mt-8">
          <SocialLinks />
        </div>
      </PageSection>
      <PageSection>
        <div className="space-y-2">
          <p>⚙️ Previously: Product Engineer @ Ampersand.</p>
          <p>📚 Studied: Data Science & Statistics @ UC Berkeley.</p>
        </div>
        <Button asChild variant="outline" className="mt-8 md:mt-12">
          <Link
            href={author.resume}
            target="_blank"
            download={`${author.name.replace(" ", "_")}_resume`}
            onClick={() => {
              analytics.capture("Resume downloaded");
            }}
          >
            <DownloadIcon className="mr-2" />
            <span>Download Resume</span>
          </Link>
        </Button>
      </PageSection>
    </Page>
  );
}
