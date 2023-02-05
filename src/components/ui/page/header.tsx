import { useAppConfig } from "app/app-context";
import { ResponsiveNav } from "components/ui/nav";
import Link from "next/link";
import Logo from "./logo";

const Header: React.FC = () => {
  const { routes } = useAppConfig();

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
