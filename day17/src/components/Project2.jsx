// Project2.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project2 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setProduct(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product || !product.id) return <p>Product not found.</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default Project2;
