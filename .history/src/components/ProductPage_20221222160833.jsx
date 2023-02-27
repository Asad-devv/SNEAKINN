import React from "react";

import { Grid } from "@mui/material";
import Image from "mui-image";
const images = ["wave", "asad", "asad", "asad"];
const ProductPage = () => {
  return (
    <Grid container>
      <Grid item md={6}>
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
      <Grid item md=6></Grid>
    </Grid>
  );
};

export default ProductPage;
