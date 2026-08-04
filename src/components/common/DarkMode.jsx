import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function DarkMode() {
  const { dark, setDark } = useTheme();

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: .9,
      }}
      onClick={() => setDark(!dark)}
      className="
      fixed
      bottom-8
      left-8
      z-[999]
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-white
      shadow-2xl
      dark:bg-slate-900
      "
    >
      {dark ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-slate-700" />
      )}
    </motion.button>
  );
}