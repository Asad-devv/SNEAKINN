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
    <Box  display="flex" >
      <Typography variant = "h2">< style={{fontWeight:900}} href='' title='Futura LT Condensed Extra Bold Font Download - copyfonts.com'>Futura LT Condensed Extra Bold Font Download - copyfonts.com</a></Typography>
      <Typography variant ="h1">COLLECTION</Typography> 
    </Box
    <Box >
        
    </Box>
    </Box>
   </>
  )
}

export default Hero