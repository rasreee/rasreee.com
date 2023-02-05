import type { NextPage } from "next";
import FeaturedProjects from "./featured-projects";
import Hero from "./hero";

export const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
};
