import Link from "next/link";

import type { NavigationLinkConfig } from "modules/navigation/types";

import { useIsActive } from "hooks/use-is-active";

import { cn } from "lib/cn";

type NavLinkProps = NavigationLinkConfig & { className?: string };

export const NavLink: React.FC<NavLinkProps> = ({ title, href, className }) => {
  const isActive = useIsActive();

  return (
    <Link
      className={cn(
        "text-text hover:text-primary transition-colors px-1.5 py-1.5",
        isActive(href) && "text-primary",
        className
      )}
      href={href}
    >
      {title}
    </Link>
  );
};
