import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Home,
  Info,
  Package,
  Factory,
  Images,
  Phone,
  ArrowRight,
} from "lucide-react";

import Logo from "./Logo";

const menus = [
  {
    title: "Home",
    icon: Home,
    href: "#",
  },
  {
    title: "About",
    icon: Info,
    href: "#about",
  },
  {
    title: "Products",
    icon: Package,
    href: "#products",
  },
  {
    title: "Process",
    icon: Factory,
    href: "#process",
  },
  {
    title: "Gallery",
    icon: Images,
    href: "#gallery",
  },
  {
    title: "Contact",
    icon: Phone,
    href: "#contact",
  },
];

export default function MobileDrawer({ open, setOpen, onOpenQuote }) {
  return (
    <AnimatePresence>

      {open && (
        <>
          {/* Background */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-50 h-screen w-[85vw] max-w-[340px] bg-white shadow-2xl overflow-y-auto"
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b p-4 sm:p-6">

              <Logo />

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 180 }}
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-slate-100 cursor-pointer shrink-0"
              >
                <X size={20} />
              </motion.button>

            </div>

            {/* Menu */}

            <div className="mt-6 space-y-2 px-4 sm:px-6">

              {menus.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 60,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group flex items-center justify-between rounded-2xl border border-transparent bg-slate-50 px-4 py-3 sm:px-5 sm:py-4 transition hover:border-green-200 hover:bg-green-50"
                  >

                    <div className="flex items-center gap-3 sm:gap-4">

                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-700 to-green-500 text-white shadow-lg shrink-0">

                        <Icon size={18} />

                      </div>

                      <span className="text-base sm:text-lg font-medium text-slate-700">

                        {item.title}

                      </span>

                    </div>

                    <ArrowRight
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 text-slate-400"
                      size={18}
                    />

                  </motion.a>
                );
              })}

            </div>

            {/* Bottom Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
              }}
              className="mt-6 mb-6 px-4 sm:px-6"
            >

              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-500 p-6 text-white shadow-2xl">

                <h2 className="text-xl font-bold">

                  Need Bulk Rice Supply?

                </h2>

                <p className="mt-2 text-sm text-green-100">

                  Get the best wholesale prices directly from the mill.

                </p>

                <motion.button
                  onClick={() => {
                    setOpen(false);
                    onOpenQuote?.();
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 font-semibold text-green-700 cursor-pointer"
                >
                  Get Quote

                  <ArrowRight size={18} />

                </motion.button>

              </div>

            </motion.div>

          </motion.div>
        </>
      )}

    </AnimatePresence>
  );
}