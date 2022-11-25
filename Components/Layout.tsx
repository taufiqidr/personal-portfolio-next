import React, { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Up from "./Up";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="sm:mx-14 mx-2 shadow-xl shadow-white">{children}</main>
      <Footer />
      {/* <Up /> */}
    </div>
  );
};

export default Layout;
