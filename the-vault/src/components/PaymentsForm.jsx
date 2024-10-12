import { Box, Typography, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment} from "../feature/checkout-slice"


function PaymentsForm() {

    const payment = useSelector((state) => state.checkout.payment)

const dispatch = useDispatch()
  function handleChange(event) {
    const { name, value } = event.target ?? {};
    dispatch(updatePayment({ [name]: value }));

  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Box component="form" onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} >
            <TextField
            name="name"
            id="name"
              variant="standard"
              required
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              defaultValue={payment?.name ?? "" }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
            name="cardNumber"
            id="cardNumber"
              variant="standard"
              required
              label="Card Number"
              fullWidth
              autoComplete="cc-number"
              defaultValue={payment?.cardNumber ?? "" }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
            name="expDate"
            id="expDate"
              variant="standard"
              required
              label="Expiry Date"
              fullWidth
              autoComplete="cc-exp"
              defaultValue={payment?.expDate ?? "" }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
            name="cvv"
            id="cvv"
              variant="standard"
              required
              type="password"
              label="Expiry Date"
              fullWidth
              autoComplete="cc-csc"
              defaultValue={payment?.cvv ?? "" }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PaymentsForm;
