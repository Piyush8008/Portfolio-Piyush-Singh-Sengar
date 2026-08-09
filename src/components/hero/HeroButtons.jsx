import { FiArrowRight, FiDownload } from "react-icons/fi";

const HeroButtons = () => {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-5">
      <a
        href="/resume.pdf"
        download
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-white/10
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
          hover:bg-[#2A2A2A]
          hover:shadow-xl
        "
      >
        <FiDownload size={18} />
        Download Resume
      </a>

      <a
        href="#contact"
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[var(--color-border)]
          px-8
          py-4
          text-sm
          font-medium
          text-[var(--color-charcoal)]
          transition-all
          duration-300
          hover:border-[var(--color-gold)]
          hover:bg-[rgba(200,169,106,0.08)]
          hover:text-[var(--color-gold)]
        "
      >
        Let's Talk
        <FiArrowRight size={18} />
      </a>
    </div>
  );
};

export default HeroButtons;