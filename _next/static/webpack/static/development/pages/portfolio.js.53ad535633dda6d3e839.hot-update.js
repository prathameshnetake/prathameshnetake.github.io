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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__);

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
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.card,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
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
            lineNumber: 69
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, blog.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
          component: "p",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "this is some card description"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
          size: "small",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Share"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
          size: "small",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Learn More"))));
      })));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Portfolio.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Portfolio));

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/Grid.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/core/Grid/Grid.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js"));

var _createBreakpoints = __webpack_require__(/*! ../styles/createBreakpoints */ "./node_modules/@material-ui/core/styles/createBreakpoints.js");

var _requirePropFactory = _interopRequireDefault(__webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@material-ui/core/utils/requirePropFactory.js"));

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
var GUTTERS = [0, 8, 16, 24, 32, 40];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0, _extends2.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: -spacing / 2,
      width: "calc(100% + ".concat(spacing, "px)"),
      '& > $item': {
        padding: spacing / 2
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return (0, _extends2.default)({
    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="rwo-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), _createBreakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};

exports.styles = styles;

function Grid(props) {
  var _classNames;

  var alignContent = props.alignContent,
      alignItems = props.alignItems,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      container = props.container,
      direction = props.direction,
      item = props.item,
      justify = props.justify,
      lg = props.lg,
      md = props.md,
      sm = props.sm,
      spacing = props.spacing,
      wrap = props.wrap,
      xl = props.xl,
      xs = props.xs,
      zeroMinWidth = props.zeroMinWidth,
      other = (0, _objectWithoutProperties2.default)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  var className = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.container, container), (0, _defineProperty2.default)(_classNames, classes.item, item), (0, _defineProperty2.default)(_classNames, classes.zeroMinWidth, zeroMinWidth), (0, _defineProperty2.default)(_classNames, classes["spacing-xs-".concat(String(spacing))], container && spacing !== 0), (0, _defineProperty2.default)(_classNames, classes["direction-xs-".concat(String(direction))], direction !== Grid.defaultProps.direction), (0, _defineProperty2.default)(_classNames, classes["wrap-xs-".concat(String(wrap))], wrap !== Grid.defaultProps.wrap), (0, _defineProperty2.default)(_classNames, classes["align-items-xs-".concat(String(alignItems))], alignItems !== Grid.defaultProps.alignItems), (0, _defineProperty2.default)(_classNames, classes["align-content-xs-".concat(String(alignContent))], alignContent !== Grid.defaultProps.alignContent), (0, _defineProperty2.default)(_classNames, classes["justify-xs-".concat(String(justify))], justify !== Grid.defaultProps.justify), (0, _defineProperty2.default)(_classNames, classes["grid-xs-".concat(String(xs))], xs !== false), (0, _defineProperty2.default)(_classNames, classes["grid-sm-".concat(String(sm))], sm !== false), (0, _defineProperty2.default)(_classNames, classes["grid-md-".concat(String(md))], md !== false), (0, _defineProperty2.default)(_classNames, classes["grid-lg-".concat(String(lg))], lg !== false), (0, _defineProperty2.default)(_classNames, classes["grid-xl-".concat(String(xl))], xl !== false), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Grid.propTypes =  true ? {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: _propTypes.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: _propTypes.default.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: _propTypes.default.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: _propTypes.default.oneOf(GUTTERS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: _propTypes.default.bool
} : undefined;
Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false
};
var StyledGrid = (0, _withStyles.default)(styles, {
  name: 'MuiGrid'
})(Grid);

if (true) {
  var requireProp = (0, _requirePropFactory.default)('Grid');
  StyledGrid.propTypes = (0, _extends2.default)({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('zeroMinWidth')
  });
}

var _default = StyledGrid;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/Grid/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Grid.default;
  }
});

var _Grid = _interopRequireDefault(__webpack_require__(/*! ./Grid */ "./node_modules/@material-ui/core/Grid/Grid.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/requirePropFactory.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/utils/requirePropFactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function requirePropFactory(componentNameInError) {
  /* istanbul ignore if */
  if (false) {}

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The property `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

var _default = requirePropFactory;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=portfolio.js.53ad535633dda6d3e839.hot-update.js.map