import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MagneticButton({
  children,
  className = "",
  onClick,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    x.set((mx - rect.width / 2) * 0.25);
    y.set((my - rect.height / 2) * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: .95 }}
      className={`
      relative
      overflow-hidden
      rounded-full
      px-8
      py-4
      font-semibold
      text-white
      shadow-2xl
      bg-gradient-to-r
      from-green-700
      via-green-600
      to-green-500
      ${className}
      `}
    >
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        top-0
        left-0
        h-full
        w-12
        rotate-12
        bg-white/40
        blur-md
        "
      />

      <span className="relative z-10 flex items-center gap-3">
        {children}

        <motion.div
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowRight size={18} />
        </motion.div>
      </span>
    </motion.button>
  );
}
