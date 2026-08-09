import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

const HeroContent = () => {
  return (
    <div className="flex h-full flex-col justify-center lg:pr-8">
      {/* Section Number */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-10 font-mono text-sm uppercase tracking-[0.45em] text-gold"
      >
        01
      </motion.span>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          flex-col
          text-5xl
          font-bold
          leading-[0.88]
          tracking-[-0.05em]
          text-heading
          md:text-6xl
          xl:text-[5.8rem]
          2xl:text-[7rem]
        "
      >
        <span>PIYUSH</span>
        <span>SINGH</span>
        <span>SENGAR</span>
      </motion.h1>

      {/* Tagline + Divider */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-10"
      >
        <p className="text-xl font-semibold text-gold">
          Full Stack Developer • AI Enthusiast
        </p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 144 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 h-px bg-[var(--color-gold)]"
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-7 max-w-xl text-lg leading-9 text-body"
      >
        Crafting scalable web, mobile and AI-powered applications with a
        strong focus on clean architecture, performance and exceptional user
        experiences.
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}
      >
        <HeroButtons />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <HeroSocials />
      </motion.div>
    </div>
  );
};

export default HeroContent;