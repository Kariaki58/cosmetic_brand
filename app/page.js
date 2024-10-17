"use client";

import Nav from "./components/Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import image1 from './assets/img-2.png';
import image2 from './assets/img-3.png';
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import brand1 from './assets/brand-other.png';
import brand from './assets/brand.png';
import Products from "./components/Products";
import BestSellers from "./components/BestSellers";
import NewsLetterFooter from "./components/NewsLetterFooter";
import Brands from './components/Brands';
import FromBlog from "./components/FromBlog";

const Page = () => {
  // Define state to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Define motion variants for animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state for the animation
    visible: { opacity: 1, y: 0 },  // Final state for the animation
  };

  // Handle slide change
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Nav />
      <header className="container mx-auto px-3">
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay={false}
          interval={3000}
          swipeable
          emulateTouch
          onChange={handleSlideChange} // Handle slide change
        >
          <div className="relative">
            <Image
              src={image1}
              width={500}
              height={200}
              className="rounded-xl"
              alt="Picture of a beautiful girl with skincare product"
            />
            <motion.div
              className="absolute top-52 right-10 w-96 text-left"
              initial="hidden"
              animate={activeIndex === 0 ? "visible" : "hidden"} // Control animation based on active index
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-6xl font-light mb-4">Discover</h1>
                <h2 className="text-6xl font-semibold text-[#FA9090] mb-4">
                  The Secrets Of  <span className="text-black font-light">Beautifo</span>
                </h2>
                <p className="text-gray-700 mb-16">
                  Get them together (for less!) for dewy, natural-looking coverage that still looks like skin.
                </p>
                <button className="flex items-center mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FA9090] transition">
                  SHOP NOW
                  <IoIosArrowForward className="ml-2" />
                  <IoIosArrowForward className="-ml-3" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <Image
              src={image2}
              width={500}
              height={200}
              className="rounded-xl"
              alt="Picture of a beautiful girl with skincare routine"
            />
            <motion.div
              className="absolute top-52 left-10 w-96 text-left"
              initial="hidden"
              animate={activeIndex === 1 ? "visible" : "hidden"} // Control animation based on active index
              variants={textVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-6xl font-light mb-4">Explore</h1>
                <h2 className="text-6xl font-semibold text-[#FA9090] mb-4">
                  The Secrets Of  <span className="text-black font-light">Beautifo</span>
                </h2>
                <p className="text-gray-700 mb-16">
                  Get them together (for less!) for dewy, natural-looking coverage that still looks like skin.
                </p>
                <button className="flex items-center mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FA9090] transition">
                  SHOP NOW
                  <IoIosArrowForward className="ml-2" />
                  <IoIosArrowForward className="-ml-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </Carousel>
      </header>
      
      {/* Section for product images */} 
      <section className="container mx-auto px-3">
        <div className="flex gap-10">
          
          {/* Image 1 with hover scale effect */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl">
            {/* Apply the hover effect on the outer div */}
            <div className="transition-transform duration-500 transform group-hover:scale-110">
              <Image
                src={brand1}
                width={700}
                height={200}
                className="rounded-xl"
                alt="Picture of a beautiful girl with skincare routine"
              />
            </div>
            <div className="absolute top-20 left-10">
              <h3 className="text-[#FA9090] text-md font-bold mb-2">UP TO 30% OFF</h3>
              <h1 className="text-2xl w-40">Natural Beauty Collection</h1>
              <button className="flex items-center underline mt-10 py-2 font-bold text-black rounded-lg hover:text-[#FA9090] transition">
                SHOP NOW
                <IoIosArrowForward className="ml-2" />
                <IoIosArrowForward className="-ml-3" />
              </button>
            </div>
          </div>

          {/* Image 2 with hover scale effect */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl">
            <div className="transition-transform duration-500 transform group-hover:scale-110">
              <Image
                src={brand}
                width={700}
                height={200}
                className="rounded-xl"
                alt="Picture of a beautiful girl with skincare routine"
              />
            </div>
            <div className="absolute top-20 left-10">
              <h3 className="text-[#FA9090] text-md font-bold mb-2">UP TO 30% OFF</h3>
              <h1 className="text-2xl w-40">Natural Beauty Collection</h1>
              <button className="flex items-center underline mt-10 py-2 font-bold text-black rov hover:text-[#FA9090] transition">
                SHOP NOW
                <IoIosArrowForward className="ml-2" />
                <IoIosArrowForward className="-ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Products />
      <BestSellers />
      <NewsLetterFooter />
      <Brands />
      <FromBlog />
    </div>
  );
};

export default Page;
