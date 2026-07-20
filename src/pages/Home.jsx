/*import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Certifications from "../sections/Certifications";
import Github from "../sections/Github";
import Contact from "../sections/Contact";

function Home() {

    return(

        <main>

            <Hero/>

            <About/>

            <Skills/>

            <Experience/>

            <Projects/>

            <Education/>

            <Certifications/>

            <Github/>

            <Contact/>

        </main>

    )

}

export default Home; */

function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex min-h-screen items-center justify-center"
      >
        <h1
          className="text-6xl font-bold"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-charcoal)",
          }}
        >
          PIYUSH SINGH SENGAR
        </h1>
      </section>

      <section
        id="about"
        className="min-h-screen"
      />

      <section
        id="skills"
        className="min-h-screen"
      />

      <section
        id="experience"
        className="min-h-screen"
      />

      <section
        id="projects"
        className="min-h-screen"
      />

      <section
        id="education"
        className="min-h-screen"
      />

      <section
        id="certifications"
        className="min-h-screen"
      />

      <section
        id="github"
        className="min-h-screen"
      />

      <section
        id="contact"
        className="min-h-screen"
      />
    </main>
  );
}

export default Home;