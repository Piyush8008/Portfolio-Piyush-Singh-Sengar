import { motion } from "framer-motion";
import { scrollToSection } from "../../../utils/scrollToSection";

function Logo() {
  return (
    <motion.button
      type="button"
      aria-label="Go to Home section"
      onClick={() => scrollToSection("home")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="
        group
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        surface-card
        shadow-soft
        transition-default
        focus:outline-none
        focus-visible:ring-2
      "
      style={{
        "--tw-ring-color": "var(--color-gold)",
      }}
    >
      <span className="text-heading text-lg font-bold transition-colors duration-300 group-hover:text-gold">
        PS
      </span>
    </motion.button>
  );
}

export default Logo;