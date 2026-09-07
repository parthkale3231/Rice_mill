import { memo } from "react";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import FloatingRice from "./FloatingRice";

function Hero({ onOpenQuote, onOpenFactory }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FCFBF6] scroll-mt-24"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 right-0 h-[350px] w-[350px] sm:h-[650px] sm:w-[650px] rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      {/* Floating Rice Particles */}
      <FloatingRice />

      {/* Hero Content Container */}
      <div className="relative z-20 mx-auto flex flex-col justify-center min-h-screen max-w-7xl px-4 sm:px-6 lg:px-10 pt-28 sm:pt-32 pb-12">
        <div className="grid w-full items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <HeroContent
            onOpenQuote={onOpenQuote}
            onOpenFactory={onOpenFactory}
          />

          {/* Right Column */}
          <HeroImage />
        </div>

        {/* Full-width Stats Ribbon */}
        <div className="mt-14 sm:mt-18 w-full">
          <HeroStats />
        </div>

        {/* Centered Scroll Indicator */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={() => {
              const el = document.querySelector("#about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll to About Section"
            className="group inline-flex items-center gap-2.5 text-slate-400 hover:text-emerald-700 transition-colors cursor-pointer text-xs font-bold tracking-[3px] uppercase py-2 px-4 rounded-full hover:bg-emerald-50/60"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <Mouse size={17} className="text-emerald-700" />
            </motion.div>
            <span>Scroll to Discover</span>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#FCFBF6] to-transparent z-10" />
    </section>
  );
}

export default memo(Hero);