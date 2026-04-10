import React from "react";

function Hero() {
  return (
    <div className="container pt-5 border-bottom pb-4">
      <div
        className="row p-5 text-center"
        style={{ marginTop: "60px", lineHeight: "4", color: "#444" }}
      >
        <h3 style={{ color: "#444" }}>Investiqra Products</h3>
        <h5 className="mt-2" style={{ color: "#555", fontWeight: "400" }}>
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p>
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
