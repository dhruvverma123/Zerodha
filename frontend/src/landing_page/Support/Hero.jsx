import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <div className="container pb-5" style={{ paddingTop: "100px" }}>
        <div className="row mb-4" style={{ paddingLeft: "35px" }}>
          <div className="col-6" style={{ textAlign: "start" }}>
            <h1 style={{ color: "#333" }}>Support Portal</h1>
          </div>
          <div className="col-6" style={{ textAlign: "end" }}>
            <button className="btn btn-primary">My tickets</button>
          </div>
        </div>
        <div
          className="row"
          style={{ height: "60px", position: "relative", paddingLeft: "35px" }}
        >
          <i
            className="fa-brands fa-sistrix"
            style={{
              position: "absolute",
              fontSize: "18px",
              color: "#555",
              top: "40%",
              left: "4%",
            }}
          ></i>
          <input
            type="text"
            style={{
              width: "98%",
              margin: "auto",
              border: "none",
              height: "100%",
              paddingLeft: "50px",
              borderRadius: "3px",
              color: "#444",
            }}
            className="user-focus"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
