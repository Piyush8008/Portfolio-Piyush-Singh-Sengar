import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

import Logo from "./Logo";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";

function MobileNav({
  navigation,
  activeSection,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden">
        <Logo />

        <button
          type="button"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            rounded-lg
            p-2
            text-[var(--color-charcoal)]
            transition-colors
            duration-300
            hover:text-[var(--color-gold)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[var(--color-gold)]
          "
        >
          {isOpen ? (
            <HiXMark size={28} aria-hidden="true" />
          ) : (
            <HiBars3 size={28} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[60]
              lg:hidden
            "
            style={{
              background: "rgba(248,245,239,0.98)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[var(--color-border)]
                  px-6
                  py-6
                "
              >
                <Logo />

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-lg
                    p-2
                    text-[var(--color-charcoal)]
                    transition-colors
                    duration-300
                    hover:text-[var(--color-gold)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--color-gold)]
                  "
                >
                  <HiXMark size={30} aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <nav
                aria-label="Mobile Navigation"
                className="
                  flex
                  flex-1
                  flex-col
                  justify-center
                  gap-7
                  overflow-y-auto
                  px-8
                  py-10
                "
              >
                {navigation.map((item) => (
                  <NavItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    active={activeSection === item.id}
                    onClick={handleItemClick}
                  />
                ))}
              </nav>

              {/* Footer */}
              <div
                className="
                  border-t
                  border-[var(--color-border)]
                  px-6
                  py-8
                "
              >
                <ResumeButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;