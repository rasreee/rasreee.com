import type { FC } from "react";

import { ExternalLink } from "@/components/external-link";
import { author } from "@/config/author";

import { EmailIcon, GitHubIcon, LinkedInIcon } from "./social-icons";

const socialLinks = [
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
    name: "email",
    href: `mailto:${author.email}`,
    icon: EmailIcon,
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
