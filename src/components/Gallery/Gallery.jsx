import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, X } from "lucide-react";
import { MEDIA } from "../../config/media";

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FCFBF6] py-16 sm:py-24 lg:py-28 scroll-mt-24"
    >
      <div className="absolute left-0 top-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-200/20 blur-2xl sm:blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-yellow-200/20 blur-2xl sm:blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-green-700 text-xs sm:text-base">
            Gallery
          </p>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            Inside Our

            <span className="block text-shimmer-green">
              Rice Mill
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            Explore our facilities, machinery, production process,
            warehouse and export-quality products.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-20 grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {MEDIA.gallery.map((item, index) => (

            <motion.div
              key={item.id}
              onClick={() => setActiveImage(item)}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white shadow-xl border border-slate-100 cursor-pointer"
            >
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-64 sm:h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/40">

                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full bg-white p-3 sm:p-4 opacity-0 transition group-hover:opacity-100 shadow-xl"
                  >
                    <Maximize2 className="text-green-700 w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>

                </div>

              </div>

              <div className="flex items-center justify-between p-4 sm:p-6">

                <div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
                    Premium Facility
                  </p>

                </div>

                <div className="rounded-2xl bg-green-100 p-2.5 sm:p-3 shrink-0">
                  <Camera className="text-green-700 w-5 h-5 sm:w-6 sm:h-6" />
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-4xl w-full overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800"
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close image preview"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition cursor-pointer"
              >
                <X size={20} />
              </button>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-full object-contain bg-slate-950"
              />
              <div className="p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{activeImage.title}</h3>
                  <p className="text-sm text-slate-400">Shree Swami Samarth Rice Mill Facility</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default memo(Gallery);