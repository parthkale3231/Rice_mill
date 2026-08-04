import { memo } from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import FloatingRice from "./FloatingRice";

function Hero({ onOpenQuote, onOpenFactory }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FCFBF6]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-48 right-0 h-[350px] w-[350px] sm:h-[650px] sm:w-[650px] rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] rounded-full bg-green-300/20 blur-3xl" />

      </div>

      {/* Floating Rice */}

      <FloatingRice />

      {/* Hero */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 pb-12 sm:pb-0">

        <div className="grid w-full items-center gap-10 lg:gap-16 lg:grid-cols-2">

          {/* Left */}

          <HeroContent
            onOpenQuote={onOpenQuote}
            onOpenFactory={onOpenFactory}
          />

          {/* Right */}

          <HeroImage />

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#FCFBF6] to-transparent z-10" />

    </section>
  );
}

export default memo(Hero);