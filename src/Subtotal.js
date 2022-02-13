import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Subtotal() {
  const [{ basket,user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const checkUser = (e) => {
    if(user){
      if(basket.length == 0){
        alert("Basket is Empty.")
      } else {
      navigate("/payment")}
    } else {
      alert("Please log in.")
    }
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*homework*/}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={checkUser}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
