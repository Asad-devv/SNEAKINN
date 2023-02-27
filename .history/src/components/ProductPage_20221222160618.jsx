import React from "react";

import { Grid } from "@mui/material";
import Image from "mui-image";
const images = ["wave","asad","asad","asad"]
const ProductPage = () => {
  return (
    <Grid container>
      <Grid item>
        <div sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Image />
          </Box>
          <Box display="flex">
          <Box>
            {images.map((image)=>{

              <Image/>
            })}
            
          </Box>
          </Box>
        </div>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default ProductPage;
