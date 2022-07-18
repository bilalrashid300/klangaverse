/* eslint-disable react/prop-types */
import React from "react";
import NavBar from "./NavBar";

const ScrollToTop = ({ children, hasNavBar = true }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative">
      {hasNavBar && <NavBar />}
      {children}
    </div>
  );
};

export default ScrollToTop;
