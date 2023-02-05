import { Page } from "components/ui/page";
import type { NextPage } from "next";

export const BlogPage: NextPage = () => {
  return (
    <Page title="Blog">
      <Page.Heading
        description="Read articles I've written on web development, career, personal growth, and more."
        title="Blog"
      />
      <div>
        <p>Coming soon...</p>
      </div>
    </Page>
  );
};
