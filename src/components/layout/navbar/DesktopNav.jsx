import Logo from "./Logo";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";

function DesktopNav({
  navigation,
  activeSection,
}) {
  return (
    <div className="hidden lg:flex w-full items-center justify-between gap-8">
      {/* Left */}
      <Logo />

      {/* Center */}
      <nav
        aria-label="Primary Navigation"
        className="flex items-center gap-8"
      >
        {navigation
          .filter((item) => item.primary)
          .map((item) => (
            <NavItem
              key={item.id}
              id={item.id}
              label={item.label}
              active={activeSection === item.id}
            />
          ))}
      </nav>

      {/* Right */}
      <div className="flex items-center gap-4">
        <ResumeButton />
      </div>
    </div>
  );
}

export default DesktopNav;