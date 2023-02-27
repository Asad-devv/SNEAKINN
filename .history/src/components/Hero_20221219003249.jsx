import { Box ,Typography} from '@mui/material';
import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import Image from 'mui-image'



const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
    <Box sx={{backgroundImage : 'wave.png' , height:"100vh"}}>
    <Box gutterBottom  display="flex" >
      <Typography variant = "h2">Best SNEAKERS</Typography>
      <Typography variant ="h1">COLLECTION</Typography> 
    </Box>
    <Box gutterBottom >
    <a style ={}href='https://bigfontsite.com/fonts/futura-condensed-extrabold.html' title='Futura Condensed ExtraBold Font Download - bigfontsite.com'>Futura Condensed ExtraBold Font Download - bigfontsite.com</a>
    </Box>
    </Box>
   </>
  )
}

export default Hero