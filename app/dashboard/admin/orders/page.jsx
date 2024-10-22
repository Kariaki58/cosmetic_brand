"use client";
import { useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      item: "Foundation",
      shades: "Light 01",
      sizes: "Full size (30ml)",
      colors: "Natural",
      price: 30.0,
      userName: "Anonymous",
      sku: "APE1938",
      quantity: 2,
      status: "Pending",
    },
    {
      id: 2,
      item: "Lipstick",
      shades: "Nude Pink",
      sizes: "Standard",
      colors: "Pink",
      userName: "User123",
      sku: "LPS1234",
      price: 18.0,
      quantity: 1,
      status: "Paid",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const handleQuantityChange = (id, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: value } : product
      )
    );
  };

  const handleSelectChange = (id, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, status: value } : product
      )
    );
  };

  const calculateTotal = (price, quantity) => price * quantity;

  const calculateTotals = () => {
    const totalOrders = products.length;
    const totalDelivered = products.filter((p) => p.status === "Delivered").length;
    const totalPending = products.filter((p) => p.status === "Pending").length;
    const totalPaid = products.filter((p) => p.status === "Paid").length;
    const totalCancelled = products.filter((p) => p.status === "Cancelled").length;

    return {
      totalOrders,
      totalDelivered,
      totalPending,
      totalPaid,
      totalCancelled,
    };
  };

  const totals = calculateTotals();

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.status === filter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Order Summary</h1>

      {/* Grid Cards for Total Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-blue-600">Total Orders</h2>
          <p className="text-3xl font-bold">{totals.totalOrders}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-green-600">Total Delivered</h2>
          <p className="text-3xl font-bold">{totals.totalDelivered}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-yellow-600">Total Pending</h2>
          <p className="text-3xl font-bold">{totals.totalPending}</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-orange-600">Total Paid</h2>
          <p className="text-3xl font-bold">{totals.totalPaid}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
          <h2 className="font-semibold text-red-600">Total Canceled</h2>
          <p className="text-3xl font-bold">{totals.totalCancelled}</p>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="flex justify-between items-center mb-6">
        <label htmlFor="status-filter" className="font-semibold text-gray-700">
          Filter by Status:
        </label>
        <select
          id="status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 text-gray-600"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Order Summary Table */}
      <section className="bg-white rounded-xl shadow-md overflow-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Image</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Product Name</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">User</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Total Amount</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Qty</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Color</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Shades</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Size</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">SKU</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Status</th>
              <th className="py-4 px-6 text-left text-gray-600 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition duration-150">
                <td className="py-4 px-6">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src="https://via.placeholder.com/150"
                    alt="Product"
                  />
                </td>
                <td className="py-4 px-6 whitespace-nowrap font-semibold text-gray-700">{order.item}</td>
                <td className="py-4 px-6 whitespace-nowrap font-semibold text-blue-600 underline cursor-pointer">
                  {order.userName}
                </td>
                <td className="py-4 px-6 whitespace-nowrap font-semibold text-gray-700">${calculateTotal(order.price, order.quantity).toFixed(2)}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-700">{order.quantity}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-700">{order.colors}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-700">{order.shades}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-700">{order.sizes}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-700">{order.sku}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <select
                    value={order.status}
                    onChange={(e) => handleSelectChange(order.id, e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 text-gray-600"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <button
                    onClick={() => alert(`View User: ${order.userName}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-150"
                  >
                    View User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Page;
