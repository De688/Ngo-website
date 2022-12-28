import React, { useState, useEffect } from "react";
import "./Card.css";
import CardData from "./CardData";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

function Card() {
  const [isSmallScreen, setisSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setisSmallScreen(true);
    }
  }, []);

  return (
    <section className="card-main-container">
      <h1 className="headertexts"> How You Can Help Children in Tanzania</h1>
      {isSmallScreen ? (
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            drag: true,
            snap: true,
            live: true,

            pauseOnHover: false,
            resetProgress: false,
            arrows: "slider",
          }}
        >
          {CardData.map((data, index) => {
            const { largetext, smalltext, Image } = data;
            return (
              <SplideSlide key={index}>
                <div className="card-wrapper">
                  <div className="Card" key={index}>
                    <img src={Image} alt="Image" className="card-image" />
                    <div className="card-largetext">{largetext}</div>
                    <div className="card-smalltext">
                      {smalltext.substring(0, 100)}...
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      ) : (
        <div className="card-wrapper">
          {CardData.map((data, index) => {
            const { largetext, smalltext, Image } = data;
            return (
              <div className="Card" key={index}>
                <img src={Image} alt="Image" className="card-image" />
                <div className="card-largetext">{largetext}</div>
                <div className="card-smalltext">
                  {smalltext.substring(0, 100)}...
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Card;
