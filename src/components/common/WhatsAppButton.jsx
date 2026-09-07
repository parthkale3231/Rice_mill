import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleClick = () => {
    const text = "Hello Shree Swami Samarth Rice Mill, I would like to inquire about wholesale rice rates and bulk orders.";
    window.open(`https://wa.me/918605194211?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 shadow-[0_10px_25px_rgba(5,150,105,0.4)] border border-emerald-400/40 cursor-pointer backdrop-blur-sm transition-all"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>

      <MessageCircle size={20} className="fill-white/20" />
      <span className="hidden sm:inline font-bold text-xs tracking-wide">
        WhatsApp Us
      </span>
    </motion.button>
  );
}
