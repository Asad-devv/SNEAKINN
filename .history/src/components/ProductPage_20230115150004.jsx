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
        console.log(product);
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
          ? `${product.price}`
          : `${return product?.traits.find((trait) => trait.name === "retail-price")?.value}'
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
          height:{md:" 80vh",xs:"auto",md:"80vh"}
        }}
        md={5}
        xs={12}
        sm={12}

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
        <Typography variant="h6" gutterBottom>
          {product?.name}
        </Typography>
        <Typography variant="subtitle" gutterBottom>
          SNEAKINN PRODUCT
        </Typography>

        <Typography py={3} width="40vh" fontSize="10px" variant="subtitle" gutterBottom>
          {product?.description?.substring(0, 100)}
        </Typography>
        <Box width="60vh" pr={1} sx={{ width: { xs: "43vh",md:"60vh" } }}>
          <Box display="flex" justifyContent="space-between" gutterBottom>
            <Typography variant="subtitle1"   >Retail Price : </Typography>
            <Typography variant="subtitle1" >
              {!isDemo
                ? product?.traits?.length > 0 && (
                    <p className="text-lg w-11	">
                      {
                        product?.traits.find(
                          (trait) => trait.name === "retail-price"
                        )?.value
                      }
                      $
                    </p>
                  )
                : product?.price}
              {isDemo && "$"}
            </Typography>
          </Box>
          {!isDemo && (
            <>
              <Box display="flex" gutterBottom justifyContent="space-between">
                <Typography variant="subtitle1">Model : </Typography>
                <Typography variant="subtitle" fontSize="10pax">
                  {product?.model.substring(0, 18)}
                </Typography>
              </Box>

              <Box display="flex" gutterBottom justifyContent="space-between">
                <Typography>Highest Bid : </Typography>
                <Typography variant="subtitle" >{product?.market?.bids.highest_bid}$</Typography>
              </Box>
              <Box display="flex" gutterBottom justifyContent="space-between">
                <Typography>Lowest Ask : </Typography>
                <Typography variant="subtitle" >{product?.market?.bids.lowest_ask}$</Typography>
              </Box>
              <Box display="flex" gutterBottom justifyContent="space-between">
                <Typography>Category : </Typography>
                <Typography variant="subtitle" >{product?.category}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" gutterBottom>
            <Typography variant="subtitle1"   >Colorway : </Typography>
            <Typography variant="subtitle1" >

                 {product?.traits?.length > 0 && (
                    <p className="text-sm	">
                      {
                        product?.traits.find(
                          (trait) => trait.name === "colorway"
                        )?.value?.substring(0,20)
                      }
                      
                    </p>
                  )}


            </Typography>
          </Box>
          {/* release-date */}
          <Box display="flex" justifyContent="space-between" gutterBottom>
            <Typography variant="subtitle1"   >Released Date : </Typography>
            <Typography variant="subtitle1" >

                 {product?.traits?.length > 0 && (
                    <p className="text-sm	">
                      {
                        product?.traits.find(
                          (trait) => trait.name === "release-date"
                        )?.value
                      }
                      
                    </p>
                  )}


            </Typography>
          </Box>

            </>
          )}
          <Box display="flex">
            <Box>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPage;

const product = {
  id: "c318bbcc-312a-4396-9252-698c203d1dea",
  slug: "nike-air-max-1-travis-scott-wheat",
  name: "Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold",
  brand: "nike",
  image:
    "https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Product.jpg",
  description:
    "Créée en collaboration avec le label Cactus Jack de Travis Scott, la Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold rend hommage à l'exploration des grands espaces et à la chaussure de randonnée Nike ACG Pocket Knife. Elle possède une empeigne en mesh jaune clair à plusieurs épaisseurs, rehaussée de renforts en cuir synthétique Durabuck et de Swoosh à l'envers assortis. Le système de laçage ghillie à cordon de serrage rappelle une caractéristique courante dans le trail. À la base, la semelle jaune dotée d'une unité Air moelleuse vient parachever ce modèle.\n<br>\n<br>\nLa Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold est sortie en mai 2022 au prix Retail de 150 $.",
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
  variants: [
    {
      id: "c9967320-50ce-4e0d-a14e-efa4d4f37771",
      sizes: [
        {
          size: "US M 3.5",
          type: "us m",
        },
        {
          size: "UK 3",
          type: "uk",
        },
        {
          size: "JP 22.5",
          type: "jp",
        },
        {
          size: "KR 225",
          type: "kr",
        },
        {
          size: "EU 35.5",
          type: "eu",
        },
        {
          size: "US W 5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114066",
        },
      ],
      market: {
        bids: {
          lowest_ask: 315,
          highest_bid: 130,
          number_asks: 4,
          number_bids: 7,
        },
        sales: {
          annual_high: 265,
          annual_low: 216,
          volatility: 0.069815,
          price_premium: 0.727,
          last_sale: 243,
          change_value: 4,
          change_percentage: 0.015686,
        },
      },
    },
    {
      id: "c7e40ad8-030e-4444-baaf-30569c52347b",
      sizes: [
        {
          size: "US M 4",
          type: "us m",
        },
        {
          size: "UK 3.5",
          type: "uk",
        },
        {
          size: "JP 23",
          type: "jp",
        },
        {
          size: "KR 230",
          type: "kr",
        },
        {
          size: "EU 36",
          type: "eu",
        },
        {
          size: "US W 5.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114073",
        },
      ],
      market: {
        bids: {
          lowest_ask: 220,
          highest_bid: 147,
          number_asks: 21,
          number_bids: 7,
        },
        sales: {
          annual_high: 372,
          annual_low: 109,
          volatility: 0.162465,
          price_premium: 0.043,
          last_sale: 147,
          change_value: -73,
          change_percentage: -0.333835,
        },
      },
    },
    {
      id: "be3919d2-0b5d-4eb9-8c88-707cce8a53e5",
      sizes: [
        {
          size: "US M 4.5",
          type: "us m",
        },
        {
          size: "UK 4",
          type: "uk",
        },
        {
          size: "JP 23.5 (US M 4.5)",
          type: "jp",
        },
        {
          size: "KR 235 (US M 4.5)",
          type: "kr",
        },
        {
          size: "EU 36.5",
          type: "eu",
        },
        {
          size: "US W 6",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "EAN-13",
          identifier: "2000220711036",
        },
        {
          type: "UPC",
          identifier: "195867114080",
        },
      ],
      market: {
        bids: {
          lowest_ask: 221,
          highest_bid: 152,
          number_asks: 13,
          number_bids: 8,
        },
        sales: {
          annual_high: 363,
          annual_low: 142,
          volatility: 0.138628,
          price_premium: 0.32,
          last_sale: 186,
          change_value: -30,
          change_percentage: -0.142857,
        },
      },
    },
    {
      id: "9470c529-b18a-44a2-8403-4c092cebd539",
      sizes: [
        {
          size: "US M 5",
          type: "us m",
        },
        {
          size: "UK 4.5",
          type: "uk",
        },
        {
          size: "JP 23.5 (US M 5)",
          type: "jp",
        },
        {
          size: "KR 235 (US M 5)",
          type: "kr",
        },
        {
          size: "EU 37.5",
          type: "eu",
        },
        {
          size: "US W 6.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114097",
        },
      ],
      market: {
        bids: {
          lowest_ask: 221,
          highest_bid: 145,
          number_asks: 30,
          number_bids: 12,
        },
        sales: {
          annual_high: 524,
          annual_low: 134,
          volatility: 0.061825,
          price_premium: 0.422,
          last_sale: 200,
          change_value: 25,
          change_percentage: 0.140516,
        },
      },
    },
    {
      id: "abce6769-5444-4033-80e1-473bd8325db7",
      sizes: [
        {
          size: "US M 5.5",
          type: "us m",
        },
        {
          size: "UK 5",
          type: "uk",
        },
        {
          size: "JP 24 (US M 5.5)",
          type: "jp",
        },
        {
          size: "KR 240 (US M 5.5)",
          type: "kr",
        },
        {
          size: "EU 38",
          type: "eu",
        },
        {
          size: "US W 7",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114103",
        },
        {
          type: "EAN-13",
          identifier: "6923175332377",
        },
      ],
      market: {
        bids: {
          lowest_ask: 231,
          highest_bid: 163,
          number_asks: 29,
          number_bids: 13,
        },
        sales: {
          annual_high: 469,
          annual_low: 144,
          volatility: 0.072277,
          price_premium: 0.576,
          last_sale: 222,
          change_value: 32,
          change_percentage: 0.167674,
        },
      },
    },
    {
      id: "2fba0368-f3a2-466b-b7ed-52b3f34163d6",
      sizes: [
        {
          size: "US M 6",
          type: "us m",
        },
        {
          size: "UK 5.5",
          type: "uk",
        },
        {
          size: "JP 24 (US M 6)",
          type: "jp",
        },
        {
          size: "KR 240 (US M 6)",
          type: "kr",
        },
        {
          size: "EU 38.5",
          type: "eu",
        },
        {
          size: "US W 7.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114110",
        },
      ],
      market: {
        bids: {
          lowest_ask: 219,
          highest_bid: 166,
          number_asks: 31,
          number_bids: 16,
        },
        sales: {
          annual_high: 469,
          annual_low: 142,
          volatility: 0.07954,
          price_premium: 0.55,
          last_sale: 218,
          change_value: -1,
          change_percentage: -0.00862,
        },
      },
    },
    {
      id: "800863d8-c4bb-487d-9cc6-033593f5c593",
      sizes: [
        {
          size: "US M 6.5",
          type: "us m",
        },
        {
          size: "UK 6 (EU 39)",
          type: "uk",
        },
        {
          size: "JP 24.5",
          type: "jp",
        },
        {
          size: "KR 245",
          type: "kr",
        },
        {
          size: "EU 39",
          type: "eu",
        },
        {
          size: "US W 8",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114127",
        },
        {
          type: "EAN-13",
          identifier: "6923195332371",
        },
      ],
      market: {
        bids: {
          lowest_ask: 243,
          highest_bid: 190,
          number_asks: 42,
          number_bids: 18,
        },
        sales: {
          annual_high: 414,
          annual_low: 151,
          volatility: 0.096862,
          price_premium: 0.36,
          last_sale: 192,
          change_value: -9,
          change_percentage: -0.048254,
        },
      },
    },
    {
      id: "5e1b81b2-7236-47c0-95b2-91fc0f25a3d5",
      sizes: [
        {
          size: "US M 7",
          type: "us m",
        },
        {
          size: "UK 6 (EU 40)",
          type: "uk",
        },
        {
          size: "JP 25",
          type: "jp",
        },
        {
          size: "KR 250",
          type: "kr",
        },
        {
          size: "EU 40",
          type: "eu",
        },
        {
          size: "US W 8.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114134",
        },
      ],
      market: {
        bids: {
          lowest_ask: 262,
          highest_bid: 188,
          number_asks: 38,
          number_bids: 25,
        },
        sales: {
          annual_high: 1406,
          annual_low: 174,
          volatility: 0.069432,
          price_premium: 0.765,
          last_sale: 249,
          change_value: 61,
          change_percentage: 0.323975,
        },
      },
    },
    {
      id: "c49f057a-ca32-43f6-bcff-23859649d482",
      sizes: [
        {
          size: "US M 7.5",
          type: "us m",
        },
        {
          size: "UK 6.5",
          type: "uk",
        },
        {
          size: "JP 25.5",
          type: "jp",
        },
        {
          size: "KR 255",
          type: "kr",
        },
        {
          size: "EU 40.5",
          type: "eu",
        },
        {
          size: "US W 9",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114141",
        },
      ],
      market: {
        bids: {
          lowest_ask: 275,
          highest_bid: 220,
          number_asks: 38,
          number_bids: 16,
        },
        sales: {
          annual_high: 1042,
          annual_low: 174,
          volatility: 0.111016,
          price_premium: 0.652,
          last_sale: 233,
          change_value: 14,
          change_percentage: 0.063836,
        },
      },
    },
    {
      id: "3d3b3ac9-8560-4c36-9168-01aa40ccfcc9",
      sizes: [
        {
          size: "US M 8",
          type: "us m",
        },
        {
          size: "UK 7",
          type: "uk",
        },
        {
          size: "JP 26",
          type: "jp",
        },
        {
          size: "KR 260",
          type: "kr",
        },
        {
          size: "EU 41",
          type: "eu",
        },
        {
          size: "US W 9.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114158",
        },
      ],
      market: {
        bids: {
          lowest_ask: 285,
          highest_bid: 242,
          number_asks: 59,
          number_bids: 36,
        },
        sales: {
          annual_high: 1148,
          annual_low: 176,
          volatility: 0.112516,
          price_premium: 0.513,
          last_sale: 213,
          change_value: -59,
          change_percentage: -0.217278,
        },
      },
    },
    {
      id: "399319ad-1f0d-43ae-b034-d300fde28091",
      sizes: [
        {
          size: "US M 8.5",
          type: "us m",
        },
        {
          size: "UK 7.5",
          type: "uk",
        },
        {
          size: "JP 26.5",
          type: "jp",
        },
        {
          size: "KR 265",
          type: "kr",
        },
        {
          size: "EU 42",
          type: "eu",
        },
        {
          size: "US W 10",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114165",
        },
        {
          type: "EAN-13",
          identifier: "2006944001026",
        },
      ],
      market: {
        bids: {
          lowest_ask: 315,
          highest_bid: 266,
          number_asks: 53,
          number_bids: 56,
        },
        sales: {
          annual_high: 1406,
          annual_low: 183,
          volatility: 0,
          price_premium: 0.838,
          last_sale: 259,
          change_value: -51,
          change_percentage: -0.165946,
        },
      },
    },
    {
      id: "c0d96ae8-3079-4b25-96b1-93dc3324d411",
      sizes: [
        {
          size: "US M 9",
          type: "us m",
        },
        {
          size: "UK 8",
          type: "uk",
        },
        {
          size: "JP 27",
          type: "jp",
        },
        {
          size: "KR 270",
          type: "kr",
        },
        {
          size: "EU 42.5",
          type: "eu",
        },
        {
          size: "US W 10.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114172",
        },
        {
          type: "EAN-13",
          identifier: "38826856",
        },
      ],
      market: {
        bids: {
          lowest_ask: 303,
          highest_bid: 256,
          number_asks: 66,
          number_bids: 58,
        },
        sales: {
          annual_high: 1602,
          annual_low: 201,
          volatility: 0.101999,
          price_premium: 0.667,
          last_sale: 235,
          change_value: 13,
          change_percentage: 0.054751,
        },
      },
    },
    {
      id: "86a7a18b-aa9e-40b8-86a2-d376c2ef5f05",
      sizes: [
        {
          size: "US M 9.5",
          type: "us m",
        },
        {
          size: "UK 8.5",
          type: "uk",
        },
        {
          size: "JP 27.5",
          type: "jp",
        },
        {
          size: "KR 275",
          type: "kr",
        },
        {
          size: "EU 43",
          type: "eu",
        },
        {
          size: "US W 11",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114189",
        },
      ],
      market: {
        bids: {
          lowest_ask: 324,
          highest_bid: 280,
          number_asks: 64,
          number_bids: 64,
        },
        sales: {
          annual_high: 1593,
          annual_low: 218,
          volatility: 0.101659,
          price_premium: 1.273,
          last_sale: 320,
          change_value: 59,
          change_percentage: 0.222222,
        },
      },
    },
    {
      id: "52e1f26b-2a94-4a88-acd5-e497811fe68e",
      sizes: [
        {
          size: "US M 10",
          type: "us m",
        },
        {
          size: "UK 9",
          type: "uk",
        },
        {
          size: "JP 28",
          type: "jp",
        },
        {
          size: "KR 280",
          type: "kr",
        },
        {
          size: "EU 44",
          type: "eu",
        },
        {
          size: "US W 11.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114196",
        },
      ],
      market: {
        bids: {
          lowest_ask: 323,
          highest_bid: 285,
          number_asks: 70,
          number_bids: 48,
        },
        sales: {
          annual_high: 1739,
          annual_low: 222,
          volatility: 0.110049,
          price_premium: 1.298,
          last_sale: 324,
          change_value: 90,
          change_percentage: 0.384465,
        },
      },
    },
    {
      id: "7de6f057-ced2-4f1e-823d-149239c83b6a",
      sizes: [
        {
          size: "US M 10.5",
          type: "us m",
        },
        {
          size: "UK 9.5",
          type: "uk",
        },
        {
          size: "JP 28.5",
          type: "jp",
        },
        {
          size: "KR 285",
          type: "kr",
        },
        {
          size: "EU 44.5",
          type: "eu",
        },
        {
          size: "US W 12",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114202",
        },
        {
          type: "EAN-13",
          identifier: "12210185743",
        },
      ],
      market: {
        bids: {
          lowest_ask: 315,
          highest_bid: 266,
          number_asks: 61,
          number_bids: 48,
        },
        sales: {
          annual_high: 1406,
          annual_low: 207,
          volatility: 0.117332,
          price_premium: 0.88,
          last_sale: 265,
          change_value: -9,
          change_percentage: -0.036052,
        },
      },
    },
    {
      id: "5dcfff98-7a1d-4e35-881d-6a569f347a01",
      sizes: [
        {
          size: "US M 11",
          type: "us m",
        },
        {
          size: "UK 10",
          type: "uk",
        },
        {
          size: "JP 29",
          type: "jp",
        },
        {
          size: "KR 290",
          type: "kr",
        },
        {
          size: "EU 45",
          type: "eu",
        },
        {
          size: "US W 12.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114219",
        },
        {
          type: "EAN-13",
          identifier: "41639191",
        },
      ],
      market: {
        bids: {
          lowest_ask: 314,
          highest_bid: 276,
          number_asks: 68,
          number_bids: 42,
        },
        sales: {
          annual_high: 1083,
          annual_low: 227,
          volatility: 0.050777,
          price_premium: 1.2,
          last_sale: 310,
          change_value: 22,
          change_percentage: 0.074238,
        },
      },
    },
    {
      id: "042348c0-647a-4740-a768-18ab3e545f1d",
      sizes: [
        {
          size: "US M 11.5",
          type: "us m",
        },
        {
          size: "UK 10.5",
          type: "uk",
        },
        {
          size: "JP 29.5",
          type: "jp",
        },
        {
          size: "KR 295",
          type: "kr",
        },
        {
          size: "EU 45.5",
          type: "eu",
        },
        {
          size: "US W 13",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114226",
        },
        {
          type: "EAN-13",
          identifier: "5059653686319",
        },
      ],
      market: {
        bids: {
          lowest_ask: 324,
          highest_bid: 271,
          number_asks: 35,
          number_bids: 36,
        },
        sales: {
          annual_high: 1217,
          annual_low: 218,
          volatility: 0.045002,
          price_premium: 0.847,
          last_sale: 260,
          change_value: 2,
          change_percentage: 0.007273,
        },
      },
    },
    {
      id: "a2d123d1-280a-4c3c-af60-6b7db53999dd",
      sizes: [
        {
          size: "US M 12",
          type: "us m",
        },
        {
          size: "UK 11",
          type: "uk",
        },
        {
          size: "JP 30",
          type: "jp",
        },
        {
          size: "KR 300",
          type: "kr",
        },
        {
          size: "EU 46",
          type: "eu",
        },
        {
          size: "US W 13.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114233",
        },
      ],
      market: {
        bids: {
          lowest_ask: 334,
          highest_bid: 304,
          number_asks: 50,
          number_bids: 29,
        },
        sales: {
          annual_high: 1404,
          annual_low: 237,
          volatility: 0.082068,
          price_premium: 1.376,
          last_sale: 334,
          change_value: 76,
          change_percentage: 0.291565,
        },
      },
    },
    {
      id: "c25ff98c-fd78-4397-b50c-287eeecb1d52",
      sizes: [
        {
          size: "US M 12.5",
          type: "us m",
        },
        {
          size: "UK 11.5",
          type: "uk",
        },
        {
          size: "JP 30.5",
          type: "jp",
        },
        {
          size: "KR 305",
          type: "kr",
        },
        {
          size: "EU 47",
          type: "eu",
        },
        {
          size: "US W 14",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114240",
        },
      ],
      market: {
        bids: {
          lowest_ask: 394,
          highest_bid: 247,
          number_asks: 14,
          number_bids: 8,
        },
        sales: {
          annual_high: 858,
          annual_low: 225,
          volatility: 0.047792,
          price_premium: 0.987,
          last_sale: 280,
          change_value: -1,
          change_percentage: -0.006667,
        },
      },
    },
    {
      id: "6ad9ec7a-ef95-4afc-bd92-f6af76ca0b55",
      sizes: [
        {
          size: "US M 13",
          type: "us m",
        },
        {
          size: "UK 12",
          type: "uk",
        },
        {
          size: "JP 31",
          type: "jp",
        },
        {
          size: "KR 310",
          type: "kr",
        },
        {
          size: "EU 47.5",
          type: "eu",
        },
        {
          size: "US W 14.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "EAN-13",
          identifier: "2000220711203",
        },
        {
          type: "UPC",
          identifier: "195867114257",
        },
      ],
      market: {
        bids: {
          lowest_ask: 321,
          highest_bid: 266,
          number_asks: 28,
          number_bids: 25,
        },
        sales: {
          annual_high: 1640,
          annual_low: 231,
          volatility: 0.052553,
          price_premium: 1.331,
          last_sale: 328,
          change_value: 47,
          change_percentage: 0.165639,
        },
      },
    },
    {
      id: "7228310b-4bf8-492e-bfa1-cf328d1650f0",
      sizes: [
        {
          size: "US M 14",
          type: "us m",
        },
        {
          size: "UK 13",
          type: "uk",
        },
        {
          size: "JP 32",
          type: "jp",
        },
        {
          size: "KR 320",
          type: "kr",
        },
        {
          size: "EU 48.5",
          type: "eu",
        },
        {
          size: "US W 15.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114264",
        },
        {
          type: "EAN-13",
          identifier: "2000009251210",
        },
      ],
      market: {
        bids: {
          lowest_ask: 325,
          highest_bid: 213,
          number_asks: 31,
          number_bids: 13,
        },
        sales: {
          annual_high: 2624,
          annual_low: 188,
          volatility: 0.105255,
          price_premium: 0.8,
          last_sale: 253,
          change_value: 0,
          change_percentage: 0,
        },
      },
    },
    {
      id: "1b64855c-96d9-4e1b-936a-00a25d11a1a9",
      sizes: [
        {
          size: "US M 15",
          type: "us m",
        },
        {
          size: "UK 14",
          type: "uk",
        },
        {
          size: "JP 33",
          type: "jp",
        },
        {
          size: "KR 330",
          type: "kr",
        },
        {
          size: "EU 49.5",
          type: "eu",
        },
        {
          size: "US W 16.5",
          type: "us w",
        },
      ],
      gtins: [
        {
          type: "UPC",
          identifier: "195867114271",
        },
        {
          type: "EAN-13",
          identifier: "2000220711234",
        },
      ],
      market: {
        bids: {
          lowest_ask: 262,
          highest_bid: 182,
          number_asks: 18,
          number_bids: 10,
        },
        sales: {
          annual_high: 844,
          annual_low: 169,
          volatility: 0.086726,
          price_premium: 0.753,
          last_sale: 247,
          change_value: -4,
          change_percentage: -0.018657,
        },
      },
    },
  ],
  market: {
    bids: {
      lowest_ask: 219,
      highest_bid: 304,
      number_asks: 863,
      number_bids: 590,
    },
    sales: {
      annual_high: 2624,
      annual_low: 109,
      volatility: 0.133679,
      price_premium: 1.376,
      last_sale: 334,
      change_value: 15,
      change_percentage: 0.045372,
    },
  },
};
{
  /* <Box
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
          </Box> */
}

{
  /* <Box
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
          </Box> */
}
