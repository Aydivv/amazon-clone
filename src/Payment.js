import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
    const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="payment">
        
        

      <div className="payment__container">
      <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
        {/* Address */}
        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__sectionAddress">
            <p>{user?.email}</p>
            <p>Central Point</p>
            <p>50 Royal Parade, Plymouth</p>
            <p>UK</p>
          </div>
        </div>
        {/* Items */}
        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__sectionItems">
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 
                />
            ))}
          </div>
        </div>
        
        {/* Payment Section */}
        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe stuff */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
