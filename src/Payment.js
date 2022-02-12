import { Card } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);


  //whenever basket changes, change the stripe secret. A strip secret includes the price that needs to be charged.
  useEffect(() => {
        //generate strip secret which allows us to charge a customer. It needs to be updated whenever basket changes because price changes.

        const bTotal = getBasketTotal(basket) * 100;
        const bURL = '/payments/create?total=' + bTotal;

        const getClientSecret = async () => {
            //axios is a way of making requests like post get etc
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currency's sub units. Like we would say 500 fils for 5 dirhams.
                url:bURL,
                baseURL: 'http://localhost:5001/clone-a50ec/us-central1/api'
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
        //useEffect runs this code whenever Paymenbt.js is called or when the element inside the array below (basket) changes.
  }, [basket])

  console.log("CLIENT SECRET IS >>>>", clientSecret)

  const handleSubmit = async (event) => {
    //stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        // paymentIntent is the payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: 'EMPTY_BASKET'
        })

        navigate("/orders", {replace: true});
    })
  };

  const handleChange = (e) => {
    //listen for changes and show errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
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
            {basket.map((item) => (
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
          <div className="payment__sectionDetails">
            {/* Stripe stuff */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Only if error exists show this div */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
