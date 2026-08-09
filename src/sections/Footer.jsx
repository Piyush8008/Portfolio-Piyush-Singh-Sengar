import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import personal from "../data/personal";
import socialLinks from "../constants/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 xl:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-[var(--color-charcoal)]">
              {personal.name}
            </p>

            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-body">
              {personal.tagline}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-charcoal)] transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              <FiGithub size={18} />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-charcoal)] transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              <FiLinkedin size={18} />
            </a>

            <a
              href={socialLinks.email}
              aria-label="Email"
              className="text-[var(--color-charcoal)] transition-colors duration-300 hover:text-[var(--color-gold)]"
            >
              <FiMail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="
              group
              inline-flex
              items-center
              gap-2
              self-start
              font-mono
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-body
              transition-colors
              duration-300
              hover:text-[var(--color-gold)]
              md:self-auto
            "
          >
            Back to top

            <FiArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-xs text-body">
            © {currentYear} {personal.name}. Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;