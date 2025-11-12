import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import Rating from "@mui/material/Rating"; // ✅ Import Rating from MUI
import { SlArrowRightCircle } from "react-icons/sl";

const products = [
  {
    id: 1,
    name: "Black Sports Watch",
    image: "/cat2-1.jpg",
    decrp: "Smart Watch",
    rating: 4.5,
    price: "399$",
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    image: "/cat3-1.jpg",
    decrp: "Wireless Audio",
    rating: 3,
    price: "199$",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    image: "/cat5-1.jpg",
    decrp: "High Performance",
    rating: 4,
    price: "999$",
  },
  {
    id: 4,
    name: "Smartphone X",
    image: "/cat1-1.jpg",
    decrp: "5G Enabled",
    rating: 4.5,
    price: "799$",
  },
];

const Shopproducts = () => {
  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop <span className="text-sky-500">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg w-full sm:w-64"
            >
              {/* Image */}
              <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />

                {/* Heart icon */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-sky-100 transition">
                  <Heart size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.decrp}</p>

                {/* ✅ MUI Rating component */}
                <div className="flex justify-center items-center mb-2">
                  <Rating
                    name="read-only"
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-gray-500 text-xs ml-2">
                    ({product.rating})
                  </span>
                </div>

                <p className="text-xl font-bold text-[#022554] mb-4">
                  {product.price}
                </p>

                {/* Add to Cart */}
                <button className="flex items-center justify-center gap-2 bg-[#022554] text-white px-4 py-2 rounded-full hover:bg-sky-500 transition-all duration-300 mx-auto">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="
          flex items-center gap-2
          border-2 border-[#022554] text-[#022554] 
          px-8 py-3 rounded-full 
          font-semibold text-sm sm:text-base
          transition-all duration-300 
          hover:bg-[#022554] hover:text-white hover:shadow-lg
        "
        >
          Shop all Products
          <SlArrowRightCircle className="text-lg transition-transform duration-300 group-hover:translate-x-1 h-6 w-8 " />
        </button>
      </div>
    </section>
  );
};

export default Shopproducts;
