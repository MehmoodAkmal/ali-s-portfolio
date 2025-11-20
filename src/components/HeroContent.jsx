import React from "react";

const HeroContent = () => {
  return (
    <div className="absolute z-100 h-full w-full md:w-[80%] lg:w-[500px] flex flex-col items-center justify-center p-4 md:p-6 gap-3 -top-5 md:-top-10">
      <div className="relative">
        <div className="w-5 h-5 rounded-full bg-green-500 absolute bottom-2 right-7"></div>
        <img
          src="/bitmoji.png"
          className="rounded-full h-[150px] object-bl z-10"
        />
      </div>
      <h1 className="text-white font-bold font-ubuntu text-xl md:text-2xl lg:text-3xl text-center capitalize">
        Building Modern Mobile Applications with Precision.
      </h1>
      <p className="text-[12px] md:text-[18px] text-gray-400 text-center font-poppins z-50">
        I develop Android and iOS mobile applications using Flutter with clean,
        stable and modern code. I build smooth, high-performance apps with
        trending UI design, better user experiences, and scalable architecture.
        I have worked on company products, client projects and freelance
        applications — including E-commerce, Medical apps, Real-time Chatting &
        Calling apps, and modern AI-powered mobile solutions. I also manage full
        production deployments on both Play Store and App Store according to
        store policies and publishing standards.
      </p>
      <div className="flex w-full items-center justify-center gap-3">
        <a
          href="/Ali_res_flutter.pdf"
          download
          className="p-3 text-center border-2 font-poppins border-[#b3ebcb] text-white cursor-pointer w-[150px] rounded-xl font-semibold hover:shadow-[inset_0_0_50px_rgba(143,251,189,0.1)] hover:border-none hover:transition-all hover:duration-500"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
