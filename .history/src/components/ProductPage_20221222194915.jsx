import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import Image from "mui-image";
const images = ["wave", "asad", "asad", "asad"];
import { createTheme } from "@mui/material";

const ProductPage = () => {
  return (
    <Grid container height = "100vh">
      <Grid item md={6} xs={12} sm={12} height = "80vh">
        <div  sx={{  display: "flex", justifyContent:"center",alignItems:"center",flexDirection: "column" }}>
          <Box >
            <Image src="src/components/hero.png" sx={{ borderRadius:"10px", border:"2px solid black"}} height= "40vh" width = "40vh " fit="contain" />
          </Box>
          <Box display="flex" flexDirection="row"  sx={{justifyContent:"center" }} >
            
            {images?.map((image, i) => {
              return(
              <Image src="src/components/hero.png" width="10vh" height="10vh" key={i} />
              )
            })}
          </Box>
        </div>
      </Grid>
      <Grid item md={6} xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Sneakin
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
