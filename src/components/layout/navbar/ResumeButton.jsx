function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download="Piyush-Singh-Sengar-Resume.pdf"
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-[var(--color-charcoal)]
        bg-[var(--color-charcoal)]
        px-6
        py-2.5
        text-xs
        font-medium
        tracking-wide
        text-white
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[var(--color-gold)]
        hover:bg-[var(--color-gold)]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[var(--color-gold)]
      "
    >
      Resume
    </a>
  );
}

export default ResumeButton;