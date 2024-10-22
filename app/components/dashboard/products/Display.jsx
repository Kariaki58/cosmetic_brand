"use client";
import { useState } from "react";
import humidifier from "@/app/assets/humidifier.jpg";
import Image from "next/image";


const Display = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const products = [
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "active",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "active",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "bouncing",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "active",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "active",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "active",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "onsale",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "active",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "inactive",
        },
        {
          name: "Humidifier",
          id: "ABD183934",
          sold: "200+",
          stock: 50,
          price: "$45",
          status: "pending",
        }
      ]
    const handleSelectProduct = (index) => {
        if (selectedProducts.includes(index)) {
            setSelectedProducts(selectedProducts.filter(i => i !== index));
        } else {
            setSelectedProducts([...selectedProducts, index]);
        }
    };

  return (
    <div className="overflow-x-auto bg-white rounded-xl mt-10 mb-10">
        <h1 className="text-center py-2 font-bold text-xl text-gray-700">Add products to offer</h1>
        <table className="min-w-full rounded-lg">
          <thead className="border-b">
            <tr>
              <th className="text-left px-4 py-2">
                <input type="checkbox" onChange={(e) => {
                  const allChecked = e.target.checked;
                  if (allChecked) {
                    setSelectedProducts(products.map((_, i) => i));
                  } else {
                    setSelectedProducts([]);
                  }
                }} />
              </th>
              <th className="px-4 py-2 text-left text-gray-500">
                <div className="flex items-center gap-3">
                  <p className="font-bold">Product Name</p>
                </div>
              </th>
              <th className="px-4 py-2 text-left font-bold text-gray-500">Product ID</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(index)}
                    onChange={() => handleSelectProduct(index)}
                  />
                </td>
                <td className="px-4 py-2 flex items-center gap-4">
                  <Image src={humidifier} width={50} height={50} alt="product image" className="rounded" />
                  <p className="font-bold text-gray-600">{product.name}</p>
                </td>
                <td className="px-4 py-2">
                  <p className="font-bold text-gray-400">#{product.id}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Display