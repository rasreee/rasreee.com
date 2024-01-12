import { NavLink } from "components/nav-link";

import type { NavigationProps } from "./types";

export const DefaultNavigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      <ul className="flex items-center space-x-3 text-sm md:space-x-5 md:text-base">
        {links.map(({ href, title }) => (
          <li key={`${href}${title}`}>
            <NavLink href={href} title={title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
