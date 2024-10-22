import { MdOutlineAddShoppingCart } from 'react-icons/md';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Wishlist = () => {
  // Sample wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 150,
      image: 'https://via.placeholder.com/150',
      inStock: true,
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 250,
      image: 'https://via.placeholder.com/150',
      inStock: false,
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 80,
      image: 'https://via.placeholder.com/150',
      inStock: true,
    },
  ];

  return (
    <div className='min-h-screen'>
      <Nav />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 ${
                item.inStock ? 'bg-white' : 'bg-gray-100'
              } overflow-hidden`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-2">${item.price}</p>
                <p className={`text-sm font-medium ${
                  item.inStock ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
                <button
                  className={`mt-4 py-2 w-full rounded-lg text-white font-semibold ${
                    item.inStock ? 'bg-black hover:bg-[#FA9090]' : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!item.inStock}
                >
                  <MdOutlineAddShoppingCart className="inline-block mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
