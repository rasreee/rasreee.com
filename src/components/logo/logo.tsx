import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

import type { SizeProps } from "lib/ui/types";

import logoUrl from "./logo.svg?url";

const logoVariants = cva(["object-contain"], {
  variants: {
    size: {
      xs: "h-12 w-12 md:h-14 md:w-14",
      sm: "h-14 w-14 md:h-16 md:w-16",
      md: "h-16 w-16 md:h-[4.5rem] md:w-[4.5rem]",
    },
  },
});

type LogoSize = "xs" | "sm" | "md";

type LogoProps = SizeProps<LogoSize>;

export const Logo: React.FC<LogoProps> = ({ size = "sm" }) => {
  return <Image alt="logo" src={logoUrl} className={logoVariants({ size })} />;
};

type LogoLinkProps = LogoProps;

export const LogoLink: React.FC<LogoLinkProps> = () => {
  return (
    <Link href="/" className="animate-wobble">
      <Logo size="xs" />
    </Link>
  );
};
