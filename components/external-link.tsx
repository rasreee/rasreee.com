import type { AnchorHTMLAttributes, FC, PropsWithChildren } from "react";

type ExternalLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children, ...props }) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="transition-colors hover:text-primary text-text/70"
      href={href}
      {...props}>
      {children}
    </a>
  );
};
