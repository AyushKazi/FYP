import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import NavBar from "../components/NavBar/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
