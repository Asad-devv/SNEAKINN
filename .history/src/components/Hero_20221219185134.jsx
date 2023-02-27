import { Box ,Typography} from '@mui/material';
import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import Image from 'mui-image'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
ThemeProvider>
    <Box sx={{backgroundImage : 'wave.png' , height:"100vh"}}>
    <Box  display="" md={6} sm={12} sx={''}  >
      <Typography variant = "h2"><a style={{fontWeight:700}}title=''>BEST NIKE</a></Typography>
      <Typography variant ="h1"><a style={{fontWeight:700}}title=''>COLLECTION</a></Typography> 
    </Box>
    <Box md={6} xs={12}>
        <img src= ""/>
    </Box>
    </Box>
   </>
  )
}

export default Hero