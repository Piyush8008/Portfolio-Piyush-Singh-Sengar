import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import HeroContent from "../components/hero/HeroContent";
import HeroImage from "../components/hero/HeroImage";
import HeroScrollIndicator from "../components/hero/HeroScrollIndicator";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-28 lg:py-32"
    >
      <Container className="w-full">
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[55%_45%]
            xl:gap-10
          "
        >
          <HeroContent />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-end lg:pt-8"
          >
            <HeroImage />
          </motion.div>
        </div>
      </Container>

      <HeroScrollIndicator />
    </section>
  );
};

export default Hero;