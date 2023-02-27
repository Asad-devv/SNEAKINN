// import React from "react";

// import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from '../../data/data.js';
// import Sales from "../Sales"

// const Products = () => {
//   return (
//     <div>
// <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
//   <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="0"
//       class="active"
//       aria-current="true"
//       aria-label="Slide 1"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="1"
//       aria-label="Slide 2"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="2"
//       aria-label="Slide 3"
//     ></button>
//   </div>
//   <div class="carousel-inner relative w-full overflow-hidden">
//     <div class="carousel-item active relative float-left w-full">
//       <img
//         src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
//         class="block w-full"
//         alt="..."
//       />
//       <div class="carousel-caption hidden md:block absolute text-center">
//         <h5 class="text-xl">First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item relative float-left w-full">
//       <img
//         src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
//         class="block w-full"
//         alt="..."
//       />
//       <div class="carousel-caption hidden md:block absolute text-center">
//         <h5 class="text-xl">Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item relative float-left w-full">
//       <img
//         src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
//         class="block w-full"
//         alt="..."
//       />
//       <div class="carousel-caption hidden md:block absolute text-center">
//         <h5 class="text-xl">Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button
//     class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
//     type="button"
//     data-bs-target="#carouselExampleCaptions"
//     data-bs-slide="prev"
//   >
//     <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button
//     class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
//     type="button"
//     data-bs-target="#carouselExampleCaptions"
//     data-bs-slide="next"
//   >
//     <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>

  
// </div>
// <Sales endpoint={toprateslaes} />

// </div>
//   );
// };

// export default Products;



import React from 'react';
import Carousel from 'nuka-carousel';
import { refType } from '@mui/utils';

const images = ["https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg","https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg","https://i.pinimg.com/564x/03/90/13/039013202dfb5b96c33a44de50baa79e.jpg"]

const MyCarousel = () => {
  return (
    <Carousel className="h-64" autoplay={true} wrapAround={true} autoplayInterval={2000} style={{height : "90vh"}}>
      {images.map((image,i)=>{
        return(
        <img src={image} alt="image" className='h-[90vh] w-full object-covear ' key={i}/>
        )
      })}
    </Carousel>
  );
};

export default MyCarousel;



No, this program will not compile successfully.


syntax error : 

There are a couple of issues with this program.

First, Int should be int.

Second, Char should be char.

Third, there is a syntax error on the third line. The assignment operator is =, not ==.

fourth, the program does not have a return statement at the end.

Logical error :

A char is a single character, typically stored as an 8-bit integer. An int is a larger data type, typically stored as a 16-bit or 32-bit integer.

In the above program, the variables p1 and p2 are pointers, not actual variables. 

The program is attempting to assign the memory address stored in p1, which is an int pointer, to p2, which is a char pointer. This is not allowed, because the two pointers are of different types and cannot be assigned to each other.

