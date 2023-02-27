import React from 'react'

import {Box,Typography} from "@mui/material"
const Error = () => {
  return (
    <Box height="70vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
        <Typography varian="h1" fontSize="60px" > 404 ERROR </Typography>
        <Typography>Not Found</Typography>
    </Box>
  )
}

export default Error