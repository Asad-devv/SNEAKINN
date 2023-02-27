import { React, useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import { styled, alpha,makeStyles,useTheme } from "@mui/material/styles";
import { toprateslaes } from "../data/data";
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  Button,
  Typography,
  Divider,
  TextField,
  IconButton,
  
} from "@mui/material";
import { Link, } from "react-router-dom";
import { searchProducts } from "./API";



const SearchBar = ({
  setSearcResults,
  setFilteredProducts,
  filteredProducts,
  searchRef,
}) => {

  const theme = useTheme()
const sm = useMediaQuery(theme.breakpoints.only('sm'));
const md = useMediaQuery(theme.breakpoints.only('md'));
const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const [searchValue, setSearchValue] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const textFieldRef = useRef(null);
  const handleSearch = (value) => {
    const Filtered = toprateslaes.items.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(Filtered);
    searchValue === " " || ""
      ? setFilteredProducts([])
      : setFilteredProducts(Filtered);
  };

  const handleIconClick = () => {
    setSearchValue("");
    console.log("chal raha hai lavde", searchValue);
    searchProducts(searchValue, 1).then((data) => console.log(data));
  };
  const handleClick = () => {
    setSearchValue("");
  };
  const handleSeeMore = () => {
    handleIconClick();
    setSearcResults(filteredProducts);

    setSearchValue("");
  };

  const handleFocus = () => {
    setSuggestionsOpen(true);
  };

  const handleBlur = () => {
    setSuggestionsOpen(false);
  };
  useEffect(() => {
    if (textFieldRef.current) {
      setTimeout(() => {
        textFieldRef.current.addEventListener("focus", handleFocus);
        textFieldRef.current.addEventListener("blur", handleBlur);
      }, 5000);
  
      return () => {
        setTimeout(()=>{
        textFieldRef.current.removeEventListener("focus", handleFocus);
        textFieldRef.current.removeEventListener("blur", handleBlur);
      },5000)};
    }
  }, []);

  return (
    <Box display="flex" flexDirection="column" py={1}>
      <Box sx={{ width: {sm:"20vh",md:"40vh",lg:"45vh"},fontSize :"20lpx",
 borderRadius: "30px" }}>
        <TextField
          inputRef={textFieldRef}
          placeholder="search..."
          onKeyPress={(event) => {
            if (event.key === "Enter") {

            }
          }}
          InputProps={{
            style: {
              borderRadius: "30px",
              fontSize :"0.8rem",
              height : "5vh",
              width: sm ? "50vh" : md ? "30vh" : lg && "40vh"
            },
            endAdornment: (
              <IconButton onClick={handleIconClick}>
                <Link to={`/products/search/${searchValue}`}>
                  <SearchIcon
                    p={5}
                    sx={{
                      border: "1px solid black",
                      backgroundColor: "#ccc7c7",
                      borderRadius: "50%",
                      fontSize: "30px",
                    }}
                  />
                </Link>
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch(searchValue);
          }}
          value={searchValue}
        />
      </Box>

      {filteredProducts.length > 1 &&
        searchValue.length >= 1 &&  suggestionsOpen &&(
          <Box
            display="flex"
            position="absolute"
            boxShadow={2}
            zIndex="10000"
            sx={{
              top: "calc(60% + 10px)",
              width: { md: "40vh", xs: "25vh" },
              height: "25vh",
              borderRadius: "2px",
              right: { md: "30px" },
              textAlign: "center",
              backgroundColor: "lightgrey",
              height: "auto",
            }}
            py={3}
            px={1}
            gap={1}
            flexDirection="column"
          >
                                  <Link to="/About us">Asad </Link>

            {filteredProducts.length > 1 ? (
              filteredProducts?.map((val, i) => {
                return (
                  i < 3 && (
                    <div
                      gap={4}
                      key={i}
                      zIndex="10000"
                      sx={{
                        width: "30vh",
                        backgroundColor: "white",
                        textAlign: "center",
                        paddingTop: "20px",
                        height: "auto",
                      }}
                    >
                      <Box gap={2} display="flex">
                        <img
                          style={{ width: "40px", height: "20px" }}
                          src={val.image}
                          loading="lazy"
                        />
                        <Typography
                          onClick={handleClick}
                          sx={{
                            fontSize: { md: "17px", xs: "12px", sm: "12px" },
                          }}
                          variant="subtitle"
                        >
                          <Link to={`/Products/${val.id}`}> {val.name}</Link>
                        </Typography>
                      </Box>
                      <Divider color="grey" />
                      
                      {!suggestionsOpen ? 
  <Link to={`/products/search/${searchValue}`}>See More</Link> 
  : null}
                    </div>
                  )
                );
              })
              
            ) : (
              <></>
            )}
            
          <Box>
            <Button variant="outlined"><Link to="/Blog">Asad kink</Link></Button>
          </Box>
          </Box>
        )}
     
     <Box>
      {suggestionsOpen && <Link to="/qwq">Assad</Link>}
     </Box>
    </Box>

  );
};

export default SearchBar;
