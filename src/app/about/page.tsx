"use client";

import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Layout } from "@/components/layout";
import { PageHeader, PageSection } from "@/components/page";
import { SocialLinks } from "@/components/social/social-links";
import { Button } from "@/components/ui/button";
import { author } from "@/config/author";
import { trackEvent } from "@/lib/analytics";

export default function Page() {
  return (
    <Layout>
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
            href="/resume.pdf"
            target="_blank"
            download={`${author.name.replace(" ", "_")}_resume`}
            onClick={() => {
              trackEvent("Social Link: Resume", { type: "link" });
            }}
          >
            <DownloadIcon className="mr-2" />
            <span>Download Resume</span>
          </Link>
        </Button>
      </PageSection>
    </Layout>
  );
}
