import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/footer";
import { Login } from "./components/LogIn/Login";
import SignUp from "./components/LogIn/SignUp";

const App = () => {
  return (
    <>
      <NavBar />
      <Login />
      <SignUp />
      <Footer />
    </>
  );
};

export default App;
