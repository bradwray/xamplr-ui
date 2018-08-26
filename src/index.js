import React from "react";
import { render } from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Helvetica",
    display1: {
      color: "#05386b"
    },
    body2: {
      color: "#05386b"
    },
    headline: {
      color: "#05386b"
    },
    display4: {
      color: "#05386b"
    }
  },
  palette: {
    type: "light",

    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#5cdb95",
      contrastText: "#05386b"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#05386b",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#5cdb95"
    },
    error: {
      main: "#db955c"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: "#5cdb95",
        "&:hover": {
          backgroundColor: "#05386b",
          color: "#5cdb95"
        }
      }
    }
  }
});

function AppWrap() {
  //console.log(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<AppWrap />, rootElement);
}
