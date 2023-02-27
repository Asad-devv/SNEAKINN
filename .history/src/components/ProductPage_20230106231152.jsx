import React, { useState,useEffect } from "react";

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
// import { useDispatch } from "react-redux";
const getProductById = (id) => toprateslaes.items.find(product => product.id === id);


const ProductPage = () => {
  const [product, setProduct] = useState([])
  const [isDemo, setIsDemo] = useState()
    // console.log(window)
  const {id} = useParams()
  // const {color,img,rating,text,title,price} = getProductById(id);
  const findPrice = (item)=>{
    const retailPrice = item.find((trait) => trait.name === "retail-price");
    console.log(retailPrice)
  }
useEffect(() => {
  if(id.includes("-")){
    setIsDemo(false)
    console.log("loru")
    getProductsBySlug(id)
    .then((data)=>{
      console.log(data)
      setProduct(data)
    })
  }
  else{
    setIsDemo(true)
    // const {color,image,rating,name,price}
      setProduct(getProductById(id));
    // console.log(color,image,rating,name,price)
  }


  
},[id])
const dispatch = useDispatch();

  
  const onAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      image: product.image,
      price:product?.traits?.[3]?.value
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
              src={`${product?.image}`}
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
        <Typography variant="h5">{product?.name}</Typography>
        <Typography py={3} width="40vh" variant="subtitle">
          {product?.description}
        </Typography>
        <Typography variant="subtitle1">{!isDemo?((product?.findPrize(traits) )?.value): (product?.price)}$</Typography>
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


traits= [
{name:"style",
value:"DO9392-700"}
,
{name:"colorway",
value:"Saturn Gold/Tea Tree Mist/Tent"}
,
{name:"retail-price",
value:"150"}
,
{name:"release-date",
value:"2022-05-27"}
,
{name:"featured",
value:"false"}]


{
  "id": "c318bbcc-312a-4396-9252-698c203d1dea",
  "slug": "nike-air-max-1-travis-scott-wheat",
  "name": "Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold",
  "brand": "nike",
  "image": "https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Product.jpg",
  "description": "In collaboration with Travis Scott's record label Cactus Jack, the Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold pays homage to outdoor exploration and the Nike ACG Pocket Knife hiking shoe. It boasts a light yellow layered mesh upper with matching Durabuck overlays and reversed Swoosh logos. A drawstring Gillie lacing system nods to common features on trail runners. At the base, a yellowed sole with a cloudy Air unit adds the finishing touch.\n<br>\n<br>\nThe Nike Air Max 1 Travis Scott Cactus Jack Saturn Gold released in May of 2022 and retailed for $150.",
  "category": "sneakers",
  "model": "nike-air-max-1",
  "sku": "DO9392-700",
  "traits": [
    {
      "name": "style",
      "value": "DO9392-700"
    },
    {
      "name": "colorway",
      "value": "Saturn Gold/Tea Tree Mist/Tent"
    },
    {
      "name": "retail-price",
      "value": "150"
    },
    {
      "name": "release-date",
      "value": "2022-05-27"
    },
    {
      "name": "featured",
      "value": "false"
    }
  ],
  "variants": [
    {
      "id": "c9967320-50ce-4e0d-a14e-efa4d4f37771",
      "size": "3.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114066"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 367,
          "highest_bid": 131,
          "number_asks": 8,
          "number_bids": 4
        },
        "sales": {
          "annual_high": 284,
          "annual_low": 232,
          "volatility": 0.079236,
          "price_premium": 0.7,
          "last_sale": 257,
          "change_value": -27,
          "change_percentage": -0.095745
        }
      }
    },
    {
      "id": "c7e40ad8-030e-4444-baaf-30569c52347b",
      "size": "4",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114073"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 216,
          "highest_bid": 133,
          "number_asks": 40,
          "number_bids": 8
        },
        "sales": {
          "annual_high": 400,
          "annual_low": 151,
          "volatility": 0.11836,
          "price_premium": 0.053,
          "last_sale": 160,
          "change_value": -57,
          "change_percentage": -0.265656
        }
      }
    },
    {
      "id": "be3919d2-0b5d-4eb9-8c88-707cce8a53e5",
      "size": "4.5",
      "gtins": [
        {
          "type": "EAN-13",
          "identifier": "2000220711036"
        },
        {
          "type": "UPC",
          "identifier": "195867114080"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 221,
          "highest_bid": 138,
          "number_asks": 19,
          "number_bids": 7
        },
        "sales": {
          "annual_high": 390,
          "annual_low": 163,
          "volatility": 0.090927,
          "price_premium": 0.422,
          "last_sale": 215,
          "change_value": -3,
          "change_percentage": -0.016834
        }
      }
    },
    {
      "id": "9470c529-b18a-44a2-8403-4c092cebd539",
      "size": "5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114097"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 215,
          "highest_bid": 148,
          "number_asks": 60,
          "number_bids": 10
        },
        "sales": {
          "annual_high": 563,
          "annual_low": 152,
          "volatility": 0.197727,
          "price_premium": 0.067,
          "last_sale": 162,
          "change_value": 7,
          "change_percentage": 0.038961
        }
      }
    },
    {
      "id": "abce6769-5444-4033-80e1-473bd8325db7",
      "size": "5.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114103"
        },
        {
          "type": "EAN-13",
          "identifier": "6923175332377"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 233,
          "highest_bid": 154,
          "number_asks": 40,
          "number_bids": 18
        },
        "sales": {
          "annual_high": 504,
          "annual_low": 155,
          "volatility": 0.108943,
          "price_premium": 0.281,
          "last_sale": 194,
          "change_value": 19,
          "change_percentage": 0.105378
        }
      }
    },
    {
      "id": "2fba0368-f3a2-466b-b7ed-52b3f34163d6",
      "size": "6",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114110"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 209,
          "highest_bid": 182,
          "number_asks": 69,
          "number_bids": 16
        },
        "sales": {
          "annual_high": 504,
          "annual_low": 164,
          "volatility": 0.078876,
          "price_premium": 0.34,
          "last_sale": 203,
          "change_value": 3,
          "change_percentage": 0.014171
        }
      }
    },
    {
      "id": "800863d8-c4bb-487d-9cc6-033593f5c593",
      "size": "6.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114127"
        },
        {
          "type": "EAN-13",
          "identifier": "6923195332371"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 254,
          "highest_bid": 201,
          "number_asks": 60,
          "number_bids": 18
        },
        "sales": {
          "annual_high": 445,
          "annual_low": 175,
          "volatility": 0.076153,
          "price_premium": 0.393,
          "last_sale": 211,
          "change_value": 11,
          "change_percentage": 0.050251
        }
      }
    },
    {
      "id": "5e1b81b2-7236-47c0-95b2-91fc0f25a3d5",
      "size": "7",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114134"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 275,
          "highest_bid": 220,
          "number_asks": 64,
          "number_bids": 20
        },
        "sales": {
          "annual_high": 1511,
          "annual_low": 193,
          "volatility": 0.073535,
          "price_premium": 0.467,
          "last_sale": 222,
          "change_value": -13,
          "change_percentage": -0.055794
        }
      }
    },
    {
      "id": "c49f057a-ca32-43f6-bcff-23859649d482",
      "size": "7.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114141"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 288,
          "highest_bid": 212,
          "number_asks": 61,
          "number_bids": 28
        },
        "sales": {
          "annual_high": 1120,
          "annual_low": 187,
          "volatility": 0.136363,
          "price_premium": 0.427,
          "last_sale": 216,
          "change_value": -72,
          "change_percentage": -0.252966
        }
      }
    },
    {
      "id": "3d3b3ac9-8560-4c36-9168-01aa40ccfcc9",
      "size": "8",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114158"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 280,
          "highest_bid": 239,
          "number_asks": 98,
          "number_bids": 45
        },
        "sales": {
          "annual_high": 1234,
          "annual_low": 189,
          "volatility": 0.126856,
          "price_premium": 0.3,
          "last_sale": 197,
          "change_value": -10,
          "change_percentage": -0.050261
        }
      }
    },
    {
      "id": "399319ad-1f0d-43ae-b034-d300fde28091",
      "size": "8.5",
      "gtins": [
        {
          "type": "EAN-13",
          "identifier": "5059653686258"
        },
        {
          "type": "UPC",
          "identifier": "195867114165"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 296,
          "highest_bid": 249,
          "number_asks": 78,
          "number_bids": 68
        },
        "sales": {
          "annual_high": 1511,
          "annual_low": 212,
          "volatility": 0.085916,
          "price_premium": 0.6,
          "last_sale": 242,
          "change_value": -56,
          "change_percentage": -0.188747
        }
      }
    },
    {
      "id": "c0d96ae8-3079-4b25-96b1-93dc3324d411",
      "size": "9",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114172"
        },
        {
          "type": "EAN-13",
          "identifier": "38826856"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 302,
          "highest_bid": 253,
          "number_asks": 117,
          "number_bids": 64
        },
        "sales": {
          "annual_high": 2820,
          "annual_low": 230,
          "volatility": 0.069895,
          "price_premium": 1,
          "last_sale": 303,
          "change_value": 66,
          "change_percentage": 0.276239
        }
      }
    },
    {
      "id": "86a7a18b-aa9e-40b8-86a2-d376c2ef5f05",
      "size": "9.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114189"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 322,
          "highest_bid": 282,
          "number_asks": 120,
          "number_bids": 73
        },
        "sales": {
          "annual_high": 1712,
          "annual_low": 243,
          "volatility": 0.056855,
          "price_premium": 0.901,
          "last_sale": 287,
          "change_value": -24,
          "change_percentage": -0.07791
        }
      }
    },
    {
      "id": "52e1f26b-2a94-4a88-acd5-e497811fe68e",
      "size": "10",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114196"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 327,
          "highest_bid": 277,
          "number_asks": 103,
          "number_bids": 64
        },
        "sales": {
          "annual_high": 1869,
          "annual_low": 251,
          "volatility": 0.053039,
          "price_premium": 0.847,
          "last_sale": 279,
          "change_value": -16,
          "change_percentage": -0.054543
        }
      }
    },
    {
      "id": "7de6f057-ced2-4f1e-823d-149239c83b6a",
      "size": "10.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114202"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 317,
          "highest_bid": 273,
          "number_asks": 103,
          "number_bids": 59
        },
        "sales": {
          "annual_high": 2518,
          "annual_low": 265,
          "volatility": 0.026287,
          "price_premium": 0.901,
          "last_sale": 287,
          "change_value": -11,
          "change_percentage": -0.03927
        }
      }
    },
    {
      "id": "5dcfff98-7a1d-4e35-881d-6a569f347a01",
      "size": "11",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114219"
        },
        {
          "type": "EAN-13",
          "identifier": "41639191"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 317,
          "highest_bid": 273,
          "number_asks": 98,
          "number_bids": 46
        },
        "sales": {
          "annual_high": 2517,
          "annual_low": 272,
          "volatility": 0.057276,
          "price_premium": 0.96,
          "last_sale": 297,
          "change_value": 11,
          "change_percentage": 0.035211
        }
      }
    },
    {
      "id": "042348c0-647a-4740-a768-18ab3e545f1d",
      "size": "11.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114226"
        },
        {
          "type": "EAN-13",
          "identifier": "5059653686319"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 316,
          "highest_bid": 282,
          "number_asks": 60,
          "number_bids": 26
        },
        "sales": {
          "annual_high": 2266,
          "annual_low": 266,
          "volatility": 0.060478,
          "price_premium": 1.313,
          "last_sale": 350,
          "change_value": 65,
          "change_percentage": 0.226148
        }
      }
    },
    {
      "id": "a2d123d1-280a-4c3c-af60-6b7db53999dd",
      "size": "12",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114233"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 328,
          "highest_bid": 288,
          "number_asks": 77,
          "number_bids": 37
        },
        "sales": {
          "annual_high": 3021,
          "annual_low": 277,
          "volatility": 0.068339,
          "price_premium": 1.172,
          "last_sale": 329,
          "change_value": 29,
          "change_percentage": 0.096864
        }
      }
    },
    {
      "id": "c25ff98c-fd78-4397-b50c-287eeecb1d52",
      "size": "12.5",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114240"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 422,
          "highest_bid": 287,
          "number_asks": 30,
          "number_bids": 20
        },
        "sales": {
          "annual_high": 922,
          "annual_low": 242,
          "volatility": 0.060972,
          "price_premium": 1.024,
          "last_sale": 307,
          "change_value": 29,
          "change_percentage": 0.103762
        }
      }
    },
    {
      "id": "6ad9ec7a-ef95-4afc-bd92-f6af76ca0b55",
      "size": "13",
      "gtins": [
        {
          "type": "EAN-13",
          "identifier": "2000220711203"
        },
        {
          "type": "UPC",
          "identifier": "195867114257"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 339,
          "highest_bid": 275,
          "number_asks": 42,
          "number_bids": 25
        },
        "sales": {
          "annual_high": 1762,
          "annual_low": 277,
          "volatility": 0.050173,
          "price_premium": 1.013,
          "last_sale": 305,
          "change_value": -13,
          "change_percentage": -0.04127
        }
      }
    },
    {
      "id": "7228310b-4bf8-492e-bfa1-cf328d1650f0",
      "size": "14",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114264"
        },
        {
          "type": "EAN-13",
          "identifier": "2000009251210"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 317,
          "highest_bid": 247,
          "number_asks": 55,
          "number_bids": 13
        },
        "sales": {
          "annual_high": 2820,
          "annual_low": 219,
          "volatility": 0.077336,
          "price_premium": 0.803,
          "last_sale": 272,
          "change_value": -18,
          "change_percentage": -0.062315
        }
      }
    },
    {
      "id": "1b64855c-96d9-4e1b-936a-00a25d11a1a9",
      "size": "15",
      "gtins": [
        {
          "type": "UPC",
          "identifier": "195867114271"
        },
        {
          "type": "EAN-13",
          "identifier": "2000220711234"
        }
      ],
      "market": {
        "bids": {
          "lowest_ask": 276,
          "highest_bid": 186,
          "number_asks": 24,
          "number_bids": 7
        },
        "sales": {
          "annual_high": 907,
          "annual_low": 204,
          "volatility": 0.080414,
          "price_premium": 0.56,
          "last_sale": 236,
          "change_value": 20,
          "change_percentage": 0.088372
        }
      }
    }
  ],
  "market": {
    "bids": {
      "lowest_ask": 209,
      "highest_bid": 288,
      "number_asks": 1432,
      "number_bids": 680
    },
    "sales": {
      "annual_high": 3021,
      "annual_low": 151,
      "volatility": 0.136373,
      "price_premium": 0.863,
      "last_sale": 281,
      "change_value": 30,
      "change_percentage": 0.118461
    }
  }
}