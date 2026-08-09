import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import education from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-32 lg:py-40"
      aria-labelledby="education-heading"
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
              06
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
              Education
            </p>

            <h2
              id="education-heading"
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
              Learning that continues{" "}
              <span className="text-gold">beyond the classroom.</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          {education.map((item, index) => (
            <motion.article
              key={`${item.degree}-${item.institution}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
                grid
                grid-cols-1
                gap-8
                border-t
                border-[var(--color-border)]
                py-12
                lg:grid-cols-[25%_75%]
                lg:py-16
              "
            >
              {/* Period */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  {item.period}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[55%_45%]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-body">
                    {item.institution}
                  </p>

                  <h3 className="mt-3 text-3xl leading-tight text-heading md:text-4xl">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg text-gold">
                    {item.field}
                  </p>
                </div>

                <p className="text-sm leading-7 text-body">
                  {item.detail}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;