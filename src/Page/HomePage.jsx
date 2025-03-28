import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import LayOut1 from "./LayOut1";
import Footer from "../Component/Footer";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <NavBar isDarkMode={isDarkMode} changeTheme={setIsDarkMode} />
      <LayOut1 isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;
