import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { skills } from "../utils";

const SkillsSlider = () => {
  return (
    <div className="absolute bottom-0 w-[95%] md:w-[70%] mx-auto py-6">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill, i) => (
          <SwiperSlide key={i}>
            <h1
              className="
                w-full
                text-base md:text-lg lg:text-xl
                font-semibold text-white bg-[#11232e] 
                px-6 py-4 rounded-lg border border-[#34d399] 
                text-center shadow-md
                transition-all duration-300
                flex items-center justify-center gap-2 truncate
              "
            >
              <img src={skill.logo} className="h-[30px]" />
              {skill.name}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styling */}
      <style jsx>{`
        .swiper-slide {
          opacity: 0.3;
          filter: blur(2px);
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .swiper-slide-active {
          opacity: 1 !important;
          filter: none !important;
        }
        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.6;
          filter: blur(1px);
        }
      `}</style>
    </div>
  );
};

export default SkillsSlider;
