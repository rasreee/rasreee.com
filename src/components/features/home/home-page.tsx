import { Page } from "components/ui/page";
import type { NextPage } from "next";
import FeaturedProjects from "./featured-projects";
import Hero from "./hero";

export const HomePage: NextPage = () => {
  return (
    <Page>
      <Hero />
      <FeaturedProjects />
    </Page>
  );
};
