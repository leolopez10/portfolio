import React from "react";
import "./style.css"


function Jumbotron({ children }) {
  return (
    <div
      style={{clear: "both", textAlign: "center", height: "100vh" }}
      className="jumbotron-fluid d-flex align-items-center justify-content-center "
    >
      {children}
    </div>
  );
}

export default Jumbotron;

