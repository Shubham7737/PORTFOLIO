import React from 'react';

const arr = [
  {
    video: 'https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4',
    title: 'Frontend Developer',
    des: 'The Calculator App provides an easy-to-use, web-based calculator that performs basic arithmetic operations.'
  },
  {
    video: 'https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4',
    title: 'UI/UX Designer',
    des: 'The Calculator App provides an easy-to-use, web-based calculator that performs basic arithmetic operations.'
  },
];

export default function Services() {
  return (
    <div className="bg-zinc-950 py-12 px-4">
      {/* Title */}
      <h1 className="text-white text-3xl font-bold text-center mb-10">
        Services
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {arr.map((element, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300"
          >
            {/* Video */}
            <video
              src={element.video}
              autoPlay
              loop
              muted
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            ></video>

            {/* Text */}
            <div className="p-5">
              <h2 className="text-white text-xl font-semibold mb-2">
                {element.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {element.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
