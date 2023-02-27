import { Box, Typography, Grid,Button, useTheme,useMediaQuery } from "@mui/material";
import React from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";
import Image from "mui-image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styles } from "/src/components/navbarStyle.jsx";
const theme = createTheme();

theme.typography.h1 = {
  fontSize: "30px",
  "@media (min-width:600px)": {
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
};

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => 
{
  const uTheme = useTheme();// console.log(heroapi)
  const isMobile = useMediaQuery(uTheme.breakpoints.down('md'))
  console.log(isMobile)
  return (
    <>
      <ThemeProvider theme={styles}>
        <Box sx={{ height: "auto" }}>
          <Grid container spacing={2} my={1}>
            <Grid
              sx={{ paddingLeft: "50px", backgroundColor: "" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="80vh"
              item

              md={6}
              xs={12}
              sm={12}
              p={5}
            >
              <div style={{paddingLeft : "30px"}}>
              <Typography fontWeight="900" variant="h2">
                BEST SNEAKERS
              </Typography>
              <Typography fontWeight="900" variant="h3">
                IN TOWN
              </Typography>
              <Typography
                overflow="hidden"
                py={2}
                width="50vh"
                fontSize="12px"
                variant="h6"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                distinctio suscipit numquam quas possimus magni explicabo?
              </Typography>
              <button>Buy Sneaker</button>
              </div>  
            </Grid>
            
            <Grid py={2} item md={4} xs={8} sm={12}>
              <div
              >
                <Typography variant="h4" textAlign="center">
                  Air Jordan 1
                </Typography>
                <Image
                  src="src/components/hero.png"
                  shift="left"
                  sx={{
                    filter: "drop-shadow(10px 10px 10px black) invert(1%)",
                    easing: "ease-in-out",
                  }}
                  height="65vh"
                  fit="contain"
                />
              </div>
            </Grid>
            <Grid item md={2} xs={4} height="70vh">
              <div style={{display : "flex",flexDirection:{`column"`},height :"70vh"}}>
                <Image src="src/components/hero.png" height="10vh" fit="contain" />
                <Image src="src/components/hero.png" height="10vh" fit="contain" />
                <Image src="src/components/hero.png" height="10vh" fit="contain" />
              
              </div>
            </Grid>
          </Grid>

          <img src="src/components/wave.png" fit="contain" />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Hero;
