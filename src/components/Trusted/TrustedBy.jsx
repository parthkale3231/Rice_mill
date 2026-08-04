import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Truck,
  Globe2,
  Factory,
  Leaf,
} from "lucide-react";

const partners = [
  {
    icon: Factory,
    title: "Modern Milling",
    subtitle: "Fully Advanced Plant",
    color: "from-green-700 to-green-500",
  },
  {
    icon: Award,
    title: "FSSAI Certified",
    subtitle: "Premium Quality",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    icon: ShieldCheck,
    title: "Quality Tested",
    subtitle: "100% Hygienic",
    color: "from-green-700 to-emerald-500",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "Across Nashik",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Globe2,
    title: "Variety",
    subtitle: "10+ Different type",
    color: "from-sky-600 to-cyan-500",
  },
  {
    icon: Leaf,
    title: "Organic Farming",
    subtitle: "Natural Grains",
    color: "from-lime-600 to-green-500",
  },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="font-semibold tracking-[6px] uppercase text-green-700">

            Trusted Worldwide

          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">

            Quality That Speaks
            <span className="block text-shimmer-green">

              For Itself

            </span>

          </h2>

        </motion.div>

        {/* Infinite Marquee */}

        <div className="relative mt-20 overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >

            {[...partners, ...partners].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group min-w-[300px] rounded-3xl border border-slate-100 bg-white p-8 shadow-xl transition-all"
                >

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-2 text-slate-500">

                    {item.subtitle}

                  </p>

                  <div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${item.color}`}
                  />

                </motion.div>

              );

            })}

          </motion.div>

        </div>

      </div>

    </section>
  );
}