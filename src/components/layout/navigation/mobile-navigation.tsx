import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { NavLink } from "components/nav-link";

import type { NavigationProps } from "./types";

export const MobileNavigation: React.FC<NavigationProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        {isOpen ? (
          <button type="button" aria-label="Open navigation menu">
            <XMarkIcon className="icon-lg" />
          </button>
        ) : (
          <button type="button" aria-label="Close navigation menu">
            <Bars3Icon className="icon-lg" />
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 mt-9 flex h-screen w-screen flex-col space-y-3 rounded border border-border bg-background px-5 py-6 shadow-sm">
        {links.map(({ href, title }) => (
          <DropdownMenuItem key={`${href}${title}`} asChild>
            <NavLink href={href} title={title} className="p-3" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
