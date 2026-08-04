import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";

import Logo from "./Logo";
import MobileDrawer from "./MobileDrawer";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Process", href: "#process" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenQuote }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActive(item.name);
    if (item.href === "#" || item.href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/75 backdrop-blur-2xl shadow-xl border-b border-white/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
            }`}
          >

            {/* Logo */}

            <Logo />

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-2 bg-white/50 backdrop-blur-xl rounded-full px-3 py-2 border border-white/40 shadow-lg">

              {navItems.map((item) => (

                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="relative px-5 py-2 rounded-full font-medium overflow-hidden cursor-pointer"
                >
                  {active === item.name && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-green-700"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition ${
                      active === item.name
                        ? "text-white"
                        : "text-slate-700 hover:text-green-700"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>

            {/* CTA */}

            <div className="hidden lg:flex items-center">

              <motion.button
                onClick={onOpenQuote}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow:
                    "0px 18px 35px rgba(34,197,94,.35)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative overflow-hidden rounded-full px-7 py-3 font-semibold text-white bg-gradient-to-r from-green-700 via-green-600 to-green-500 cursor-pointer"
              >

                <span className="relative z-10 flex items-center gap-2">

                  Get Quote

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>

                </span>

                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 h-full w-10 rotate-12 bg-white/40 blur-md"
                />

              </motion.button>

            </div>

            {/* Mobile */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer border border-slate-100 shrink-0"
            >
              <Menu size={22} />
            </motion.button>

          </div>

        </div>
      </motion.header>

      <MobileDrawer
        open={open}
        setOpen={setOpen}
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}