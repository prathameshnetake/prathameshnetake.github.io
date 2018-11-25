/* eslint-disable no-underscore-dangle */

import {SheetsRegistry} from "jss";
import {createMuiTheme, createGenerateClassName} from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";


const breakpoints = createBreakpoints({});

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: pink[400],
      main: "#f54767",
      dark: pink[700]
    },
    secondary: {
      light: "rgba(69, 60, 213, 0.5)",
      main: "#453cd5",
      dark: green[700]
    }
  },
  typography: {
    suppressDeprecationWarnings: true,
    fontFamily: "Open Sans",
    useNextVariants: true,
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "4rem",
      [breakpoints.down("sm")]: {
        fontSize: "2rem"
      }
    },
    h4: {
      [breakpoints.down("sm")]: {
        fontSize: "1.2rem"
      }
    }
  },
  overrides: {
    MuiInput: {
      // Name of the styleSheet
      underline: {
        "&:hover:before": {
          border: "0 !important"
        }
      }
    }
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
