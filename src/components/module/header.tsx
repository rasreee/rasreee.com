"use client";
import Logo from "components/module/logo";
import { ResponsiveNav } from "components/module/nav";
import { routes } from "config/routes.config";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex min-h-[3rem] items-center justify-between aboveMobile:min-h-[4rem]">
      <Link href="/">
        <Logo size="small" />
      </Link>
      <ResponsiveNav routes={routes} />
    </header>
  );
};

export default Header;
