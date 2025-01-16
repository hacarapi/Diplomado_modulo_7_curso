import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '5px', marginBottom: '10px' }}>
      {category}
    </h3>
  );
};

export default ProductCategoryRow;