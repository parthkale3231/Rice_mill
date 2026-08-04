import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          left-0
          top-0
          z-[9999]
          h-[5px]
          w-full
          origin-left
          bg-gradient-to-r
          from-green-700
          via-yellow-500
          to-green-700
        "
      />

      <motion.div
        style={{ scaleX }}
        className="
          fixed
          left-0
          top-0
          z-[9998]
          h-[5px]
          w-full
          origin-left
          blur-md
          bg-gradient-to-r
          from-green-500
          via-yellow-400
          to-green-500
        "
      />
    </>
  );
}