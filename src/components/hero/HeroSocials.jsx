const HeroSocials = () => {
  return (
    <div className="mt-12 flex items-center text-sm text-[var(--color-charcoal)]">
      <a
        href="#"
        className="transition-colors duration-300 hover:text-[var(--color-gold)]"
      >
        GitHub
      </a>

      <span className="mx-5 text-[var(--color-border)]">—</span>

      <a
        href="#"
        className="transition-colors duration-300 hover:text-[var(--color-gold)]"
      >
        LinkedIn
      </a>

      <span className="mx-5 text-[var(--color-border)]">—</span>

      <a
        href="#"
        className="transition-colors duration-300 hover:text-[var(--color-gold)]"
      >
        Email
      </a>
    </div>
  );
};

export default HeroSocials;