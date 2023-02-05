import asserted from "lib/utils/asserted";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-01-01";

export const dataset = asserted(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = asserted(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const readToken = process.env.SANITY_API_READ_TOKEN;

export const previewSecretDocumentId: `${string}.${string}` = "preview.secret";

export const useCdn = false;
