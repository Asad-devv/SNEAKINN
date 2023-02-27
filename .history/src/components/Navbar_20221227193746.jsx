

import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from "@mui/material/AppBar";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from '@mui/material/styles';
// import ShoppingCartIcon from "@mui/material/ShoppingCartIcon";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

// import styles from "./navbarStyle"
import { ThemeProvider, useTheme } from "@mui/material";
import {Link } from "react-router-dom"



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(0),
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
    width: '60%',
    fontSize:"9px",
    [theme.breakpoints.up('md')]: {
      width: '15ch',
      fontSize:"15px",
    },
  },
}));


// const useStyles = styles();

const pages = ["Products", "Pricing", "Blog", "Contact us", "About us "];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const theme = useTheme();
  console.log(theme);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: "none", md: "flex" },
              fontFamily: "Unbounded",
              fontWeight: 700,
              color : "#000000",
              fontSize: "30px",
              letterSpacing: "0px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
           <Link>SNEAKINN'</Link> 
            
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <ShoppingCartIcon
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuItem />
            </ShoppingCartIcon>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // display : "flex" , justifyContent : 'center' , alignItems : 'center'
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              fontSiz
              fontFamily:"Unbounded",
              letterSpacing: "0rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SNEAKINN
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                // marginRight: "90px",
                
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "15px",
                  paddingLeft: "30px",
                  fontWeight : "700",
                  fontFamily : "League Spartan"
                }}
              >
                <Link to={`/${page}`}> 
                {page}
                </Link>
              </Button>
            ))}
          </Box>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <ShoppingCartIcon onClick={handleOpenUserMenu} sx={{ fontSize:"30px",p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </ShoppingCartIcon>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
