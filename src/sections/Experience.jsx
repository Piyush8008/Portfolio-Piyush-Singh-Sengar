import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import experience from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32 lg:py-40"
      aria-labelledby="experience-heading"
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
              04
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
              Experience
            </p>

            <h2
              id="experience-heading"
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
              Experience shaped by{" "}
              <span className="text-gold">building real products.</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="relative grid grid-cols-1 gap-10 border-t border-[var(--color-border)] py-12 lg:grid-cols-[25%_75%]"
            >
              {/* Timeline Meta */}
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-body">
                  {item.period}
                </p>

                <p className="mt-3 text-sm text-body">
                  {item.location}
                </p>
              </div>

              {/* Experience */}
              <div className="grid grid-cols-1 gap-10 xl:grid-cols-[55%_45%]">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold">
                    {item.company}
                  </p>

                  <h3 className="text-3xl leading-tight text-heading md:text-4xl">
                    {item.role}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-body">
                    {item.description}
                  </p>

                  <div className="mt-8">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-sm text-[var(--color-charcoal)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                    Responsibilities
                  </p>

                  <ul className="space-y-4">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-7 text-body"
                      >
                        <span
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
                          aria-hidden="true"
                        />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;