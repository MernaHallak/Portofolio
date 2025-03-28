import frame from "../assets/frame.png";
import { FaArrowUpLong } from "react-icons/fa6";
import bgTryMe from "../assets/bg-tryMe.png";
import { Link } from "react-scroll";

const Experience = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="education"
      className=" container mx-auto p-5 pt-20 space-y-6 mb-16"
    >
      <div className=" pt-10">
        <h3 className="text-center text-mainColor font-semibold mb-2">
          Education and Experience
        </h3>
        <h1 className="text-center text-4xl font-semibold mb-10">
          Education & Experience
        </h1>
        {/* content */}
        <div className=" flex justify-between sm:flex-row flex-col gap-9 pt-10">
          <div className="flex basis-[45%]">
            <img src={frame} alt="" className="mr-5 " />
            <div className="flex flex-col gap-14 ">
              <div className="mb-4 ">
                <h1 className="text-lg font-bold">
                  {" "}
                  Computer Engineering Student - 5th Year
                </h1>
                <p>
                  Currently in my fifth year of Computer Engineering with a
                  specialization in Software Systems. Possess strong
                  fundamentals in algorithms and data structures. Passionate
                  about developing innovative software solutions that meet user
                  needs.
                </p>
              </div>
              <div className="mb-4 ">
                <h1 className="text-lg font-bold">
                  {" "}
                  Advanced Next.js Developer
                </h1>
                <p>
                  Build modern web applications using Next.js with focus on high
                  performance and excellent user experience. Have personal
                  projects and live demos utilizing advanced features like ISR
                  and SSR. Continuously follow the latest updates in the Next.js
                  ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div div className="flex basis-[45%] ">
            <img src={frame} alt="" className="mr-5 " />
            <div className="flex flex-col gap-14 ">
              <div className="mb-4">
                <h1 className="text-lg font-bold">
                  {" "}
                  React Developer (Professional Experience at VICA)
                </h1>
                <p>
                  i trained as a Front-End Developer at VICA using React.js for
                  3 months. Contributed to developing user interfaces for
                  project management applications.
                </p>
              </div>
              <div className="mb-4">
                <h1 className="text-lg font-bold">
                  Front-End Development Freelancer
                </h1>
                <p>
                  Providing interactive UI development services as a freelancer
                  . Work with clients across various sectors to transform
                  designs into efficient code. Committed to delivering
                  responsive and user-friendly solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-right">
        <button
          onClick={scrollToTop}
          className="bg-mainColor p-2 text-white rounded-md"
        >
          <FaArrowUpLong />
        </button>
      </div>

      <div
        className="w-full md:w-[70%] mx-auto px-4 md:px-16 lg:px-20 py-8 rounded-xl text-white"
        style={{
          backgroundImage: `url(${bgTryMe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Try me out, risk free!
            </h1>
            <p className="text-sm md:text-base">
              If you're not happy with the design after the first draft, I'll
              refund your deposit,
              <span className="font-bold">no questions asked</span>
            </p>
          </div>
          <div className="w-full md:w-auto md:ml-auto mt-4 md:mt-0">
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-[#7DE0EA] text-white px-6 py-3 rounded-lg text-sm md:text-base w-full md:w-auto">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
