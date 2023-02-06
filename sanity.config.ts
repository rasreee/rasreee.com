import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "./sanity/_lib/env";
import { previewDocumentNode } from "./sanity/plugins/previewPane";
import { productionUrl } from "./sanity/plugins/productionUrl";
import { pageStructure, singletonPlugin } from "./sanity/plugins/settings";
import page from "./sanity/schemas/documents/page";
import project from "./sanity/schemas/documents/project";
import duration from "./sanity/schemas/objects/duration";
import milestone from "./sanity/schemas/objects/milestone";
import timeline from "./sanity/schemas/objects/timeline";
import home from "./sanity/schemas/singletons/home";
import settings from "./sanity/schemas/singletons/settings";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,
  project.name,
];

const sanityConfig = defineConfig({
  title,
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: [
      // Singletons
      home,
      settings,
      // Documents
      duration,
      page,
      project,
      // Objects
      milestone,
      timeline,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

export default sanityConfig;
