import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./src/index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./src/Home.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </BrowserRouter>,
);
