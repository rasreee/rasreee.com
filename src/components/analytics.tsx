"use client";

import posthog from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";
import * as React from "react";

import { environment } from "@/config/environment";

if (typeof window !== "undefined") {
  posthog.init(environment.posthogKey, {
    api_host: environment.posthogHost,
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
