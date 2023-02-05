import { useClickOutside } from "@react-hookz/web/esm/useClickOutside";
import { useToggle } from "@react-hookz/web/esm/useToggle";
import type { MutableRefObject } from "react";
import { useRef } from "react";

export function useDisclosure(): {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  overlayRef: MutableRefObject<HTMLDivElement | null>;
} {
  const [isOpen, toggle] = useToggle(false);

  const close = () => {
    toggle(false);
  };

  const open = () => {
    toggle(true);
  };

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(overlayRef, close);

  return { isOpen, close, open, overlayRef };
}
