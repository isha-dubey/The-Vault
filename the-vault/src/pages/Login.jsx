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
import { useTheme } from "@mui/material";
import { useAuth } from "../firebase/Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const theme = useTheme();
  const {signIn} = useAuth()
//   console.log(useAuth())
  const navigate = useNavigate()

  async function login(event) {
      event.preventDefault();
      console.log(event.email)
    const {email , password} = event.target
    await signIn(email.value , password.value)
    navigate("/")

  }
  return (
    <>
      <Container component={"main"} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={"h1"} variant="h5">
            Sign In
          </Typography>
          <form
            onSubmit={()=>{login(event)}}
            sx={{
              width: "100%",
              mt: 1,
            }}
          >
            <TextField
            label="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoFocus
              type="email"
              autoComplete="off"
            ></TextField>
            <TextField
            label="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              autoFocus
              autoComplete="current-password"
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              sx={{
                margin: theme.spacing(3, 0, 2),
              }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Login;
