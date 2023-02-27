import { Box ,Typography} from '@mui/material';
import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import Image from 'mui-image'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '40px',
  '@media (min-width:600px)': {
    fontSize: '40px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '90px',
  },
};

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
<ThemeProvider theme={theme}>
    <Box sx={{backgroundImage : 'wave.png' , height:"100vh"}}>
    <Box  display="" md='6' sm={12} sx={{height="200px"}}   >
      <Typography variant = "h3"><a style={{fontWeight:700}}title=''>BEST NIKE</a></Typography>
      <Typography variant ="h3"><a style={{fontWeight:900}}title=''>COLLECTION</a></Typography> 
    </Box>
    <Box md='6' xs={12}>
        <img src="wave.png" alt="12131" href="wave.png"/>
        <div> <h1>best html tag </h1></div>
    </Box>
    </Box>
    </ThemeProvider>
   </>
  )
}

export default Hero