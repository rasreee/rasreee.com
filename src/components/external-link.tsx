"use client";

import type { AnchorHTMLAttributes } from "react";

import { cn } from "lib/cn";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        "transition-colors hover:text-primary text-text/70",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
