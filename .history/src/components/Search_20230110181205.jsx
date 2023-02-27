import { React, useEffect, useState,useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { toprateslaes } from "../data/data";
import {
  Button,
  Typography,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { searchProducts} from "./API"


const SearchBar = ({
  setSearcResults,
  setFilteredProducts,
  filteredProducts,
  searchRef
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const textFieldRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      setSuggestionsOpen(false);
    }
    
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  const handleSearch = (value) => {
    const Filtered = toprateslaes.items.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(Filtered);
    searchValue === " " || ""
      ? setFilteredProducts([])
      : setFilteredProducts(Filtered);
  };



  const handleIconClick = ()=>{
      setSearchValue("")
      console.log("chal raha hai lavde",searchValue)
      searchProducts(searchValue,1).then((data)=>(console.log(data)))

  }
  const handleClick = () => {
    setSearchValue("");
  };
  const handleSeeMore = () => {
    setSearcResults(filteredProducts);
    setSearchValue("");
  };


const handleFocus = () => {
  setSuggestionsOpen(true);
};

const handleBlur = () => {
  setSuggestionsOpen(false);
};
Then you can pass the textFieldRef as the inputRef prop on the TextField component.

Copy code
<TextField
    inputRef={textFieldRef}
    placeholder="search..."
    InputProps={{
      style: {
        borderRadius: "60px",
      },
      endAdornment: (
        <IconButton  onClick={handle



asad shaikh
what is inputRef prop i usually use the ref prop 
The inputRef prop is a prop specific to the TextField component from the Material-UI library. It is used to pass a reference to the underlying input element of the TextField.

ref is a more general concept in React, it allows you to get a reference to any DOM node or React component. It is a way to create a direct reference to a DOM element or a component, which can be then used for DOM manipulation or to access the props or state of the component

In this case, We are passing the textFieldRef ref to inputRef prop of TextField. This way, the textFieldRef.current will point to the input element of the TextField component and we can attach the focus and blur event listeners to it.

You can also use ref prop instead of inputRef but in this case you will have to use textFieldRef.current.firstChild to attach event listeners as TextField component generates multiple layers of divs and span etc, this way it will make sure that the event listeners are attached to the correct element.




asad shaikh
import { React, useEffect, useState,useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { toprateslaes } from "../data/data";
import {
  Button,
  Typography,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { searchProducts} from "./API"


const SearchBar = ({
  setSearcResults,
  setFilteredProducts,
  filteredProducts,

}) => {
  const [searchValue, setSearchValue] = useState("");
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



  const handleIconClick = ()=>{
      setSearchValue("")
      console.log("chal raha hai lavde",searchValue)
      searchProducts(searchValue,1).then((data)=>(console.log(data)))

  }
  const handleClick = () => {
    setSearchValue("");
  };
  const handleSeeMore = () => {
    setSearcResults(filteredProducts);
    setSearchValue("");
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box sx={{ width: "300px",borderRadius: "30px" }}>
        <TextField
          placeholder="search..."
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              console.log("hi")
            }
          }}
          InputProps={{
            style: {
              borderRadius: "60px",
              // height:"52px"
            },
            endAdornment: (
              <IconButton  onClick={handleIconClick}>
               <Link to={`/products/search/${searchValue}`}> <SearchIcon  /></Link>
              </IconButton>
            ),
          }}
          label="Search"
          variant="outlined"
          onChange={(e)=>{
            setSearchValue(e.target.value)
            handleSearch(searchValue)}}
          value={searchValue}
        />
      </Box>

      {filteredProducts.length > 1 && searchValue.length >= 1 && (
        <Box
          
          display="flex"
          position="absolute"
          boxShadow={2}
          zIndex="10000"
          sx={{
            top: "calc(60% + 10px)",
            width: { md: "30vh", xs: "25vh" },
            height: "25vh",
            borderRadius: "10px",
            right: { md: "30px" },
            textAlign: "center",
            backgroundColor: "lightgrey",
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
                      height: { md: "20px" },
                      width: "40vh",
                      backgroundColor: "white",
                      textAlign: "center",
                      paddingTop: "20px",
                      height : "auto"
                    }}
                  >
                    <Box gap={2} display="flex"><img style={{width:"40px" , height:"20px"}} src={val.image} />
                    <Typography
                      onClick={handleClick}
                      sx={{ fontSize: { md: "17px", xs: "12px", sm: "12px" } }}
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
          <Button
            onClick={handleSeeMore}
            variant="contained"
            my={3}
            sx={{ width: "auto", color: "pink" }}
          >
            <Link to={`/products/search/${searchValue}`}>See More</Link>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
modify this code according to the instruction you provided
That code looks good. You are using the useRef hook to create a reference to the TextField component. And then you are adding focus and blur event listeners to it. focus event will trigger when user clicks inside the textfield to type something and blur event will trigger when user clicks outside the text field so in that way you can set suggestionsOpen prop accordingly to show or hide the suggestions.

Be aware that in case you only need to close the suggestions when the user clicks outside of the SearchBar component, and not when they leave the input field, then you will need to remove the useEffect and handleBlur function

Also make sure that you are passing suggestionsOpen and setSuggestionsOpen as props to your component

Copy code
<SearchBar
   setFilteredProducts={setFilteredProducts}
   filteredProducts={filteredProducts}
   suggestionsOpen={suggestionsOpen}
   setSuggestionsOpen={setSuggestionsOpen}
/>
and using it for showing or hiding suggestions.




asad shaikh
where should i enter the inputRef prop
You can pass the textFieldRef as the inputRef prop on the TextField component like this:

Copy code
<TextField
  inputRef={textFieldRef}
  placeholder="search..."
  InputProps={{
    style: {
      borderRadius: "60px",
    },
    endAdornment: (
      <IconButton  onClick={handleIconClick}>
        <Link to={`/products/search/${searchValue}`}> 
          <SearchIcon  />
        </Link>
      </IconButton>
    ),
  }}
  label="Search"
  variant="outlined"
  onChange={(e)=>{
    setSearchValue(e.target.value)
    handleSearch(searchValue)}}
  value={searchValue}
/>
By doing this, the textFieldRef.current will point to the input element of the TextField component and we can attach the focus and blur event listeners to it.

You can also use ref prop instead of inputRef, but in this case, you will have to use textFieldRef.current.firstChild to attach event listeners as the TextField component generates multiple layers of divs and spans, etc., this way it will make sure that the event listeners are attached to the correct element.






useEffect(() => {
  if (textFieldRef.current) {
    textFieldRef.current.addEventListener('focus', handleFocus);
    textFieldRef.current.addEventListener('blur', handleBlur);
  }

  return () => {
    textFieldRef.current.removeEventListener('focus', handleFocus);
    textFieldRef.current.removeEventListener('blur', handleBlur);
  }
}, [textFieldRef]);

  return (
    <Box display="flex" flexDirection="column">
      <Box sx={{ width: "300px",borderRadius: "30px" }}>
        <TextField
          inputRef={textFieldRef}
          placeholder="search..."
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              console.log("hi")
            }
          }}
          InputProps={{
            style: {
              borderRadius: "60px",
              // height:"52px"
            },
            endAdornment: (
              <IconButton  onClick={handleIconClick}>
               <Link to={`/products/search/${searchValue}`}> <SearchIcon  /></Link>
              </IconButton>
            ),
          }}
          label="Search"
          variant="outlined"
          onChange={(e)=>{
            setSearchValue(e.target.value)
            handleSearch(searchValue)}}
          value={searchValue}
        />
      </Box>

      {filteredProducts.length > 1 && searchValue.length >= 1 && (
        <Box
          
          display="flex"
          position="absolute"
          boxShadow={2}
          zIndex="10000"
          sx={{
            top: "calc(60% + 10px)",
            width: { md: "30vh", xs: "25vh" },
            height: "25vh",
            borderRadius: "10px",
            right: { md: "30px" },
            textAlign: "center",
            backgroundColor: "lightgrey",
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
                      height: { md: "20px" },
                      width: "40vh",
                      backgroundColor: "white",
                      textAlign: "center",
                      paddingTop: "20px",
                      height : "auto"
                    }}
                  >
                    <Box gap={2} display="flex"><img style={{width:"40px" , height:"20px"}} src={val.image} />
                    <Typography
                      onClick={handleClick}
                      sx={{ fontSize: { md: "17px", xs: "12px", sm: "12px" } }}
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
          <Button
            onClick={handleSeeMore}
            variant="contained"
            my={3}
            sx={{ width: "auto", color: "pink" }}
          >
            <Link to={`/products/search/${searchValue}`}>See More</Link>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
