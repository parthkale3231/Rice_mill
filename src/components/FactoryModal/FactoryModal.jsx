import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Factory, CheckCircle, ShieldCheck, Flame } from "lucide-react";
import { MEDIA } from "../../config/media";

export default function FactoryModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-2xl z-10 border border-slate-800"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10" />

              <img
                src={MEDIA.hero.ricebag}
                alt="Factory Process"
                loading="lazy"
                decoding="async"
                className="w-64 opacity-40 blur-xs transition duration-700 group-hover:scale-105"
              />

              <div className="relative z-20 text-center p-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_50px_rgba(34,197,94,0.6)] hover:bg-green-400 transition"
                >
                  <Play size={36} className="ml-1" />
                </motion.div>
                <h3 className="mt-4 text-xl font-bold">State-of-the-Art Milling Tour</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Fully automated, hygienic sorting, de-husking & polished rice production.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-slate-900 border-t border-slate-800 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <Factory size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Japanese Sorting</h4>
                  <p className="text-xs text-slate-400">Color sorter tech</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Zero Chemicals</h4>
                  <p className="text-xs text-slate-400">100% natural processing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">50,000+ Tons/yr</h4>
                  <p className="text-xs text-slate-400">High capacity output</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
