import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-8">{children}</main>
    </>
  );
}

export default Layout;
