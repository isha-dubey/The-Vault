
import {ThemeProvider , createTheme , CssBaseline} from "@mui/material"
import { Outlet } from "react-router-dom";
import Header from "./Header";

const theme = createTheme(
    {palette: {
        mode: "light",
    }}
    // {
//     components: {
//       MuiButtonBase: {
//         defaultProps: {
//           disableRipple: true, // No more ripple, on the whole application 💣!
//         },
//       },
//     },
//   }
);
  

function Layout() {


    return ( <>
<ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header/>
    <main>
       <Outlet/>
    </main>
    <footer>

    </footer>
</ThemeProvider>
    </> );
}

export default Layout;