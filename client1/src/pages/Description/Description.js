import React from "react";
import Card from "./Components/Card";
import Onlytextcomponent from "./Components/Onlytextcomponent";
import Textwithimagecomponent from "./Components/Textwithimagecomponent";
import "./Description.css";

function Description() {
  return (
    <section className="description-main-container">
      <div className="description-wrapper">
        <Onlytextcomponent />
        <Textwithimagecomponent />
        <Card />
      </div>
    </section>
  );
}

export default Description;
