import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import Container from "../components/ui/Container";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-32 lg:py-40"
      aria-labelledby="projects-heading"
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
              05
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
              Selected Work
            </p>

            <h2
              id="projects-heading"
              className="
                max-w-5xl
                text-4xl
                leading-[1.05]
                tracking-[-0.04em]
                text-heading
                md:text-5xl
                xl:text-6xl
              "
            >
              A selection of products I have{" "}
              <span className="text-gold">designed and built.</span>
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

        {/* Projects */}
        <div className="mt-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
                grid
                grid-cols-1
                gap-10
                border-b
                border-[var(--color-border)]
                py-16
                lg:grid-cols-[25%_75%]
                lg:py-20
              "
            >
              {/* Project Meta */}
              <div>
                <span className="font-mono text-xs tracking-[0.3em] text-gold">
                  {project.number}
                </span>

                <p className="mt-4 max-w-[180px] text-xs uppercase leading-6 tracking-[0.18em] text-body">
                  {project.category}
                </p>
              </div>

              {/* Project Content */}
              <div>
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-4xl leading-tight text-heading md:text-5xl">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="
                      group
                      inline-flex
                      shrink-0
                      items-center
                      gap-2
                      text-sm
                      text-[var(--color-charcoal)]
                      transition-colors
                      duration-300
                      hover:text-[var(--color-gold)]
                    "
                  >
                    GitHub

                    <FiArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </div>

                {/* Overview */}
                <p className="mt-8 max-w-3xl text-lg leading-8 text-body">
                  {project.overview}
                </p>

                {/* Details */}
                <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
                  {/* Problem */}
                  <div>
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                      Problem Solved
                    </p>

                    <p className="text-sm leading-7 text-body">
                      {project.problem}
                    </p>
                  </div>

                  {/* Architecture */}
                  <div>
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                      Architecture
                    </p>

                    <p className="text-sm leading-7 text-body">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                {/* Features + Technologies */}
                <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div>
                    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                      Key Features
                    </p>

                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-6 text-body"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
                            aria-hidden="true"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-body">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {project.technologies.map((technology) => (
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
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;