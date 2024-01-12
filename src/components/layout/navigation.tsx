import { Bars3Icon } from "@heroicons/react/24/outline";

import { NavLink } from "components/nav-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";

import type { NavigationConfig } from "domains/navigation/types";

export type NavigationProps = NavigationConfig;

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <div className="hidden md:block">
        <DefaultNavigation {...props} />
      </div>
      <div className="md:hidden">
        <MobileNavigation {...props} />
      </div>
    </>
  );
};

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

export const MobileNavigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button aria-label="Navigation menu">
          <Bars3Icon className="icon" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-1">
        {links.map(({ href, title }) => (
          <DropdownMenuItem key={`${href}${title}`}>
            <NavLink className="w-full h-full" href={href} title={title} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
