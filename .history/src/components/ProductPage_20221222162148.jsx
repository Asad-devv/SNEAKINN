import React from "react";

import { Grid } from "@mui/material";
import Image from "mui-image";
const images = ["wave", "asad", "asad", "asad"];
import {createTheme } from "@mui/material";

const ProductPage = () => {
  return (
    <Grid container>
      <Grid item md={6} xs={12} sm={12}>
        <div sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Image />
          </Box>
          <Box display="flex">
            <Box>
              {images.map((image, i) => {
                <Image src={image} key={i} />;
              })}
            </Box>
          </Box>
        </div>
      </Grid>
      <Grid item md={6} xs={12} sm={12}>

        <Typography variant="h6"gutterBottom >Sneakin</Typography>  
        </Grid>
    </Grid>
  );
};

export default ProductPage;
