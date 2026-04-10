import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Menu = () => {
  let [menuItem, setMenuItem] = useState(0);
  let [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (index) => {
    setMenuItem(() => index);
  };

  const menuClass = "menu";
  const menuSelected = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuItemClick(1)}
            >
              <p className={menuItem == 1 ? menuSelected : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuItemClick(2)}
            >
              <p className={menuItem == 2 ? menuSelected : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuItemClick(3)}
            >
              <p className={menuItem == 3 ? menuSelected : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuItemClick(4)}
            >
              <p className={menuItem == 4 ? menuSelected : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuItemClick(5)}
            >
              <p className={menuItem == 5 ? menuSelected : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuItemClick(6)}
            >
              <p className={menuItem == 6 ? menuSelected : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={() => handleDropdownClick()}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
      {isDropdownOpen && <Popup />}
    </div>
  );
};

export default Menu;

export function Popup() {
  const handleLogout = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.response);
        setTimeout(() => {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        }, 2300);
      })
      .catch((rej) => {
        toast.error(rej.data);
      });
  };

  return (
    <div className="popup">
      <span className="logout" onClick={handleLogout}>
        Logout
      </span>
    </div>
  );
}
