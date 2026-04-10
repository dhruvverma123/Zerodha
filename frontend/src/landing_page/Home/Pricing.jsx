import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4">
          <h1
            style={{ fontSize: "24px", color: "#424242", marginBottom: "25px" }}
          >
            Unbeatable pricing
          </h1>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "25px",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col text-center border ">
              <h1
                style={{
                  color: "#424242",
                  marginBottom: "25px",
                }}
              >
                &#8377; 0
              </h1>
              <p>
                Free equity delivery <br></br>and direct mutual funds
              </p>
            </div>
            <div className="col text-center border">
              <h1
                style={{
                  color: "#424242",
                  marginBottom: "25px",
                }}
              >
                &#8377; 20
              </h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
