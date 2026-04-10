import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center" style={{ paddingTop: "65px" }}>
        <h4
          style={{
            color: "#444",
            fontWeight: "400",
            fontSize: "20px",
            marginBottom: "90px",
          }}
        >
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h4>
        <h3 style={{ color: "#444", marginBottom: "30px", fontSize: "25px" }}>
          The Zerodha Universe
        </h3>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-4">
          <img
            src="media/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "200px", height: "55px", marginBottom: "20px" }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              fontWeight: "500",
              padding: "0px 80px 0px 80px",
            }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/sensibullLogo.svg"
            alt="sensibullLogo"
            style={{ width: "200px", height: "55px", marginBottom: "20px" }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              fontWeight: "500",
              padding: "0px 80px 0px 80px",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/tijori.jpg"
            alt="tijori"
            style={{ marginTop: "-25px" }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              fontWeight: "500",
              padding: "0px 80px 0px 80px",
              marginTop: "-25px",
            }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/streakLogo.png"
            alt="streakLogo"
            style={{ width: "200px", height: "55px", marginBottom: "20px" }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              fontWeight: "500",
              padding: "0px 80px 0px 80px",
            }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/smallcaseLogo.png"
            alt="smallcaseLogo"
            style={{ width: "200px", height: "55px", marginBottom: "20px" }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              fontWeight: "500",
              padding: "0px 80px 0px 80px",
            }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/ditto.png"
            alt="ditto"
            style={{ marginTop: "-40px" }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#888",
              fontWeight: "500",
              padding: "0px 80px 0px 80px",
              marginTop: "-33px",
            }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <Link to="/signup">
          <button
            className="btn btn-primary fs-5 mt-4 p-2"
            style={{ width: "20%", margin: "60px auto" }}
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
