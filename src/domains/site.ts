export interface Site {
  url: string;
  title: string;
  author: string;
  description: string;
  shortName: string;
}

export function getSiteUrl(): string {
  let siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (!siteUrl) {
    if (process.env.NODE_ENV === "production") {
      siteUrl = "https://rasreee.com";
    } else {
      siteUrl = "http://localhost:3000";
    }
  }
  return siteUrl;
}
