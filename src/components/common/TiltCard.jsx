import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = -((y - rect.height / 2) / 18);
    const ry = (x - rect.width / 2) / 18;

    rotateX.set(rx);
    rotateY.set(ry);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{
        scale: 1.04,
      }}
      className={className}
    >
      <motion.div
        style={{
          transform: "translateZ(50px)",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}