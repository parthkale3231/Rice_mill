import { motion } from "framer-motion";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: 10 + i * 11,
  top: 15 + (i % 4) * 20,
  size: 16 + (i % 3) * 6,
  duration: 10 + (i % 3) * 4,
  delay: i * 0.8,
}));

export default function FloatingRice() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-30 hidden md:block">

      {particles.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 20, -20, 0],
            rotate: [-8, 8, -8],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <svg
            width={item.size}
            height={item.size * 2}
            viewBox="0 0 24 48"
            fill="none"
          >
            <path
              d="M12 45V10"
              stroke="#2E7D32"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 14L6 10"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 20L5 17"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 26L5 24"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 32L5 31"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 14L18 10"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 20L19 17"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 26L19 24"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 32L19 31"
              stroke="#D4A017"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}