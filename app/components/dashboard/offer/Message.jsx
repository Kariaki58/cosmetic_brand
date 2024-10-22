const Message = () => {

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Message Content</h2>
      <form className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
            Title:
          </label>
          <input 
            type="text" 
            id="title" 
            placeholder="Enter title" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
          />
        </div>
        
        {/* Message Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message:
          </label>
          <textarea 
            id="message" 
            placeholder="Compose message" 
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        {/* Submit Button */}
        <div>
          <input 
            type="submit" 
            value="Submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 cursor-pointer transition duration-200 ease-in-out"
          />
        </div>
      </form>
    </div>
  );
};

export default Message;
