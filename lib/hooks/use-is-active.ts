import { useRouter } from "next/router";

export function useIsActive(href: string): boolean {
  const currentRoute = useRouter().asPath;
  return currentRoute === href;
}
