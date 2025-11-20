import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 30, suffix: "+", label: "Projects" },
  { value: 4, suffix: "+", label: "Companies" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

const ExperianceSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="w-full py-12 flex flex-row justify-center gap-6 sm:gap-10 bg-background border-t border-b border-[#88b399]/20 overflow-x-auto"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`
            flex flex-col items-center justify-center min-w-[100px] sm:min-w-[220px] h-24 sm:h-40 md:h-48 p-2
            ${"sm:bg-white/5 sm:backdrop-blur-md sm:border sm:border-white/20 sm:shadow-[inset_0_0_30px_rgba(143,251,189,0.1)] sm:rounded-2xl hover:sm:scale-105 transition-transform duration-300 cursor-pointer"}
          `}
        >
          <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl">
            {inView ? (
              <CountUp end={stat.value} duration={2} redraw={true} />
            ) : (
              0
            )}
            {stat.suffix}
          </h1>
          <h2 className="text-white font-medium text-[18px] sm:text-2xl md:text-3xl mt-1 sm:mt-2 text-center">
            {stat.label}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ExperianceSection;
