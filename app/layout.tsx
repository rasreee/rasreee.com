import "@/styles/main.scss";

import clsx from "clsx";
import type { Metadata, Viewport } from "next";

import { fonts } from "@/config/fonts";
import { site } from "@/config/site";

import { Analytics } from "./analytics";

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
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={clsx(fonts.sans.variable, fonts.mono.variable)}>
        {children}
      </body>
    </html>
  );
}
