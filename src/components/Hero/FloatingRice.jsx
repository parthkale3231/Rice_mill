import { motion } from "framer-motion";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 16 + Math.random() * 20,
  duration: 8 + Math.random() * 8,
  delay: Math.random() * 5,
}));

export default function FloatingRice() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-40">

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