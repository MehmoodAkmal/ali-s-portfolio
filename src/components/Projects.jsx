import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { projectList } from "../utils";
import { WiDirectionUpRight } from "react-icons/wi";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative w-full bg-[#070d12] flex flex-col items-center py-20 justify-center gap-12 px-4 overflow-hidden"
    >
      {/* Radial Background */}
      <div className="absolute h-[1100px] w-[1100px] bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.15),transparent_70%)] rounded-full -left-60 sm:-left-180 z-0"></div>

      {/* Section Heading */}
      <div className="flex flex-col gap-2 relative z-10 max-w-2xl text-center">
        <p className="uppercase font-semibold text-[12px] tracking-wider bg-gradient-to-r from-[#55ffad] to-[#006b49] bg-clip-text text-transparent">
          Exceptional work delivered
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-ubuntu">
          Exceptional Work Delivered
        </h1>
        <p className="text-gray-300 text-sm sm:text-base font-poppins">
          Projects that reflect my commitment to quality, performance, and
          user-centered development.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-5 w-full px-8 md:px-15 relative z-10">
        {projectList.map((item, index) => (
          <div
            key={index}
            className={`w-full rounded-xl 
              ${
                index % 2 === 0
                  ? "bg-gradient-to-br hover:bg-gradient-to-bl from-[#344646] via-[#3e5248] to-[#455b42]"
                  : "bg-gradient-to-br hover:bg-gradient-to-bl from-[#3e5248] via-[#3e5248] to-[#2b5268]"
              }
              flex flex-col lg:flex-row items-center justify-between gap-6 p-6 h-auto md:h-[600px] lg:h-[350px] w-full transition duration-300 cursor-pointer`}
          >
            {/* Text Content */}
            <div className="w-full h-full lg:w-1/2 flex flex-col justify-start gap-3">
              <h1 className="text-xl sm:text-2xl text-white border-b border-[#55ffad] truncate">
                {item.name}
              </h1>
              <div className="text-sm text-white text-justify line-clamp-10">
                <p>{item.text}</p>
              </div>
              <div className="w-full flex items-center ">
                <a
                  href={item.href}
                  target="blanck"
                  className="flex font-semibold text-center items-center text-white justify-center gap-2 bg-neutral-50/20 border border-neutral-50/30 shadow-[0px_0px_5px_gray] hover:scale-105 rounded-lg px-3 py-1 cursor-pointer"
                >
                  <span>View Project</span>{" "}
                  <span>
                    <WiDirectionUpRight className="text-3xl mt-1" />
                  </span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full flex items-center justify-center lg:w-1/2">
              <img
                src={item.image}
                alt={item.heading}
                className="rounded-xl transition-transform duration-300 w-[80%]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
