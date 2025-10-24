import { useContext, useState } from "react";
import { FaMoon } from "react-icons/fa";
// import { Link } from "react-scroll";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from "./ThemeContext";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const NavBar = ({ isDarkMode, changeTheme }) => {
  // const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Hero", "About", "Education", "Projects", "Contact"];
  return (
    <header
      className={`fixed z-50  top-0 left-0 w-full  ${
        isDarkMode ? "bg-[#1B2431] text-white" : "bg-white text-black"
      } `}
    >
      <div
        className={`  container mx-auto w-full p-5 flex justify-between items-center font-poppins 
        `}
      >
        <div className="relative flex items-center gap-3 ">
        
            {isOpen ? (
              <IoClose
                className="md:hidden cursor-pointer"
                size={30}
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <FaBars
                className="md:hidden cursor-pointer"
                size={20}
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
         

          {isOpen && (
            <div className="absolute z-10 top-10 left-5 bg-mainColor p-2 rounded-lg shadow-lg">
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index} className="transition-all  list-none">
                    <ScrollLink
                      to={link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="p-2 hover:bg-sky-500 hover:text-white rounded-lg cursor-pointer"
                      activeClass="text-white"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/">
            <h1 className="text-2xl font-semibold cursor-pointer">Merna</h1>
          </Link>
        </div>
        <ul className="md:flex gap-x-3 items-center hidden">
          {links.map((link, index) => {
            return (
              <ScrollLink
                key={index}
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-mainColor transition-all"
                activeClass="text-mainColor "
              >
                {link}
              </ScrollLink>
            );
          })}
        </ul>
        {/* {isDarkMode ? (
        <IoIosSunny size={30} className="text-white" onClick={toggleTheme} />
      ) : (
        <FaMoon onClick={toggleTheme} />
      )} */}
        {isDarkMode ? (
          <IoIosSunny
            size={30}
            className="text-white cursor-pointer"
            onClick={() => changeTheme((prev) => !prev)}
          />
        ) : (
          <FaMoon
            size={30}
            className="cursor-pointer"
            onClick={() => changeTheme((prev) => !prev)}
          />
        )}
      </div>
    </header>
  );
};

export default NavBar;
