import { Box ,Typography,Grid} from '@mui/material';
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
    fontSize: '50px',
  },
};

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
<ThemeProvider theme={theme}>
    <Box sx={{height:"100vh"}}>
    <Grid container spacing={2}>
        <Grid display = "flex" flexDirection = "column" alignItems="center" justifyContent="center" height="" item md={6} xs={12} sm={12}>
          
        <Typography variant="h3">best sneakers </Typography>
        <Typography variant="h3">IN TOWN</Typography>  
        </Grid>
        <Grid sx={}item md={6} xs={12} sm={12}>
          <div >
            <Image src="src/components/hero.png" shift="left" sx={{ filter: 'drop-shadow(10px 10px 20px blue) invert(1%)', '&:hover': {
                transform: 'rotate(10deg)',
              } }} height="70vh" fit="contain"  />
          </div>
        </Grid>
      </Grid>
      <div >
      <Image src="src/components/wave.png" />
      </div>
    </Box>
    </ThemeProvider  >
   </>
  )
}

export default Hero