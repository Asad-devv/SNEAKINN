import { Box } from '@mui/material';
import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';


const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
    <Box sx={{backgroundImage : 'url("/home/asadshaikhedu1/sneakerapp2/sneakerapp/src/components/wave (1).png")'}}>

    </Box>
   </>
  )
}

export default Hero