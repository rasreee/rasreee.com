import type { SchemaTypeDefinition } from "sanity";
import duration from "./schemas/objects/duration";
import milestone from "./schemas/objects/milestone";
import timelineType from "./schemas/objects/timeline";
import projectType from "./schemas/project";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectType, // Objects
    milestone,
    duration,
    timelineType,
  ],
};

export default schema;
