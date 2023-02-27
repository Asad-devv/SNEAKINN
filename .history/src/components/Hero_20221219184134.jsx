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
    <Box  display="" md={6} >
      <Typography variant = "h2"><a style={{fontWeight:700}}title=''>BEST NIKE</a></Typography>
      <Typography variant ="h1"><a style={{fontWeight:700}}title=''>COLLECTION</a></Typography> 
    </Box>
    <Box >
        
    </Box>
    </Box>
   </>
  )
}

export default Hero