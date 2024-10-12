import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress} from "../feature/checkout-slice"

function Address() {
  const address = useSelector((state) => state.checkout?.address);
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target ?? {};
    dispatch(updateAddress({ [name]: value }));
  }

  return (
    <>
      <Typography variant="h6" gutterButtom>
        Shipping Address
      </Typography>
      <Box component="form" onChange={handleChange}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="FirstName"
              name="FirstName"
              label=" First Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              defaultValue={address.FirstName ?? ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="LastName"
              name="LastName"
              label=" Last Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              defaultValue={address.LastName ?? ""}

            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="adress1"
              label=" Addresss Line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              defaultValue={address.address1 ?? ""}

            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address2"
              name="adress2"
              label=" Addresss Line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              defaultValue={address.address2 ?? ""}

            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              variant="standard"
              defaultValue={address.city ?? ""}

            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="zipCode"
              name="zipCode"
              label="Zip code / Postal code"
              fullWidth
              variant="standard"
              defaultValue={address.zipCode ?? ""}

            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              variant="standard"
              defaultValue={address.country ?? ""}

            ></TextField>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Address;
