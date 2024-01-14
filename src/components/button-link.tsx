import Link from "next/link";

import { cn } from "lib/cn";

import type { ButtonProps, ButtonVariantProps } from "./ui/button";
import { Button } from "./ui/button";

export type ButtonLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
} & ButtonVariantProps;

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className,
  href,
  onClick,
  variant,
}) => {
  const buttonProps: ButtonProps = {
    asChild: true,
    variant: variant || "outline",
    className: cn("py-4 md:py-5", className),
  };

  const linkProps = {
    children,
    href,
    onClick,
  };

  return (
    <Button {...buttonProps}>
      <Link {...linkProps} />
    </Button>
  );
};
