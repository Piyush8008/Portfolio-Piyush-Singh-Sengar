import { motion } from "framer-motion";

const HeroScrollIndicator = () => {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        flex-col
        items-center
        gap-3
        text-[10px]
        font-mono
        uppercase
        tracking-[0.35em]
        text-[var(--color-muted)]
        transition-colors
        duration-300
        hover:text-[var(--color-gold)]
        md:flex
      "
      aria-label="Scroll to About section"
    >
      <span>Scroll</span>

      <motion.span
        animate={{ height: [20, 34, 20] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-px bg-[var(--color-gold)]"
      />
    </motion.a>
  );
};

export default HeroScrollIndicator;