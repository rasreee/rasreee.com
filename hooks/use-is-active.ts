import { usePathname } from "next/navigation";
import { useCallback } from "react";

export const useIsActive = () => {
  const pathname = usePathname();

  const isActive = useCallback(
    (path: string) => {
      return pathname === path;
    },
    [pathname]
  );

  return isActive;
};
