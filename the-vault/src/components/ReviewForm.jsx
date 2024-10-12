import {
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Grid
} from "@mui/material";
import { useSelector } from "react-redux";
import { getSubtotal } from "../utils";

function ReviewForm() {
  const cart = useSelector((state) => state.cart.value);
  const address = useSelector((state) => state.checkout.address);
  const addresses = address ? Object.values(address) : [];
  const payment = useSelector((state) => state.checkout.payment);
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {cart?.map(({ product, quantity }) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: 500,
                },
                "& .MuiListItemText-primary": {
                  fontSize: theme.spacing(2),
                },
              }}
              primary={product.title}
              secondary={`Qty : ${quantity}`}
            />
            <Typography variant="body2">
              {getSubtotal([{ product, quantity }])?.toFixed(2)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
            }}
          >
            {" "}
            {getSubtotal(cart)?.toFixed(2)}
          </Typography>
        </ListItem>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
            <Typography gutterBottom>{addresses.join(", ")}</Typography>
          </Grid>
        <Grid item container directio ="column" xs={12} sm={6} sx={{ mt: 2 }}>
                <Typography variant="h6">Payment Details</Typography>
                <Grid container>
                    {payment}
                </Grid>
          </Grid>
        </Grid>
      </List>
    </>
  );
}

export default ReviewForm;
