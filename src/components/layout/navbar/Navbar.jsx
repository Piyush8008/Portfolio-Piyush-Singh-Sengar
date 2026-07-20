import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import navigation from "../../../constants/navigation";
import useActiveSection from "../../../hooks/useActiveSection";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar() {
  const activeSection = useActiveSection();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: isScrolled
          ? "rgba(252,250,246,.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        boxShadow: isScrolled
          ? "var(--shadow-soft)"
          : "none",
      }}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center px-6 md:px-10 xl:px-16">
        <DesktopNav
          navigation={navigation}
          activeSection={activeSection}
        />

        <MobileNav
          navigation={navigation}
          activeSection={activeSection}
        />
      </div>
    </motion.header>
  );
}

export default Navbar;