"use client";

import { useState } from "react";
import OfferSettings from "@/app/components/dashboard/offer/OfferSettings";
import Message from "@/app/components/dashboard/offer/Message";
import TrackingResults from "@/app/components/dashboard/offer/TrackingResults";
import { Button } from "@/components/ui/button";
import Display from "@/app/components/dashboard/products/Display";


const page = () => {
    const [offerDetails, setOfferDetails] = useState({
      discountAmount: 0,
      couponCode: "",
      startDate: new Date(),
      endDate: new Date(),
      countdown: 60,
    });

    const [results, setResults] = useState({
      totalCouponsApplied: 150,
      totalItemsSold: 300,
      revenueGenerated: 5000,
      engagement: 75,
    });
  return (
    <div className="admin-offers-panel container mx-auto p-4 h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Offer Management</h1>
      <div className="flex gap-4 justify-center mb-6">  
        <Button>LAUCH OFFER</Button>
        <Button>Alert Costomers</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <OfferSettings offerDetails={offerDetails} setOfferDetails={setOfferDetails} />
        <Message />
      </div>
      <Display />
      <div className="my-10">
        <TrackingResults results={results} />
      </div>
    </div>
  )
}

export default page