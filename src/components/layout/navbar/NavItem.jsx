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
      aria-current={active ? "page" : undefined}
      onClick={handleClick}
      className="
        group
        relative
        w-fit
        px-2
        py-1
        text-sm
        font-medium
        transition-colors
        duration-300
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-gold)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--color-background)]
      "
      style={{
        color: active
          ? "var(--color-charcoal)"
          : "var(--color-muted)",
      }}
    >
      <span className="transition-colors duration-300 group-hover:text-heading">
        {label}
      </span>

      <motion.span
        layoutId="active-navbar-item"
        className="
          absolute
          -bottom-1
          left-0
          h-[2px]
          rounded-full
        "
        style={{
          backgroundColor: "var(--color-gold)",
          width: active ? "100%" : "0%",
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        aria-hidden="true"
      />
    </button>
  );
}

export default NavItem;