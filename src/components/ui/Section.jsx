import clsx from "clsx";
import Container from "./Container";

function Section({
  id,
  children,
  className = "",
  background = "background",
}) {
  return (
    <section
      id={id}
      className={clsx(
        "py-32",
        background === "surface"
          ? "bg-surface"
          : "bg-background",
        className
      )}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;