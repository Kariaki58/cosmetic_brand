"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Cart from "./Cart"; // Import the Cart component

const Nav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart
  const [isActive, setIsActive] = useState("home");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart visibility
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <GiHamburgerMenu size={20} />
          )}
        </button>

        {/* Left Side Navigation */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-8 space-y-4 md:space-y-0 text-gray-600 font-medium absolute md:relative md:flex-row flex-col top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <Link
              href="/"
              className={`font-bold text-sm hover:text-[#FA9090] ${
                isActive === "home" ? "text-[#FA9090]" : "text-gray-900"
              }`}
              onClick={() => {
                toggleMobileMenu();
                setIsActive("home");
              }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={`font-bold text-sm hover:text-[#FA9090] ${
                isActive === "shop" ? "text-[#FA9090]" : "text-gray-900"
              }`}
              onClick={() => {
                toggleMobileMenu();
                setIsActive("shop");
              }}
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`font-bold text-sm hover:text-[#FA9090] ${
                isActive === "blog" ? "text-[#FA9090]" : "text-gray-900"
              }`}
              onClick={() => {
                toggleMobileMenu();
                setIsActive("blog");
              }}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`font-bold text-sm hover:text-[#FA9090] ${
                isActive === "contact" ? "text-[#FA9090]" : "text-gray-900"
              }`}
              onClick={() => {
                toggleMobileMenu();
                setIsActive("contact");
              }}
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          LOGO
        </Link>

        {/* Right Side Icons */}
        <ul className="flex space-x-6 text-gray-600 items-center">
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090]">
            <IoSearchOutline size={20} onClick={toggleSearch} />
          </li>
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090]">
            <Link href="/auth/login">
              <GoPerson size={20} />
            </Link>
          </li>
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090] relative">
            <Link href="/favorites">
              <FaRegHeart size={20} />
            </Link>
            <span className="p-1 rounded-full bg-[#FA9090] text-white text-xs absolute bottom-3 left-3">0</span>
          </li>
          <li className="text-gray-900 cursor-pointer hover:text-[#FA9090] relative">
            <Link href="#" onClick={toggleCart}>
              <MdOutlineAddShoppingCart size={20} />
            </Link>
            <span className="p-1 rounded-full bg-[#FA9090] text-white text-xs absolute bottom-3 left-3">0</span>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="container mx-auto px-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
            placeholder="Search..."
          />
        </div>
      )}

      {/* Cart Component */}
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Nav;
