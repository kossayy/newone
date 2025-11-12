import React from "react";

const products = [
  { id: 1, name: "Headphones", image: "/cat2-1.jpg" },
  { id: 2, name: "Smart Phones", image: "/cat3-1.jpg" },
  { id: 3, name: "Laptops", image: "/cat5-1.jpg" },
  { id: 4, name: "Smart Watches", image: "/cat1-1.jpg" },
];

const Product = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div
        className="
          max-w-7xl mx-auto 
          px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          gap-8 justify-items-center
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              flex flex-col items-center p-4 group cursor-pointer
              transform transition-all duration-300 hover:-translate-y-2
            "
          >
            <div
              className="
                w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
                bg-sky-100 rounded-full flex items-center justify-center mb-4
                transition-transform duration-300 group-hover:scale-105
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            <h3
              className="
                text-center text-sm sm:text-base font-semibold 
                px-4 py-1.5 rounded-2xl 
                transition-colors duration-300 
                group-hover:bg-[#022554] group-hover:text-white
              "
            >
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
