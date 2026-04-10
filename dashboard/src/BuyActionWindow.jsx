import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BuyActionWindow.css";

function BuyActionWindow({ handleCloseBuyWindow, uid }) {
  let [qty, setQty] = useState(1);
  let [price, setPrice] = useState(0.0);

  const handleBuy = () => {
    const options = {
      name: uid,
      qty: qty,
      price: price,
      mode: "Buy",
    };
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/addOrder`, options, {
      withCredentials: true,
    });
    handleCloseBuyWindow(); //to show on order page
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <Link className="btn btn-blue" onClick={handleBuy}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={handleCloseBuyWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyActionWindow;
