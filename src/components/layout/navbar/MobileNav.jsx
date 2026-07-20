import { useState } from "react";
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

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden">
        <Logo />

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 transition-colors duration-300"
          style={{
            color: "var(--color-charcoal)",
          }}
        >
          {isOpen ? (
            <HiXMark size={28} />
          ) : (
            <HiBars3 size={28} />
          )}
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden"
            style={{
              background: "rgba(248,245,239,0.98)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-6">
                <Logo />

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "var(--color-charcoal)",
                  }}
                >
                  <HiXMark size={30} />
                </button>
              </div>

              {/* Links */}
              <nav
                aria-label="Mobile Navigation"
                className="flex flex-1 flex-col justify-center gap-8 px-8"
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
              <div className="border-t px-6 py-8">
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