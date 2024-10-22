import Image from 'next/image';
import humidifier from '@/app/assets/humidifier.jpg';

const TrendingProducts = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Trending Products</h2>
        <button className="p-2 bg-black text-white rounded-xl">show all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Product Image</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Product ID</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Sold</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Available Stock</th>
              <th className="px-4 py-2 text-left font-medium text-gray-700">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">
                <Image
                  src={humidifier}
                  width={50}
                  height={50}
                  alt="product image"
                  className="rounded"
                />
              </td>
              <td className="px-4 py-2">
                <p className="font-medium text-gray-700">ABD183934</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-600">200+</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-green-600">50</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-800">$45</p>
              </td>
            </tr>

            {/* Example of additional products - Copy and modify this block for more rows */}
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">
                <Image
                  src={humidifier}
                  width={50}
                  height={50}
                  alt="product image"
                  className="rounded"
                />
              </td>
              <td className="px-4 py-2">
                <p className="font-medium text-gray-700">ABD183935</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-600">150+</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-green-600">30</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-800">$60</p>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">
                <Image
                  src={humidifier}
                  width={50}
                  height={50}
                  alt="product image"
                  className="rounded"
                />
              </td>
              <td className="px-4 py-2">
                <p className="font-medium text-gray-700">ABD183935</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-600">150+</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-green-600">30</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-800">$60</p>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">
                <Image
                  src={humidifier}
                  width={50}
                  height={50}
                  alt="product image"
                  className="rounded"
                />
              </td>
              <td className="px-4 py-2">
                <p className="font-medium text-gray-700">ABD183935</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-600">150+</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-green-600">30</p>
              </td>
              <td className="px-4 py-2">
                <p className="text-gray-800">$60</p>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProducts;
