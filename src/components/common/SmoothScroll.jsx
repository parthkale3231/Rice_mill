import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Disable smooth scroll on mobile/touch devices for native 120Hz scrolling & lower CPU/main-thread work
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
      gestureOrientation: "vertical",
      orientation: "vertical",
      normalizeWheel: true,
    });

    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}