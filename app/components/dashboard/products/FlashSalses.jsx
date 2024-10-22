import React, { useState } from 'react';

const FlashSales = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 20.99, isFlashSale: false },
    { id: 2, name: 'Product B', price: 35.00, isFlashSale: false },
    { id: 3, name: 'Product C', price: 50.50, isFlashSale: false },
    // Add more products as needed
  ]);

  const toggleFlashSale = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, isFlashSale: !product.isFlashSale } : product
    ));
  };

  return (
    <div className="flash-sales container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Flash Sales</h2>
      <p className="mb-4">Select products to add to flash sales.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="product-card p-4 border border-gray-300 rounded-lg shadow-sm transition duration-200 hover:shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => toggleFlashSale(product.id)}
              className={`mt-4 p-2 rounded-md ${product.isFlashSale ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'} hover:bg-opacity-90`}
            >
              {product.isFlashSale ? 'Remove from Flash Sale' : 'Add to Flash Sale'}
            </button>
            {product.isFlashSale && (
              <span className="mt-2 inline-block text-xs text-green-600">In Flash Sale!</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
