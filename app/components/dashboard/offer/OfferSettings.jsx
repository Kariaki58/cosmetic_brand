"use client";

import { DateTime } from "luxon";
import { useState } from "react";

const OfferSettings = () => {
  const [offerType, setOfferType] = useState("flashSale");
  const [offerDetails, setOfferDetails] = useState({
    discountAmount: 0,
    couponCode: "",
    adDetails: "",
    countdown: 60, // for Flash Sale in minutes
    startDate: DateTime.now(), // Luxon DateTime for Ads and Flash Sale
    endDate: DateTime.now().plus({ days: 1 }), // Luxon DateTime for Ads and Flash Sale
  });

  const handleOfferChange = (e) => {
    setOfferType(e.target.value);
    // Reset the specific fields when the offer type changes
    setOfferDetails({
      discountAmount: 0,
      couponCode: "",
      adDetails: "",
      countdown: 60,
      startDate: DateTime.now(),
      endDate: DateTime.now().plus({ days: 1 }),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle date inputs by converting them to Luxon DateTime objects
    if (name === "startDate" || name === "endDate") {
      setOfferDetails({
        ...offerDetails,
        [name]: DateTime.fromISO(value), // Convert ISO string to Luxon DateTime
      });
    } else {
      setOfferDetails({ ...offerDetails, [name]: value });
    }
  };

  // Function to generate a random coupon code
  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let couponCode = '';
    for (let i = 0; i < 8; i++) {
      couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setOfferDetails({ ...offerDetails, couponCode });
  };

  return (
    <div className="offer-settings container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Up Your Offers</h2>

      {/* Select Offer Type */}
      <div className="mb-6">
        <label htmlFor="offerType" className="block mb-2 text-sm font-medium text-gray-900">
          Select Offer Type
        </label>
        <select
          id="offerType"
          value={offerType}
          onChange={handleOfferChange}
          className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
        >
          <option value="flashSale">Flash Sale</option>
          <option value="coupon">Coupon</option>
          <option value="ads">Page Ads</option>
        </select>
      </div>

      {/* Flash Sale Settings */}
      {offerType === "flashSale" && (
        <>
          <div className="mb-6">
            <label htmlFor="discountAmount" className="block mb-2 text-sm font-medium text-gray-900">
              Discount Amount (%)
            </label>
            <input
              type="number"
              id="discountAmount"
              name="discountAmount"
              value={offerDetails.discountAmount}
              onChange={handleInputChange}
              className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              placeholder="Enter Discount Percentage"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="countdown" className="block mb-2 text-sm font-medium text-gray-900">
              Countdown (Minutes)
            </label>
            <input
              type="number"
              id="countdown"
              name="countdown"
              value={offerDetails.countdown}
              onChange={handleInputChange}
              className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              placeholder="Set Countdown in Minutes"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900">
                Start Date
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={offerDetails.startDate.toISO().substring(0, 16)} // Convert to ISO format
                onChange={handleInputChange}
                className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900">
                End Date
              </label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={offerDetails.endDate.toISO().substring(0, 16)} // Convert to ISO format
                onChange={handleInputChange}
                className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </>
      )}

      {/* Coupon Settings */}
      {offerType === "coupon" && (
        <>
          <div className="mb-6">
            <label htmlFor="couponCode" className="block mb-2 text-sm font-medium text-gray-900">
              Coupon Code
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="couponCode"
                name="couponCode"
                value={offerDetails.couponCode}
                onChange={handleInputChange}
                className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md mr-2"
                placeholder="Enter Coupon Code"
              />
              <button
                type="button"
                onClick={generateCouponCode}
                className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Generate
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="discountAmount" className="block mb-2 text-sm font-medium text-gray-900">
              Discount Amount (%)
            </label>
            <input
              type="number"
              id="discountAmount"
              name="discountAmount"
              value={offerDetails.discountAmount}
              onChange={handleInputChange}
              className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              placeholder="Enter Discount Percentage"
            />
          </div>
        </>
      )}

      {/* Ads Settings */}
      {offerType === "ads" && (
        <>
          <div className="mb-6">
            <label htmlFor="adDetails" className="block mb-2 text-sm font-medium text-gray-900">
              Ad Details
            </label>
            <input
              type="text"
              id="adDetails"
              name="adDetails"
              value={offerDetails.adDetails}
              onChange={handleInputChange}
              className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              placeholder="Enter ad details"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="discountAmount" className="block mb-2 text-sm font-medium text-gray-900">
              Discount Amount (%)
            </label>
            <input
              type="number"
              id="discountAmount"
              name="discountAmount"
              value={offerDetails.discountAmount}
              onChange={handleInputChange}
              className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              placeholder="Enter Discount Percentage"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-900">
                Start Date
              </label>
              <input
                type="datetime-local"
                id="startDate"
                name="startDate"
                value={offerDetails.startDate.toISO().substring(0, 16)} // Convert to ISO format
                onChange={handleInputChange}
                className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-900">
                End Date
              </label>
              <input
                type="datetime-local"
                id="endDate"
                name="endDate"
                value={offerDetails.endDate.toISO().substring(0, 16)} // Convert to ISO format
                onChange={handleInputChange}
                className="block w-full p-3 text-gray-700 border border-gray-300 rounded-md"
              />
            </div>
            <div>
                <input 
                  type="submit" 
                  value="Submit" 
                  className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer transition duration-200 ease-in-out"
                />
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OfferSettings;
