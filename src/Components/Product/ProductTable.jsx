import React, { useState } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const products = [
    { category: 'Electronics', price: '$199', stocked: true, name: 'iPhone' },
    { category: 'Electronics', price: '$99', stocked: true, name: 'Headphones' },
    { category: 'Electronics', price: '$254', stocked: true, name: 'radio' },
    { category: 'Furniture', price: '$399', stocked: false, name: 'Chair' },
    { category: 'Furniture', price: '$715', stocked: true, name: 'desk' },
    { category: 'Furniture', price: '$531', stocked: true, name: 'easy chair' },
    { category: 'Clothing', price: '$29', stocked: true, name: 'T-Shirt' },
    { category: 'Clothing', price: '$77', stocked: false, name: 'Pants' },
    { category: 'Clothing', price: '$43', stocked: true, name: 'shirt' },
];

const ProductTable = ({ searchText, selectedCategory }) => {
  const [showOnlyStocked, setShowOnlyStocked] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      (product.name.toLowerCase().includes(searchText.toLowerCase()) || !searchText) &&
      (product.category === selectedCategory || !selectedCategory) &&
      (!showOnlyStocked || product.stocked)
  );

  const categories = [...new Set(filteredProducts.map((product) => product.category))];

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={showOnlyStocked}
            onChange={(e) => setShowOnlyStocked(e.target.checked)}
          />
          Only show products in stock
        </label>
      </div>

      {categories.map((category) => (
        <div key={category} style={{ margin: '20px 0', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
          <ProductCategoryRow category={category} />
          <div>
            {filteredProducts
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductRow key={product.name} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;