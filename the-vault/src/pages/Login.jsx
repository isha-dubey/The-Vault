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

function Login() {
  const theme = useTheme();
  function login(event) {
    event.preventDefault();
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
            justifyContent: "center",
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
            <form
              onSubmit={login}
              sx={{
                width: "100%",
                mt: 1,
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autofocus
                type="email"
                autoComplete="off"
              ></TextField>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                autofocus
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
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Login;
