import React from "react";

import { Grid } from "@mui/material";
import Image from "mui-image";

const ProductPage = () => {
  return (
    <Grid container>
      <Grid item>
        <div sx={{ display: "flex",flexDirection :"column" }}>
          <Box>
            <Image/>
          </Box>

          <Box></Box>
        </div>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default ProductPage;
