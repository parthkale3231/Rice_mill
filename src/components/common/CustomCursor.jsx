import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Precision instant dot tracking
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 60, mass: 0.05 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 60, mass: 0.05 });

  // Smooth trailing outer ring
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.1 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.1 });

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0)
    ) {
      setIsTouch(true);
      return;
    }

    document.body.style.cursor = "none";

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest("button, a, input, textarea, select, [role='button'], .cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", leave);
      document.body.style.cursor = "default";
    };
  }, [mouseX, mouseY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Subtle Ambient Glow */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? (hovered ? 0.35 : 0.18) : 0,
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none fixed left-0 top-0 z-[9995] h-12 w-12 rounded-full bg-emerald-500 blur-xl"
      />

      {/* Modern Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 38 : 22,
          height: hovered ? 38 : 22,
          opacity: visible ? 1 : 0,
          borderColor: hovered ? "rgba(34, 197, 94, 0.8)" : "rgba(34, 197, 94, 0.4)",
          backgroundColor: hovered ? "rgba(34, 197, 94, 0.08)" : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border shadow-sm backdrop-blur-[2px]"
      />

      {/* Modern Small Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.4 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(34,197,94,0.9)]"
      />
    </>
  );
}