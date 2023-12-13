if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  console.warn("NEXT_PUBLIC_POSTHOG_KEY environment variable undefined.");
}

if (!process.env.NEXT_PUBLIC_POSTHOG_HOST) {
  console.warn("NEXT_PUBLIC_POSTHOG_HOST environment variable undefined.");
}

export const environment = {
  posthog: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || "",
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "",
  },
};
