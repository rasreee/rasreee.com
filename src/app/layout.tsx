import clsx from "clsx";
import type { Metadata, Viewport } from "next";

import { AnalyticsProvider } from "components/analytics";

import { fonts } from "config/fonts";
import { site } from "config/site";

import "styles/main.scss";

export const metadata: Metadata = {
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
      <AnalyticsProvider>
        <body className={clsx(fonts.sans.variable, fonts.mono.variable)}>
          {children}
        </body>
      </AnalyticsProvider>
    </html>
  );
}
