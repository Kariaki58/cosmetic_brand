"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import CreatableSelect from "react-select/creatable";
import { LiaTimesSolid } from "react-icons/lia";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa"


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const sizeOptions = [
  { value: "30ml", label: "30ml" },
  { value: "100ml", label: "100ml" },
  { value: "300ml", label: "300ml" },
];

const categoryOptions = [
  { value: "fruit", label: "Fruit" },
  { value: "vegetable", label: "Vegetable" },
  { value: "dairy", label: "Dairy" },
];

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "black", label: "Black" },
];

const shadeOptions = [
  {
    value: "black", label: "Red"
  },
  {
    value: "Mint", label: "Mint"
  }
]

const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strikethrough", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "code-block", "video"],
    [{ align: [] }],
    ["clean"],
    ["align"],
  ],
};

const quillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "align",
  "link",
  "image",
  "video",
];

const Modal = ({ setOpenModal }) => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    description: "",
    variants: [],
    category: null,
    basePrice: "",
  });

  const [variant, setVariant] = useState({
    size: null,
    color: null,
    shades: null,
    discount: "",
    price: "",
    stock: "",
    variantImages: [],
  });

  const [editIndex, setEditIndex] = useState(null); // Tracks if we're editing an existing variant

  // Handle product details change
  const onChangeProductDetails = (name, value) => {
    setProductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeVariant = (name, value) => {
    setVariant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setVariant((prev) => ({
        ...prev,
        variantImages: [...prev.variantImages, ...acceptedFiles],
      }));
    },
    [variant.variantImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const addVariant = () => {
    if (editIndex !== null) {
      const updatedVariants = [...productDetails.variants];
      updatedVariants[editIndex] = variant;
      setProductDetails((prev) => ({ ...prev, variants: updatedVariants }));
      setEditIndex(null); // Reset edit mode
    } else {
      setProductDetails((prev) => ({
        ...prev,
        variants: [...prev.variants, variant],
      }));
    }
    // Reset the variant state after adding or editing
    setVariant({ size: null, color: null, price: "", stock: "", variantImages: [] });
  };

  const editVariant = (index) => {
    setVariant(productDetails.variants[index]);
    setEditIndex(index);
  };

  const deleteVariant = (index) => {
    const updatedVariants = productDetails.variants.filter((_, idx) => idx !== index);
    setProductDetails((prev) => ({ ...prev, variants: updatedVariants }));
  };

  const removeImage = (index) => {
    setVariant((prev) => ({
      ...prev,
      variantImages: prev.variantImages.filter((_, idx) => idx !== index),
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
  };

  return (
    <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg h-screen overflow-y-auto">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Upload Product</h2>
        <LiaTimesSolid
          size={35}
          className="cursor-pointer"
          onClick={() => setOpenModal((prev) => !prev)}
        />
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label htmlFor="productName" className="block text-gray-900">Product Name</label>
            <input
              id="productName"
              type="text"
              value={productDetails.productName}
              onChange={(e) => onChangeProductDetails("productName", e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
            />
          </div>

          <div>
            <label htmlFor="basePrice" className="block text-gray-900">Base Price (default)</label>
            <input
              id="basePrice"
              type="number"
              value={productDetails.basePrice}
              onChange={(e) => onChangeProductDetails("basePrice", e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              required // Added required attribute
            />
          </div>
          <div>
            <label htmlFor="discount" className="block text-gray-900">Discount</label>
            <input
              id="discount"
              type="number"
              value={productDetails.discount}
              onChange={(e) => onChangeProductDetails("discount", e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              required // Added required attribute
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-900">Category:</label>
            <CreatableSelect
              id="category"
              options={categoryOptions}
              value={variant.category}
              onChange={(selected) => onChangeVariant("category", selected)}
              className="mt-1"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-gray-900">Description</label>
          <ReactQuill
            id="description"
            value={productDetails.description}
            onChange={(value) => onChangeProductDetails("description", value)}
            modules={quillModules}
            formats={quillFormats}
            className="w-full mt-1 p-2 rounded-md focus:ring-gray-900 focus:border-gray-900 h-52"
          />
        </div>
        <div className="h-10"></div>
        {/* Variant Section */}
        <div className="mt-4 p-4 border rounded-md">
          <h4 className="text-lg font-semibold">Product Variants:</h4>

          {/* Variant Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label htmlFor="variantSize" className="block text-gray-900">Size:</label>
              <CreatableSelect
                id="variantSize"
                options={sizeOptions}
                value={variant.size}
                onChange={(selected) => onChangeVariant("size", selected)}
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="variantColor" className="block text-gray-900">Color:</label>
              <CreatableSelect
                id="variantColor"
                options={colorOptions}
                value={variant.color}
                onChange={(selected) => onChangeVariant("color", selected)}
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="variantPrice" className="block text-gray-900">Variant Price</label>
              <input
                id="variantPrice"
                type="number"
                value={variant.price}
                onChange={(e) => onChangeVariant("price", e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                required
              />
            </div>

            <div>
              <label htmlFor="variantStock" className="block text-gray-900">Variant Stock</label>
              <input
                id="variantStock"
                type="number"
                value={variant.stock}
                onChange={(e) => onChangeVariant("stock", e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="shades" className="block text-gray-900">Shades:</label>
              <CreatableSelect
                id="shades"
                options={shadeOptions}
                value={variant.shades}
                onChange={(selected) => onChangeVariant("shades", selected)}
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="copyLink"
                className="block text-gray-900"
              >
                Copy Link
              </label>
              <div className="relative">
                <input
                  id="copyLink"
                  type="text"
                  value="https://example.com"
                  placeholder="https://example.com"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  readOnly
                />
                <button
                  className="absolute right-2 top-2 bg-gray-900 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                  onClick={() => navigator.clipboard.writeText(document.getElementById('copyLink').value)}
                >
                  <FaRegCopy size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Variant Images Upload */}
          <div className="mt-4">
            <label className="block text-gray-900">Variant Images:</label>
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-300 p-4 rounded-md text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop images here, or click to select images</p>
            </div>
            <div className="flex space-x-2 mt-4">
              {variant.variantImages.map((file, idx) => (
                <div className="relative">
                  <Image
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt={`Variant image ${idx + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md object-cover"
                  />
                  <FaTrash onClick={() => removeImage(idx)} className="absolute top-2 right-2 text-red-600" size={15}/>
                </div>
              ))}
            </div>
          </div>

          {/* Add/Edit Variant Button */}
          <button
            type="button"
            className="mt-4 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-500"
            onClick={addVariant}
          >
            {editIndex !== null ? "Save Changes" : "Add Variant"}
          </button>

          {/* Display Added Variants */}
          <div className="mt-6">
            <h5 className="text-lg font-semibold">Existing Variants:</h5>
            <ul className="space-y-2">
              {productDetails.variants.map((variant, index) => (
                <li key={index} className="flex justify-between items-center p-2 border rounded-md">
                  <div>
                    <p>{variant.size?.label} - {variant.color?.label}</p>
                    <p>Price: {variant.price}, Stock: {variant.stock}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => editVariant(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteVariant(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Final Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Modal;
