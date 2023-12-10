import Script from "next/script";

export const Analytics = () => {
  return (
    <Script
      async
      defer
      src="https://umami-rasreee.vercel.app/script.js"
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ""}
      data-domains="rasreee.com"
    />
  );
};
