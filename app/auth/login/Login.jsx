"use client";

import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; // Importing icons
import googleIcon from '../../assets/google-icon.webp';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-1/2 xl:w-1/3 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
        <form className="space-y-6">
          
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                id="login-email" 
                type="email" 
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary" 
                placeholder="you@example.com" 
                required 
              />
            </div>
          </div>
  
          {/* Password Input */}
          <div className="relative">
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                id="login-password" 
                type={showPassword ? "text" : "password"} 
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
  
          {/* Submit Button */}
          <button type="submit" className="w-full bg-black hover:bg-[#FA9090] text-white py-3 rounded-lg font-semibold transition ease-in-out duration-300">Login</button>
  
          {/* Google Authentication */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Or login with</p>
            <button type="button" className="mt-2 w-full bg-white border border-gray-300 py-2 rounded-lg text-gray-700 flex justify-center items-center hover:bg-gray-100 transition ease-in-out duration-300">
              <Image src={googleIcon} alt="Google" className="w-6 h-6 mr-2" /> Continue with Google
            </button>
          </div>
  
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Don't have an account? <Link href="/auth/register" className="text-primary font-medium">Sign up</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
