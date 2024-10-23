"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useDropzone } from "react-dropzone";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CreatableSelect from "react-select/creatable";
import { LiaTimesSolid } from "react-icons/lia";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const sizeOptions = [
  { value: "30ml", label: "30ml" },
  { value: "100ml", label: "100ml" },
  { value: "300L", label: "300L" },
];

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "black", label: "Black" },
];

const categoryOptions = [
  { value: "face", label: "Face" },
  { value: "hair", label: "Hair" },
  { value: "skin", label: "Skin" },
  { value: "palm", label: "Palm" },
];

const shadeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "glossy", label: "Glossy" },
  { value: "matte", label: "Matte" },
];

const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strikethrough", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "code-block", "video"],
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

const ItemTypes = {
  IMAGE: "image",
};

// Image Component for Dragging with Delete Icon
const Image = ({ file, idx, onDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.IMAGE,
    item: { file, idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`relative w-16 h-16 bg-gray-200 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <img
        src={URL.createObjectURL(file)}
        alt={`preview-${idx}`}
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
        onClick={() => onDelete(idx)} // Call onDelete function with image index
      >
        <LiaTimesSolid size={12} />
      </button>
    </div>
  );
};

const Modal = ({ setOpenModal }) => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    sizes: [],
    shades: [],
    brands: "",
    colors: [],
    category: null,
    stock: "",
    price: "",
    description: "",
    images: [],
    folders: [[]],
  });

  const onChangeProductDetails = (name, value) => {
    setProductDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setProductDetails((prev) => ({
        ...prev,
        images: [...prev.images, ...acceptedFiles],
      }));
    },
    [productDetails.images]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleDeleteImage = (imageIdx) => {
    setProductDetails((prev) => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== imageIdx),
    }));
  };

  const addImageToFolder = (folderIdx, item) => {
    const updatedFolders = [...productDetails.folders];
    updatedFolders[folderIdx] = [...updatedFolders[folderIdx], item.file];

    const filteredImages = productDetails.images.filter(
      (_, idx) => idx !== item.idx
    );

    setProductDetails((prev) => ({
      ...prev,
      folders: updatedFolders,
      images: filteredImages,
    }));
  };

  const removeImageFromFolder = (folderIdx, imageIdx) => {
    const updatedFolders = [...productDetails.folders];
    const removedImage = updatedFolders[folderIdx][imageIdx];

    updatedFolders[folderIdx] = updatedFolders[folderIdx].filter(
      (_, idx) => idx !== imageIdx
    );

    setProductDetails((prev) => ({
      ...prev,
      folders: updatedFolders,
      images: [...prev.images, removedImage],
    }));
  };

  const handleAddFolder = () => {
    setProductDetails((prev) => ({
      ...prev,
      folders: [...prev.folders, []],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
    // Add form submission logic here
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg h-screen overflow-y-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Upload Product
          </h2>
          <LiaTimesSolid
            size={35}
            className="cursor-pointer"
            onClick={() => setOpenModal((prev) => !prev)}
          />
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-950">Product Name:</label>
              <input
                type="text"
                value={productDetails.productName}
                onChange={(e) =>
                  onChangeProductDetails("productName", e.target.value)
                }
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
            <div>
              <label className="block text-gray-950">Size:</label>
              <CreatableSelect
                isMulti
                options={sizeOptions}
                onChange={(selected) =>
                  onChangeProductDetails("sizes", selected)
                }
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-050">Shades:</label>
              <CreatableSelect
                isMulti
                options={shadeOptions}
                onChange={(selected) =>
                  onChangeProductDetails("shades", selected)
                }
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-950">Brands:</label>
              <input
                type="text"
                value={productDetails.brands}
                onChange={(e) =>
                  onChangeProductDetails("brands", e.target.value)
                }
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
            <div>
              <label className="block text-gray-950">Color:</label>
              <CreatableSelect
                isMulti
                options={colorOptions}
                onChange={(selected) =>
                  onChangeProductDetails("colors", selected)
                }
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-950">Category:</label>
              <CreatableSelect
                options={categoryOptions}
                onChange={(selected) =>
                  onChangeProductDetails("category", selected)
                }
                className="mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-950">Available Stock:</label>
              <input
                type="number"
                value={productDetails.stock}
                onChange={(e) =>
                  onChangeProductDetails("stock", e.target.value)
                }
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
            <div>
              <label className="block text-gray-950">Price:</label>
              <input
                type="number"
                value={productDetails.price}
                onChange={(e) =>
                  onChangeProductDetails("price", e.target.value)
                }
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-gray-950">Product Images:</label>
              <div
                {...getRootProps()}
                className="dropzone border-dashed border-2 border-gray-300 p-4 rounded-md text-center mb-4 cursor-pointer"
              >
                <input {...getInputProps()} />
                <p>
                  Drag 'n' drop images here, or click to select multiple images
                </p>
              </div>
              <div className="flex space-x-2">
                {productDetails.images.map((file, idx) => (
                  <Image
                    file={file}
                    idx={idx}
                    key={idx}
                    onDelete={handleDeleteImage} // Pass the delete handler
                  />
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-gray-950">Description:</label>
              <ReactQuill
                value={productDetails.description}
                onChange={(value) =>
                  onChangeProductDetails("description", value)
                }
                modules={quillModules}
                formats={quillFormats}
                required
                className="w-full mt-1 p-2 border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 h-52 mb-8"
              />
            </div>
          </div>
          <div className="h-10"></div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Upload Product
          </button>
        </form>
      </div>
    </DndProvider>
  );
};

export default Modal;
