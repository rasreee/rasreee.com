"use client";

import clsx from "clsx";

import { LogoLink } from "components/logo";
import { Navigation } from "components/page/navigation";

import { navigation } from "modules/navigation/constants";

import { useIsTop } from "hooks/use-is-top";

export const Header: React.FC = () => {
  const isTop = useIsTop();

  return (
    <header
      className={clsx(
        "layout",
        "sticky top-0 z-50 flex h-header w-full max-w-full items-center justify-between gap-2 bg-background transition-shadow",
        !isTop && "shadow-sm"
      )}
    >
      <LogoLink />
      <Navigation links={navigation.links} />
    </header>
  );
};
