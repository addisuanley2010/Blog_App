import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* "   max-md:mt-12 mt-16 pt-2  px-3 " */}
 
         <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
