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

function Home() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  async function fetchAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {products?.map(({ title, id, price, description, rating, image }) => (
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
                  <Typography fontSize="large" paragraph>{price}</Typography>
                  <Rating readOnly precision={0.5} value={rating.rate} />
                </CardContent>
                <CardActions sx={{
                    alignSelf:"center"
                }}>
                    <Button variant="contained" >
                        <ShoppingCartSharp />
                        Add to Cart
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div>jsxbsx h</div>
    </>
  );
}

export default Home;
