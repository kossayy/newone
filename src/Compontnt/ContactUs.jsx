import React from "react";

const ContactUs = () => {
  return (
    <section id="Contact" className="flex justify-center items-center py-20 bg-gray-100">
      <div
        className="relative w-[90%] md:w-[75%] lg:w-[65%] bg-cover bg-center rounded-3xl overflow-hidden shadow-xl px-8 py-16 flex flex-col items-center text-center"
        style={{ backgroundImage: "url('/bg-1.jpg')" }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 space-y-6">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-sky-500">Newsletter</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white max-w-md mx-auto">
            Get updates by subscribing to our weekly newsletter
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
            <input
              type="email"
              placeholder="Enter your email..."
              className="text-white px-5 py-3 rounded-full border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              className="px-6 py-3 bg-[#022554] text-white font-semibold rounded-full hover:bg-sky-600 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
