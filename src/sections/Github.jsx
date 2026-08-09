import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";

import Container from "../components/ui/Container";
import socialLinks from "../constants/socialLinks";

const Github = () => {
  return (
    <section
      id="github"
      className="relative py-32 lg:py-40"
      aria-labelledby="github-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[25%_75%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
              08
            </span>

            <div className="mt-5 h-px w-20 bg-[var(--color-gold)] opacity-70" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-body">
              GitHub
            </p>

            <h2
              id="github-heading"
              className="
                max-w-4xl
                text-4xl
                leading-[1.05]
                tracking-[-0.04em]
                text-heading
                md:text-5xl
                xl:text-6xl
              "
            >
              Code, experiments and{" "}
              <span className="text-gold">
                things I'm building.
              </span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            border
            border-[var(--color-border)]
            p-8
            md:p-12
          "
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <FiGithub
                size={32}
                strokeWidth={1.4}
                className="text-[var(--color-gold)]"
                aria-hidden="true"
              />

              <h3 className="mt-6 text-3xl text-heading md:text-4xl">
                Explore my code
              </h3>

              <p className="mt-4 max-w-xl text-base leading-8 text-body">
                Explore my repositories, experiments and projects on GitHub.
              </p>
            </div>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-full
                border
                border-[var(--color-charcoal)]
                px-7
                py-4
                text-sm
                font-medium
                text-[var(--color-charcoal)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[var(--color-gold)]
                hover:bg-[var(--color-gold)]
                hover:text-white
              "
            >
              Visit GitHub

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Github;