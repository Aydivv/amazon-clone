import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__indo">
        <p>PS5</p>
        <p className="product__price">
          <small>$</small>
          <strong>49.99</strong>
        </p>
        <div className="product__rating">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </div>
        <img src="https://media.wired.com/photos/601dde27f1bf194f33695d95/1:1/w_1342,h_1342,c_limit/Gear-PS5-2-src-Sony-teal.jpg"/>
      </div>
    </div>
  );
}

export default Product;
