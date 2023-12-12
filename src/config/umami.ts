export const umamiConfig = {
  src: "https://us.umami.is/script.js",
  umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
};

if (!umamiConfig.umamiWebsiteId) {
  console.warn("NEXT_PUBLIC_UMAMI_WEBSITE_ID environment variable undefined.");
}
