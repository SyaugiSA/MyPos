import { createTheme } from "@mui/material/styles";
import "@fontsource/akshar/400.css";

// Create a theme instance.
const theme = createTheme({
  typography: { allVariants: { fontFamily: `"Akshar", sans-serif` } },
});

export default theme;
