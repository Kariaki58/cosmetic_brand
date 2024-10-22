"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const Cart = ({ isCartOpen, toggleCart }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 150,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 250,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase quantity of a cart item
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity of a cart item
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      {/* Cart Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={toggleCart}>
          <AiOutlineClose size={24} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              {/* Item Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                    <AiOutlineMinus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                    <AiOutlinePlus size={16} />
                </button>
            </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">${totalPrice}</span>
        </div>
        <button className="w-full bg-black hover:bg-[#FA9090] text-white py-3 rounded-lg font-semibold">
          Proceed to Checkout
        </button>
      </div>

      {/* Background Overlay */}
      {isCartOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Cart;
