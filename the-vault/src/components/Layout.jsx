
import {ThemeProvider , createTheme , CssBaseline} from "@mui/material"

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
    <header>


    </header>
    <main>
        displaying content
    </main>
    <footer>
        
    </footer>
<div>Layout</div>
</ThemeProvider>
    </> );
}

export default Layout;