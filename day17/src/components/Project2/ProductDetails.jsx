
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductsData';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (isNaN(id)) return <p style={{ color: 'red', textAlign: 'center' }}>Invalid ID: Must be a number</p>;
  if (!product) return <p style={{ color: 'red', textAlign: 'center' }}>Product not found</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetails;