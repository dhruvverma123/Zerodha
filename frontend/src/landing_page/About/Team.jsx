import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 style={{ fontSize: "25px", color: "#444" }}>People</h1>
      </div>
      <div className="row " style={{ padding: " 80px 160px 80px 160px" }}>
        <div className="col-6 text-center" style={{ width: "45%" }}>
          <img
            src="media/nithinKamath.jpg"
            alt="nithinKamath"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5
            style={{
              color: "#444",
              margin: "20px 0px 20px 0px",
              fontWeight: "400",
            }}
          >
            Nithin Kamath
          </h5>
          <h6 style={{ color: "#666", fontWeight: "400" }}>Founder, CEO</h6>
        </div>
        <div
          className="col-6"
          style={{ fontSize: "17px", lineHeight: "1.8", width: "55%" }}
        >
          <p>
            Nithin bootstrapped and founded Investiqra in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,{" "}
            <br />
            Investiqra has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee{" "}
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
