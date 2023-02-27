import React, { useState, useEffect } from "react";

import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "mui-image";
const images = ["wave", "asad", "asad", "asad"];
import { createTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { toprateslaes, popularsales } from "../data/data";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";
import Item from "./utils/Item";
import { searchProducts, getProductsBySlug } from "./API";

const getProductById = (id) =>
  toprateslaes.items.find((product) => product.id === id);
// if()
const getPopularProduct = (id) => {
  const product = popularsales.items.find((product) => {
    return product.id == id;
  });
  return product;
};

const ProductPage = () => {
  const [product, setProduct] = useState();
  const [isDemo, setIsDemo] = useState();
  const [retailPrice, setRetailPrice] = useState();
  const [demo, setDemo] = useState();
  // console.log(window)
  const { id } = useParams();
  // const {color,img,rating,text,title,price} = getProductById(id);
  // const findPrice = async (traits) => {
  //   const retailPrice = await traits?.find(
  //     (trait) => trait?.name == "retail-price"
  //   );
  //   if (retailPrice) {
  //     console.log(retailPrice);
  //     setRetailPrice(retailPrice);
  //     return retailPrice;
  //   }
  // };

  useEffect(() => {
    if (id.includes("-")) {
      setIsDemo(false);
      console.log("loru");
      getProductsBySlug(id).then((data) => {
        // console.log(data);
        setProduct(data);
        // const price = findPrice(product?.traits);
        // setRetailPrice(price);
        console.log(product)
      });
    } else {
      setIsDemo(true);

      if (id.includes("r")) {
        // console.log(id);
        setProduct(getPopularProduct(id));
        console.log(product);
      } else {
        setProduct(getProductById(id));
        console.log(product);
      }
      // console.log(color,image,rating,name,price)
    }
  }, [id]);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: `${
        isDemo
          ? "${product.price}"
          : '${return product?.traits.find((trait) => trait.name === "retail-price")?.value}'
      }`,
    };
    dispatch(setAddItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const handleCartClick = () => {
    onAddToCart();
    onCartToggle();
  };

  return (
    <Grid container>
      <Grid
        item
        sx={{
          display: { md: "flex", xs: "flex" },
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
              height: { xs: "45vh", md: "55vh", lg: "55vh" },
              width: { xs: "40vh", md: "55vh", md: "55vh" },
            }}
          >
            <Image
              src={`${product?.image}`}
              sx={{
                borderRadius: "10px",
                height: { xs: "35vh", md: "70vh", lg: "70vh" },
                width: { xs: "100vh", md: "70vh", lg: "70vh" },
              }}
              mx={2}
              my={2}
              fit="contain"
            />
          </Box>
        
        </div>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "centear",
          flexDirection: "column",
          height: { xs: "50vh", md: "90vh", lg: "90vh" },
        }}
        item
        mx={3}
        md={6}
        xs={12}
        sm={12}
      >
        <Typography variant="h6" gutterBottom>{product?.name}</Typography>
        <Typography variant="subtitle" gutterBottom>
          SNEAKINN PRODUCT
        </Typography>
        
        <Typography py={3} width="40vh" fontSize="10px" variant="subtitle">
          {product?.description.substring(0,100)}
        </Typography>
        <Typography variant="subtitle1">
          {!isDemo
            ? product?.traits?.length > 0 && (
                <p className="text-lg	">
                  Retail Price:{" "}
                  {
                    product?.traits.find(
                      (trait) => trait.name === "retail-price"
                    )?.value
                  }
                </p>
              )
            : product?.price}
          $
        </Typography>
        <Box display="flex">

          <Box mx={2}>
            <Button
              onClick={handleCartClick}
              height="30px"
              sx={{ backgroundColor: "blue" }}
              width="200px"
              variant="contained"
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPage;

const products = {
  id: "c318bbcc-312a-4396-9252-698c203d1dea",
  slug: "nike-air-max-1-travis-scott-wheat",
  name: "Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold",
  brand: "nike",
  image:
    "https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Product.jpg",
  description:
    "In collaboration with Travis Scott's record label Cactus Jack, the Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold pays homage to outdoor exploration and the Nike ACG Pocket Knife hiking shoe. It boasts a light yellow layered mesh upper with matching Durabuck overlays and reversed Swoosh logos. A drawstring Gillie lacing system nods to common features on trail runners. At the base, a yellowed sole with a cloudy Air unit adds the finishing touch.\n<br>\n<br>\nThe Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold released in May of 2022 and retailed for $150.",
  category: "sneakers",
  model: "nike-air-max-1",
  sku: "DO9392-700",
  traits: [
    {
      name: "style",
      value: "DO9392-700",
    },
    {
      name: "colorway",
      value: "Saturn Gold/Tea Tree Mist/Tent",
    },
    {
      name: "retail-price",
      value: "150",
    },
    {
      name: "release-date",
      value: "2022-05-27",
    },
    {
      name: "featured",
      value: "false",
    },
  ],
};


          {/* <Box
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
          </Box> */}


            {/* <Box
            display="flex"
            boxShadow="8"
            mt={4}
            flexDirection="row"
            sx={{ justifyContent: "center", alignItems: "center" }}
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
          </Box> */}