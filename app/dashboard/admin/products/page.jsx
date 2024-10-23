"use client";

import React, { useState } from "react";
import { BiExport } from "react-icons/bi";
import { FaFilter, FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Papa from "papaparse";
import Image from 'next/image';
import humidifier from '@/app/assets/humidifier.jpg';
import Paggination from "@/app/components/dashboard/Paggination";
import Modal from "./Modal";


const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const productsPerPage = 5;

  const [products, setProducts] = useState([
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
    { name: "Humidifier", id: "ABD183934", sold: "200+", stock: 50, price: "$45", status: "active" },
  ]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleFilter = (e) => setFilterTerm(e.target.value);
  const handleEditClick = (index) => setEditIndex(editIndex === index ? null : index);
  
  const handleInputChange = (e, field, index) => {
    const newProducts = [...products];
    newProducts[index][field] = e.target.value;
    setProducts(newProducts);
  };

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending": return "bg-yellow-100 text-yellow-600";
      case "active": return "bg-green-100 text-green-600";
      case "inactive": return "bg-gray-100 text-gray-600";
      case "onsale": return "bg-blue-100 text-blue-600";
      case "bouncing": return "bg-orange-100 text-orange-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const handleSelectProduct = (index) => {
    setSelectedProducts(selectedProducts.includes(index)
      ? selectedProducts.filter((i) => i !== index)
      : [...selectedProducts, index]
    );
  };

  const handleBulkDelete = () => {
    const newProducts = products.filter((_, index) => !selectedProducts.includes(index));
    setProducts(newProducts);
    setSelectedProducts([]);
  };

  const handleExportCSV = () => {
    const filteredProducts = products.map(({ name, id, sold, stock, price, status }) => ({
      name, id, sold, stock, price, status,
    }));
    const csv = Papa.unparse(filteredProducts);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "products.csv");
    link.click();
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products.filter(
    (product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(
    (product) => !filterTerm || product.status.toLowerCase() === filterTerm.toLowerCase()
  );

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 h-screen overflow-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
        <div className="flex items-center space-x-4">
          <Button onClick={handleBulkDelete} className="bg-red-600 hover:bg-red-800">
            Delete
          </Button>
          <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-600" />
            <select
              onChange={handleFilter}
              className="p-2 border rounded-md border-gray-300"
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="onsale">On Sale</option>
              <option value="pending">Pending</option>
              <option value="bouncing">Bouncing</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            <BiExport />
            <p>Export</p>
          </button>
          <button onClick={() => {setOpenModal(prev => !prev)}} className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            <MdAdd />
            <p>Upload Product</p>
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl mt-10 mb-10">
        <table className="min-w-full rounded-lg">
          <thead className="border-b">
            <tr>
              <th className="text-left px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const allChecked = e.target.checked;
                    if (allChecked) {
                      setSelectedProducts(products.map((_, i) => i));
                    } else {
                      setSelectedProducts([]);
                    }
                  }}
                />
              </th>
              <th className="px-4 py-2 text-left text-gray-500">
                <div className="flex items-center gap-3">
                  <p className="font-bold">Product Name</p>
                  <input
                    type="text"
                    placeholder="Search by name or ID..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="ml-2 p-1 placeholder:font-thin rounded-md border-b outline-none focus:outline-none"
                  />
                </div>
              </th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Product ID</th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Sold</th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Stock</th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Price</th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Status</th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(index)}
                    onChange={() => handleSelectProduct(index)}
                  />
                </td>
                <td className="px-4 py-2 text-left">
                  <div className="flex items-center gap-4">
                    <Image src={humidifier} width={50} height={50} className="rounded-full" />
                    <p className="font-bold">{product.name}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-left">{product.id}</td>
                <td className="px-4 py-2 text-left">{product.sold}</td>
                <td className="px-4 py-2 text-left">
                  {product.stock}
                </td>
                <td className="px-4 py-2 text-left">
                  {product.price}
                </td>
                <td className="px-4 py-2 text-left">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-left">
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleEditClick(index)}
                      className="bg-blue-600 hover:bg-blue-800"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      onClick={() => handleDeleteProduct(index)}
                      className="bg-red-600 hover:bg-red-800"
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Modal setOpenModal={setOpenModal} />
        </div>
      )}

      {/* Pagination */}
      <Paggination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Page;
