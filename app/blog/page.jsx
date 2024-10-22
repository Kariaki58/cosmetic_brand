"use client";

import Ads from "../components/Ads";
import Nav from "../components/Nav";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import skincare4 from '../assets/skincare4.jpg';
import skincare5 from '../assets/skincare5.jpg';  // Example for recent posts
import { useState } from 'react';
import Link from "next/link";

// Example blog post categories
const blogCategories = [
  { name: 'Lifestyle', count: 6 },
  { name: 'Health & Wellness', count: 4 },
  { name: 'Skincare Tips', count: 8 },
  { name: 'Travel', count: 3 }
];

// Example dynamic blog post list
const blogPosts = [
  {
    id: 1,
    title: 'The Best Skincare Routine for Fall',
    image: skincare4,
    date: 'October 5, 2023',
    excerpt: 'Learn how to transition your skincare routine as the season changes...',
  },
  {
    id: 2,
    title: 'Top 5 Travel Essentials for Skincare Lovers',
    image: skincare4,
    date: 'September 28, 2023',
    excerpt: 'These travel-friendly skincare products will keep your skin glowing...',
  },
  {
    id: 3,
    title: 'Understanding Different Skin Types',
    image: skincare4,
    date: 'September 15, 2023',
    excerpt: 'Not all skincare is one-size-fits-all. Find out which products suit your skin type...',
  }
  // Add more blog posts here...
];

// Recent posts with images
const recentPosts = [
  { title: 'Why Sunscreen is a Year-Round Must', date: 'August 23, 2023', image: skincare5 },
  { title: 'How to Layer Your Skincare Products', date: 'July 18, 2023', image: skincare5 },
  { title: '5 Foods for Healthier Skin', date: 'June 2, 2023', image: skincare5 }
];

// Number of blogs per page
const BLOGS_PER_PAGE = 6;

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / BLOGS_PER_PAGE);

  // Get the blogs to display on the current page
  const paginatedBlogs = blogPosts.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
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
          backgroundImage: `url(${skincare4.src})`,
        }}
      >
        <h2 className="text-3xl font-bold mb-10">Blog</h2>
        <div className="flex items-center text-lg">
          <p>Home</p>
          <IoChevronForwardOutline className="mx-2" />
          <p>Blog</p>
        </div>
      </header>

      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1 overflow-auto h-screen">
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Blog Categories</h2>
            <ul className="space-y-4">
              {blogCategories.map((category, index) => (
                <li key={index} className="flex justify-between items-center cursor-pointer hover:text-[#FA9090]">
                  <div className="flex items-center gap-2">
                    <IoIosArrowRoundForward />
                    <p>{category.name}</p>
                  </div>
                  <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Recent Posts with Images */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Recent Posts</h2>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="rounded-md w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="font-medium hover:underline cursor-pointer hover:text-[#FA9090]">{post.title}</p>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          {/* tags */}
          <section>
            <h2 className="text-lg font-bold border-b pb-2 mb-6">Product Tags</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-[#FA9090] hover:text-white">Skincare</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-[#FA9090] hover:text-white">Cosmetics</span>
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer hover:bg-[#FA9090] hover:text-white">Organic</span>
            </div>
          </section>
        </aside>

        {/* Main Blog Content */}
        <section className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map((blog, index) => (
              <div key={blog.id || index} className="group p-4 rounded-lg bg-white shadow-md transition hover:shadow-lg">
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-md object-cover h-48 w-full cursor-pointer"
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                  <h3 className="mt-2 text-lg text-gray-800 hover:text-[#FA9090] transition cursor-pointer font-semibold">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                  <Link
                    href="/blog/blogid"
                    className="inline-block mt-3 text-blue-600 hover:underline text-sm font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-8 items-center">
            <nav aria-label="Page navigation example">
              <ul className="flex items-center -space-x-px h-8 text-sm">
                <li>
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                  </button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setCurrentPage(i + 1)}
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === i + 1 ? 'bg-blue-50 text-blue-600 border-blue-300' : ''}`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
