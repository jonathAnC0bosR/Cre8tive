import React, { useState } from "react";
import { BsSearch } from "react-icons/bs"

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        className="px-4 py-2 w-72 rounded-l border text-black text-base"
      />
      <button
        className="bg-zinc-800 p-2 rounded-r"
        onClick={handleSearch}
      >
        <span><BsSearch size={'2em'} color="pink"/></span>
      </button>
    </div>
  );
};

export default SearchBar;
