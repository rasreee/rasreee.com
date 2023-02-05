import type { ReactNode } from "react";
import React from "react";

export interface ExternalLinkProps {
  children?: ReactNode;
  className?: string;
  href: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ...linkProps
}) => {
  return (
    <a href={href} rel="noopener noreferrer" target="blank" {...linkProps}>
      {children}
    </a>
  );
};

export default ExternalLink;
