// src/components/Project5.jsx
import React, { useState, useEffect } from 'react';
import './Project5.css';

const productsData = [
  { id: 1, title: 'T-Shirt', category: 'Clothing', price: 25 },
  { id: 2, title: 'Jeans', category: 'Clothing', price: 45 },
  { id: 3, title: 'Sneakers', category: 'Footwear', price: 60 },
  { id: 4, title: 'Hat', category: 'Accessories', price: 15 },
  { id: 5, title: 'Jacket', category: 'Clothing', price: 80 },
];

const categories = ['All', 'Clothing', 'Footwear', 'Accessories'];

const Project5 = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Filter products based on category and price
    let filtered = productsData;

    if (filterCategory !== 'All') {
      filtered = filtered.filter(p => p.category === filterCategory);
    }

    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(maxPrice));
    }

    setProducts(filtered);
  }, [filterCategory, maxPrice]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const found = prevCart.find(item => item.id === product.id);
      if (found) {
        // Increase quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="ecommerce-container">
      <h2>Product List</h2>

      <div className="filters">
        <label>
          Category:
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            placeholder="No max"
            min="0"
          />
        </label>
      </div>

      <div className="products">
        {products.length === 0 && <p>No products found.</p>}
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.title} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project5;
