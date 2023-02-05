import { Page } from "components/ui/page";
import { useScrollUp } from "lib/hooks/use-scroll-up";
import type { NextPage } from "next";
import FeaturedProjects from "./featured-projects";
import Hero from "./hero";

export const HomePage: NextPage = () => {
  useScrollUp();

  return (
    <Page>
      <Hero />
      <FeaturedProjects />
    </Page>
  );
};
