import { React, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { toprateslaes } from "../data/data";
import { Button, Typography,Divider } from "@mui/material";
import {Link} from "react-router-dom"
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: "0px",
  marginLeft: 0,
  width: "60%",
  fontSize: "10px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "20%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // marginLeft: '10px',
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  fontSize: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + 20px)`,
    transition: theme.transitions.create("width"),
    width: "50%",
    fontSize: "9px",
    [theme.breakpoints.up("md")]: {
      width: "15ch",
      fontSize: "15px",
    },
  },
}));

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleSearch = (value) => {
    const Filtered = toprateslaes.items.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(Filtered);
    ;
    searchValue===' '||'' ? setFilteredProducts([]) :setFilteredProducts(Filtered)
  };
  
  
   const handleClick = () => {
    const
  }
  
  
  console.log(searchValue, filteredProducts);
  return (
    <Box display="flex" flexDirection ="column">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch(searchValue)

          }}
        />
      </Search>
      {(filteredProducts.length>1 && searchValue.length>=1) &&(
      <Box display="flex" position="absolute" zIndex="10000" sx={{top:"calc(60% + 10px)",width:{md:"30vh",xs:"25vh"},height:"25vh",borderRadius:"10px",right:{md:"30px"} ,textAlign:"center",backgroundColor:"white"}} py={3} px={1} gap={1} flexDirection = "column" >
        
        {filteredProducts.length>1 ? 
      filteredProducts?.map((val,i)=>{
        return(
            (i<3) &&
           ( <div  gap={4} key={i} zIndex="10000" sx={{height:{md:"20px"},width:"30vh" ,backgroundColor:"white",textAlign:"center",paddingTop:"20px"}} >

                <Typography onClick={handleClick}  sx={{fontSize:{md:"17px",xs:"12px",sm:"12px"}}} variant="subtitle" ><Link to={`/Products/${val.id}`} > {val.title}</Link></Typography>
                <Divider color="grey"/>
                </div>
                
                )
        )
        
      }): (<></>)
      }
      <Button variant ="contained" my={3} sx={{width : "auto" ,color:"pink"}}>See More</Button>
      </Box>
      )}
    </Box>
      
  );
};

export default SearchBar;
