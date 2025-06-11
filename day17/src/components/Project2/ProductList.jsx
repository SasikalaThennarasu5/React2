import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './productsdata';

const ProductList = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <Link to={`/product/${product.id}`}>
            {product.name} - ₹{product.price}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;