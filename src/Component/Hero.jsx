import squers from "../assets/squers.png";
import circle from "../assets/Circle.png";
import profileImage from "../assets/profile-image.png";
import bgRadial from "../assets/bg.png";
import { jsPDF } from "jspdf";

const Hero = ({ isDarkMode }) => {
  
  return (
    <div>
      <div
        id="hero"
        className="container mx-auto pt-24 w-full p-5 flex flex-col sm:flex-row items-center justify-between space-y-6"
      >
        <div
          className={`basis-1/2 flex flex-col justify-center items-center h-full space-y-6`}
          // style={{
          //   backgroundImage: `url(${bgRadial})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   height: "100%",
          // }}
        >
          <figure className="absolute  md:top-44 top-left-3  md:w-96 md:h-96 w-52 h-52  rounded-full bg-sky-600 opacity-20 blur-3xl" />
          <div className="text-center sm:text-start relative z-10">
            <div className={`${isDarkMode ? "text-white" : "text-black"} `}>
              <h1 className=" leading-tight text-4xl mb-4 ">
                HEY!
                <span className=" font-bold">
                  I’m Merna, Frontend Developer
                </span>
              </h1>
              <p className="text-[#7f90c3] text-lg mb-10">
              Turning ideas into interactive designs.
              </p>
            </div>

             <a
  href="/Merna Resume.pdf"
  download="Merna_Resume.pdf"
  className={` text-center ${
    isDarkMode ? "bg-[#7DE0EA] text-white" : "bg-black text-white"
  } px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 font-bold cursor-pointer`}
>
  Download Resume
</a>

            {/* <button
       
             
            >
              Download CV
            </button> */}
          </div>
        </div>

        <div className="relative basis-1/2 md:basis-1/3  h-[500px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${squers})` }}
          ></div>

          {/* <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain scale-90"
            style={{ backgroundImage: `url(${circle})` }}
          ></div> */}

        <img
            src={profileImage}
            alt="Profile"
            className="relative z-10 w-64 pt-4 object-cover rounded-full"
          />
        </div>
      </div>
      <img src="/src/assets/bar.png" className="scale-150   pt-9 " />
    </div>
  );
};

export default Hero;
