import { memo } from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  BadgeCheck,
} from "lucide-react";

import MagneticButton from "../common/MagneticButton";

const title = "SHREE SWAMI SAMARTH RICE MILL".split("");

function HeroContent({ onOpenQuote, onOpenFactory }) {
  return (
    <div className="relative">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2"
      >
        <BadgeCheck
          className="text-green-700"
          size={18}
        />

        <span className="text-sm font-semibold text-green-700">
          Premium Export Quality Rice
        </span>
      </motion.div>

      {/* Small Heading */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 sm:mt-8 text-xs sm:text-lg font-medium tracking-[3px] sm:tracking-[5px] uppercase text-yellow-600"
      >
        Harvesting Excellence Since 1998
      </motion.p>

      {/* Main Title */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-3 sm:mt-4"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight">
          <span className="block text-shimmer-green">
            SHREE SWAMI
          </span>
          <span className="block text-slate-900 mt-1">
            SAMARTH RICE MILL
          </span>
        </h1>
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
        }}
        className="mt-5 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600"
      >
        We manufacture premium quality rice using
        state-of-the-art milling technology,
        ensuring unmatched taste, purity and
        consistency for domestic and international
        markets.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
      >

        {/* Explore */}

       
         <MagneticButton
           onClick={() => {
             const el = document.querySelector("#products");
             if (el) el.scrollIntoView({ behavior: "smooth" });
           }}
           aria-label="Explore Products"
           className="w-full sm:w-auto justify-center text-center cursor-pointer"
         >
            Explore Products
         </MagneticButton>       
         

        {/* Video */}

        <motion.button
          onClick={onOpenFactory}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          className="group flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3.5 sm:px-8 sm:py-4 font-semibold text-slate-800 hover:bg-slate-50 transition shadow-lg cursor-pointer w-full sm:w-auto"
        >
          <PlayCircle
            className="text-green-700"
            size={22}
          />

          Watch Factory
        </motion.button>

      </motion.div>

      {/* Trust Badges Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/60 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-700"
      >
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">✓</span>
          <span>100% Sortex Cleaned</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800 text-[10px] font-black">✓</span>
          <span>Direct Mill Pricing</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">✓</span>
          <span>Pan-India & Export Supply</span>
        </div>
      </motion.div>

    </div>
  );
}

export default memo(HeroContent);