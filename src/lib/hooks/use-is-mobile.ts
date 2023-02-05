import { useWindowSize } from "@react-hookz/web/esm/useWindowSize";
import { useMemo } from "react";

// max width (in pixels) of mobile devices
const MAX_WIDTH_MOBILE = 768;

/**
 * @returns {boolean} indicating on whether current device is mobile
 */
export function useIsMobile(): boolean {
  const { width: windowWidth } = useWindowSize();

  return useMemo(() => windowWidth <= MAX_WIDTH_MOBILE, [windowWidth]);
}
