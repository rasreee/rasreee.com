import type { FC } from "react";

import Layout from "~/components/layout";

import { Hero } from "./_components/hero";

export const HomePage: FC = () => {
  return (
    <Layout>
      <Hero />
      {/* <FeaturedProjects /> */}
    </Layout>
  );
};
