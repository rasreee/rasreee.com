export type SiteConfig = {
  url: string;
  title: string;
  author: string;
  description: string;
  shortName: string;
};

const getSiteUrl = (): string => {
  let siteUrl = process.env.NEXT_PUBLIC_URL;
  if (!siteUrl) {
    if (process.env.NODE_ENV === "production") {
      siteUrl = "https://rasreee.com";
    } else {
      siteUrl = "http://localhost:3000";
    }
  }
  return siteUrl;
};

export const site: SiteConfig = {
  url: getSiteUrl(),
  title: "Lesley Chang",
  author: "Lesley Chang",
  description: "Product Engineer",
  shortName: "rasreee.com",
};
