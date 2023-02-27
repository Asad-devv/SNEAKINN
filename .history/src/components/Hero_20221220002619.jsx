import { Box ,Typography,Grid} from '@mui/material';
import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import Image from 'mui-image'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {styles} from "/src/components/navbarStyle.jsx"
const theme = createTheme();

theme.typography.h1 = {
  fontSize: '40px',
  '@media (min-width:600px)': {
    fontSize: '40px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
};

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
<ThemeProvider theme={styles}>
    <Box sx={{height:"auto"}}>
    <Grid container display="flex" spacing={2} my={1}>
        <Grid sx={{backgroundColor:"pink"}}display = "flex" flexDirection = "column"  justifyContent="center" height="80vh" item md={6} xs={12} sm={12}>
          
        <Typography fontWeight="900" variant="h1">BEST SNEAKERS </Typography>
        <Typography fontWeight="900" variant="h3">IN TOWN</Typography>
        <Typography variant="h5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio suscipit numquam quas possimus magni explicabo?</Typography>  
        </Grid>
        <Grid  py={2}  item md={6} xs={12} sm={12}>
          <div sx={{backgroundImage : "https://pngtree.com/freepng/red-lighting-circle-element_5995605.html"}} >
            <Typography variant="h3" textAlign="center">Air Jordan 1</Typography>
            <Image src="src/components/hero.png" shift="left" sx={{ filter: 'drop-shadow(10px 10px 10px black) invert(1%)',easing:"ease-in-out" }} height="65vh" fit="contain"  />
          </div>
        </Grid>
      </Grid>
      
      <img src="src/components/wave.png" fit="contain"  />
  
    </Box>
  
    </ThemeProvider  >
   </>
  )
}

export default Hero