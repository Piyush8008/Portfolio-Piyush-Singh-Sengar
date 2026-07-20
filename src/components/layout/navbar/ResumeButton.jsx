import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";

function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      download
      aria-label="Download Resume"
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
      "
      style={{
        background: "var(--color-charcoal)",
        color: "#FFFFFF",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <span>Download Resume</span>

      <HiArrowDownTray
        size={18}
        className="
          transition-transform
          duration-300
          group-hover:translate-y-[2px]
        "
      />
    </motion.a>
  );
}

export default ResumeButton;