export type SocialMediaType = "github" | "linkedin" | "twitch" | "twitter";

export type SocialMediaConfig = {
  type: SocialMediaType;
  href: string;
  username: string;
};

export type SocialMedias = {
  [key in SocialMediaType]: SocialMediaConfig;
};
