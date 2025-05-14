import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  // same projects array
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen px-4 py-12 lg:px-24">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Projects
      </h1>

      {/* Slider */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 p-4 mx-2"
          >
            {/* Video */}
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full h-48 md:h-56 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="mt-4 space-y-2">
              <h2 className="text-xl font-semibold text-center">{project.title}</h2>
              <p className="text-sm text-gray-600 text-center">{project.description}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
