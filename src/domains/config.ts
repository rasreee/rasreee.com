import type { Profile } from "domains/profile";
import type { IRoute } from "domains/route";
import type { Site } from "domains/site";
import type { Socials } from "domains/socials";
import type { Theme } from "domains/theme";

export interface IConfig {
  site: Site;
  theme: Theme;
  routes: IRoute[];
  socials: Socials;
  profile: Profile;
}
