import ShoppingCartSharp from "@mui/icons-material/ShoppingCartSharp";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Grid2,
  IconButton,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToCart } from "../feature/cart-slice";
import { fetchAllProducts } from "../feature/product-slice";

function Home() {
  //in order to read the value of selectedcat url we will use another hook
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";
  const theme = useTheme();
  const searchTerm = searchParams.get("searchterm");
  const state = useSelector((state) => state.products);
  const { value: products, loading } = state ?? {};
  const dispatch = useDispatch();

  if (!products?.length) {
    dispatch(fetchAllProducts());
  }

  function addProductToCart(product) {
    dispatch(addToCart({ product, quantity: 1 }));
  }

  let filteredProducts =
    category && category !== "all"
      ? products.filter((prod) => prod.category === category)
      : products;
  filteredProducts = searchTerm
    ? filteredProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProducts;
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {filteredProducts?.map(
            ({ title, id, price, description, rating, image }) => (
              <Grid item key={id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      alignSelf: "center",
                      width: theme.spacing(30),
                      height: theme.spacing(30),
                      objectFit: "contain",
                      pt: theme.spacing(),
                    }}
                    image={image}
                    alt={title}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      gutterBottom
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {description}
                    </Typography>
                    <Typography fontSize="large" paragraph>
                      {price}
                    </Typography>
                    <Rating readOnly precision={0.5} value={rating.rate} />
                  </CardContent>
                  <CardActions
                    sx={{
                      alignSelf: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => {
                        addProductToCart({
                          title,
                          id,
                          price,
                          description,
                          rating,
                          image,
                        });
                      }}
                    >
                      <ShoppingCartSharp />
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>
      <div>jsxbsx h</div>
    </>
  );
}

export default Home;
