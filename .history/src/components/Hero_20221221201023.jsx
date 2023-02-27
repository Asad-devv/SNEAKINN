import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
}) => {
  const uTheme = useTheme(); // console.log(heroapi)
  const isMobile = useMediaQuery(uTheme.breakpoints.down("md"));
  console.log(isMobile);
  return (
    <>
      <ThemeProvider theme={styles}>
        <Box
          sx={{
            height: "110vh",
            backgroundImage: "url('src/acomponents/wave.png')",
          }}
        >
          <Grid container spacing={2} my={1}>
            <Grid
              sx={{ paddingLeft: "50px", backgroundColor: "" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="80vh"
              item
              md={5}
              xs={12}
              sm={12}
              p={5}
            >
              <div style={{ paddingLeft: "30px" }}>
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

            <Grid py={2} sx={{backgroundC}}  item md={5} xs={8} sm={12}>
              <div>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "70vh",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WokVDFwNUmbygDIHkYXwly4ZFBfXYkLB5A&usqp=CAU"
                  width="20vh"
                  height="19vh"
                  p={1}
                  style={{ border: "1px solid", borderRadius: "5px" }}
                  fit="contain"
                />
                <Image
                  src=" https://www.pngarts.com/files/8/Air-Force-One-White-Nike-Shoes-Transparent-Background-PNG.png"
                  height="19vh"
                  width="20vh"
                  p={1}
                  style={{ border: "1px solid", borderRadius: "5px" }}
                  fit="contain"
                />
                <Image
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fair-jordan-3-fire-red-DN3707-160-release-date-0.jpg?w=720&cbr=1&q=90&fit=max"
                  fit="contain"
                  width="20vh"
                  height="19vh"
                  p={1}
                  style={{ border: "1px solid", borderRadius: "5px" }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Hero;
