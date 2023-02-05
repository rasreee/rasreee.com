"use client";

import FeaturedProjects from "components/features/home/featured-projects";
import Hero from "components/features/home/hero";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
};

export default HomePage;
