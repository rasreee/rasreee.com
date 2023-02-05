import { site } from "config/site.config";
import { socials } from "config/socials.config";
import Head from "next/head";
import { useRouter } from "next/router";

export type MetaProps = {
  title?: string;
  description?: string;
  type?: string;
};

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  type = "website",
}) => {
  const router = useRouter();
  const currentUrl = `${site.url}${router.asPath}`;

  return (
    <Head>
      <title>
        {title
          ? `${title} | ${site.shortName}`
          : `${site.title} | ${site.description}`}
      </title>
      <meta content={description} name="description" />
      <meta content={currentUrl} property="og:url" />
      <link href={currentUrl} rel="canonical" />

      <meta content={type} property="og:type" />
      <meta content={site.title} property="og:site_name" />
      <meta content={description} property="og:description" />
      <meta content={title} property="og:title" />

      {/* <meta content={image} property="og:image" /> */}
      {/* {date && <meta content={date} property="article:published_time" />} */}

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={`@${socials.twitter.username}`} name="twitter:site" />
      <meta content={title} name="twitter:title" />
    </Head>
  );
};

export default Meta;
