import { forwardRef } from "react";
import Link from "next/link";

import type { NavigationLinkConfig } from "modules/navigation/types";

import { useIsActive } from "hooks/use-is-active";

import { cn } from "lib/cn";

type NavLinkProps = NavigationLinkConfig & { className?: string };

export const NavLink = forwardRef<any, NavLinkProps>(
  ({ title, href, className }, ref) => {
    const isActive = useIsActive();

    return (
      <Link
        ref={ref}
        className={cn(
          "text-lg md:text-base text-text hover:text-primary hover:bg-primary/10 md:hover:bg-background transition-colors p-1.5 rounded",
          isActive(href) && "text-primary bg-primary/10 md:bg-background",
          className
        )}
        href={href}
      >
        {title}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";
