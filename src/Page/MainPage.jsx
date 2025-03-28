import React from "react";
import LayOut1 from "./LayOut1";
import NavBar from "../Component/NavBar";
import { createContext, useState } from "react";
import Footer from "../Component/Footer";
const MainPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <NavBar isDarkMode={isDarkMode} changeTheme={setIsDarkMode} />
      <LayOut1 isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default MainPage;
