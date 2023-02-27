import {React,useEffect,useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import {toprateslaes} from "../data/data"


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: "0px",
    marginLeft: 0,
    width: '60%',
    fontSize:"10px",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '20%',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    // marginLeft: '10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    fontSize:"10px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + 20px)`,
      transition: theme.transitions.create('width'),
      width: '50%',
      fontSize:"9px",
      [theme.breakpoints.up('md')]: {
        width: '15ch',
        fontSize:"15px",
      },
    },
  }));
  
const handleSearch = (value) = {
    products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
}
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(toprateslaes)
        
console.log(searchValue)
  return (
    <Box>
    <Search >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange = {(e)=>{setSearchValue(e.target.value)}}
      />
    </Search>
    </Box>
  )
}

export default SearchBar