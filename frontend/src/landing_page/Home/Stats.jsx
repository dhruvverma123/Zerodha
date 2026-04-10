import React from "react";

function Stats() {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-6">
          <h1 style={{ color: "#424242", fontSize: "24px" }} className="mb-5">
            Trust with confidence
          </h1>
          <h2
            style={{ color: "#424242", fontSize: "20px", marginBottom: "12px" }}
          >
            Customer-first always
          </h2>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "25px",
            }}
          >
            That's why 1.6+ crore customers trust Investiqra with ~ ₹6 lakh
            crores of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2
            style={{ color: "#424242", fontSize: "20px", marginBottom: "12px" }}
          >
            No spam or gimmicks
          </h2>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "25px",
            }}
          >
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Our philosophies.
            </a>
          </p>
          <h2
            style={{ color: "#424242", fontSize: "20px", marginBottom: "12px" }}
          >
            The Investiqra universe
          </h2>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "25px",
            }}
          >
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2
            style={{ color: "#424242", fontSize: "20px", marginBottom: "12px" }}
          >
            Do better with money
          </h2>
          <p
            style={{
              color: "#666666",
              lineHeight: "28px",
              marginBottom: "25px",
            }}
          >
            With initiatives like{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Kill Switch
            </a>{" "}
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/ecosystem.png"
            alt="ecosystem"
            style={{ width: "600px", height: "590px" }}
          />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
