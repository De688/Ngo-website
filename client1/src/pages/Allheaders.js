import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./Allheaders.css";

function Allheaders() {
  return (
    <div className="allheaders">
      <Navbar />
      <Header />
    </div>
  );
}

export default Allheaders;
