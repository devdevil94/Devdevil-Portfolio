import React from "react";

import "animate.css/animate.min.css";
import "../styles/main.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
