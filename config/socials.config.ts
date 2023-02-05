export type SocialMediaType = "github" | "linkedin" | "twitch" | "twitter";

export type SocialMedia = {
  type: SocialMediaType;
  href: string;
  username: string;
};

export type SocialsConfig = Record<SocialMediaType, SocialMedia>;

export const socials: SocialsConfig = {
  github: {
    type: "github",
    href: "https://github.com/rasreee",
    username: "rasreee",
  },
  twitch: {
    type: "twitch",
    href: "https://twitch.com/rasreee",
    username: "rasreee",
  },
  twitter: {
    type: "twitter",
    username: "rasreee",
    href: "https://twitter.com/rasreee",
  },
  linkedin: {
    type: "linkedin",
    href: "https://linkedin.com/in/lesleyhchang",
    username: "lesleychang",
  },
};
