import React, { useEffect, useState } from "react";

const menu = [
  { name: "home", id: "home" },
  { name: "projects", id: "projects" },
  { name: "skills", id: "skills" },
  { name: "about", id: "aboutme" },
];

const NaveBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0,0.01,...,1
      }
    );

    menu.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 flex items-center justify-between gap-4 md:gap-6 px-6 py-3 rounded-full border border-[#88b399]/40 shadow-[0_0_15px_rgba(136,179,153,0.2)] bg-[#0b0b0b]/30 backdrop-blur-xl z-[1000]">
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className="relative capitalize cursor-pointer font-poppins text-sm md:text-lg transition-all"
        >
          {/* Text */}
          <span
            className={`transition-colors ${
              activeSection === item.id
                ? "text-[#88b399]"
                : "text-white hover:text-[#88b399]"
            }`}
          >
            {item.name}
          </span>

          {/* Active indicator underline */}
          <span
            className={`absolute left-1/2 -bottom-1 h-[2px] bg-[#88b399] rounded-full -translate-x-1/2 transition-all ${
              activeSection === item.id ? "w-4 opacity-100" : "w-0 opacity-0"
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default NaveBar;
