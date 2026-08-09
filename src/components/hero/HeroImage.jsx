import { motion } from "framer-motion";
import profile from "../../assets/profile.jpg";

const HeroImage = () => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Editorial Outer Frame */}
      <div
        className="
          absolute
          -inset-4
          rounded-[2rem]
          border
          border-[var(--color-gold)]
          opacity-30
        "
        aria-hidden="true"
      />

      {/* Secondary Frame */}
      <div
        className="
          absolute
          -inset-2
          rounded-[1.75rem]
          border
          border-[var(--color-border)]
          opacity-70
        "
        aria-hidden="true"
      />

      {/* Portrait */}
      <div
        className="
          relative
          aspect-[4/5]
          w-[300px]
          overflow-hidden
          rounded-[1.75rem]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          shadow-soft
          md:w-[400px]
          xl:w-[500px]
          2xl:w-[520px]
        "
      >
        <img
          src={profile}
          alt="Portrait of Piyush Singh Sengar"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />

        {/* Subtle Editorial Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(27,27,27,0.08))]"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;