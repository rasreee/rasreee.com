import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { NavLink } from "components/nav-link";

import type { NavigationProps } from "./types";

export const MobileNavigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" aria-label="Navigation menu">
          <Bars3Icon className="icon" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-1">
        {links.map(({ href, title }) => (
          <DropdownMenuItem key={`${href}${title}`}>
            <NavLink className="h-full w-full" href={href} title={title} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
