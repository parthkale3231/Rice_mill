import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import IntroVideo from "./components/Intro/IntroVideo";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import SmoothScroll from "./components/common/SmoothScroll";

// Lazy-loaded components for optimal initial bundle size
const Process = lazy(() => import("./components/Process/Process"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const QuoteModal = lazy(() => import("./components/QuoteModal/QuoteModal"));
const FactoryModal = lazy(() => import("./components/FactoryModal/FactoryModal"));

export default function App() {
  const [introPlaying, setIntroPlaying] = useState(true);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [factoryOpen, setFactoryOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      {/* Intro Video Preloader Screen */}
      <IntroVideo
        isPlaying={introPlaying}
        onComplete={() => setIntroPlaying(false)}
      />
      
      {/* Main Homepage Container */}
      <div className={`transition-all duration-1000 ${introPlaying ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
        <Navbar onOpenQuote={() => setQuoteOpen(true)} />
        <Hero
          onOpenQuote={() => setQuoteOpen(true)}
          onOpenFactory={() => setIntroPlaying(true)}
        />
        
        <About />
        <Products />

        <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading experience...</div>}>
          <Process />
          <Gallery />
          <Testimonials />
        </Suspense>

        <Contact />
        <Footer />
      </div>

      {/* Modals */}
      <Suspense fallback={null}>
        {quoteOpen && (
          <QuoteModal
            isOpen={quoteOpen}
            onClose={() => setQuoteOpen(false)}
          />
        )}
        {factoryOpen && (
          <FactoryModal
            isOpen={factoryOpen}
            onClose={() => setFactoryOpen(false)}
          />
        )}
      </Suspense>
    </>
  );
}