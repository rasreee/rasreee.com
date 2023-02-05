import type { IRoute } from "domains/route";
import { useIsActive } from "lib/hooks/use-is-active";
import classes from "lib/utils/classes";
import Link from "next/link";

export type NavItemProps = IRoute;

export const NavItem: React.FC<NavItemProps> = ({ title, ...props }) => {
  const isActive = useIsActive(props.href);

  return (
    <Link
      {...props}
      className={classes(
        "inline-block p-1 text-base font-medium",
        isActive
          ? "text-primary-400"
          : "text-text hover:text-primary-400 hover:underline hover:underline-offset-2"
      )}
    >
      {title}
    </Link>
  );
};

export default NavItem;
