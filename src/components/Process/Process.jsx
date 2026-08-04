import { motion } from "framer-motion";
import {
  Tractor,
  Wheat,
  Factory,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";
import { MEDIA } from "../../config/media";

const steps = [
  {
    id: "01",
    title: "Farm Selection",
    icon: Tractor,
    image: MEDIA.process.farmSelection,
    description:
      "Premium paddy is sourced directly from trusted farmers using sustainable farming practices.",
    color: "from-green-700 to-green-500",
  },
  {
    id: "02",
    title: "Cleaning & Sorting",
    icon: Wheat,
    image: MEDIA.process.clean,
    description:
      "Advanced cleaning machines remove impurities while preserving grain quality.",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    id: "03",
    title: "Modern Milling",
    icon: Factory,
    image: MEDIA.process.milling,
    description:
      "Fully automated milling technology ensures uniform polishing and premium finish.",
    color: "from-sky-600 to-cyan-500",
  },
  {
    id: "04",
    title: "Quality Testing",
    icon: ShieldCheck,
    image: MEDIA.process.testing,
    description:
      "Every batch undergoes strict quality inspection before packaging.",
    color: "from-green-700 to-emerald-500",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#FCFBF6] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] font-semibold text-green-700 text-xs sm:text-base">
            Manufacturing Process
          </p>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            From Farm To{" "}
            <span className="block text-shimmer-green">
              Your Plate
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            Every grain follows a carefully monitored process to
            maintain purity, nutrition and premium quality.
          </p>
        </motion.div>

        <div className="relative mt-12 sm:mt-24">
          <div className="space-y-10 sm:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
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
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className={`grid items-center gap-6 lg:gap-10 lg:grid-cols-2 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Container */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className={`${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[35px] bg-slate-200 shadow-2xl border border-slate-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        decoding="async"
                        className="h-56 sm:h-[380px] w-full object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md font-black text-slate-900 shadow-lg border border-white/50">
                        <span className="text-sm sm:text-xl text-green-700">{step.id}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="rounded-[24px] sm:rounded-[35px] bg-white p-5 sm:p-10 shadow-xl border border-slate-100">
                      <div
                        className={`flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} text-white shadow-md`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>

                      <h3 className="mt-4 sm:mt-6 text-xl sm:text-3xl font-black text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 sm:mt-4 text-sm sm:text-lg leading-6 sm:leading-9 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}