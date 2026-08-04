import { motion } from "framer-motion";
import CountUpRaw from "react-countup";
import {
  Factory,
  Globe2,
  Users,
  Wheat,
} from "lucide-react";

const CountUpComp = typeof CountUpRaw === "function" ? CountUpRaw : (CountUpRaw?.default || CountUpRaw);

function CountUp(props) {
  if (typeof CountUpComp === "function") {
    const Component = CountUpComp;
    return <Component {...props} />;
  }
  return <span>{props.end}</span>;
}

const stats = [
  {
    id: 1,
    icon: Factory,
    number: 25,
    suffix: "+",
    title: "Years Experience",
    color: "from-green-700 to-green-500",
  },
  {
    id: 2,
    icon: Globe2,
    number: 10,
    suffix: "+",
    title: "Variety",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    id: 3,
    icon: Users,
    number: 500,
    suffix: "+",
    title: "Happy Dealers",
    color: "from-green-700 to-emerald-500",
  },
  {
    id: 4,
    icon: Wheat,
    number: 50000,
    suffix: "+",
    title: "Tons Produced",
    color: "from-orange-500 to-yellow-400",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-8 sm:mt-12 grid gap-2.5 sm:gap-3.5 grid-cols-2 lg:grid-cols-4">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2 + index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/80 bg-white/90 backdrop-blur-xl px-3 py-3 sm:px-4 sm:py-5 shadow-lg"
          >
            {/* Glow */}

            <div
              className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150`}
            />

            {/* Icon */}

            <div
              className={`mb-2.5 sm:mb-4 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-md`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            {/* Number */}

            <h2 className="text-lg sm:text-2xl font-black text-slate-900 whitespace-nowrap tracking-tight">

              <CountUp
                end={item.number}
                duration={3}
                separator=","
                enableScrollSpy
                scrollSpyOnce
              />

              {item.suffix}

            </h2>

            {/* Title */}

            <p className="mt-1 text-[11px] sm:text-sm font-medium text-slate-500 leading-tight">
              {item.title}
            </p>

            {/* Hover Line */}

            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
              className={`mt-2.5 sm:mt-4 h-1 rounded-full bg-gradient-to-r ${item.color}`}
            />
          </motion.div>
        );
      })}

    </div>
  );
}