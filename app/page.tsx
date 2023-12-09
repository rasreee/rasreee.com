import { Layout } from "@/components/layout";
import { SocialLinks } from "@/components/social/social-links";

export default function Home() {
  return (
    <Layout>
      <section className="my-20">
        <span className="font-mono text-secondary">Hi, my name is</span>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl 2xl:text-5xl">Lesley Chang</h1>
        <p className="mt-2.5 text-lg md:text-xl text-text/80 max-w-[30ch] md:max-w-[40ch]">
          Software Engineer - Building frictionless and feature-rich user experiences.
        </p>
        <div className="mt-10">
          <SocialLinks />
        </div>
      </section>
      {/* <section>
        <h2 className="text-xl md:text-2xl font-bold text-secondary" id="projects">
          Featured Projects
        </h2>
        <p className="mt-2 text- dark:text-gray-300">Some projects that I'm proud of</p>
      </section> */}
    </Layout>
  );
}
