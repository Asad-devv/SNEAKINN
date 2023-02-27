import React from "react";
import { useDispatch } from "react-redux";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { Card } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import {Link} from "react-router-dom"
const Item = ({
  ifExists,
  id,
  color,
  shadow,
  name,
  text,
  image,
  btn,
  rating,
  price,
}) => {
  //   console.log(id)
   const dispatch = useDispatch();



 const onAddToCart = () => {
  const item = { id, name, image, price };
    
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
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start h-50 sm:h-40 " : "justify-items-center"
        } sm:h-[43vh] rounded-md py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
        style={{ fontStyle: "unbounded" }}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-100 text-xl lg:text-lg md:text-base font-medium filter drop-shadow" style={{ fontFamily: "unbounded" }}>
            {name}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-35   my-2">
            <div className="flex items-center bg-white/80  px-1  ">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center ">
              <StarIcon className="icon-style top-0 m-0 w-5 h-6 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center p gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme  h-auto button-theme p-0.5 drop-shadow"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 h-auto w-auto blur-effect-theme button-theme px-2  shadow  text-sm text-black"
              onClick={() => {
                onAddToCart();
                onCartToggle();
              }}
              style={{fontFamily:"roboto"}}
            >
             Buy Now
            </button>
            <button  type="button"
              className="bg-white/90 blur-effect-theme h-auto w-auto  button-theme p-0.5 shadow" ><Link to={`/Products/${id}`}>See More</Link></button>

          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute right-1" : "justify-center"
          }`}
        >
         <img
            src={image}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifExists
                ? "h-auto w-60 lg:w-56 md:w-48 -rotate-[35deg]"
                : "h-36 w-64 lg:w-56 md:h-[15vh] md:w-[20vh]"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item

// export {onAddToCart,onCartToggle}