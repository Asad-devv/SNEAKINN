import React from "react";

import { Grid, Box, Typography,Button } from "@mui/material";
import Image from "mui-image";
const images = ["wave", "asad", "asad", "asad"];
import { createTheme } from "@mui/material";

const ProductPage = () => {
  return (
    <Grid container height = "100vh">
      <Grid item sx={{  display: "flex", justifyContent:"center",alignItems:"center",flexDirection: "column" }} md={6} xs={12} sm={12} height = "80vh" >
        <div  sx={{  display: "flex", justifyContent:"center",alignItems:"center",flexDirection: "column" }} >
          <Box gap="3" boxShadow="8" height= "auto" width = "55vh"pl={2} borderRadius="20px" border="0px solid black"  justifyContent="center">
            <Image  src="src/components/hero.png" sx={{ borderRadius:"10px", }}
             height= "50vh" width = "50vh" fit="contain" />
          </Box>
          <Box display="flex" boxShadow="8" mt={4} flexDirection="row"  sx={{justifyContent:"center" }} >
            
            {images?.map((image, i) => {
              return(
              <Image  sx={{padding : "10px"}} src="src/components/hero.png" width="10vh" height="10vh" key={i} />
              )
            })}
          </Box>
        </div>
      </Grid>
      <Grid height="80vh" sx={{  display: "flex", justifyContent:"center",alignItems:"a ",flexDirection: "column" }} item md={6} xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          SNEAKINN'
        </Typography>
        <Typography variant="h5">Air jordan 1 Travis Scott</Typography>
        <Typography py={3} width="50vh" variant="subtitle">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer</Typography>
        <Typography variant="subtitle1">$125</Typography>
        <Box>
        <Box  display="flex" border="2px solid black" borderRadius="5px" height="30px" width="140px" my={3}>
          <Typography sx={{borderRadius:"2px" ,width:"40px",height:"20px",textAlign:"center",marginLeft:"5px" ,cursor:"pointer"}} variant="subtitle" >-</Typography>
          <Typography sx={{borderRadius:"2px" ,width:"40px",height:"20px",textAlign:"center",marginLeft:"10px"}} variant="subtitle" >1</Typography>
          <Typography sx={{borderRadius:"2px" ,width:"40px",height:"20px",textAlign:"center",marginLeft:"10px" ,cursor:"pointer"}} variant="subtitle"pr={1} >+</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
