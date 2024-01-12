import type { Metadata, Viewport } from "next";

import { site } from "~/config/site.config";

const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  description: site.description,
  title: {
    default: site.title,
    template: site.title,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    locale: "en_US",
    type: "website",
  },
};

const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const rootLayout = {
  metadata: rootMetadata,
  viewport: rootViewport,
};
