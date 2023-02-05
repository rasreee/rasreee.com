import { Bars3Icon } from "components/icons/bars-3";
import { XMarkIcon } from "components/icons/x-mark";
import { useDisclosure } from "lib/hooks/use-disclosure";
import classes from "lib/utils/classes";
import type { NavComponent } from "./nav.types";
import NavItem from "./nav-item";

export const MobileNav: NavComponent = ({ routes }) => {
  const { overlayRef, isOpen, open, close } = useDisclosure();

  return (
    <div className="flex flex-col flex-nowrap items-center gap-5">
      <div className="-mr-2 flex items-center sm:hidden">
        <button
          className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md p-2 text-hint focus:outline-none focus:ring-2 focus:ring-inset"
          onClick={open}
        >
          <span className="sr-only">Open menu</span>
          <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
        </button>
      </div>
      <div
        className={classes(
          "absolute top-0 right-0 h-screen w-9/12 flex-col space-y-5 bg-muted p-6",
          isOpen ? `flex` : `hidden`
        )}
        ref={overlayRef}
      >
        <div className="relative top-0 right-0 flex justify-end">
          <button onClick={close}>
            <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {routes.map((route) => (
            <NavItem key={route.id} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
