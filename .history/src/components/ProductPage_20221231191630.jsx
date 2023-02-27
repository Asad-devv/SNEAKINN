import React, { useState } from "react";

import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "mui-image";
const images = ["wave", "asad", "asad", "asad"];
import { createTheme } from "@mui/material";
import { useParams } from 'react-router-dom';
import {toprateslaes} from "../data/data"
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";
import Item from "./utils/Item"
import {searchProducts,getProductsBySlug} from "./API"



// const getProductById = (id) => toprateslaes.items.find(product => product.id === id);


const ProductPage = () => {
  const [product, setProduct] = useState([])
    // console.log(window)
  const {id} = useParams()
  // const {color,img,rating,text,title,price} = getProductById(id);

useEffect(() => {
  first

  
}, [third])

  
  const getIndProduct=(id)=>{
    getProductsBySlug(id)
    .then((data)=>{
      console.log(data)
      setProduct(data)
    })

  }
  const onAddToCart = () => {
     const item = { id, title, text, img, color, price };
     
     dispatch(setAddItemToCart(item));
   };
 
    const onCartToggle = () => {
     dispatch(
       setOpenCart({
         cartState: true,
       })
     );
   };
  const handleCartClick = ()=>{
    onAddToCart();
    onCartToggle();
  }


  
  return (
    
    <Grid container height="100vh">
      <Grid
        item
        sx={{

          display: {md:"flex",xs:"flex"},
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        md={5}
        xs={12}
        sm={12}
        height="80vh"
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

          }}
        >
          <Box
            gap="3"
            boxShadow="8"
            height="auto"
            width="50vh"
            mt={3}
            px={3}
            mx={1}
            borderRadius="20px"
            border="1px solid grey"
            justifyContent="center"
            sx={{
            height:{xs:"45vh", md:"55vh",lg:"55vh"},
            width:{xs:"40vh",md:"55vh",md:"55vh"},}}
          >
            <Image
              src="hjb"
              sx={{ borderRadius: "10px", height:{xs:"35vh",md:"70vh",lg:"70vh"},
              width:{xs:"100vh",md:"70vh",lg:"70vh"}, }} mx={2} my={2}
              fit="contain"
            />
          </Box>
          <Box
            display="flex"
            boxShadow="8"
            mt={4}
            flexDirection="row"
            sx={{ justifyContent: "center",alignItems:"center", }}
            mx={2}
            borderRadius={1}
          >
            {images?.map((image, i) => {
              return (
                <Image
                  sx={{ padding: "10px" }}
                  src="src/components/hero.png"
                  width="10vh"
                  height="10vh"
                  key={i}
                />
              );
            })}
          </Box>
        </div>
      </Grid>
      <Grid
        height="90vh"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "cen",
          flexDirection: "column",
          height:{xs:"40vh",md:"90vh",lg:"90vh"}
        }}
        item
        mx={3}
        md={6}
        xs={12}
        sm={12}
      >
        <Typography variant="h6" gutterBottom>
        best sneaker
        </Typography>
        <Typography variant="h5">Air jordan 1</Typography>
        <Typography py={3} width="40vh" variant="subtitle">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer
        </Typography>
        <Typography variant="subtitle1">150$</Typography>
        <Box display="flex" >
          <Box
            display="flex"
            border="2px solid black"
            borderRadius="5px"
            height="35px"
            width="140px"
                        
          >
            <Typography
              sx={{
                borderRadius: "2px",
                width: "40px",
                height: "20px",
                textAlign: "center",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              variant="subtitle"
            >
              -
            </Typography>
            <Typography
              sx={{
                borderRadius: "2px",
                width: "40px",
                height: "20px",
                textAlign: "center",
                marginLeft: "10px",
              }}
              variant="subtitle"
            >
              1
            </Typography>
            <Typography
              sx={{
                borderRadius: "2px",
                width: "40px",
                height: "20px",
                textAlign: "center",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              variant="subtitle"
              pr={1}
            >
              +
            </Typography>
          </Box>
          <Box mx={2}>
            <Button onClick={handleCartClick} height="30px" sx={{backgroundColor:"blue"}} width="200px" variant="contained">
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
