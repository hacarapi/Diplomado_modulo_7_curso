import React from 'react';

const ProductRow = ({ product }) => {
  const nameStyle = product.stocked ? {} : { color: 'red' };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
      <span style={{ ...nameStyle }}>{product.name}</span>
      <span>{product.price}</span>
    </div>
  );
};

export default ProductRow;