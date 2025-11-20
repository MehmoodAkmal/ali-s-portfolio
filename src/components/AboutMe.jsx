import React from "react";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="w-full md:w-[80%] lg:w-[90%] py-15 flex flex-col md:flex-row items-center justify-between gap-5 px-10 pt-20 mx-auto"
    >
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <h1 className="text-3xl font-semibold text-slate-50 font-ubuntu">
          About Me
        </h1>
        <p className="text-slate-200 font-poppins text-[12px] md:text-[18px]">
          I’m <strong>Muhammad Ali Tahir,</strong> a Flutter Developer focused
          on building fast, scalable, and visually polished mobile applications
          for Android and iOS. I specialize in API-driven architectures,
          real-time features, and efficient state management while keeping UI/UX
          performance at the core. With experience across AI-powered apps,
          e-commerce, medical platforms, social/dating systems, and
          live-streaming solutions, my goal is to grow as a future-ready Flutter
          engineer and create meaningful digital products that blend modern
          mobile development with emerging AI technologies.
        </p>
        <a
          href="/Ali_res_flutter.pdf"
          download
          className="text-slate-50 w-[180px] text-center hover:bg-[#5fb682]/30 transition duration-300 font-semibold px-3 py-2 border border-[#5fb682]"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <img
          src="/myImage.jpg"
          className="w-56 rounded-xl shadow-[0_0_10px_#5fb682]/50 hover:shadow-[0_0_15px_#5fb682] transition duration-300"
        />
      </div>
    </div>
  );
};

export default AboutMe;
