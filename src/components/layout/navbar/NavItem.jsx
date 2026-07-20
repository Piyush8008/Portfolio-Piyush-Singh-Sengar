import { motion } from "framer-motion";
import { scrollToSection } from "../../../utils/scrollToSection";

function NavItem({
  id,
  label,
  active = false,
  onClick,
}) {
  const handleClick = () => {
    scrollToSection(id);

    if (onClick) {
      onClick(id);
    }
  };

  return (
    <button
      type="button"
      aria-label={`Navigate to ${label}`}
      onClick={handleClick}
      className="
        group
        relative
        px-2
        py-1
        text-sm
        font-medium
        transition-colors
        duration-300
        focus:outline-none
      "
      style={{
        color: active
          ? "var(--color-charcoal)"
          : "var(--color-muted)",
      }}
    >
      <span className="group-hover:text-heading">
        {label}
      </span>

      <motion.span
        layoutId="active-navbar-item"
        className="absolute -bottom-1 left-0 h-[2px] rounded-full"
        style={{
          backgroundColor: "var(--color-gold)",
          width: active ? "100%" : "0%",
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      />
    </button>
  );
}

export default NavItem;