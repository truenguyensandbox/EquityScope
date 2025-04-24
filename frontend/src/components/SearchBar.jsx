function SearchBar() {
    return (
      <div className="w-full">
        <input
          type="text"
          placeholder="Search for a company or ticker (e.g., AAPL, MSFT)..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
    );
  }
  
  export default SearchBar;
  