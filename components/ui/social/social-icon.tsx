import type { SocialMediaType } from "config/socials.config";
import React from "react";
import GithubIcon from "./icons/github-icon";
import LinkedInIcon from "./icons/linkedin-icon";
import TwitchIcon from "./icons/twitch-icon";
import TwitterIcon from "./icons/twitter-icon";

const icons: Record<SocialMediaType, React.ComponentType> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  twitch: TwitchIcon,
  twitter: TwitterIcon,
};

type SocialIconProps = {
  type: SocialMediaType;
  className?: string;
};

export const SocialIcon: React.FC<SocialIconProps> = ({ type, className }) => {
  const IconComponent = icons[type];

  const iconElement = React.cloneElement(<IconComponent />, {
    className: "text-current h-full w-full",
  });

  return <div className={className}>{iconElement}</div>;
};

export default SocialIcon;
