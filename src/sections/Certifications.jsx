import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-32 lg:py-40"
      aria-labelledby="certifications-heading"
    >
      <Container>
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[25%_75%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
              07
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
              Certifications
            </p>

            <h2
              id="certifications-heading"
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
              Continuous learning,{" "}
              <span className="text-gold">formally recognized.</span>
            </h2>
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <motion.a
                key={certification.title}
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certification.title} credential on Credly`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="
                  group
                  border
                  border-[var(--color-border)]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[var(--color-gold)]
                "
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                      {certification.provider}
                    </p>

                    <h3 className="mt-4 text-2xl text-heading md:text-3xl">
                      {certification.title}
                    </h3>
                  </div>

                  <Icon
                    size={28}
                    strokeWidth={1.4}
                    className="
                      shrink-0
                      text-[var(--color-gold)]
                      transition-transform
                      duration-500
                      group-hover:rotate-6
                    "
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-8 h-px w-full bg-[var(--color-border)]" />

                <p className="mt-6 max-w-lg text-sm leading-7 text-body">
                  {certification.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
