import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/navbar/Navbar";
import PixelLoader from "../components/layout/loader/PixelLoader";

import useLenis from "../hooks/useLenis";

function MainLayout() {
  useLenis();

  return (
    <>
      <PixelLoader />

      <Navbar />

      <Outlet />
    </>
  );
}

export default MainLayout;