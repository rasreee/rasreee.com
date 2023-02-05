import { usePathname } from "next/navigation";

export function useCurrentRoute(): string | null {
  return usePathname();
}
