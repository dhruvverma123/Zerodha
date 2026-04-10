import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h3 style={{ marginTop: "4.5rem" }}>Open a Investiqra account</h3>
        <p className="mt-2" style={{ fontSize: "1.3rem", opacity: "0.9" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to={"/signup"}>
          <button
            className="btn btn-primary fs-5 mt-4 p-2"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
