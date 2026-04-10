import React from "react";

function Hero() {
  return (
    <div className="container text-center" style={{ paddingTop: "120px" }}>
      <div className="row mt-5">
        <h2 style={{ color: "#444" }}>Charges</h2>
        <h3
          style={{
            color: "#888",
            fontWeight: "400",
            fontSize: "20px",
            paddingTop: "10px",
          }}
        >
          List of all charges and taxes
        </h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-5">
          <img
            src="media/pricingEquity.svg"
            alt="pricingEquity"
            style={{ width: "80%", marginBottom: "10px" }}
          />
          <h3 className="mb-4">Free equity delivery</h3>
          <p style={{ color: "#555", fontSize: "17px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/intradayTrades.svg"
            alt="intradayTrades"
            style={{ width: "80%", marginBottom: "10px" }}
          />
          <h3 className="mb-4">Intraday and F&O trades</h3>
          <p style={{ color: "#555", fontSize: "17px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="media/pricingEquity.svg"
            alt="pricingEquity"
            style={{ width: "80%", marginBottom: "10px" }}
          />
          <h3 className="mb-4">Free direct MF</h3>
          <p style={{ color: "#555", fontSize: "17px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
