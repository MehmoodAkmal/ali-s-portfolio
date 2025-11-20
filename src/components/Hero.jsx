import NaveBar from "./NaveBar";
import HeroContent from "./HeroContent";
import SkillsSlider from "./SliderSkilles";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-[100vh] md:h-screen w-full bg-gradient-to-b from-[#142633] to-[#0c171f] flex items-center justify-center overflow-hidden px-10"
    >
      <NaveBar />
      <HeroContent />
      <div className="absolute h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px] xl:h-[1200px] xl:w-[1200px] rounded-full shadow-[inset_0_0_30px_rgba(143,251,189,0.1)] flex items-center justify-center z-0">
        <div className="h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] md:h-[550px] md:w-[550px] lg:h-[750px] lg:w-[750px] xl:h-[1000px] xl:w-[1000px] rounded-full shadow-[inset_0_0_30px_rgba(143,251,189,0.1)] flex items-center justify-center">
          <div className="relative h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] xl:h-[800px] xl:w-[800px] rounded-full shadow-[inset_0_0_30px_rgba(143,251,189,0.1)] flex items-center justify-center">
            <div className="absolute h-3 w-3 rounded-full bg-[#5fb682] top-10 right-10 sm:top-16 sm:right-12"></div>
            <div className="absolute h-1 w-1 rounded-full bg-[#5fb682] top-20 right-6"></div>
            <div className="absolute h-1 w-1 rounded-full bg-[#5fb682] top-32 left-5"></div>
            <div className="absolute h-0.5 w-0.5 rounded-full bg-[#5fb682] top-40 left-3"></div>

            <img
              src="/star3.svg"
              alt=""
              className="absolute h-10 sm:h-28 -bottom-8 -right-6 z-0"
            />
            <img
              src="/star.svg"
              alt=""
              className="absolute h-3 sm:h-5 opacity-50 sm:top-50 left-3"
            />
            <img
              src="/star3.svg"
              alt=""
              className="absolute h-4 sm:h-6 top-120 -left-8"
            />
            <img
              src="/star3.svg"
              alt=""
              className="absolute h-5 sm:h-8 opacity-30 top-44 -right-6"
            />
            <img
              src="/star3.svg"
              alt=""
              className="absolute h-3 opacity-30 top-48 -right-8"
            />

            <div className="sm:hidden md:block h-[160px] w-[160px] sm:h-[220px] sm:w-[220px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[600px] xl:w-[600px] rounded-full shadow-[inset_0_0_30px_rgba(143,251,189,0.1)] flex items-center justify-center"></div>
          </div>
        </div>
      </div>
      <div className="h-[120px] absolute flex items-center justify-center bottom-0 w-full bg-gradient-to-t from-[#070d12] to-[rgba(14,26,35,0.3)]">
        <SkillsSlider />
      </div>
    </div>
  );
};

export default Hero;
