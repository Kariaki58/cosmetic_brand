"use client";

import Ads from "../components/Ads";
import Nav from "../components/Nav";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { VscGitCompare } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import Image from 'next/image';
import brand from "../assets/brand.png";
import skincare1 from '../assets/skincare1.jpg';
import { useState } from 'react';
import Footer from "../components/Footer";

// Example dynamic product categories
const categories = [
  { name: 'Applicators', count: 3 },
  { name: 'Body Oil', count: 1 },
  { name: 'Cosmetics', count: 2 },
  { name: 'Face Masks', count: 4 }
];

// Example dynamic product list
const products = [
  {
    id: 1,
    name: 'Florence by Mills Mind Glowing 1',
    image: skincare1,
    price: '£112.00',
    oldPrice: '£160.93',
    rating: 5
  },
  {
    id: 2,
    name: 'Florence by Mills Mind Glowing 2',
    image: skincare1,
    price: '£112.00',
    oldPrice: '£160.93',
    rating: 5
  },
  {
    id: 3,
    name: 'Florence by Mills Mind Glowing 3',
    image: skincare1,
    price: '£112.00',
    oldPrice: '£160.93',
    rating: 5
  }
  // Add more products...
];

// Define the number of products to display per page
const PRODUCTS_PER_PAGE = 12;

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // Get the products to display on the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Ads />
      <Nav />
      <header
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${brand.src})`,
        }}
      >
        <h2 className="text-3xl font-bold mb-10">Shop</h2>
        <div className="flex items-center text-lg">
          <p>Beautifo</p>
          <IoChevronForwardOutline className="mx-2" />
          <p>Shop</p>
        </div>
      </header>

      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <h2 className="text-lg font-bold border-b pb-4 mb-6">Product Categories</h2>
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between items-center cursor-pointer hover:text-[#FA9090]">
                <div className="flex items-center gap-2">
                  <IoIosArrowRoundForward />
                  <p>{category.name}</p>
                </div>
                <span>({category.count})</span>
              </li>
            ))}
          </ul>

          <section className="my-8">
            <h2 className="text-lg font-bold  border-b pb-2 mb-6">Filter by Price</h2>
            <input type="range" min="0" max="1000" className="w-full" aria-label="Price range slider" />
            <p className="mt-2 text-sm">Price: <span>£70</span> - <span>£140</span></p>
          </section>

          <section className="my-8">
            <h2 className="text-lg font-bold border-b pb-2 mb-6">Average Rating</h2>
            <ul className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars, i) => (
                <li key={i} className="flex items-center gap-2">
                  <input type="checkbox" id={`star${stars}`} aria-label={`${stars} stars`} />
                  <label htmlFor={`star${stars}`} className="flex">
                    {Array(stars).fill(null).map((_, idx) => (
                      <IoStarSharp key={idx} className="text-yellow-500" />
                    ))}
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold border-b pb-2 mb-6">Product Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-[#FA9090] hover:text-white">Skincare</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-[#FA9090] hover:text-white">Cosmetics</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-[#FA9090] hover:text-white">Organic</span>
            </div>
          </section>
        </aside>

        {/* Main content */}
        <section className="md:col-span-2">
          <div className="flex justify-between items-center border-b pb-2 mb-6">
            <h2 className="text-md text-gray-500">
              Showing {((currentPage - 1) * PRODUCTS_PER_PAGE) + 1} -{" "}
              {Math.min(currentPage * PRODUCTS_PER_PAGE, products.length)} of {products.length} results
            </h2>
            <select aria-label="Product sorting options" className="border p-2 rounded">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {paginatedProducts.map((product, index) => (
              <div key={product.id || index} className="group p-4 rounded-lg transition hover:shadow-lg">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="rounded-md object-cover h-72"
                    loading="lazy"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300 text-white">
                    <CiHeart className="text-xl cursor-pointer hover:scale-110" aria-label="Add to Wishlist" />
                    <VscGitCompare className="text-xl cursor-pointer hover:scale-110" aria-label="Compare Product" />
                    <FaRegEye className="text-xl cursor-pointer hover:scale-110" aria-label="View Product" />
                    <MdOutlineShoppingBag className="text-xl cursor-pointer hover:scale-110" aria-label="Add to Cart" />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="flex justify-center text-yellow-500">
                    {Array(product.rating).fill(null).map((_, i) => (
                      <IoStarSharp key={i} className="text-lg" />
                    ))}
                  </div>
                  <p className="mt-2 font-medium text-gray-700 text-md hover:underline cursor-pointer">
                    {product.name}
                  </p>
                  <div className="flex justify-center gap-4 mt-2">
                    <p className="font-bold text-md text-[#FA9090]">{product.price}</p>
                    {product.oldPrice && (
                      <p className="line-through text-gray-500 text-md">{product.oldPrice}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-8 items-center">
  <nav aria-label="Page navigation example">
    <ul className="flex items-center -space-x-px h-10 text-base">
      {/* Previous Button */}
      <li>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          aria-label="Previous"
        >
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
          </svg>
        </button>
      </li>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li key={index + 1}>
          <button
            onClick={() => setCurrentPage(index + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 ${
              currentPage === index + 1
                ? 'text-blue-600 bg-blue-50 border-blue-300'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        </li>
      ))}

      {/* Next Button */}
      <li>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
          aria-label="Next"
        >
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
