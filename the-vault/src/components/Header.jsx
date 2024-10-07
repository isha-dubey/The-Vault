import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';
import AppBar from "@mui/material/AppBar";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useSelector } from "react-redux";
import { getItemCount } from "../utils";
import { styled, alpha } from "@mui/material/styles";

// for customisazation for the search bar
const Search = styled("section")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25), // Specify a color with an alpha value
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));





function SearchBar() {
  return <Search>
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />

  </Search>
}

function Header() {
  const cartItems = useSelector((state) => state.cart?.value);

  const count = getItemCount(cartItems);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            // sx={{
            //   flexGrow: 1,
            // }}
          >
            Ecomm
          </Typography>
          <SearchBar />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="shows cart items count"
              color="inherit"
            >
              <Badge badgeContent={count} color="error">
                <ShoppingCartSharpIcon />
              </Badge>
            </IconButton>
          </Box>
          <Button size="" color="inherit">
            {" "}
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
