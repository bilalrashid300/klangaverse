import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Routes from "Routes";

const LayoutWrapper = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes />
    </BrowserRouter>
  );
};

export default LayoutWrapper;
