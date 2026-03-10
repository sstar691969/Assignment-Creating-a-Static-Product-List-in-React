

// src/components/ProductList.jsx
import React from "react";
import { products } from "../data/products";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div className="product-list">
      <h1>Luxury Product List</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}