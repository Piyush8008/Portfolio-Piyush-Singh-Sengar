import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import skills from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 lg:py-40"
      aria-labelledby="skills-heading"
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
              03
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
              Technical Skills
            </p>

            <h2
              id="skills-heading"
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
              Tools and technologies I use to{" "}
              <span className="text-gold">build.</span>
            </h2>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 origin-left border-t border-[var(--color-border)]"
        />

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
              }}
              className="group"
            >
              <div className="mb-6 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <h3 className="text-xl text-heading">
                  {group.category}
                </h3>

                <span className="font-mono text-[10px] tracking-widest text-body">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-body
                      transition-all
                      duration-300
                      group-hover:text-[var(--color-charcoal)]
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[var(--color-gold)]
                        transition-transform
                        duration-300
                        group-hover:scale-150
                      "
                      aria-hidden="true"
                    />

                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Closing Detail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex items-center gap-4"
        >
          <span className="h-px w-16 bg-[var(--color-gold)]" />

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-body">
            Always learning. Always building.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;