import { memo } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
  ArrowUp,
  Send,
} from "lucide-react";

const links = [
  "Home",
  "About",
  "Products",
  "Process",
  "Gallery",
  "Contact",
];

const products = [
  "Basmati Rice",
  "Kolam Rice",
  "Steam Rice",
  "Sona Masoori",
  "Export Rice",
];

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-600/10 blur-2xl sm:blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-yellow-500/10 blur-2xl sm:blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">

        {/* Newsletter */}

        <div className="mb-12 sm:mb-20 overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-r from-green-700 to-green-500 p-6 sm:p-10 text-white shadow-2xl">

          <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2">

            <div>

              <h2 className="text-2xl sm:text-4xl font-black">
                Subscribe Newsletter
              </h2>

              <p className="mt-2 sm:mt-4 text-sm sm:text-base text-green-100">
                Get updates about our products,
                offers and export news.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 rounded-2xl sm:rounded-full bg-transparent sm:bg-white p-0 sm:p-2">

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full sm:flex-1 rounded-full px-5 py-3.5 sm:py-0 text-slate-900 outline-none bg-white text-sm sm:text-base"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-green-700 sm:bg-green-700 px-6 py-3.5 sm:px-8 sm:py-4 font-semibold text-white cursor-pointer shadow-md text-sm sm:text-base shrink-0"
              >
                <Send size={18} />

                Subscribe

              </motion.button>

            </div>

          </div>

        </div>

        {/* Grid */}

        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-2xl sm:text-3xl font-black">

              Shree Swami Samarth

              <span className="block text-green-400">
                Rice Mill
              </span>

            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-7 sm:leading-8 text-slate-400">

              Premium quality rice manufacturer
              delivering excellence with modern
              technology and trusted quality.

            </p>

            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4">

              {[Globe, Share2, MessageCircle].map(
                (Icon, i) => (

                  <motion.button
                    key={i}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-full bg-slate-800 p-3 sm:p-4 hover:bg-green-700 text-white cursor-pointer transition"
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.button>

                )
              )}

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl sm:text-2xl font-bold">
              Quick Links
            </h3>

            <div className="mt-4 sm:mt-8 space-y-3 sm:space-y-4">

              {links.map((item) => (

                <motion.a
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm sm:text-base text-slate-400 hover:text-green-400 transition"
                >
                  {item}
                </motion.a>

              ))}

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-xl sm:text-2xl font-bold">
              Products
            </h3>

            <div className="mt-4 sm:mt-8 space-y-3 sm:space-y-4">

              {products.map((item) => (

                <motion.p
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  className="cursor-pointer text-sm sm:text-base text-slate-400 hover:text-green-400 transition"
                >
                  {item}
                </motion.p>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl sm:text-2xl font-bold">
              Contact
            </h3>

            <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-6">

              <div className="flex gap-3 sm:gap-4">

                <Phone className="text-green-400 shrink-0 w-5 h-5" />

                <p className="text-sm sm:text-base text-slate-400">
                  +91 8605194211 +91 9370107793
                </p>

              </div>

              <div className="flex gap-3 sm:gap-4">

                <Mail className="text-green-400 shrink-0 w-5 h-5" />

                <p className="text-sm sm:text-base text-slate-400">
                  kalepranav176@gmail.com
                </p>

              </div>

              <div className="flex gap-3 sm:gap-4">

                <MapPin className="text-green-400 shrink-0 w-5 h-5" />

                <p className="text-sm sm:text-base text-slate-400">
                  Pandhurli,Taluka Baglan, Nashik, Maharashtra, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 sm:mt-20 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-slate-800 pt-6 sm:pt-8 text-center sm:text-left">

          <p className="text-xs sm:text-sm text-slate-500">

            © {new Date().getFullYear()} Shree Swami Samarth Rice Mill.
            All Rights Reserved.

          </p>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: .9,
            }}
            onClick={scrollTop}
            className="rounded-full bg-green-700 p-3 sm:p-4 text-white shadow-lg cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

        </div>

      </div>

    </footer>
  );
}

export default memo(Footer);