"use client";

import clsx from "clsx";
import Link from "next/link";
import { type FC, useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { useIsActive } from "@/hooks/use-is-active";
import { cn } from "@/lib/cn";

export const Header: FC = () => {
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = useIsActive();

  return (
    <header
      className={clsx(
        "layout",
        "sticky top-0 z-50 flex h-header w-full max-w-full items-center justify-between gap-2 bg-background px-6 transition-shadow",
        !isTop && "shadow-sm"
      )}
    >
      <Link href="/">
        <Logo size="xs" />
      </Link>
      <nav>
        <ul className="flex items-center space-x-3 text-xs md:space-x-4 md:text-base">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link
                className={cn(
                  "text-text hover:text-primary transition-colors",
                  isActive(href) && "text-primary"
                )}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];
