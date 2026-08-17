import { memo } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Factory,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { MEDIA } from "../../config/media";

function HeroImage() {
  return (
    <div className="relative flex items-center justify-center p-2 sm:p-6 lg:p-12 overflow-hidden sm:overflow-visible">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] rounded-full bg-yellow-300/30 blur-2xl sm:blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[300px] w-[300px] sm:h-[480px] sm:w-[480px] rounded-full border border-green-200/80 border-dashed"
      />

      {/* Main Card */}

      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 rounded-[28px] sm:rounded-[36px] bg-white/90 backdrop-blur-xl p-4 sm:p-8 shadow-[0_30px_60px_rgba(0,0,0,.12)] border border-white"
      >
        <img
          src={MEDIA.hero.ricebag}
          alt="Shree Swami Samarth Rice Bag"
          width={360}
          height={360}
          fetchPriority="high"
          decoding="async"
          className="w-[200px] sm:w-[320px] lg:w-[360px] h-auto object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Card 1 */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-0 sm:-left-8 top-0 sm:top-2 z-30 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 sm:p-4 shadow-xl border border-slate-100 scale-90 sm:scale-100"
      >
        <div className="flex items-center gap-2 sm:gap-3">

          <div className="rounded-xl bg-green-100 p-2 sm:p-2.5 shrink-0">
            <Factory
              className="text-green-700"
              size={18}
            />
          </div>

          <div>
            <h3 className="text-[11px] sm:text-sm font-bold text-slate-800">
              Best Quality
            </h3>

            <p className="text-[10px] sm:text-[11px] text-slate-500">
              Best Price
            </p>
          </div>

        </div>
      </motion.div>

      {/* Card 2 */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-0 sm:-right-8 top-8 sm:top-12 z-30 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 sm:p-4 shadow-xl border border-slate-100 scale-90 sm:scale-100"
      >
        <div className="flex items-center gap-2 sm:gap-3">

          <div className="rounded-xl bg-yellow-100 p-2 sm:p-2.5 shrink-0">
            <Award
              className="text-yellow-600"
              size={18}
            />
          </div>

          <div>
            <h3 className="text-[11px] sm:text-sm font-bold text-slate-800">
              FSSAI Certified
            </h3>

            <p className="text-[10px] sm:text-[11px] text-slate-500">
              Premium Quality
            </p>
          </div>

        </div>
      </motion.div>

      {/* Card 3 */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-0 sm:-left-8 bottom-8 sm:bottom-12 z-30 rounded-2xl bg-white/95 backdrop-blur-md p-2.5 sm:p-4 shadow-xl border border-slate-100 scale-90 sm:scale-100"
      >
        <div className="flex items-center gap-2 sm:gap-3">

          <div className="rounded-xl bg-green-100 p-2 sm:p-2.5 shrink-0">
            <ShieldCheck
              className="text-green-700"
              size={18}
            />
          </div>

          <div>
            <h3 className="text-[11px] sm:text-sm font-bold text-slate-800">
              100% Hygienic
            </h3>

            <p className="text-[10px] sm:text-[11px] text-slate-500">
              Safe Processing
            </p>
          </div>

        </div>
      </motion.div>

      {/* Card 4 */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="absolute right-0 sm:-right-4 bottom-0 sm:bottom-4 z-30 rounded-2xl bg-gradient-to-br from-green-700 to-green-600 p-2.5 sm:p-4 text-white shadow-xl scale-90 sm:scale-100"
      >
        <div className="flex items-center gap-2 sm:gap-3">

          <div className="rounded-xl bg-white/20 p-2 sm:p-2.5 shrink-0">
            <Globe2 size={18} />
          </div>

          <div>
            <h3 className="text-[11px] sm:text-sm font-bold">
              Variety 
            </h3>

            <p className="text-[10px] sm:text-[11px] text-green-100">
              10+ Varieties
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  );
}

export default memo(HeroImage);