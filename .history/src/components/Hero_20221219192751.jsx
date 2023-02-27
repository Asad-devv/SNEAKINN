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
    <Box sx={{backgroundImage : 'wave.png' , height:"100vh"}}>
    <Grid container spacing={2}>
        <Grid display = "flex" alignItems="center" justifyContent="center" item md={6} xs={8}>
          
        <Typography variant="h3">best sneakers in Town</Typography>
          
        </Grid>
        <Grid item md={6} xs={4}>
          <img src="src/components/wave.png" />
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
   </>
  )
}

export default Hero