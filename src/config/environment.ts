import { getEnvVar } from "@/lib/env";

export const environment = {
  posthogKey: getEnvVar("NEXT_PUBLIC_POSTHOG_KEY"),
  posthogHost: getEnvVar("NEXT_PUBLIC_POSTHOG_HOST"),
};
