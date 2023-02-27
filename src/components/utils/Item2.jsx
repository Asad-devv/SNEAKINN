import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { Card } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { Link } from "react-router-dom";
import { getProductsBySlug, searchProducts } from "../API";
import LazyLoad from "react-lazyload";

const possibleNumbers = [100, 120, 130, 140, 150, 160,210,140, 150, 160,250,135,110, 260,80,185];

const Item = ({ slug, id, color, shadow, name, image, price, index,brand }) => {
  const [numbers, setNumbers] = useState([]);
  //   console.log(id)
  const dispatch = useDispatch();

  // const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
  // return possibleNumbers[randomIndex];

  const onAddToCart = () => {
    const item = { id, name, image, price : possibleNumbers[index] };

    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`relative  bg-gradient-to-t from-fuchsia-50 to-blue-100 white shadow-lg shadow-gray-300  grid h-[44vh] sm:h-[50vh] items-center justify-items-center rounded-md py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 my-3 mb-4`}
        // style={{ height: "300px" }}
      >
        <div className={`grid items-center justify-items-center`}>
          <h1 className="text-slate-900 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {name.substring(0, 20)}
            {name.length > 25 && <>....</>}
          </h1>
          {/* <p className="text-slate-900 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p> */}

          <div className="flex items-center justify-between w-35   my-2">
            <div className="flex items-center bg-white/80  px-1  ">

        
                    <h1 className="text-black text-sm font-medium">{possibleNumbers[index]}$</h1>

            </div>
            <div className="flex items-center ">
              <StarIcon className="icon-style top-0 m-0 w-5 h-6 md:w-4 md:h-4" />
              {/* <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1> */}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-1">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme hover:scale-110 button-theme  shadow-gray-400 p-0.5 shadow"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style  shadow-gray-400 text-slate-900" />
            </button>
            <button
              type="button"
              className=" shadow-gray-400 bg-white/90 blur-effect-theme button-theme px-2 hover:scale-110 py-1 shadow text-sm text-black"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
            >
              Buy Now
            </button>
            <button
              type="button"
              className="bg-white/90 text-sm px-2 py-1 hover:scale-110 shadow-gray-400 blur-effect-theme button-theme  shadow"
            >
              <Link to={`/Products/${slug}`}>See More</Link>
            </button>
          </div>
        </div>
        <div
          className={`flex items-center sm:w-[8.5rem]  pb-2 justify-center p-0.5 rounded-lg`}
        >
          <LazyLoad
            // src={image}
            // // style={{objectFit :"cover"}}
            // alt={`img/item-img/${id}`}
            className={`transitions-theme  pb-2 sm:w-[9rem] sm:h-[auto] h-37 w-64`}
            // placeholder={<img  className={`transitions-theme h-36 w-64`} src={image} alt="image" />}
          >
            <img
              loading="lazy"
              className={`transitions-theme  sm:w-[9rem]  pb-2 h-37 w-64`}
              src={image}
              alt="image"
            />
          </LazyLoad>
        </div>
      </div>
    </>
  );
};

export default Item;

// export {onAddToCart,onCartToggle}
