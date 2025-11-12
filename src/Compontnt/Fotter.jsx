import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Fotter = () => {
  return (
    <footer className="bg-[#022554] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-2xl font-bold">
            Nega<span className="text-sky-400">Shop</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your one-stop shop for the latest in smart devices and accessories.
            Discover innovation and style with every product.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4 text-sky-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-sky-400">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-sky-400 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-sky-400 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-sky-400 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-sky-400 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NegaShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Fotter;
