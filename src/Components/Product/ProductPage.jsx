import React, { useState } from 'react';
import ProductTable from './ProductTable';

const ProductPage = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <ProductTable searchText={searchText} selectedCategory={selectedCategory} />
    </div>
  );
};

export default ProductPage;