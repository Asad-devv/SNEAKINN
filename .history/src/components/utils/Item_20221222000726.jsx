import React from "react";
import { useDispatch } from "react-redux";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import {Card} from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  //   console.log(id)
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };

    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({
        cartState: true
    }))
}

  return (
    <>
    
    


      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start h-90  " : "justify-items-center"
        } rounded-md py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
        style={{height : ${if}220px"}}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-900 text-xl lg:text-lg md:text-base font-medium  drop-shadow">
            {title}
          </h1>
          <p className="text-slate-900 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-28   my-2">
            <div className="flex items-center bg-white/80  px-1  ">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center ">
              <StarIcon className="icon-style m-0 w-5 h-6 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow"
              onClick={()=> onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow  text-sm text-black"
              onClick={()=> {onAddToCart(); onCartToggle();}}
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme  ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[25deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;





function BasicCard() {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Yosemite National Park
      </Typography>
      <Typography level="body2">April 24 to May 02, 2021</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $2,900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
}