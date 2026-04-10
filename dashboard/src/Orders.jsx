import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/allOrders`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="order">
      {allOrders.length > 0 ? (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="tableStyle">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantitiy</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price}</td>
                      <td>{order.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </>
      )}
    </div>
  );
};

export default Orders;
