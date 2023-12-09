import type { FC } from "react";

import { EmailIcon } from "@/components/email-icon";
import { ExternalLink } from "@/components/external-link";
import GitHubIcon from "@/components/social/icons/github-icon";
import LinkedInIcon from "@/components/social/icons/linkedin-icon";
import { author } from "@/config/author";

import TwitchIcon from "./icons/twitch-icon";

const socialLinks = [
  {
    name: "email",
    href: `mailto:${author.email}`,
    icon: EmailIcon,
  },
  {
    name: "github",
    href: author.github,
    icon: GitHubIcon,
  },
  {
    name: "linkedin",
    href: author.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: "twitch",
    href: author.twitch,
    icon: TwitchIcon,
  },
];

export const SocialLinks: FC = () => {
  return (
    <ul className="flex items-baseline gap-5">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <ExternalLink href={href} aria-label={`${name}-link`}>
            <Icon />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
};
