import React from "react";

const products = [
  {
    id: 1,
    category: "TABLETS",
    title: "Apple iPad Air",
    description:
      "iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPad OS mobile operating systems.",
    image: "/product-2-300x300.png", // Make sure image is in public folder
    bgColor: "bg-blue-600",
    buttonColor: "bg-white text-blue-600",
  },
  {
    id: 2,
    category: "SMART",
    title: "Apple Watch",
    description:
      "Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities.",
    image: "public/watchseries6-removebg-preview.png", // Make sure image is in public folder
    bgColor: "bg-[#0A1F44]",
    buttonColor: "bg-blue-600 text-white",
  },
];

const Exemple = () => {
  return (
    <section id="categories"  className="py-16 bg-gray-100">
      <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${product.bgColor} relative flex items-center rounded-2xl overflow-hidden p-8 h-100 `}
          >
            {/* Text content */}
            <div className=" text-white z-10 max-w-[60%]">
              <p className="uppercase text-sm mb-2">{product.category}</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {product.title}
              </h2>
              <p className="text-sm mb-6">{product.description}</p>
              <button
                className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 hover:opacity-90 ${product.buttonColor}`}
              >
                Buy Now
              </button>
            </div>

            {/* Image */}
            <div className="absolute right-0 bottom-0 h-full flex items-center z-0 pr-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exemple;
