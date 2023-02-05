"use client";
import FeaturedProjects from "components/features/home/featured-projects";
import Hero from "components/features/home/hero";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
};

export default HomePage;
