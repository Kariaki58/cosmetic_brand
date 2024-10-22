"use client";
import React, { useState } from "react";
import { FaProductHunt } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import Image from "next/image";
import humidifier from "@/app/assets/humidifier.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const Page = () => {
  const [openProductIds, setOpenProductIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const products = [
    {
      name: "Humidifier",
      id: "#ABD183934",
      category: "men dress",
      discount: 25,
      datePublished: "2024-10-22",
      variants: [
        {
          variantName: "Light Standard",
          sku: "SC194",
          color: "Natural",
          status: "active",
          price: 45,
          stock: 100,
          sizes: "Full size (30ml)",
          shades: "Light Standard",
          metrics: {
            impression: 3000,
            conversionRate: 100,
            clickThroughRate: 2000,
            sold: "150+",
            returnRate: 2,
          },
        },
        {
          variantName: "Pink",
          sku: "SC195",
          color: "Pink",
          status: "inactive",
          price: 53,
          stock: 10,
          sizes: "Full size (100ml)",
          shades: "Light Standard",
          metrics: {
            impression: 200,
            conversionRate: 100,
            clickThroughRate: 1400,
            sold: "50+",
            returnRate: 14.5,
          },
        },
        {
          variantName: "Green",
          sku: "SC196",
          color: "Green",
          status: "debounced",
          price: 50,
          stock: 30,
          sizes: "Standard",
          shades: "Nude Pink",
          metrics: {
            impression: 200,
            conversionRate: 100,
            clickThroughRate: 1400,
            sold: "50+",
            returnRate: 14.5,
          },
        },
      ],
    },
    {
      name: "Air Purifier",
      id: "#ABD183935",
      category: "home appliances",
      discount: 15,
      datePublished: "2024-10-15",
      variants: [
        {
          variantName: "Compact Model",
          sku: "AP201",
          color: "White",
          status: "active",
          price: 120,
          stock: 75,
          sizes: "Standard",
          shades: "White",
          metrics: {
            impression: 5000,
            conversionRate: 75,
            clickThroughRate: 2500,
            sold: "200+",
            returnRate: 1.5,
          },
        },
        {
          variantName: "Large Model",
          sku: "AP202",
          color: "Black",
          status: "inactive",
          price: 180,
          stock: 5,
          sizes: "Large",
          shades: "Black",
          metrics: {
            impression: 1000,
            conversionRate: 50,
            clickThroughRate: 800,
            sold: "20+",
            returnRate: 5.0,
          },
        },
      ],
    },
    {
      name: "Dehumidifier",
      id: "#ABD183936",
      category: "home appliances",
      discount: 30,
      datePublished: "2024-09-10",
      variants: [
        {
          variantName: "Mini Model",
          sku: "DH301",
          color: "Blue",
          status: "active",
          price: 60,
          stock: 50,
          sizes: "Compact",
          shades: "Blue",
          metrics: {
            impression: 1500,
            conversionRate: 80,
            clickThroughRate: 600,
            sold: "90+",
            returnRate: 3.0,
          },
        },
        {
          variantName: "Standard Model",
          sku: "DH302",
          color: "Gray",
          status: "active",
          price: 90,
          stock: 40,
          sizes: "Standard",
          shades: "Gray",
          metrics: {
            impression: 3000,
            conversionRate: 100,
            clickThroughRate: 1200,
            sold: "200+",
            returnRate: 2.0,
          },
        },
        {
          variantName: "Industrial Model",
          sku: "DH303",
          color: "Black",
          status: "inactive",
          price: 300,
          stock: 2,
          sizes: "Industrial",
          shades: "Black",
          metrics: {
            impression: 100,
            conversionRate: 20,
            clickThroughRate: 200,
            sold: "5+",
            returnRate: 10.0,
          },
        },
      ],
    },
    {
      name: "Air Fryer",
      id: "#ABD183937",
      category: "kitchen appliances",
      discount: 20,
      datePublished: "2024-10-10",
      variants: [
        {
          variantName: "4L Capacity",
          sku: "AF401",
          color: "Red",
          status: "active",
          price: 70,
          stock: 25,
          sizes: "4L",
          shades: "Red",
          metrics: {
            impression: 3000,
            conversionRate: 60,
            clickThroughRate: 1500,
            sold: "120+",
            returnRate: 4.0,
          },
        },
        {
          variantName: "6L Capacity",
          sku: "AF402",
          color: "Black",
          status: "active",
          price: 100,
          stock: 15,
          sizes: "6L",
          shades: "Black",
          metrics: {
            impression: 2500,
            conversionRate: 70,
            clickThroughRate: 1800,
            sold: "100+",
            returnRate: 5.0,
          },
        },
      ],
    },
  ];

  // Toggle function for the dropdown
  const toggleDropdown = (id) => {
    if (openProductIds.includes(id)) {
      setOpenProductIds(openProductIds.filter((productId) => productId !== id));
    } else {
      setOpenProductIds([...openProductIds, id]);
    }
  };

  // Search and filter products based on search term and color
  const filteredProducts = products.filter((product) => {
    const isMatch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.variants.some((variant) =>
        variant.sku.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const colorMatch = filterColor
      ? product.variants.some((variant) => variant.color === filterColor)
      : true;

    return isMatch && colorMatch;
  });

  // Sort products based on selected field and direction
  const sortProducts = (a, b) => {
    const fieldA = a[sortField] || a.variants[0][sortField];
    const fieldB = b[sortField] || b.variants[0][sortField];

    if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen overflow-y-auto">
         <section>
        <h1 className="text-gray-800 text-3xl font-bold mb-6">Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Overview Cards */}
          <div className="flex gap-4 bg-white shadow-lg p-6 rounded-lg items-center">
            <FaProductHunt size={50} className="text-blue-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">5483</h2>
              <p className="text-gray-600">Total Products</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white shadow-lg p-6 rounded-lg items-center">
            <FaLayerGroup size={50} className="text-green-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">2859</h2>
              <p className="text-gray-600">Total Orders</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white shadow-lg p-6 rounded-lg items-center">
            <RiStockFill size={50} className="text-red-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">5483</h2>
              <p className="text-gray-600">Total Stock</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white shadow-lg p-6 rounded-lg items-center">
            <AiOutlineStock size={50} className="text-yellow-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">38</h2>
              <p className="text-gray-600">Out of Stock</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white shadow-lg p-6 rounded-lg items-center">
            <GoPeople size={50} className="text-purple-500" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">583K</h2>
              <p className="text-gray-600">Total Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="mt-6 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by Product Name, ID, or SKU"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
            value={filterColor}
            onChange={(e) => setFilterColor(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">All Colors</option>
            <option value="Natural">Natural</option>
            <option value="Pink">Pink</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Gray">Gray</option>
            <option value="Red">Red</option>
          </select>
          <select
            onChange={(e) => {
              const [field, direction] = e.target.value.split(":");
              setSortField(field);
              setSortDirection(direction);
            }}
            className="border p-2 rounded"
          >
            <option value="name:asc">Sort by Name (A-Z)</option>
            <option value="name:desc">Sort by Name (Z-A)</option>
            <option value="datePublished:asc">Sort by Date (Oldest)</option>
            <option value="datePublished:desc">Sort by Date (Newest)</option>
            <option value="stock:asc">Sort by Stock (Low to High)</option>
            <option value="stock:desc">Sort by Stock (High to Low)</option>
          </select>
        </div>
      </section>

      {/* Product Table Section */}
      <section className="mt-5 bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full text-left table-auto">
          <thead className="border-b sticky top-0">
            <tr>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Image</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Product Name</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Product ID</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Status</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Variant</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">SKU</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Color</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden sm:table-cell">Size</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden lg:table-cell">Shades</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden md:table-cell">Date Published</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Stock</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Price</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden lg:table-cell">Discount</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden sm:table-cell">Return Rate</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden sm:table-cell">Impression</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden sm:table-cell">CVR</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden md:table-cell">CTR</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap">Unit Sold</th>
              <th className="px-4 py-2 font-bold text-gray-600 whitespace-nowrap hidden sm:table-cell">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.sort(sortProducts).map((product, productIndex) => (
              <React.Fragment key={productIndex}>
                <tr
                  onClick={() => toggleDropdown(product.id)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <td className="px-4 py-2">
                    <Image src={humidifier} alt={product.name} width={50} height={50} className="rounded-md" />
                  </td>
                  <td className="px-4 py-2 font-bold text-gray-500 whitespace-nowrap">{product.name}</td>
                  <td className="px-4 py-2 font-bold text-gray-500 whitespace-nowrap">{product.id}</td>
                  <td className="px-4 py-2 text-green-500 whitespace-nowrap">{product.variants[0].status}</td>
                  <td className="px-4 py-2 font-bold text-gray-500 whitespace-nowrap">{product.variants[0].variantName}</td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">{product.variants[0].sku}</td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">{product.variants[0].color}</td>
                  <td className="px-4 py-2 hidden sm:table-cell whitespace-nowrap">{product.variants[0].sizes}</td>
                  <td className="px-4 py-2 hidden lg:table-cell whitespace-nowrap">{product.variants[0].shades}</td>
                  <td className="px-4 py-2 hidden md:table-cell whitespace-nowrap">{product.datePublished}</td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">{product.variants[0].stock}</td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">${product.variants[0].price}</td>
                  <td className="px-4 py-2 hidden lg:table-cell whitespace-nowrap">{product.discount}%</td>
                  <td className="px-4 py-2 hidden sm:table-cell whitespace-nowrap">{product.variants[0].metrics.returnRate}</td>
                  <td className="px-4 py-2 hidden sm:table-cell whitespace-nowrap">{product.variants[0].metrics.impression}</td>
                  <td className="px-4 py-2 hidden sm:table-cell whitespace-nowrap">{product.variants[0].metrics.conversionRate}</td>
                  <td className="px-4 py-2 hidden md:table-cell whitespace-nowrap">{product.variants[0].metrics.clickThroughRate}</td>
                  <td className="px-4 py-2 text-gray-500 whitespace-nowrap">{product.variants[0].metrics.sold}</td>
                  <td className="px-4 py-2 hidden sm:table-cell whitespace-nowrap">{product.category}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {openProductIds.includes(product.id) ? <FiChevronUp /> : <FiChevronDown />}
                  </td>
                </tr>
                {openProductIds.includes(product.id) &&
                  product.variants.slice(1).map((variant, variantIndex) => (
                    <tr key={variantIndex} className="bg-gray-50">
                      <td className="px-6 py-4">
                        <Image src={humidifier} alt={product.name} width={50} height={50} className="rounded-md" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold">{product.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{variant.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold">{variant.variantName}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{variant.sku}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{variant.color}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">{variant.sizes}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">{variant.shades}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">{product.datePublished}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{variant.stock}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">${variant.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">{product.discount}%</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">{variant.metrics.returnRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">{variant.metrics.impression}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">{variant.metrics.conversionRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">{variant.metrics.clickThroughRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{variant.metrics.sold}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Page;
