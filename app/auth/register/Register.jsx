"use client";
        
import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; // Importing icons
import Image from 'next/image';
import googleIcon from '../../assets/google-icon.webp';
import Link from 'next/link';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 xl:w-1/3 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <form className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <label htmlFor="register-name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="register-name"
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="register-email"
                type="email"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="••••••••"
                required
              />
              {/* Toggle Password Visibility */}
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="••••••••"
                required
              />
              {/* Toggle Confirm Password Visibility */}
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-[#FA9090] text-white py-3 rounded-lg font-semibold transition ease-in-out duration-300"
          >
            Register
          </button>

          {/* Google Authentication */}
          <div className="text-center mt-2">
            <p className="text-sm text-gray-500">Or sign up with</p>
            <button
              type="button"
              className="mt-2 w-full bg-white border border-gray-300 py-2 rounded-lg text-gray-700 flex justify-center items-center hover:bg-gray-100 transition ease-in-out duration-300"
            >
              <Image src={googleIcon} alt="Google" className="w-6 h-6 mr-2" /> Continue with Google
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account? <Link href="/auth/login" className="text-primary font-medium">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
