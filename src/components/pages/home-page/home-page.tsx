import Layout from "components/layout";

import { Hero } from "./components/hero";

export const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      {/* <FeaturedProjects /> */}
    </Layout>
  );
};
