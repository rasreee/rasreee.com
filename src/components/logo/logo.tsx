import { cva } from "class-variance-authority";
import Image from "next/image";
import type { FC } from "react";

import type { SizeProps } from "@/lib/ui/types";

import logoUrl from "./logo.svg?url";

const logoVariants = cva(["object-contain"], {
  variants: {
    size: {
      xs: "w-12 h-12 md:w-14 md:h-14",
      sm: "w-14 h-14 md:w-16 md:h-16",
      md: "w-16 h-16 md:w-[4.5rem] md:h-[4.5rem]",
    },
  },
});

type LogoSize = "xs" | "sm" | "md";

type LogoProps = SizeProps<LogoSize>;

export const Logo: FC<LogoProps> = ({ size = "sm" }) => {
  return <Image alt="logo" src={logoUrl} className={logoVariants({ size })} />;
};