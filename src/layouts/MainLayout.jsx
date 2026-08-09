import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/layout/navbar/Navbar";
import PixelLoader from "../components/layout/loader/PixelLoader";

import useLenis from "../hooks/useLenis";

function MainLayout() {
  useLenis();

  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>
          Piyush Singh Sengar | Full Stack Developer & AI Enthusiast
        </title>

        <meta
          name="description"
          content="Portfolio of Piyush Singh Sengar — Computer Science graduate specializing in AI/ML, React Native, REST APIs and modern application development."
        />

        <meta
          name="author"
          content="Piyush Singh Sengar"
        />

        <meta
          name="keywords"
          content="Piyush Singh Sengar, Full Stack Developer, React Native Developer, AI ML, React, JavaScript, Python, Portfolio"
        />

        <meta
          property="og:title"
          content="Piyush Singh Sengar | Full Stack Developer & AI Enthusiast"
        />

        <meta
          property="og:description"
          content="Portfolio of Piyush Singh Sengar — Full Stack Developer and AI enthusiast."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Piyush Singh Sengar | Full Stack Developer & AI Enthusiast"
        />

        <meta
          name="twitter:description"
          content="Full Stack Developer and AI enthusiast building modern web, mobile and AI-powered applications."
        />
      </Helmet>

      <PixelLoader />

      <Navbar />

      <Outlet />
    </>
  );
}

export default MainLayout;