import type { IConfig } from "domains/config";
import { profileConfig } from "./profile.config";
import { routes } from "./routes.config";
import { site } from "./site.config";
import { socials } from "./socials.config";
import { theme } from "./theme";

export function getConfig(): IConfig {
  return {
    site,
    theme,
    routes,
    socials,
    profile: profileConfig,
  };
}
