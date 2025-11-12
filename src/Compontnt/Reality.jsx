import React from "react";

const Reality = () => {
  return (
    <section id="pages" className="flex justify-center items-center py-16 ">
      <div
        className=" relative bg-cover bg-center rounded-3xl overflow-hidden shadow-xl w-[90%] md:w-[80%] lg:w-[70%] flex flex-col lg:flex-row items-center justify-between px-8 py-12 text-white"
        style={{ backgroundImage: "url('public/bg4-1.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>

        {/* LEFT SIDE */}
        <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Get <span className="text-sky-400">Virtual Reality</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">with 30% off</h2>
          <p className="text-black max-w-md">
            Virtual reality (VR) is a simulated experience that can be similar
            to or completely different from the real world. Applications of VR
            include entertainment, education, and business.
          </p>
          <button className="mt-4 px-6 py-3 bg-sky-400 text-black font-semibold rounded-lg hover:bg-sky-500 transition-all duration-300 shadow-md">
            Get 30% off Now
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/img1-1.png"
            alt="Virtual Reality Headset"
            className="w-[250px] sm:w-[350px] lg:w-[400px] object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Reality;
