import React from "react";
import imageAbout from "../assets/about.png";
const About = ({ skills }) => {
  return (
    <div
      id="about"
      className="container p-5 pt-20 mx-auto flex flex-col sm:flex-row  justify-between items-center"
    >
      <div className="basis-1/3 flex items-start">
        <img  src={imageAbout} alt="" />
      </div>
      <div className="basis-1/2 space-y-5 text-center sm:text-start">
        <h1 className="text-4xl font-semibold">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        {skills.map((ele, index) => {
          return (
            <div className="w-full" key={index}>
              <div>
                <label className="text-2xl font-semibold ">{ele.name}</label>
              </div>
              <progress
                className="progress w-full appearance-none bg-gray-200 rounded-lg"
                value={ele.rate}
                max={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
