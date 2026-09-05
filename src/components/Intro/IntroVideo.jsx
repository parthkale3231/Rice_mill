import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, SkipForward, Sparkles } from "lucide-react";
import { MEDIA } from "../../config/media";
const INTRO_DURATION_SEC = 7;

export default function IntroVideo({ isPlaying, onComplete }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const unmuteVideo = () => {
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1.0;
          setIsMuted(false);
        }
      };

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 1.0;
        videoRef.current.muted = false;

        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (videoRef.current) {
                videoRef.current.muted = false;
                setIsMuted(false);
              }
            })
            .catch(() => {
              // Browser blocked unmuted autoplay without prior gesture.
              // Fallback to muted playback and unmute on first interaction.
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                videoRef.current.play().catch(() => { });
              }
            });
        }
      }

      window.addEventListener("click", unmuteVideo, { once: true });
      window.addEventListener("touchstart", unmuteVideo, { once: true });
      window.addEventListener("keydown", unmuteVideo, { once: true });

      // Auto-complete after exactly INTRO_DURATION_SEC
      const timer = setTimeout(() => {
        onComplete();
      }, INTRO_DURATION_SEC * 1000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("click", unmuteVideo);
        window.removeEventListener("touchstart", unmuteVideo);
        window.removeEventListener("keydown", unmuteVideo);
      };
    }
  }, [isPlaying, onComplete]);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      videoRef.current.volume = nextMuted ? 0 : 1.0;
      setIsMuted(nextMuted);
    }
  };

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(16px)",
            transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950 text-white overflow-hidden select-none"
        >
          {/* Background Video */}
          <div
            onClick={() => {
              if (isMuted && videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1.0;
                setIsMuted(false);
              }
            }}
            className="relative h-full w-full flex items-center justify-center cursor-pointer"
          >
            <video
              ref={videoRef}
              src={MEDIA.hero.video}
              playsInline
              autoPlay
              preload="auto"
              muted={isMuted}
              onEnded={onComplete}
              className="h-full w-full object-cover opacity-100 transform-gpu will-change-transform"
            />

            {/* Unmute Sound Prompt Badge (shown when browser blocks unmuted autoplay) */}
            <AnimatePresence>
              {isMuted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="absolute top-20 sm:top-24 z-30 flex items-center gap-2 rounded-full bg-yellow-400 text-slate-950 px-4 py-2 text-xs sm:text-sm font-bold shadow-xl animate-bounce hover:bg-yellow-300 transition"
                >
                  <VolumeX size={16} />
                  <span>Click anywhere to enable sound</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 sm:p-8 flex items-center justify-between z-20 gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative h-9 w-9 sm:h-11 sm:w-11 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-md bg-[#FAF6ED]">
                  <img
                    src={MEDIA.intrologo}
                    alt="Shree Swami Samarth Rice Mill Logo"
                    className="w-full h-full object-cover object-center"
                    style={{
                      transform: "scale(1.68)",
                      transformOrigin: "47.46% 47.5%",
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-base tracking-wide text-white leading-tight">
                    SHREE SWAMI SAMARTH
                  </h3>
                  <p className="text-[9px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-yellow-400 font-semibold">
                    Rice Mill Experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Audio Toggle */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition cursor-pointer"
                  title={isMuted ? "Unmute Sound" : "Mute Sound"}
                >
                  {isMuted ? <VolumeX size={16} className="sm:w-5 sm:h-5" /> : <Volume2 size={16} className="sm:w-5 sm:h-5" />}
                </button>

                {/* Skip Button */}
                <button
                  onClick={onComplete}
                  aria-label="Enter site and skip intro video"
                  className="group flex items-center gap-1.5 sm:gap-2 rounded-full bg-green-600 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-base font-semibold text-white shadow-xl hover:bg-green-500 transition cursor-pointer"
                >
                  <span>Enter</span>
                  <SkipForward size={14} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Center Brand Splash Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute bottom-10 sm:bottom-16 left-4 right-4 sm:left-12 sm:right-12 z-20 max-w-2xl"
            >
              <span className="inline-block rounded-full bg-yellow-400/20 border border-yellow-400/40 px-3 py-0.5 sm:px-4 sm:py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[4px] text-yellow-300">
                Premium Grain Processing
              </span>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-5xl font-black text-white leading-tight drop-shadow-lg">
                Harvesting Quality <br />
                <span className="text-shimmer-gold">Since 1998</span>
              </h2>
            </motion.div>

            {/* 60 FPS Hardware GPU Accelerated Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-30 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: INTRO_DURATION_SEC,
                  ease: "linear",
                }}
                className="h-full bg-gradient-to-r from-green-500 via-yellow-400 to-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
