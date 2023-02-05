import type { Site } from "domains/site";
import { getSiteUrl } from "domains/site";

export const site: Site = {
  url: getSiteUrl(),
  title: "Lesley Chang",
  author: "Lesley Chang",
  description: "Product Engineer",
  shortName: "rasreee.com",
};
