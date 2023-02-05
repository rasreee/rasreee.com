import type { IRoute } from "domains/route";
import classes from "lib/utils/classes";
import NavItem from "./nav-item";

type NavProps = {
  routes: IRoute[];
  className?: string;
};

export const Nav: React.FC<NavProps> = ({ routes, className }) => {
  return (
    <nav className={classes("flex flex-col items-center gap-5", className)}>
      {routes.map((route) => (
        <NavItem key={route.title} {...route} />
      ))}
    </nav>
  );
};
