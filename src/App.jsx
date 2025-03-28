import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import ProjectPage from "./Page/ProjectPage";
import HomePage from "./Page/HomePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //  const Image=createContext()
  // const img=[ImageProject,ImageProject,ImageProject,ImageProject,ImageProject,ImageProject]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/project/:id" element={<ProjectPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
