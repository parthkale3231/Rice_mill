import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "Sharma Traders",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2315803d'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='38' font-weight='bold'%3ERS%3C/text%3E%3C/svg%3E",
    review:
      "Outstanding rice quality and consistent supply. We've worked together for more than five years and have always received premium products on time.",
  },
  {
    id: 2,
    name: "Amit Patel",
    company: "Patel Exports",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23b45309'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='38' font-weight='bold'%3EAP%3C/text%3E%3C/svg%3E",
    review:
      "Excellent export quality rice with professional packaging. Their team is reliable, responsive and maintains high quality standards.",
  },
  {
    id: 3,
    name: "Sneha Enterprises",
    company: "Food Distributor",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%230369a1'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='38' font-weight='bold'%3ESE%3C/text%3E%3C/svg%3E",
    review:
      "One of the best rice mills we've partnered with. Modern processing, hygienic packaging and timely deliveries every time.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-green-700 text-xs sm:text-base">
            Testimonials
          </p>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            What Our

            <span className="block bg-gradient-to-r from-green-700 via-yellow-500 to-green-700 bg-[length:220%_100%] bg-clip-text text-transparent">

              Customers Say

            </span>
          </h2>
        </motion.div>

        <motion.div
          key={current}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .5,
          }}
          className="relative mt-12 sm:mt-20 rounded-[28px] sm:rounded-[40px] bg-[#FCFBF6] p-6 sm:p-10 lg:p-16 shadow-2xl border border-slate-100"
        >
          <Quote
            className="absolute right-4 top-4 sm:right-10 sm:top-8 text-green-200/60 sm:text-green-100 w-10 h-10 sm:w-20 sm:h-20"
          />

          <div className="flex flex-col items-center text-center">

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
              className="h-20 w-20 sm:h-28 sm:w-28 rounded-full border-4 border-white object-cover shadow-xl"
            />

            <div className="mt-4 sm:mt-6 flex gap-1">

              {[1,2,3,4,5].map((i)=>(
                <Star
                  key={i}
                  size={16}
                  className="sm:w-5 sm:h-5"
                  fill="#FFD700"
                  color="#FFD700"
                />
              ))}

            </div>

            <p className="mt-4 sm:mt-8 max-w-3xl text-base sm:text-xl leading-7 sm:leading-10 text-slate-600">

              "{testimonials[current].review}"

            </p>

            <h3 className="mt-6 sm:mt-10 text-xl sm:text-2xl font-bold text-slate-900">
              {testimonials[current].name}
            </h3>

            <p className="text-sm sm:text-base text-green-700 font-medium mt-1">
              {testimonials[current].company}
            </p>

          </div>

          <div className="mt-8 sm:mt-12 flex justify-center gap-4 sm:gap-6">

            <motion.button
              whileHover={{
                scale:1.1,
              }}
              whileTap={{
                scale:.9,
              }}
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full bg-white p-3 sm:p-4 shadow-lg border border-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
            </motion.button>

            <motion.button
              whileHover={{
                scale:1.1,
              }}
              whileTap={{
                scale:.9,
              }}
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full bg-green-700 p-3 sm:p-4 text-white shadow-lg cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}