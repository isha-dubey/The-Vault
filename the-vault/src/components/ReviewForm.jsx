import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getSubtotal } from "../utils";

function ReviewForm() {
  const cart = useSelector((state) => state.cart.value);
  const address = useSelector((state) => state.checkout.address);
  const payment = useSelector((state) => state.checkout.payment);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {cart?.map(({ product, quantity }) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{}}
              primary={product.title}
              secondary={`Qty : ${quantity}`}
            />
            <Typography variant="body2">
              {getSubtotal([{ product, quantity }])?.toFixed(2)}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ReviewForm;
