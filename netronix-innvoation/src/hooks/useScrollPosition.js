/**
 * ==============================================================================
 * useScrollPosition Hook
 * ==============================================================================
 * Tracks window vertical scroll position and threshold triggers.
 * Used for dynamic navbar styling, scroll-to-top buttons, and scroll animations.
 */

import { useState, useEffect } from "react";

export function useScrollPosition(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrolled(currentY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY };
}

export default useScrollPosition;
