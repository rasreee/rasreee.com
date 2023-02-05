import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import schema from "./sanity/schema";

const sanityConfig = defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});

export default sanityConfig;
