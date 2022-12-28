import React from "react";
import Herodata from "../HeroData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="main-hero-container">
      <Splide
        options={{
          type: "loop",
          gap: "1rem",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          arrows: "slider",
        }}
      >
        <SplideSlide>
          <div className="hero-container-wrapper">
            <img
              src="./images/african2.jpg"
              alt="HeroImage"
              className="image"
            />
            <span className="largetext">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Est voluptate Lorem nulla adipisicing quis e")
                    .start();
                }}
              />
            </span>
          </div>
        </SplideSlide>

        {Herodata.map((data, index) => {
          const { largetext, smalltext, Image } = data;
          return (
            <SplideSlide key={index}>
              <div className="main-splideslide-div">
                <div className="hero-container-wrapper">
                  <img src={Image} alt="HeroImage" className="image" />
                  <span className="largetext">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString(`${largetext}`).start();
                      }}
                    />
                  </span>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

export default Hero;
