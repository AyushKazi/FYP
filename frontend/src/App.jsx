import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/footer";
import { Login } from "./components/LogIn/Login";

const App = () => {
  return (
    <>
      <NavBar />
      <Login />
      <Footer />
    </>
  );
};

export default App;
