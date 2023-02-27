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
    fontSize: '90px',
  },
};

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  // console.log(heroapi)
  return (
   <>
<ThemeProvider theme={theme}>
    <Box sx={{backgroundImage : 'wave.png' , height:"100vh"}}>
    <Grid container spacing={2}>
        <Grid item md={} xs={8}>
          <div>

          </div>
        </Grid>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid borderColor='#fffff' item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div>xs=8</div>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
   </>
  )
}

export default Hero