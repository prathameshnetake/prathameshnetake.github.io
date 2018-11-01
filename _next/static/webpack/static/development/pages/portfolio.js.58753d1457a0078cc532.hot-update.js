webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/Portfolio/Portfolio.jsx":
/*!********************************************!*\
  !*** ./components/Portfolio/Portfolio.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/aitoe/Documents/prathamesh/gitPage/components/Portfolio/Portfolio.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var blogData = __webpack_require__(/*! ../../content/blogs.json */ "./content/blogs.json");

var styles = function styles() {
  return {
    root: {
      flexGrow: 1,
      marginLeft: 50,
      backgroundPosition: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "2rem"
    },
    card: {
      maxWidth: 345
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: "cover"
    }
  };
};

var Portfolio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portfolio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portfolio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      blogs: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getBlogData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                rss_url: blogData.mediumUrl
              };
              Object(jquery__WEBPACK_IMPORTED_MODULE_4__["get"])(blogData.rss2json, data, function (response) {
                _this.setState({
                  blogs: response.items
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.getBlogData().then(function (data) {
        console.log(data);
      });
    });

    return _this;
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.state.blogs.map(function (blog) {
        console.log(blog.content);
        var tagIndex = blog.description.indexOf("<img"); // Find where the img tag starts

        var srcIndex = blog.description.substring(tagIndex).indexOf("src=") + tagIndex; // Find where the src attribute starts

        var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'

        var srcEnd = blog.description.substring(srcStart).indexOf("\"") + srcStart; // Find where the URL ends

        var src = blog.description.substring(srcStart, srcEnd);
        console.log(src);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: blog.guid,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.card,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9___default.a, {
          component: "img",
          alt: blog.title,
          className: classes.media,
          height: "140",
          image: src,
          title: blog.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, blog.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "this is some card description"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
          size: "small",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "Share"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
          size: "small",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "Learn More"))));
      }));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Portfolio.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Portfolio));

/***/ })

})
//# sourceMappingURL=portfolio.js.58753d1457a0078cc532.hot-update.js.map