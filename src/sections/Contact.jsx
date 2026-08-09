import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import Container from "../components/ui/Container";
import personal from "../data/personal";
import socialLinks from "../constants/socialLinks";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: socialLinks.email,
    icon: FiMail,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: socialLinks.phone,
    icon: FiPhone,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: socialLinks.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: socialLinks.github,
    icon: FiGithub,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40"
      aria-labelledby="contact-heading"
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
              09
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
              Contact
            </p>

            <h2
              id="contact-heading"
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
              Have an idea worth{" "}
              <span className="text-gold">building?</span>
            </h2>
          </motion.div>
        </div>

        {/* Contact Content */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-[45%_55%]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-xl text-lg leading-8 text-body">
              Whether you're building a product, solving a technical problem,
              or exploring an idea, I'd be happy to hear from you.
            </p>

            <div className="mt-12 border-t border-[var(--color-border)]">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[var(--color-border)]
                      py-5
                      transition-colors
                      duration-300
                      hover:text-[var(--color-gold)]
                    "
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />

                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-body">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm text-[var(--color-charcoal)]">
                          {item.value}
                        </p>
                      </div>
                    </div>

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
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-body">
              <FiMapPin size={16} className="text-gold" />

              {personal.location}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            action={socialLinks.email}
            method="GET"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <label>
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.25em] text-body">
                  Name
                </span>

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="
                    w-full
                    border-b
                    border-[var(--color-border)]
                    bg-transparent
                    py-3
                    text-sm
                    text-[var(--color-charcoal)]
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#999]
                    focus:border-[var(--color-gold)]
                  "
                />
              </label>

              <label>
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.25em] text-body">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="
                    w-full
                    border-b
                    border-[var(--color-border)]
                    bg-transparent
                    py-3
                    text-sm
                    text-[var(--color-charcoal)]
                    outline-none
                    transition-colors
                    duration-300
                    placeholder:text-[#999]
                    focus:border-[var(--color-gold)]
                  "
                />
              </label>
            </div>

            <label>
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.25em] text-body">
                Subject
              </span>

              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                className="
                  w-full
                  border-b
                  border-[var(--color-border)]
                  bg-transparent
                  py-3
                  text-sm
                  text-[var(--color-charcoal)]
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-[#999]
                  focus:border-[var(--color-gold)]
                "
              />
            </label>

            <label>
              <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.25em] text-body">
                Message
              </span>

              <textarea
                name="body"
                rows="5"
                required
                placeholder="Tell me a little about your idea..."
                className="
                  w-full
                  resize-none
                  border-b
                  border-[var(--color-border)]
                  bg-transparent
                  py-3
                  text-sm
                  text-[var(--color-charcoal)]
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-[#999]
                  focus:border-[var(--color-gold)]
                "
              />
            </label>

            <button
              type="submit"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[var(--color-charcoal)]
                px-8
                py-4
                text-sm
                font-medium
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#292929]
                hover:shadow-xl
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[var(--color-gold)]
              "
            >
              Send Message

              <FiArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;