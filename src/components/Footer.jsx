import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full flex items-center min-h-40 justify-center border-t px-10 md:p-0 border-slate-200 py-20">
      <div className="w-full md:w-[80%] lg:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="w-full md:w-2/3 px-0 md:px-10">
          <h1 className="text-slate-50 font-semibold">Muhammad Ali Tahir</h1>
          <p className="text-[14px] text-slate-50 mt-2">
            Flutter Developer & Software Engineer.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center gap-3">
          <h1 className="text-slate-50 font-semibold">Media</h1>
          <div className="flex items-center gap-5">
            <a href="https://github.com/alee155 ">
              <BsGithub className="text-[#5fb682] text-xl" target="_blanck" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ali-tahir-846948294/"
              target="_blanck"
            >
              <BsLinkedin className="text-[#5fb682] text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
