import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center" style={{ marginTop: "80px" }}>
        <img
          src="media/homeHero.png"
          alt="Hero Image"
          style={{ width: "800px", height: "328px", margin: "auto" }}
        />
        <h3 style={{ marginTop: "4.5rem" }}>Invest in everything</h3>
        <p className="mt-2" style={{ fontSize: "1.3rem" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
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

export default Hero;
