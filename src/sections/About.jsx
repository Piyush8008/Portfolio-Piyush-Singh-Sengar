import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import Container from "../components/ui/Container";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 lg:py-40"
      aria-labelledby="about-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[25%_75%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
              02
            </span>

            <div className="mt-5 h-px w-20 bg-[var(--color-gold)] opacity-70" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              About Me
            </p>

            <h2
              id="about-heading"
              className="
                max-w-5xl
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-heading
                md:text-5xl
                xl:text-6xl
              "
            >
              Building thoughtful digital experiences through{" "}
              <span className="text-gold">technology</span>,{" "}
              <span className="text-gold">curiosity</span> and{" "}
              <span className="text-gold">craft.</span>
            </h2>
          </motion.div>
        </div>

        {/* Editorial Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 origin-left border-t border-[var(--color-border)]"
        />

        {/* About Content */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[25%_50%_25%]">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Profile
            </p>
          </motion.div>

          {/* Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="space-y-6 text-lg leading-8 text-body"
          >
            <p>
              I am a Full Stack Developer and AI enthusiast focused on
              building scalable, practical and user-centered digital
              experiences.
            </p>

            <p>
              My work spans modern web development, React and React Native
              applications, backend systems, API integration and AI-powered
              solutions. I enjoy turning complex problems into clean,
              maintainable and intuitive products.
            </p>

            <p>
              I care about more than simply making software work. I focus on
              architecture, performance, usability and the small details that
              make a product feel considered.
            </p>

            <p>
              I am continuously learning, experimenting with new technologies
              and strengthening my ability to solve problems from both
              engineering and product perspectives.
            </p>
          </motion.div>

          {/* Focus */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="lg:pl-8"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Focus
            </p>

            <ul className="space-y-4">
              {[
                "Modern Web Development",
                "React & React Native",
                "Backend Development",
                "AI / ML Applications",
                "Problem Solving",
                "Continuous Learning",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-[var(--color-border)]
                    pb-3
                    text-sm
                    text-[var(--color-charcoal)]
                  "
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"
                    aria-hidden="true"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-20 flex flex-col justify-between gap-8 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-2xl font-serif text-2xl leading-relaxed text-[var(--color-charcoal)] md:text-3xl">
            "Good software solves a problem. Great software makes the solution
            feel effortless."
          </p>

          <a
            href="#skills"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              text-sm
              font-medium
              text-[var(--color-charcoal)]
              transition-colors
              duration-300
              hover:text-[var(--color-gold)]
            "
          >
            Explore my skills

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;