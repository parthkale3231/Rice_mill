import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-3 cursor-pointer select-none"
    >
      {/* Logo */}
      <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-green-300 blur-2xl"
        />

        {/* Outer Circle */}
        <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-700 to-green-500 shadow-xl" />

        {/* Inner Circle */}
        <div className="absolute w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-inner" />

        {/* Animated Rice SVG */}
        <motion.svg
          width="26"
          height="26"
          viewBox="0 0 64 64"
          fill="none"
          className="sm:w-[34px] sm:h-[34px]"
          animate={{
            rotate: [-3, 3, -3],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M32 54V18"
            stroke="#2E7D32"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {[
            [32, 20, 22, 16],
            [32, 26, 22, 22],
            [32, 32, 22, 28],
            [32, 38, 22, 34],
            [32, 44, 22, 40],

            [32, 20, 42, 16],
            [32, 26, 42, 22],
            [32, 32, 42, 28],
            [32, 38, 42, 34],
            [32, 44, 42, 40],
          ].map((p, i) => (
            <motion.path
              key={i}
              d={`M${p[0]} ${p[1]} L${p[2]} ${p[3]}`}
              stroke="#D4A017"
              strokeWidth="2.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: i * 0.08,
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            />
          ))}
        </motion.svg>
      </div>

      {/* Brand */}
      <div className="leading-tight">
        <motion.h1
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-base sm:text-2xl font-black text-shimmer-gold whitespace-nowrap"
        >
          Shree Swami Samarth
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            text-[10px] sm:text-sm
            tracking-[2px] sm:tracking-[5px]
            uppercase
            font-semibold
            text-green-700
          "
        >
          Rice Mill
        </motion.h2>
      </div>
    </motion.div>
  );
}