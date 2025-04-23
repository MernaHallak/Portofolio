import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto p-5 pt-20">
      <p className="text-mainColor pb-2">Contact</p>
      <h1 className="text-4xl font-semibold whitespace-nowrap">
        Let’s Discuss Your <span className="text-mainColor">Project</span>
      </h1>
      <div className="flex justify-between sm:flex-row flex-col gap-9 py-16">
        <div className="basis-1/4 sm:space-y-16 space-y-9 ">
          <div className="flex items-center gap-3">
            <IoCallOutline
              size={40}
              color="#7DE0EA"
              className="p-2  text-white bg-mainColor rounded"
            />
            <div>
              <p>Call me</p>
              <p>+96396900000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMailOutline
              size={40}
              color="#7DE0EA"
              className="p-2 bg-mainColor text-white rounded "
            />
            <div>
              <p>Address</p>
              <p>Damascus,syria</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CiLocationOn
              size={40}
              color="#7DE0EA"
              className="p-2 bg-mainColor text-white rounded"
            />
            <div>
              <p>Address</p>
              <p>Damascus,syria</p>
            </div>
          </div>
        </div>
        <form className="basis-2/4 space-y-6">
          <div className="flex sm:flex-row flex-col gap-1 gap-y-6">
            <input
              type="text"
              placeholder="Full name"
              className=" sm:basis-2/5 w-full border border-gray rounded-lg p-2 outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              className="sm:basis-2/5 w-full ml-auto border border-gray rounded-lg p-2 outline-none"
            />
          </div>
          <input
            type="number"
            placeholder="Phone number"
            className="w-full border border-gray rounded-lg p-2 outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full resize-none border border-gray rounded-lg p-2 outline-none"
            rows={5}
          ></textarea>
          <button className="rounded-lg bg-mainColor py-3 px-8 text-white ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
