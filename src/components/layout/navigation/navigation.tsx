import { DefaultNavigation } from "./default-navigation";
import { MobileNavigation } from "./mobile-navigation";
import type { NavigationProps } from "./types";

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
