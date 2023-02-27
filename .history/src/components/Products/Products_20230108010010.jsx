import React from "react";

import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../../data/data.js';
import Sales from "../Sales"
import Carousel from "nuka-carousel";
import DataDisplay from "../DataDisplay.jsx";


const images = [
  "https://i.pinimg.com/564x/d1/0a/94/d10a94c706c76d5d5a1433a449ec96c0.jpg",
  "https://i.pinimg.com/564x/81/a9/66/81a96635eb8f9fcf7b3036f0e12e18a2.jpg",
  "https://i.pinimg.com/564x/2d/8b/a5/2d8ba56af0950401fe3e332195eba9a1.jpg",
];

const Products = ({sneakTrends,sneakLoading}) => {
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
        autoplayInterval={3000}
        style={{ height: "80vh" ,backgroundColor:"#B9E0FF"}}
        // getControlsContainerStyles={(key) => {
        //   switch (key) {
        //     case 'TopLeft':
        //       return {
        //         backgroundColor: 'red',
        //       };
        //     case 'TopRight':
        //       return {
        //         backgroundColor: 'green',
        //       };
        //     case 'CenterLeft':
        //       return {
        //         backgroundColor: 'blue',
        //       };
        //     case 'CenterRight':
        //       return {
        //         backgroundColor: 'yellow',
        //       };
        //     default:
        //       // will apply to all other keys
        //       return {
        //         backgroundColor: 'purple',
        //       };
        //   }
        // }}
      >
        {images.map((image, i) => {
          return (
            <img
              src={image}
              alt="image"
              className="h-[85vh] w-full bg-blend-lighten	 object-contain sm:object-fill  "
              key={i}
            />
          );
        })}
      </Carousel>


      <div className="mb-3 pb-3">
        <DataDisplay sneakTrends={sneakTrends} sneakLoading={sneakLoading} />
      </div>
    </>
  );
};

export default Products;


