"use client";

import React, { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';
import CreatableSelect from 'react-select/creatable';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const sizeOptions = [
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'L', label: 'L' },
  { value: 'XL', label: 'XL' },
];

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'black', label: 'Black' },
];

const categoryOptions = [
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'home', label: 'Home' },
  { value: 'toys', label: 'Toys' },
];

// Quill Modules and Formats (without better-table for now)
const quillModules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strikethrough', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'code-block', 'video'],
    ['clean'],
    ['align'],
  ],
};

const quillFormats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'list',
  'bullet',
  'align',
  'link',
  'image',
  'video',
];

const Modal = () => {
  const [productName, setProductName] = useState('');
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState(null);
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  }, [images]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  useEffect(() => {
    const loadQuillModules = async () => {
      if (typeof window !== 'undefined') {
        const Quill = (await import('quill')).default;
        const QuillBetterTable = (await import('quill-better-table')).default;

        // Register the QuillBetterTable module
        Quill.register({
          'modules/better-table': QuillBetterTable
        });

        // Add the better-table module to quillModules
        quillModules.table = {
          // Configuration of the table module if needed
          operationMenu: {
            items: {
              unmergeCells: { text: 'Unmerge cells' },
              insertColumnRight: { text: 'Insert column to the right' },
              insertColumnLeft: { text: 'Insert column to the left' },
              insertRowUp: { text: 'Insert row above' },
              insertRowDown: { text: 'Insert row below' },
              deleteColumn: { text: 'Delete column' },
              deleteRow: { text: 'Delete row' },
              deleteTable: { text: 'Delete table' },
            },
          },
        };

        quillFormats.push('table');
      }
    };

    loadQuillModules();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      productName,
      sizes,
      colors,
      category,
      stock,
      price,
      description,
      images,
    };
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Upload Product</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-950">Product Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-950">Size:</label>
            <CreatableSelect
              isMulti
              options={sizeOptions}
              onChange={setSizes}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-950">Color:</label>
            <CreatableSelect
              isMulti
              options={colorOptions}
              onChange={setColors}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-950">Category:</label>
            <CreatableSelect
              options={categoryOptions}
              onChange={setCategory}
              className="mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-950">Available Stock:</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-950">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              <p>Drag 'n' drop images here, or click to select multiple images</p>
            </div>
            <div className="flex space-x-2">
              {images.map((file, idx) => (
                <div key={idx} className="w-16 h-16 bg-gray-200">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-950">Description:</label>
            <ReactQuill
              value={description}
              onChange={setDescription}
              modules={quillModules}
              formats={quillFormats}
              required
              className="w-full mt-1 p-2 border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900 h-52 mb-8"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Modal;
