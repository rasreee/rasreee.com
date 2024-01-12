"use client";

import * as React from "react";
import posthog from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";

if (
  !process.env.NEXT_PUBLIC_POSTHOG_KEY ||
  !process.env.NEXT_PUBLIC_POSTHOG_HOST
) {
  console.warn(
    "NEXT_PUBLIC_POSTHOG_KEY or NEXT_PUBLIC_POSTHOG_HOST environment variable(s) are not undefined."
  );
}

const posthogConfig = {
  key: process.env.NEXT_PUBLIC_POSTHOG_KEY || "",
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "",
};

if (typeof window !== "undefined") {
  posthog.init(posthogConfig.key, {
    api_host: posthogConfig.host,
  });
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    console.log("Opting out of PostHog analytics...");
    posthog.opt_out_capturing();
  }
}

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export const useAnalytics = () => {
  return usePostHog();
};
