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
import { Link } from "react-router-dom";
import { searchProducts } from "./API";



const SearchBar = ({
  setSearcResults,
  setFilteredProducts,
  filteredProducts,
  searchRef,
}) => {
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
      textFieldRef.current.addEventListener("focus", handleFocus);
      textFieldRef.current.addEventListener("blur", handleBlur);
    }

    return () => {
      textFieldRef.current.removeEventListener("focus", handleFocus);
      textFieldRef.current.removeEventListener("blur", handleBlur);
    };
  }, [textFieldRef]);

  return (
    <Box display="flex" flexDirection="column">
      <Box sx={{ width: widthSm ? "12vh" : widthMd ? "12vh" : widthLg && "2vh", borderRadius: "30px" }}>
        <TextField
          inputRef={textFieldRef}
          placeholder="search..."
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              console.log("hi");
            }
          }}
          InputProps={{
            style: {
              borderRadius: "50px",
              // height:"52px"
              width: {sm:"12vh",md:"12vh",lg:"2vh"},
              // {sm:"12vh",md:"12vh",lg:"2vh"}
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
          label="Search"
          variant="outlined"
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch(searchValue);
          }}
          value={searchValue}
        />
      </Box>

      {filteredProducts.length > 1 &&
        searchValue.length >= 1 &&
        suggestionsOpen && (
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
                    </div>
                  )
                );
              })
            ) : (
              <></>
            )}
            <Link to={`/products/search/${searchValue}`}>
              <Button
                onClick={() => {
                  handleIconClick();
                  handleSeeMore();
                }}
                variant="contained"
                my={3}
                sx={{ width: "auto", color: "pink" }}
              >
                <Link to={`/products/search/${searchValue}`}>See More</Link>
              </Button>
            </Link>
            <Typography>
              <Link to={`/products/search/${searchValue}`}>ASAD</Link>
            </Typography>
          </Box>
        )}
    </Box>
  );
};

export default SearchBar;
