import React, { useContext, useState } from "react";

import { Context } from "./ContextApi";
import { Link } from "react-router-dom";
import "./Navbar";

function Navbar() {
  let { login, setLogin } = useContext(Context);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom text-center"
      style={{
        padding: "13px",
        position: "fixed",
        backgroundColor: "white",
        width: "100%",
        zIndex: "1000",
        marginBottom: "20px",
      }}
    >
      <div className="container-fluid ">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => {
            setLogin(false);
          }}
        >
          <h3
            style={{
              color: "#000000c7",
              marginRight: "350px",
              marginLeft: "150px",
            }}
            className="text-primary"
          >
            Investiqra
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ marginLeft: "150px" }}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link
                className="nav-link hoverStyle"
                to="/signup"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link hoverStyle"
                to="/about"
                onClick={() => {
                  setLogin(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link hoverStyle"
                to="/product"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Product
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link hoverStyle"
                to="/pricing"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                className="nav-link hoverStyle"
                to="support"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Support
              </Link>
            </li>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <li>
                <i
                  className="fa-solid fa-bars"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogin}
                ></i>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {login && (
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            position: "absolute",
            right: "150px",
            top: "100%",
            padding: "20px 30px 10px 30px",
            backgroundColor: "#b9dfe3",
            color: "black",
            marginTop: "2px",
            borderRadius: "10px",
          }}
        >
          <p>Login</p>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
