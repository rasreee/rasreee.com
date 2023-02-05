import type { ProfileConfig } from "config/profile.config";
import type { SiteConfig } from "config/site.config";
import type { SocialsConfig } from "config/socials.config";
import type { Theme } from "config/theme";
import type { IRoute } from "domains/route";

export interface IConfig {
  site: SiteConfig;
  theme: Theme;
  routes: IRoute[];
  socials: SocialsConfig;
  profile: ProfileConfig;
}
