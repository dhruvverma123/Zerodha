import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./landing_page/Home/HomePage.jsx";
import Signup from "./landing_page/SignUp/Signup.jsx";
import AboutPage from "./landing_page/About/AboutPage.jsx";
import ProductPage from "./landing_page/Product/ProductPage.jsx";
import PricingPage from "./landing_page/Pricing/PricingPage.jsx";
import SupportPage from "./landing_page/Support/SupportPage.jsx";
import Login from "./landing_page/Login/Login.jsx";

import NotFound from "./landing_page/NotFound.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";

import ContextApi from "./landing_page/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <ContextApi>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
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
    </BrowserRouter>
  </ContextApi>,
);
