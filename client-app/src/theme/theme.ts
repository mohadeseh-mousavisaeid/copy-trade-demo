import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3853fc",
      "100": "#fff",
      "200": "#000",
      contrastText: "#505050",
    },
    secondary: {
      main: "#000",
    },
    info: {
      main: "#2bcbd7",
    },

    warning: {
      main: "#ffc107",
    },
    text: {
      primary: "#505050",
      secondary: "#000000",
    },

    mode: "light",
  },

  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});
