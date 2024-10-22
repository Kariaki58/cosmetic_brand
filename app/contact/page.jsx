import React from 'react';
import brand from '../assets/brand.png';
import { IoChevronForwardOutline } from 'react-icons/io5';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAddIcCall, MdOutlineAccessTime } from "react-icons/md";


const Page = () => {
  return (
    <>
      <Nav />
      <header
        className="h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${brand.src})` }}
      >
        <h1 className="text-3xl font-bold mb-10">Shop</h1>
        <nav aria-label="Breadcrumb">
          <ul className="flex items-center text-lg">
            <li>
              <a href="/" aria-label="Go to Beautifo Homepage">Beautifo</a>
            </li>
            <IoChevronForwardOutline className="mx-2" aria-hidden="true" />
            <li>Shop</li>
          </ul>
        </nav>
      </header>

      <main className="px-4 py-8 lg:px-16">
        <section className="">
          <div className='w-[480px] mx-auto my-10'>
            <h2 className="text-center text-3xl font-semibold mb-4">Our Address</h2>
            <p className="text-center mb-6 mt-10 text-gray-600">
              Our skincare essentials are designed to make you look and feel your glowy, dewy best before you even think about makeup.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 border-r pr-32">
              <FaLocationDot className="text-5xl text-[#FA9090]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className='text-gray-600'>8814 Bayberry Ave. Jonesborough, TN 37659</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 border-r pr-32">
              <MdOutlineAddIcCall className="text-5xl text-[#FA9090]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-xl">Support</h3>
                <p className='text-gray-600'>Mobile: +(234)9138384591</p>
                <p className='text-gray-600'>Support: 1800-33355</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MdOutlineAccessTime className="text-5xl text-[#FA9090]" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Opening Hours</h3>
                <p className='text-gray-600'>Mon-Fri: 9:00 AM - 7:00 PM</p>
                <p className='text-gray-600'>Saturday: 9:00 AM - 6:00 PM</p>
                <p className='text-gray-600'>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className='w-full md:w-[520px] mx-auto mb-16'>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Ready to Get Started?</h2>
            <p className="text-center mb-8 text-gray-500">Simply complete the form below, and our customer service team will get in touch within 3 business days.</p>
          </div>
          
          <form className="max-w-xl mx-auto space-y-6" aria-labelledby="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                <input id="name" type="text" placeholder="Your Name *" className="border border-gray-300 outline-none focus:outline-none p-4 rounded-full w-full" required />
              </label>
              
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                <input id="email" type="email" placeholder="Your Email *" className="border border-gray-300 outline-none focus:outline-none p-4 rounded-full w-full" required />
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                <input id="phone" type="tel" placeholder="Your Phone Number *" className="border border-gray-300 outline-none focus:outline-none p-4 rounded-full w-full" required />
              </label>
              
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                <input id="subject" type="text" placeholder="Your Subject *" className="border border-gray-300 outline-none focus:outline-none p-4 rounded-full w-full" required />
              </label>
            </div>
            
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              <textarea id="message" placeholder="Your Message *" rows="5" className="border border-gray-300 outline-none focus:outline-none p-4 rounded-3xl w-full" required></textarea>
            </label>
            
            <button type="submit" className="bg-black hover:bg-[#FA9090] w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition ease-in-out duration-300">
              Send Enquiry
            </button>
          </form>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Page;
