import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SellActionWindow({ handleCloseSellwindow, uid }) {
  let [qty, setQty] = useState(0);
  let [quantity, setQuantity] = useState("");
  let [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3002/lengthOfHoldings/${uid}`, {
        withCredentials: true,
      })
      .then((res) => {
        let totalQty = 0;
        res.data.data.forEach((e, idx) => {
          return (totalQty += e.qty);
        });
        setQty(totalQty);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSell(uid) {
    let options = {
      name: uid,
      qty: quantity,
      price: price,
      mode: "Sell",
    };
    if (quantity <= qty) {
      axios.post("http://localhost:3002/addOrder", options, {
        withCredentials: true,
      });
      handleCloseSellwindow();
    } else {
      alert(`you have ${qty} quantity only`);
    }
  }

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="text"
              id="qty"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Available Quantity = {qty}</span>
        <div>
          <Link className="btn btn-blue" onClick={() => handleSell(uid)}>
            Sell
          </Link>
          <Link
            className="btn btn-grey"
            onClick={() => handleCloseSellwindow()}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SellActionWindow;
