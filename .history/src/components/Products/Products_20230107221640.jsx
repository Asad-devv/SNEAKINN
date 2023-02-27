// import React from "react";

// import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../../data/data.js';
// import Sales from "../Sales"
import Carousel from "nuka-carousel";

const images = [
  "https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg",
  "https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg",
  "https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg",
];


const Products = () => {
  return (
<div>
<Sales endpoint={toprateslaes} />

</div>
  );
};

// export default Products;

import React from "react";



const MyCarousel = () => {
  
  return (
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
          position: 'CenterLeft',
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        {
          position: 'CenterRight',
          style: {
            backgroundColor: 'black',
          },
        },
      ]}
    >
      {images.map((image, i) => {
        return (
          <img
            src={image}
            alt="image"
            className="h-[90vh] w-full object-covear "
            key={i}
          />
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
