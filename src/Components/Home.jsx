import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  // Show Scroll-to-Top Button
  const handleScroll = () => {
    setShowButton(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-zinc-950 text-white min-h-screen flex flex-col justify-center items-center px-4">
      {/* Home Section */}
      <section id="HOME" className="w-full max-w-4xl text-center py-20">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4 animate__animated animate__fadeIn"
        >
          Hello, I'm <span className="text-blue-500">Shubham</span>
        </h1>
        <p className="text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          A passionate Front-end Developer building responsive web experiences.
        </p>

        {/* CV Button */}
        <a href="./Shubh_CV.pdf" download>
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Download CV
          </button>
        </a>
      </section>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 bg-blue-600 text-white text-2xl p-4 rounded-full shadow-xl hover:bg-blue-700 transition duration-300 hover:scale-110"
        >
          ↑
        </button>
      )}
    </div>
  );
}
