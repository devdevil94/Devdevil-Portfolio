import React from "react";

import "animate.css/animate.min.css";
import "../styles/main.css";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>
        <div>This is a footer</div>
      </footer>
    </>
  );
}
