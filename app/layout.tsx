import "@/styles/main.scss";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { fonts } from "@/config/fonts";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Analytics />
      <Script
        async
        src="https://umami-rasreee.vercel.app/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ""}
      />
      <body className={clsx(fonts.sans.variable, fonts.mono.variable)}>{children}</body>
    </html>
  );
}
