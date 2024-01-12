"use client";

import { useAnalytics } from "components/analytics";
import { EmailIcon } from "components/email-icon";
import { ExternalLink } from "components/external-link";

import { author } from "config/author";

import GitHubIcon from "modules/social/components/icons/github-icon";
import LinkedInIcon from "modules/social/components/icons/linkedin-icon";
import TwitchIcon from "modules/social/components/icons/twitch-icon";

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${author.email}`,
    icon: EmailIcon,
  },
  {
    name: "GitHub",
    href: author.github,
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: author.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: "Twitch",
    href: author.twitch,
    icon: TwitchIcon,
  },
];

export const SocialLinks: React.FC = () => {
  const analytics = useAnalytics();

  return (
    <ul className="flex items-baseline gap-5">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <ExternalLink
            href={href}
            aria-label={`${name}-link`}
            onClick={() => {
              analytics.capture("SocialLink clicked");
            }}
          >
            <Icon />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
};
