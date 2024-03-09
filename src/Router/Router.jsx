import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "../components/NavBar/Navigationbar";
import HomePage from "../pages/HomePage/HomePage";
import FooterCOm from "../components/FooterCom/FooterCOm";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import GiftPage from "../pages/GiftPage/GiftPage";
import AlertBox from "../components/AlertCom/AlertBox";
import LoginPage from "../pages/LoginPage/LoginPage";
import PlantPage from "../pages/PlantPage/PlantPage";
import ProtectedRouter from "./ProtectedRouter";
import CartPage from "../pages/CartPage/CartPage";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/plant"
            element={<ProtectedRouter component={<PlantPage />} />}
          />
          <Route
            path="/about"
            element={<ProtectedRouter component={<AboutPage />} />}
          />
          <Route
            path="/contact"
            element={<ProtectedRouter component={<ContactPage />} />}
          />
          <Route
            path="/cart"
            element={<ProtectedRouter component={<CartPage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/giftcard" element={<GiftPage />} />
          <Route path="/alert" element={<AlertBox />} />
        </Routes>
        <FooterCOm />
      </BrowserRouter>
    </>
  );
}

export default Router;
