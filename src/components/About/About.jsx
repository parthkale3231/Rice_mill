import { memo } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Factory,
  ShieldCheck,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { MEDIA } from "../../config/media";

const features = [
  "100% Hygienic Processing",
  "Fully Modern Plant",
  "Premium Quality Rice",
  "Modern Milling Technology",
  "Timely Delivery",
  "Packaging",
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCFBF6] py-16 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute right-0 top-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-yellow-300/20 blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] rounded-full bg-green-300/20 blur-2xl sm:blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid items-center gap-10 lg:gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            {/* Main Image */}

            <div className="overflow-hidden rounded-[28px] sm:rounded-[40px] bg-white p-3 sm:p-5 shadow-2xl border border-slate-100">

              <img
                src={MEDIA.about.factory}
                alt="Rice Mill Factory"
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="rounded-2xl sm:rounded-3xl w-full h-auto object-cover"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute right-2 sm:-right-8 top-4 sm:top-10 rounded-2xl sm:rounded-3xl bg-white p-3.5 sm:p-6 shadow-xl border border-slate-100 scale-90 sm:scale-100"
            >

              <Award
                className="text-yellow-500 w-7 h-7 sm:w-10 sm:h-10"
              />

              <h3 className="mt-2 sm:mt-4 text-sm sm:text-base font-bold text-slate-800">
                25+ Years
              </h3>

              <p className="text-xs sm:text-sm text-slate-500">
                Trusted Experience
              </p>

            </motion.div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute left-2 sm:-left-8 bottom-4 sm:bottom-10 rounded-2xl sm:rounded-3xl bg-green-700 p-3.5 sm:p-6 text-white shadow-2xl scale-90 sm:scale-100"
            >

              <Factory className="w-7 h-7 sm:w-10 sm:h-10" />

              <h3 className="mt-2 sm:mt-4 text-sm sm:text-base font-bold">
                Modern Plant
              </h3>

              <p className="text-xs sm:text-sm text-green-100">
                Fully Advance
              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-green-700 text-xs sm:text-base">

              About Us

            </p>

            <h2 className="mt-3 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-900">

              Tradition Meets

              <span className="block text-shimmer-green">

                Modern Technology

              </span>

            </h2>

            <p className="mt-4 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">

              Shree Swami Samarth Rice Mill has been
              delivering premium quality rice for more
              than 25 years. Our fully automated milling
              plant combines traditional values with
              advanced technology to ensure every grain
              meets international quality standards.

            </p>

            {/* Features */}

            <div className="mt-8 sm:mt-10 grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2">

              {features.map((item) => (

                <motion.div
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white p-3.5 sm:p-5 shadow-lg border border-slate-100"
                >

                  <CheckCircle2
                    className="text-green-700 shrink-0"
                    size={20}
                  />

                  <span className="font-medium text-sm sm:text-base text-slate-800">

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

            {/* Cards */}

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-xl border border-slate-100"
              >

                <ShieldCheck
                  className="text-green-700 w-8 h-8 sm:w-10 sm:h-10"
                />

                <h3 className="mt-3 sm:mt-5 text-lg sm:text-xl font-bold text-slate-900">

                  Quality Assurance

                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500">

                  Every batch is tested before packaging.

                </p>

              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-xl border border-slate-100"
              >

                <Leaf
                  className="text-green-700 w-8 h-8 sm:w-10 sm:h-10"
                />

                <h3 className="mt-3 sm:mt-5 text-lg sm:text-xl font-bold text-slate-900">

                  Sustainable Farming

                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-500">

                  Partnering directly with trusted farmers.

                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default memo(About);