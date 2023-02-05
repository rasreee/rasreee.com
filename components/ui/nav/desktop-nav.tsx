import { Nav } from "./nav";
import type { NavComponent } from "./nav.types";

const DesktopNav: NavComponent = ({ routes }) => {
  return <Nav className="flex items-center gap-5" routes={routes} />;
};

export default DesktopNav;
