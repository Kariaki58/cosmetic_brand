const NewsLetterFooter = () => {
  return (
    <section className='container mx-auto px-3 py-10 bg-gradient-to-r from-pink-500 to-pink-300 rounded-lg'>
      <h2 className='text-3xl font-bold text-black text-center mb-4'>
        Sign up now & get 10% off
      </h2>
      <p className='text-gray-800 text-center mb-6 text-base'>
        Subscribe to our emails (they’re super fun, promise) and get 15% off your first online order.
      </p>
      <div className='flex justify-center mt-20'>
        <input
          type='email'
          placeholder='Enter your email'
          className='px-4 py-4 rounded-l-lg focus:outline-none'
        />
        <button className='bg-white text-pink-500 px-4 py-2 rounded-r-lg hover:bg-pink-200 transition duration-300'>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetterFooter;
