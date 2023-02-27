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
        <Box sx={{ height: "110vh" ,backgroundImage : "url('src/acomponents/wave.png')"}}>
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
            <Grid item md={2} xs={4} height="70vh" >
              <div style={{display : "flex",flexDirection:"column",height :"70vh",justifyContent :"space-evenly" }}>
                <Image src="src/components/hero.png" style = {{border : "2px solid"}} height="10vh" fit="contain" />
                <Image  src="data:image/jpeg;base64,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" height="19vh" width = "20vh" p={1} style = {{border : "1px solid" ,borderRadius:"5px"}} fit="contain" />
                <Image src="src/components/hero.png" height="10vh" fit="contain" />
              
              </div>
            </Grid>
          </Grid>

    
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Hero;
