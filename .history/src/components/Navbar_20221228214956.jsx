

import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SearchBar from "./Search.jsx"

import Toolbar from "@mui/material/Toolbar";
// import ShoppingCartIcon from "@mui/material/ShoppingCartIcon";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";



// import SearchIcon from '@mui/icons-material/Search';

// import styles from "./navbarStyle"
import { ThemeProvider, useTheme } from "@mui/material";
import {Link } from "react-router-dom"




// const useStyles = styles();

const pages = ["Products", "Pricing", "Blog", "Contact us", "About us "];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({setSeeMore}) {
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
            <MenuIcon
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuItem />
            </MenuIcon>
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
              fontSize: "18px",
              fontFamily:"Unbounded",
              letterSpacing: "0rem",
              color: "inherit",
              textDecoration: "none",
              paddingRight : "30px"
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
          
          <SearchBar setSeeMore={setSeeMore} filteredProducts} setFilteredProducts />
      
          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <ShoppingCartIcon sx={{ fontSize:"25px",p: 0 }}>
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
