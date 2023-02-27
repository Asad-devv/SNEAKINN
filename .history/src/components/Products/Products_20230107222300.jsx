import React from "react";

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../../data/data.js';
import Sales from "../Sales"
import Carousel from "nuka-carousel";
import DataDisplay from "../DataDisplay.jsx";


const images = [
  "https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg",
  "https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg",
  "https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg",
];

const Products = () => {
  const renderControlsLeft = ({ previousSlide }) => (
    <div className="controls">
      <button onClick={previousSlide}>
        <svg className="pl-5" width="100" height="70" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    </div>
  );
  const renderControlsRight = ({ nextSlide }) => (
    <div className="controls">
      <button onClick={nextSlide}>
        <svg className="pl-5" width="100" height="70" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );
  return (
    <>
      <Carousel
        renderCenterLeftControls={renderControlsLeft}
        renderCenterRightControls={renderControlsRight}
        className="h-64"
        autoplay={true}
        wrapAround={true}
        autoplayInterval={2000}
        style={{ height: "90vh" }}
        decorators={[
          {
            position: "CenterLeft",
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          {
            position: "CenterRight",
            style: {
              backgroundColor: "black",
            },
          },
        ]}
      >
        {images.map((image, i) => {
          return (
            <img
              src={image}
              alt="image"
              className="h-[90vh] w-full object-fill "
              key={i}
            />
          );
        })}
      </Carousel>

      <div className= "mb-3 pb-3">
        <Sales endpoint={toprateslaes} />
        
      </div>
    </>
  );
};

export default Products;


