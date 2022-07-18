import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/main/Home";
import Tokenomics from "pages/main/Tokenomics";
import SoundMap from "pages/main/SoundMap";
import About from "pages/main/About";
import Faqs from "pages/main/Faqs";
import Register from "pages/auth/Register";
import Login from "pages/auth/Login";
import Dashboard from "pages/dashboard";
import BuyTokens from "pages/buytokens";
import MyTokens from "pages/mytokens";
import Transactions from "pages/transactions";
import Profile from "pages/auth/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tokenomics" element={<Tokenomics />} />
      <Route path="/soundmap" element={<SoundMap />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faqs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/buy-tokens" element={<BuyTokens />} />
      <Route path="/my-tokens" element={<MyTokens />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default AppRoutes;
