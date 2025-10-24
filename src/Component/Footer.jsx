import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1B2431] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto p-5">
        <hr className="text-gray" />
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 ">
          <p className="text-xs tracking-wide">© 2025. All Rights Reserved</p>
          <p className="text-xs tracking-wide">Development by Merna</p>

          <div className="flex items-center gap-2 mt-2 md:mt-0">
           <a href="https://www.facebook.com/share/192XgVXPnw/" target="_blank"> <FaFacebookF className="text-white p-1 rounded-full bg-mainColor" /></a>  
           {/* <a> <FaTwitter className="text-white p-1 rounded-full bg-mainColor" /></a> */}
           <a href="https://www.linkedin.com/in/merna-hallak-a633a636a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">  <LiaLinkedinIn className="text-white p-1 rounded-full bg-mainColor" /></a>
           <a href="https://www.instagram.com/merna_hallak?igsh=cHNzNzdwb2t0a2Fy" target="_blank"> <FaInstagram className="text-white p-1 rounded-full bg-mainColor" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
