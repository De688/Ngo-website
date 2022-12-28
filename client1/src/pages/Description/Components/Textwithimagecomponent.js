import React from "react";
import "./Textwithimagecomponent.css";
import ListData from "./TextwithimageData";

function Textwithimagecomponent() {
  return (
    <section className="Textwithimagecomponent-main-container">
      <h2 className="Textwithimagecomponent-wrapper">
        Challenges for children in Tanzania
      </h2>
      <p>
        While Tanzania recognizes child rights and has made important progress,
        children continue to suffer shocking levels of child mortality,
        malnutrition, lack of education and early marriage. Tanzania’s children
        need your help.
      </p>
      <div className="challengeslist">
        {ListData.map((listdata, index) => {
          const { image, text } = listdata;
          return (
            <div className="challengeslist1">
              <img src={image} alt="Food icon" classname="foodicon" />

              <div className="foodtext">{text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Textwithimagecomponent;
