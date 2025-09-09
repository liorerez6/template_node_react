import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="What are you looking for?"
        className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Search pictures by title or artist"
      />
    </div>
  );
};

export default SearchBar;
