import { useEffect, useState } from "react";

export function useMenuOpen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    if (isMenuOpen) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }
  }, [isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen };
}
