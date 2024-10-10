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


function Register() {
    return ( <>
    <Container component={"main"} maxWidth="xs">
        <CssBaseline/>
        <Box sx={{
            
        }}></Box>

    </Container>
    </> );
}

export default Register;