import { dynamicNoSSR } from "lib/dynamic";
import { useIsMobile } from "lib/hooks/use-is-mobile";
import type { NavComponent } from "./nav.types";

const MobileNav = dynamicNoSSR(() => import("./mobile-nav"));

const DesktopNav = dynamicNoSSR(() => import("./desktop-nav"));

export const ResponsiveNav: NavComponent = ({ routes }) => {
  const isMobile = useIsMobile();
  const Component = isMobile ? MobileNav : DesktopNav;
  return <Component routes={routes} />;
};

export default ResponsiveNav;
