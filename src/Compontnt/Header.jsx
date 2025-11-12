import React, { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Categories", id: "categories" },
    { name: "Shop", id: "shop" },  
    { name: "Pages", id: "pages" },
    { name: "Contact us", id: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          Nega<span className="text-sky-400">Shop</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveLink(item.name)}
              className={`transition ${
                activeLink === item.name ? "text-sky-400" : "hover:text-sky-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Search + Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="relative">
            <input
              type="text"
              placeholder="  Search ..."
              className="w-48 sm:w-60 md:w-72 bg-white/10 text-black placeholder-gray-400 backdrop-blur-md rounded-full px-4 py-2 text-md outline-none border border-black/30 focus:border-sky-400 focus:bg-white/20 transition-all duration-300"
              style={{ fontFamily: "FontAwesome, Arial, sans-serif" }}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hover:scale-110 transition">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-sky-400 text-xs text-black font-bold rounded-full px-1">
                1
              </span>
            </div>
            <div className="relative hover:scale-110 transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-sky-400 text-xs text-black font-bold rounded-full px-1">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href="#"
              onClick={() => {
                setActiveLink(item.name);
                setMenuOpen(false);
              }}
              className={`block text-sm font-medium transition ${
                activeLink === item.name
                  ? "text-sky-400"
                  : "text-black hover:text-sky-400"
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Search + Icons */}
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="  Search ..."
              className="w-full bg-white text-black placeholder-gray-400 border border-black/30 rounded-full px-4 py-2 text-md outline-none focus:border-sky-400 transition-all duration-300"
              style={{ fontFamily: "FontAwesome, Arial, sans-serif" }}
            />
            <div className="flex items-center space-x-4 mt-2">
              <div className="relative hover:scale-110 transition">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-sky-400 text-xs text-black font-bold rounded-full px-1">
                  1
                </span>
              </div>
              <div className="relative hover:scale-110 transition">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-sky-400 text-xs text-black font-bold rounded-full px-1">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
