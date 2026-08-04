import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 850,
    damping: 42,
    mass: 0.15,
  });

  const y = useSpring(mouseY, {
    stiffness: 850,
    damping: 42,
    mass: 0.15,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    document.body.style.cursor = "none";

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    window.addEventListener("mousemove", move);

    const leave = () => setVisible(false);

    document.addEventListener("mouseleave", leave);

    const elements = document.querySelectorAll(
      "button,a,input,textarea,.cursor-hover"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.style.cursor = "default";
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 0.25 : 0,
          scale: hover ? 2.6 : 1.3,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9995] h-24 w-24 rounded-full bg-emerald-400 blur-[60px]"
      />

      {/* Glass */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hover ? 54 : 32,
          height: hover ? 54 : 32,
          opacity: visible ? 1 : 0,
          rotate: hover ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-white/40 bg-white/10 backdrop-blur-xl"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            "0 8px 32px rgba(255,255,255,.15),0 0 40px rgba(34,197,94,.25)",
        }}
      />

      {/* Dot */}

      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hover ? 0.4 : 1,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white"
      />
    </>
  );
}