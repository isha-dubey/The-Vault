import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { FormControlLabel, useTheme } from "@mui/material";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";



function Register() {
    const navigate = useNavigate()

    const {signUp} = useAuth()

   async  function registerUser(event){
        event.preventDefault()
        const data = new FormData(event.currentTarget)
     await   signUp(data.get("email") , data.get("password") , data.get("name") )
     navigate("/login")
        // if(){

        // }
        // else{

        // }
    }

  return (
    <>
      <Container component={"main"} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={"h1"} variant="h5">
            Sign Up
          </Typography>
          <Box
            component={"form"}
            sx={{
              mt: 3,
            }}
            onSubmit={registerUser}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  required
                  name="name"
                  id="name"
                  autoFocus
                  label="name"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  fullWidth
                  required
                  name="email"
                  id="email"
                  label="email"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  fullWidth
                  required
                  name="password"
                  id="password"
                  autoFocus
                  label="password"
                  type="password"
                ></TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              {" "}
              Register
            </Button>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <Link variant="body2" href="/login">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Register;
