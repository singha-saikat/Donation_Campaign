import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="relative w-4/5 md:w-2/5 mx-auto mt-4 md:mt-20">
      <input
        className="text-black w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#FF444A] focus:border-[#FF444A]"
        type="text"
        placeholder="Search here...."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-[#FF444A] border border-gray-300 rounded-r-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
