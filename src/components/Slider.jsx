import React, { useState, useEffect } from "react";
import { skills } from "../utils";

const SkillSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // const nextSlide = () => setActive((prev) => (prev + 1) % skills.length);
  // const prevSlide = () =>
  //   setActive((prev) => (prev - 1 + skills.length) % skills.length);

  return (
    <div
      id="skills"
      className="w-full h-screen bg-[#070d12] flex flex-col items-center justify-center gap-10 overflow-hidden pt-2"
    >
      {/* Section Heading */}
      <div className="text-center h-[30%] w-full flex flex-col items-center justify-center gap-3">
        <p className="text-[#5fb682] text-sm tracking-widest uppercase">
          Core Competencies
        </p>
        <h1 className="text-3xl text-white font-bold">Tech Stack Overview</h1>
        <p className="text-gray-400 text-sm">
          These are the frameworks, tools, and technologies I actively use to
          deliver reliable and scalable solutions.
        </p>
      </div>

      {/* Slider */}
      <div className="flex items-start justify-center w-full relative h-[70%]">
        {/* Left Arrow */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl text-white bg-black/50 rounded-full shadow-lg hover:bg-black/70 transition-all duration-300 z-[2000]"
        >
          ‹
        </button> */}

        {/* Cards Container */}
        <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center [perspective:1000px]">
          {skills.map((item, index) => {
            const left2 = (active - 2 + skills.length) % skills.length;
            const left1 = (active - 1 + skills.length) % skills.length;
            const right1 = (active + 1) % skills.length;
            const right2 = (active + 2) % skills.length;

            let transform = "scale(0)";
            let zIndex = 0;
            let opacity = 0;
            let height = "300px";

            if (index === active) {
              transform = "translateX(0) rotateY(0deg) scale(1.3)";
              zIndex = 5;
              opacity = 1;
              height = "400px";
            } else if (index === left1) {
              transform = "translateX(-360px) rotateY(-25deg) scale(1.05)";
              zIndex = 4;
              opacity = 0.9;
              height = "360px";
            } else if (index === right1) {
              transform = "translateX(360px) rotateY(25deg) scale(1.05)";
              zIndex = 4;
              opacity = 0.9;
              height = "360px";
            } else if (index === left2) {
              transform = "translateX(-600px) rotateY(-25deg) scale(0.9)";
              zIndex = 3;
              opacity = 0.5;
              height = "320px";
            } else if (index === right2) {
              transform = "translateX(600px) rotateY(25deg) scale(0.9)";
              zIndex = 3;
              opacity = 0.5;
              height = "320px";
            }

            return (
              <div
                key={index}
                className="absolute w-[300px] bg-[#1e293b] rounded-xl p-6 flex flex-col items-center justify-center shadow-lg transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  height,
                }}
              >
                <img src={item.logo} alt={item.name} className="w-24 mb-3" />
                <h3 className="font-semibold text-xl text-white text-center">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-400 text-center mt-3">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl text-white bg-black/50 rounded-full shadow-lg hover:bg-black/70 transition-all duration-300 z-[2000]"
        >
          ›
        </button> */}
      </div>
    </div>
  );
};

export default SkillSlider;
