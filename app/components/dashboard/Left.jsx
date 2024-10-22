"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineTags, AiOutlineUser, AiOutlineFileText, AiOutlineSetting } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const Left = () => {
  const [isActive, setIsActive] = useState('dashboard');
  const [isLightMode, setIsLightMode] = useState(false);

  // Function to toggle light/dark mode
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  // Apply the correct styles based on the theme
  const bgClass = isLightMode ? "bg-gray-200" : "bg-gray-800";
  const textClass = isLightMode ? "text-black" : "text-white";
  const hoverBgClass = isLightMode ? "hover:bg-gray-300" : "hover:bg-gray-700";
  const activeTextClass = isLightMode ? "text-[#FA9090]" : "text-[#FA9090]";
  const activeHoverTextClass = isLightMode ? "group-hover:text-[#FA9090]" : "group-hover:text-[#FA9090]";

  return (
    <div className={`${bgClass} ${textClass} h-screen p-4 space-y-8`}>
      {/* Logo Section */}
      <div className="text-2xl font-bold mb-8">
        <span className={activeTextClass}>Cosmetic</span> Admin
      </div>

      {/* Light Mode Toggle */}
      {/* <div className="mb-4">
        <button
          onClick={toggleTheme}
          className={`py-2 px-4 rounded ${hoverBgClass}`}
        >
          Toggle {isLightMode ? 'Dark' : 'Light'} Mode
        </button>
      </div> */}

      {/* Menu Items */}
      <nav>
        <ul className="space-y-4">
          <Link href="/dashboard/admin">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'dashboard' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('dashboard')}
            >
              <AiOutlineDashboard className={`text-xl ${isActive === 'dashboard' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'dashboard' ? 'text-white' : activeHoverTextClass}`}>
                Dashboard
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/products">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'products' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('products')}
            >
              <AiOutlineShoppingCart className={`text-xl ${isActive === 'products' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'products' ? 'text-white' : activeHoverTextClass}`}>
                Products
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/offers">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'offers' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('offers')}
            >
              <AiOutlineTags className={`text-xl ${isActive === 'offers' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'offers' ? 'text-white' : activeHoverTextClass}`}>
                Offers
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/inventory">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'inventory' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('inventory')}
            >
              <AiOutlineShoppingCart className={`text-xl ${isActive === 'inventory' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'inventory' ? 'text-white' : activeHoverTextClass}`}>
                Inventory
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/orders">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'orders' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('orders')}
            >
              <AiOutlineShoppingCart className={`text-xl ${isActive === 'orders' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'orders' ? 'text-white' : activeHoverTextClass}`}>
                Orders
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/customers">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'customers' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('customers')}
            >
              <AiOutlineUser className={`text-xl ${isActive === 'customers' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'customers' ? 'text-white' : activeHoverTextClass}`}>
                Customers
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/edit">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'content' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('content')}
            >
              <AiOutlineFileText className={`text-xl ${isActive === 'content' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'content' ? 'text-white' : activeHoverTextClass}`}>
                Content Management
              </span>
            </li>
          </Link>

          <Link href="/dashboard/admin/newsletter">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'newsletter' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('newsletter')}
            >
              <AiOutlineFileText className={`text-xl ${isActive === 'newsletter' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'newsletter' ? 'text-white' : activeHoverTextClass}`}>
                Newsletter
              </span>
            </li>
          </Link>
          <Link href="/dashboard/admin/blog">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'blog' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('blog')}
            >
              <AiOutlineFileText className={`text-xl ${isActive === 'blog' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'blog' ? 'text-white' : activeHoverTextClass}`}>
                Blog
              </span>
            </li>
          </Link>
          <Link href="/dashboard/admin/settings">
            <li
              className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer ${isActive === 'settings' ? 'bg-[#FA9090]' : ''
                }`}
              onClick={() => setIsActive('settings')}
            >
              <AiOutlineSetting className={`text-xl ${isActive === 'settings' ? 'text-white' : activeTextClass}`} />
              <span className={`${isActive === 'settings' ? 'text-white' : activeHoverTextClass}`}>
                Settings
              </span>
            </li>
          </Link>
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="mt-auto">
        <Link href="/auth/signout">
          <div className={`group flex items-center gap-3 p-3 rounded-lg ${hoverBgClass} cursor-pointer`}>
            <FiLogOut className="text-xl text-[#FA9090] group-hover:text-white" />
            <span className={activeHoverTextClass}>Sign Out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Left;
