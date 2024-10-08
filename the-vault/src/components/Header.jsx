import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import top100Films from './top100Films';
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
import { useDispatch, useSelector } from "react-redux";
import { getItemCount } from "../utils";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { fetchAllCategories } from "../feature/categories-slice";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search"

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

const StyleAutoComplete = styled(Autocomplete)(({ theme }) =>({
  color: "inherit",
  width :"100%",
  "& .MuiTextField-root": {
    paddingRight: `calc (1em + ${theme.spacing(4)})`
  },
  "& .MuiInputBase-input": {
    color : theme.palette.common.white
  },
  "& .MuiOutlinedInput-notchedOutline":{
     border:"none"
  },
  "& .MuiSvgIcon-root":{
    fill : theme.palette.common.white
  }

}))

const SearchIconWrapper = styled("section")(({ theme }) =>({

padding : theme.spacing(2),
height : "100%",
position:"absolute",
right : 20,
pointerEvents : "none",
display:"flex",
alignItems : "center",
justifyContent : "center"

 
}))

function SearchBar() {
  const theme = useTheme()
  const categories = useSelector((state) => state?.categories?.value);
  const products = useSelector((state) => state?.products?.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [selectedCat, setSelectCat] = useState("null");
  const [selectedProd , setSelectedProd] = useState()
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm")
  const category = searchParams.get("category")

 useEffect(() => {
  setSelectCat(category ? category : "all")
 } , [category])

  if (!categories?.length) {
    dispatch(fetchAllCategories());
  }

  function handleCategoryChange(event) {
    const { value } = event.target;
    setSelectCat(value);
    navigate(value === "all" ? "/":`/?category=${value}${searchTerm?"&searchterm=" + searchTerm : ""}`)
  }

  function handleSearchChange(searchTerm){
     if(searchTerm){
      navigate(selectedCat === "all" ? `?searchterm=${searchTerm}` :
      `/?category=${selectedCat}&searchterm=${searchTerm}`)
     }else {
      navigate(selectedCat === "all" ? `/` :
      `/?category=${selectedCat}`)
     }
  }

  return (
    <Search>
      <Select
        value={selectedCat}
        size="small"
        sx={{
          m: 1,
          textTransform: "capitalize",
          "&": {
            "::before":{
              ":hover":{
                border:"none",

              },
            },
            "::before , &::after":{
              border:"none", 
            },
            ".MuiSelect-standard":{
              color: "common.white",
            },
            ".MuiSelect-icon":{
              fill : theme.palette.common.white
            }
          },
        }}
        variant="standard"
        labelId="selected-category"
        id="selected-category-id"
        onChange={handleCategoryChange}
      >
        <MenuItem
          sx={{
            textTransform: "capitalize",
          }}
          value="all"
        >
          {" "}
          All
        </MenuItem>
        {categories?.map((cat) => (
          <MenuItem
            sx={{
              textTransform: "capitalize",
            }}
            key={cat}
            value={cat}
          >
            {cat}
          </MenuItem>
        ))}
      </Select>

      <StyleAutoComplete
      freeSolo
      id="selected-product"
     value={selectedProd}
      onChange={(e , value) => {
        console.log(value);
        handleSearchChange(value?.label)
      }}
     
        options={Array.from(selectedCat === "all" ? products : products.filter(prod => prod.category === selectedCat), (prod) => ({
          id: prod.id,
          label: prod.title,
        }))}
        renderInput={(params) => <TextField {...params}  />}
      />
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
    </Search>
  );
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
