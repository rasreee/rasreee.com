import clsx from "clsx";

import { AnalyticsProvider } from "components/analytics";

import { fonts } from "config/fonts";
import { rootLayout } from "config/root-layout";

import "styles/main.scss";

export const metadata = rootLayout.metadata;

export const viewport = rootLayout.viewport;

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
