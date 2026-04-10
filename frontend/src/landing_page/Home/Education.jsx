import React from "react";

function Education() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/education.svg"
            alt="education "
            style={{ width: "480px", height: "300px" }}
            className="px-5"
          />
        </div>
        <div className="col-6">
          <h1
            style={{ fontSize: "24px", color: "#424242", marginBottom: "25px" }}
          >
            Free and open market education
          </h1>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "22px",
            }}
          >
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "22px",
              marginTop: "30px",
            }}
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" style={{ textDecoration: "none", fontSize: "18px" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
