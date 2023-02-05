import { site } from "config/site.config";
import Head from "next/head";

export const AppHead: React.FC = () => {
  return (
    <Head>
      <title>{site.title}</title>
      <meta content={site.description} name="description" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
    </Head>
  );
};

export default AppHead;
