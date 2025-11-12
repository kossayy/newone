/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  const images = ["/slide1-1.png", "/slide2-1.png", "/slide3-1.png"];
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.section
      id="home"
      className="flex justify-center items-start py-24 px-6 relative"
      animate={{ scale: [1, 1.02, 1] }} // légère animation
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Container with background */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-12 px-8 py-12 rounded-2xl relative w-full max-w-7xl"
        style={{
          backgroundImage: "url('/images.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 w-full">
          {/* Left side: Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
              Get <span className="text-sky-400">Best device</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold">
              with Lowest Price
            </h2>
            <p className="text-gray-200 max-w-md">
              iPad is a line of tablet computers designed, developed and
              marketed by Apple Inc., which run the iOS and iPad OS mobile
              operating systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="px-6 py-2 bg-sky-400 text-black font-semibold rounded-lg hover:bg-sky-500 transition">
                Explore Now
              </button>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 px-6 py-2 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-black transition"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch Promotion
              </button>
            </div>
          </div>

          {/* Right side: Image slider */}
          <div className="flex-1 relative w-full max-w-md flex justify-center z-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`Device ${current + 1}`}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Slider buttons */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full p-2"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full p-2"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
            >
              &times;
            </button>
            <iframe
              className="w-full h-80 sm:h-96 md:h-[500px]"
              src="https://www.youtube.com/embed/_-AS5DtDeqs?autoplay=1&rel=0&modestbranding=1"
              title="Promotion Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Hero;
