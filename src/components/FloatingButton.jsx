import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* Floating Items */}
      <div className="relative w-0 h-0">
        <a
          href="https://wa.me/923377452385"
          target="_blank"
          className={`absolute bg-green-600 text-white w-12 h-12 rounded-full 
            flex items-center justify-center shadow-lg transition-all duration-300 
            ${
              open
                ? "right-18 bottom-5 opacity-100"
                : "right-0 bottom-0 opacity-0"
            }`}
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href="mailto:alee155abbas@gmail.com"
          className={`absolute bg-red-500 text-white w-12 h-12 rounded-full 
            flex items-center justify-center shadow-lg transition-all duration-300
            ${
              open
                ? "right-18 -bottom-15 opacity-100"
                : "right-0 bottom-0 opacity-0"
            }`}
        >
          <FaEnvelope size={22} />
        </a>

        <a
          href="https://github.com/alee155"
          target="_blank"
          className={`absolute bg-gray-800 text-white w-12 h-12 rounded-full 
            flex items-center justify-center shadow-lg transition-all duration-300
            ${
              open
                ? "-right-15 bottom-25 opacity-100"
                : "right-0 bottom-0 opacity-0"
            }`}
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/muhammad-ali-tahir-846948294"
          target="_blank"
          className={`absolute bg-blue-700 text-white w-12 h-12 rounded-full 
            flex items-center justify-center shadow-lg transition-all duration-300
            ${
              open
                ? "right-5 bottom-20 opacity-100"
                : "right-0 bottom-0 opacity-0"
            }`}
        >
          <FaLinkedin size={22} />
        </a>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-16 h-16 rounded-full flex items-center justify-center
          text-white text-3xl font-bold transition-all duration-300 shadow-[0px_0px_30px_#5fb682]
          ${open ? "bg-[#296d44]" : "bg-[#5fb682] hover:bg-[#296d44]"}
          animate-float
        `}
      >
        <BiUser />
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingButton;
