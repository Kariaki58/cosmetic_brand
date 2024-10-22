const TrackingResults = ({ results }) => {
    return (
      <div className="tracking-results container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Track Offer Performance</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Coupons Applied</p>
            <h3 className="text-2xl font-bold">{results.totalCouponsApplied}</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Items Sold</p>
            <h3 className="text-2xl font-bold">{results.totalItemsSold}</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Revenue Generated</p>
            <h3 className="text-2xl font-bold">${results.revenueGenerated}</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Offer Engagement</p>
            <h3 className="text-2xl font-bold">{results.engagement}%</h3>
          </div>
        </div>
      </div>
    );
};


export default TrackingResults;