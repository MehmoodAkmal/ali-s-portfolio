import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="w-full  md:w-[80%] lg:w-[90%] px-10 md:px-0 mx-auto flex flex-col md:flex-row items-center justify-between py-15 gap-5"
    >
      <div className="w-full md:w-2/3 md:px-10 px-0">
        <h1 className="text-slate-50 text-3xl font-semibold font-ubuntu">
          Contact Me
        </h1>
        <p className="text-slate-200 text-[12px] md:text-[18px] font-poppins mt-5 ">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me.
        </p>
      </div>
      <div className="w-full md:w-1/3">
        <div className="border border-[#5fb682] p-3">
          <h1 className="flex items-center text-slate-50 gap-3">
            <span>
              <FaLinkedin className="text-[#5fb682]" />
            </span>
            Muhammad-ali-tahir
          </h1>
          <h1 className="flex items-center text-slate-50 gap-3">
            <span>
              <IoMail className="text-[#5fb682]" />
            </span>
            alee155abbas@gmail.com
          </h1>
          <h1 className="flex items-center text-slate-50 gap-3">
            <span>
              <FaSquareWhatsapp className="text-[#5fb682]" />
            </span>
            +92 337 7452385
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
