export type SocialMediaType = "github" | "linkedin" | "twitch" | "twitter";

export type SocialMedia = {
  type: SocialMediaType;
  href: string;
  username: string;
};

export type Socials = Record<SocialMediaType, SocialMedia>;
