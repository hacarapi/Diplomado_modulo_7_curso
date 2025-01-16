import React from 'react';

const SearchBar = ({ searchText, onSearchChange, selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothing">Clothing</option>
      </select>
    </div>
  );
};

export default SearchBar;