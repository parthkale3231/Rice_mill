import { memo } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Factory,
  Truck,
  Award,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { MEDIA } from "../../config/media";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Every grain is carefully tested to ensure consistent quality and purity.",
    color: "from-green-700 to-green-500",
  },
  {
    icon: Factory,
    title: "Modern Machinery",
    desc: "Advanced automated milling technology for better productivity.",
    color: "from-sky-600 to-cyan-500",
  },
  {
    icon: Leaf,
    title: "Natural Processing",
    desc: "Chemical-free processing while preserving nutrition and freshness.",
    color: "from-lime-600 to-green-500",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Reliable logistics network for domestic and export markets.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Award,
    title: "Certified Standards",
    desc: "Strict quality control with international manufacturing practices.",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    icon: Globe2,
    title: "Worldwide Supply",
    desc: "Trusted by customers across India and multiple export countries.",
    color: "from-indigo-600 to-blue-500",
  },
];

const checklist = [
  "25+ Years of Industry Experience",
  "100% Hygienic Processing",
  "Advanced Milling Technology",
  "Premium Packaging",
  "Trusted Dealer Network",
  "Export Quality Products",
];

function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="absolute -left-24 top-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-200/20 blur-2xl sm:blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-yellow-200/20 blur-2xl sm:blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-green-700">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Trusted Quality

            <span className="block text-shimmer-green">
              Exceptional Service
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Combining decades of experience with modern technology to
            deliver premium rice for domestic and international markets.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group rounded-[32px] bg-white p-8 shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {item.desc}
                </p>

                <div
                  className={`mt-8 h-1 rounded-full bg-gradient-to-r ${item.color}`}
                />
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Section */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src={MEDIA.about.factory}
                alt="Factory"
                loading="lazy"
                decoding="async"
                className="h-[550px] w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold uppercase tracking-[6px] text-green-700">
              Excellence
            </p>

            <h2 className="mt-5 text-5xl font-black text-slate-900">
              Excellence In Every Grain
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              We believe premium rice starts with premium processes.
              Every stage from procurement to packaging is monitored
              carefully to ensure customer satisfaction.
            </p>

            <div className="mt-10 space-y-5">

              {checklist.map((item) => (

                <motion.div
                  key={item}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <CheckCircle2
                    className="text-green-700"
                    size={24}
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default memo(WhyChooseUs);