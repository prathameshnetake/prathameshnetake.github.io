webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/getPageContext.js":
/*!*******************************!*\
  !*** ./lib/getPageContext.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPageContext; });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/lib/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/pink */ "./node_modules/@material-ui/core/colors/pink.js");
/* harmony import */ var _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable no-underscore-dangle */



 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      light: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2___default.a[400],
      main: "#f54767",
      dark: _material_ui_core_colors_pink__WEBPACK_IMPORTED_MODULE_2___default.a[700]
    },
    secondary: {
      light: "rgba(69, 60, 213, 0.5)",
      main: "#453cd5",
      dark: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3___default.a[700]
    }
  },
  typography: {
    suppressDeprecationWarnings: true,
    fontFamily: "Open Sans",
    useNextVariants: true,
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "4rem"
    }
  },
  overrides: {
    MuiInput: {
      // Name of the styleSheet
      underline: {
        "&:hover:before": {
          height: 0,
          border: 0
        }
      }
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_0__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (false) {} // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.a94be32a7e35183cec75.hot-update.js.map