import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-10">
      {/* Main footer sections */}
      <section className="container mx-auto px-3 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:px-6 lg:px-8">
        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4">LOGO</h1>
          <p className="text-gray-400 mb-4">
            Beautiful - a popular online beauty store that sells all cosmetics products
            to nurture your skin in your own way.
          </p>
          <p className="text-gray-400">+234-0909090909</p>
          <p className="text-gray-400">contact@email.com</p>
        </div>

        {/* About Us Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About us</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Story</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Products</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Blog</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Giving Back</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Partnerships</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Careers</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Shipping Info</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Returns & Exchanges</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Help & FAQ</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Reviews</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Quiz</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Store Locator</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Contact Us</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Delivery</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Returns</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">My Account</Link></li>
            <li><Link href="#" className="text-gray-500 hover:text-gray-300">Rewards</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Socials</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <FaFacebook className="text-blue-600" />
              <Link href="#" className="text-gray-500 hover:text-gray-300">Facebook</Link>
            </li>
            <li className="flex items-center space-x-2">
              <BsTwitterX className="text-blue-400" />
              <Link href="#" className="text-gray-500 hover:text-gray-300">Twitter</Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaInstagram className="text-pink-500" />
              <Link href="#" className="text-gray-500 hover:text-gray-300">Instagram</Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaPinterestP className="text-red-600" />
              <Link href="#" className="text-gray-500 hover:text-gray-300">Pinterest</Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaYoutube className="text-red-500" />
              <Link href="#" className="text-gray-500 hover:text-gray-300">YouTube</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer bottom section */}
      <section className="bg-[#FA9090] py-10">
        <div className="container mx-auto text-center text-gray-900">
          <p>Copyright © 2021 Beautifo. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
