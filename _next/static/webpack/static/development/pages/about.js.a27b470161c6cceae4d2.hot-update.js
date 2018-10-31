webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/About/About.jsx":
/*!************************************!*\
  !*** ./components/About/About.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/aitoe/Documents/prathamesh/gitPage/components/About/About.jsx";






var data = __webpack_require__(/*! ../../content/content.json */ "./content/content.json");

var styles = function styles() {
  return {
    root: {
      flexGrow: 1,
      marginLeft: 50,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "2rem"
    },
    info: {
      display: "flex",
      padding: "3rem"
    },
    avatar: {
      width: 500,
      "& img": {
        width: "100%"
      }
    },
    aboutxt: {
      textTransform: "uppercase",
      marginBottom: "2rem"
    },
    skillImage: {
      width: 140,
      height: 140,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& img": {
        width: 75
      }
    },
    skillImagelist: {
      padding: 0,
      margin: "2rem 0",
      listStyleType: "none",
      display: "flex",
      "& li": {
        marginRight: "1rem"
      }
    },
    tagLine: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    quote: {
      width: "70%",
      padding: "2rem"
    }
  };
};

function Footer(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/avatar.png",
    alt: "avatar image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h3",
    color: "primary",
    className: classes.aboutxt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, data.aboutMe), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classes.skillImagelist,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.skillImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/node.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.skillImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/javascript.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.skillImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/react.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.skillImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/css.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tagLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/quote-open.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "title",
    className: classes.quote,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam soluta laudantium laborum consequuntur. Suscipit ad quam quos vel veritatis explicabo dolor. Reprehenderit natus ea minima nostrum. Autem, vel ut."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/assets/quote-close.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })));
}

Footer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Footer));

/***/ }),

/***/ "./content/content.json":
/*!******************************!*\
  !*** ./content/content.json ***!
  \******************************/
/*! exports provided: aboutMe, default */
/***/ (function(module) {

module.exports = {"aboutMe":"Hello, my name is Prathamesh Netake, I am a Software Engineer working for <a target='_blank' href='https://www.aitoelabs.com/'>AITOE Labs</a>, in Mumbai, India. I started my career in 2016 as an front end Web developer and developed a strong foundation on Javascript/HTML/CSS languages. My interest in designing and developing websites is what drove me to specialize in Web Development"};

/***/ })

})
//# sourceMappingURL=about.js.a27b470161c6cceae4d2.hot-update.js.map