webpackHotUpdate("static\\development\\pages\\calendar.js",{

/***/ "./node_modules/antd/lib/_util/colors.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/_util/colors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetColorTypes = void 0;

var _type = __webpack_require__(/*! ./type */ "./node_modules/antd/lib/_util/type.js");

var PresetColorTypes = (0, _type.tuple)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
exports.PresetColorTypes = PresetColorTypes;

/***/ }),

/***/ "./node_modules/antd/lib/badge/ScrollNumber.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/badge/ScrollNumber.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getNumberArray(num) {
  return num ? num.toString().split('').reverse().map(function (i) {
    var current = Number(i);
    return isNaN(current) ? i : current;
  }) : [];
}

var ScrollNumber =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollNumber, _Component);

  function ScrollNumber(props) {
    var _this;

    _classCallCheck(this, ScrollNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollNumber).call(this, props));

    _this.onAnimated = function () {
      var onAnimated = _this.props.onAnimated;

      if (onAnimated) {
        onAnimated();
      }
    };

    _this.renderScrollNumber = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          style = _this$props.style,
          title = _this$props.title,
          _this$props$component = _this$props.component,
          component = _this$props$component === void 0 ? 'sup' : _this$props$component,
          displayComponent = _this$props.displayComponent; // fix https://fb.me/react-unknown-prop

      var restProps = (0, _omit["default"])(_this.props, ['count', 'onAnimated', 'component', 'prefixCls', 'displayComponent']);
      var prefixCls = getPrefixCls('scroll-number', customizePrefixCls);

      var newProps = _extends({}, restProps, {
        className: (0, _classnames["default"])(prefixCls, className),
        title: title
      }); // allow specify the border
      // mock border-color by box-shadow for compatible with old usage:
      // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />


      if (style && style.borderColor) {
        newProps.style = _extends({}, style, {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }

      if (displayComponent) {
        return React.cloneElement(displayComponent, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-custom-component"), displayComponent.props && displayComponent.props.className)
        });
      }

      return (0, React.createElement)(component, newProps, _this.renderNumberElement(prefixCls));
    };

    _this.state = {
      animateStarted: true,
      count: props.count
    };
    return _this;
  }

  _createClass(ScrollNumber, [{
    key: "getPositionByNum",
    value: function getPositionByNum(num, i) {
      var count = this.state.count;
      var currentCount = Math.abs(Number(count));
      var lastCount = Math.abs(Number(this.lastCount));
      var currentDigit = Math.abs(getNumberArray(this.state.count)[i]);
      var lastDigit = Math.abs(getNumberArray(this.lastCount)[i]);

      if (this.state.animateStarted) {
        return 10 + num;
      } // 同方向则在同一侧切换数字


      if (currentCount > lastCount) {
        if (currentDigit >= lastDigit) {
          return 10 + num;
        }

        return 20 + num;
      }

      if (currentDigit <= lastDigit) {
        return 10 + num;
      }

      return num;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      this.lastCount = prevState.count;
      var animateStarted = this.state.animateStarted;

      if (animateStarted) {
        this.setState(function (__, props) {
          return {
            animateStarted: false,
            count: props.count
          };
        }, this.onAnimated);
      }
    }
  }, {
    key: "renderNumberList",
    value: function renderNumberList(position) {
      var childrenToReturn = [];

      for (var i = 0; i < 30; i++) {
        var currentClassName = position === i ? 'current' : '';
        childrenToReturn.push(React.createElement("p", {
          key: i.toString(),
          className: currentClassName
        }, i % 10));
      }

      return childrenToReturn;
    }
  }, {
    key: "renderCurrentNumber",
    value: function renderCurrentNumber(prefixCls, num, i) {
      if (typeof num === 'number') {
        var position = this.getPositionByNum(num, i);
        var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
        return (0, React.createElement)('span', {
          className: "".concat(prefixCls, "-only"),
          style: {
            transition: removeTransition ? 'none' : undefined,
            msTransform: "translateY(".concat(-position * 100, "%)"),
            WebkitTransform: "translateY(".concat(-position * 100, "%)"),
            transform: "translateY(".concat(-position * 100, "%)")
          },
          key: i
        }, this.renderNumberList(position));
      }

      return React.createElement("span", {
        key: "symbol",
        className: "".concat(prefixCls, "-symbol")
      }, num);
    }
  }, {
    key: "renderNumberElement",
    value: function renderNumberElement(prefixCls) {
      var _this2 = this;

      var count = this.state.count;

      if (count && Number(count) % 1 === 0) {
        return getNumberArray(count).map(function (num, i) {
          return _this2.renderCurrentNumber(prefixCls, num, i);
        }).reverse();
      }

      return count;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderScrollNumber);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, nextState) {
      if ('count' in nextProps) {
        if (nextState.count === nextProps.count) {
          return null;
        }

        return {
          animateStarted: true
        };
      }

      return null;
    }
  }]);

  return ScrollNumber;
}(React.Component);

ScrollNumber.defaultProps = {
  count: null,
  onAnimated: function onAnimated() {}
};
(0, _reactLifecyclesCompat.polyfill)(ScrollNumber);
var _default = ScrollNumber;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/badge/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/badge/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/antd/node_modules/prop-types/index.js"));

var _rcAnimate = _interopRequireDefault(__webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ScrollNumber = _interopRequireDefault(__webpack_require__(/*! ./ScrollNumber */ "./node_modules/antd/lib/badge/ScrollNumber.js"));

var _colors = __webpack_require__(/*! ../_util/colors */ "./node_modules/antd/lib/_util/colors.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function isPresetColor(color) {
  return _colors.PresetColorTypes.indexOf(color) !== -1;
}

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    var _this;

    _classCallCheck(this, Badge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));

    _this.renderBadge = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          count = _a.count,
          showZero = _a.showZero,
          customizePrefixCls = _a.prefixCls,
          customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
          overflowCount = _a.overflowCount,
          className = _a.className,
          style = _a.style,
          children = _a.children,
          dot = _a.dot,
          status = _a.status,
          text = _a.text,
          offset = _a.offset,
          title = _a.title,
          color = _a.color,
          restProps = __rest(_a, ["count", "showZero", "prefixCls", "scrollNumberPrefixCls", "overflowCount", "className", "style", "children", "dot", "status", "text", "offset", "title", "color"]);

      var prefixCls = getPrefixCls('badge', customizePrefixCls);
      var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);

      var scrollNumber = _this.renderBadgeNumber(prefixCls, scrollNumberPrefixCls);

      var statusText = _this.renderStatusText(prefixCls);

      var statusCls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-status-dot"), _this.hasStatus()), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames));
      var statusStyle = {};

      if (color && !isPresetColor(color)) {
        statusStyle.background = color;
      } // <Badge status="success" />


      if (!children && _this.hasStatus()) {
        var styleWithOffset = _this.getStyleWithOffset();

        var statusTextColor = styleWithOffset && styleWithOffset.color;
        return React.createElement("span", _extends({}, restProps, {
          className: _this.getBadgeClassName(prefixCls),
          style: styleWithOffset
        }), React.createElement("span", {
          className: statusCls,
          style: statusStyle
        }), React.createElement("span", {
          style: {
            color: statusTextColor
          },
          className: "".concat(prefixCls, "-status-text")
        }, text));
      }

      return React.createElement("span", _extends({}, restProps, {
        className: _this.getBadgeClassName(prefixCls)
      }), children, React.createElement(_rcAnimate["default"], {
        component: "",
        showProp: "data-show",
        transitionName: children ? "".concat(prefixCls, "-zoom") : '',
        transitionAppear: true
      }, scrollNumber), statusText);
    };

    return _this;
  }

  _createClass(Badge, [{
    key: "getBadgeClassName",
    value: function getBadgeClassName(prefixCls) {
      var _classNames2;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return (0, _classnames["default"])(className, prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-status"), this.hasStatus()), _defineProperty(_classNames2, "".concat(prefixCls, "-not-a-wrapper"), !children), _classNames2));
    }
  }, {
    key: "hasStatus",
    value: function hasStatus() {
      var _this$props2 = this.props,
          status = _this$props2.status,
          color = _this$props2.color;
      return !!status || !!color;
    }
  }, {
    key: "isZero",
    value: function isZero() {
      var numberedDispayCount = this.getNumberedDispayCount();
      return numberedDispayCount === '0' || numberedDispayCount === 0;
    }
  }, {
    key: "isDot",
    value: function isDot() {
      var dot = this.props.dot;
      var isZero = this.isZero();
      return dot && !isZero || this.hasStatus();
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      var showZero = this.props.showZero;
      var displayCount = this.getDispayCount();
      var isZero = this.isZero();
      var isDot = this.isDot();
      var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
      return (isEmpty || isZero && !showZero) && !isDot;
    }
  }, {
    key: "getNumberedDispayCount",
    value: function getNumberedDispayCount() {
      var _this$props3 = this.props,
          count = _this$props3.count,
          overflowCount = _this$props3.overflowCount;
      var displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
      return displayCount;
    }
  }, {
    key: "getDispayCount",
    value: function getDispayCount() {
      var isDot = this.isDot(); // dot mode don't need count

      if (isDot) {
        return '';
      }

      return this.getNumberedDispayCount();
    }
  }, {
    key: "getScrollNumberTitle",
    value: function getScrollNumberTitle() {
      var _this$props4 = this.props,
          title = _this$props4.title,
          count = _this$props4.count;

      if (title) {
        return title;
      }

      return typeof count === 'string' || typeof count === 'number' ? count : undefined;
    }
  }, {
    key: "getStyleWithOffset",
    value: function getStyleWithOffset() {
      var _this$props5 = this.props,
          offset = _this$props5.offset,
          style = _this$props5.style;
      return offset ? _extends({
        right: -parseInt(offset[0], 10),
        marginTop: offset[1]
      }, style) : style;
    }
  }, {
    key: "renderStatusText",
    value: function renderStatusText(prefixCls) {
      var text = this.props.text;
      var hidden = this.isHidden();
      return hidden || !text ? null : React.createElement("span", {
        className: "".concat(prefixCls, "-status-text")
      }, text);
    }
  }, {
    key: "renderDispayComponent",
    value: function renderDispayComponent() {
      var count = this.props.count;
      var customNode = count;

      if (!customNode || _typeof(customNode) !== 'object') {
        return undefined;
      }

      return React.cloneElement(customNode, {
        style: _extends({}, this.getStyleWithOffset(), customNode.props && customNode.props.style)
      });
    }
  }, {
    key: "renderBadgeNumber",
    value: function renderBadgeNumber(prefixCls, scrollNumberPrefixCls) {
      var _classNames3;

      var _this$props6 = this.props,
          status = _this$props6.status,
          count = _this$props6.count;
      var displayCount = this.getDispayCount();
      var isDot = this.isDot();
      var hidden = this.isHidden();
      var scrollNumberCls = (0, _classnames["default"])((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-dot"), isDot), _defineProperty(_classNames3, "".concat(prefixCls, "-count"), !isDot), _defineProperty(_classNames3, "".concat(prefixCls, "-multiple-words"), !isDot && count && count.toString && count.toString().length > 1), _defineProperty(_classNames3, "".concat(prefixCls, "-status-").concat(status), this.hasStatus()), _classNames3));
      return hidden ? null : React.createElement(_ScrollNumber["default"], {
        prefixCls: scrollNumberPrefixCls,
        "data-show": !hidden,
        className: scrollNumberCls,
        count: displayCount,
        displayComponent: this.renderDispayComponent() // <Badge status="success" count={<Icon type="xxx" />}></Badge>
        ,
        title: this.getScrollNumberTitle(),
        style: this.getStyleWithOffset(),
        key: "scrollNumber"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderBadge);
    }
  }]);

  return Badge;
}(React.Component);

exports["default"] = Badge;
Badge.defaultProps = {
  count: null,
  showZero: false,
  dot: false,
  overflowCount: 99
};
Badge.propTypes = {
  count: PropTypes.node,
  showZero: PropTypes.bool,
  dot: PropTypes.bool,
  overflowCount: PropTypes.number
};

/***/ }),

/***/ "./node_modules/antd/lib/badge/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/badge/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/badge/style/index.less");

/***/ }),

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/calendar/style */ "./node_modules/antd/lib/calendar/style/index.js");
/* harmony import */ var antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/calendar */ "./node_modules/antd/lib/calendar/index.js");
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/badge/style */ "./node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_withPageRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/withPageRouter */ "./components/withPageRouter.js");
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! nanographql */ "./node_modules/nanographql/index.js");
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(nanographql__WEBPACK_IMPORTED_MODULE_13__);










var _jsxFileName = "C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\nquery ($name: String!, $owner: String!) { \n  repository(name: $name, owner: $owner){\n    issues(last:100){\n      edges{\n        node{\n          id\n          title\n          url\n          assignees (first:10){\n            edges {\n              node {\n                id\n                name\n                avatarUrl\n              }\n            }\n          }\n          author{\n            login\n            avatarUrl\n          }\n          milestone {\n            id\n            dueOn\n          }\n          state\n          labels(first:10) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n          projectCards{\n            nodes{\n              column{\n                name\n                createdAt\n              }\n            }\n            edges{\n              node {\n                id\n                note\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import { Fragment } from 'react';


 // const client = new GraphQLClient({
//   url: 'https://api.github.com/graphql',
// })

var ISSUES_QUERY = nanographql__WEBPACK_IMPORTED_MODULE_13___default()(_templateObject());

var fetcher =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(auth) {
    var result, prime, edges;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://api.github.com/graphql', {
              method: "POST",
              headers: {
                'Authorization': "token " + auth
              },
              body: ISSUES_QUERY({
                name: "embeds",
                owner: "loganpowell"
              })
            });

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.json();

          case 5:
            prime = _context.sent;
            console.log("prime:");
            edges = prime.data.repository.issues.edges;
            console.log(prime);
            return _context.abrupt("return", edges.map(function (_ref2, idx) {
              var node = _ref2.node;

              var title = node.title,
                  url = node.url,
                  assignee_edges = node.assignees.edges,
                  _node$author = node.author,
                  login = _node$author.login,
                  authorAvatar = _node$author.avatarUrl,
                  dueOn = node.milestone.dueOn,
                  state = node.state,
                  label_edges = node.labels.edges,
                  _node$projectCards = node.projectCards,
                  _node$projectCards$no = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_node$projectCards.nodes, 1),
                  column_name = _node$projectCards$no[0].column.name,
                  _node$projectCards$ed = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_node$projectCards.edges, 1),
                  _node$projectCards$ed2 = _node$projectCards$ed[0].node,
                  card_note = _node$projectCards$ed2.note,
                  card_url = _node$projectCards$ed2.url;

              return {
                key: idx,
                issue_title: title,
                state: state,
                dueOn: dueOn,
                issue_author: {
                  user_id: login,
                  authorAvatar: authorAvatar
                },
                issue_url: url,
                assignees: assignee_edges.map(function (_ref3) {
                  var _ref3$node = _ref3.node,
                      name = _ref3$node.name,
                      avatarUrl = _ref3$node.avatarUrl;
                  return {
                    name: name,
                    avatarUrl: avatarUrl
                  };
                }),
                labels: label_edges.map(function (_ref4) {
                  var _ref4$node = _ref4.node,
                      color = _ref4$node.color,
                      name = _ref4$node.name;
                  return {
                    color: color,
                    name: name
                  };
                }),
                column_name: column_name,
                card_info: {
                  card_note: card_note,
                  card_url: card_url
                }
              };
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x) {
    return _ref.apply(this, arguments);
  };
}();

var initialState = {
  auth: "loading...",
  loaded: false,
  issues: []
};

function getListData(data, value) {
  // let listData;
  var input = new Date(value).toISOString().split('T')[0]; // let fetchedDate = new Date("2019-06-28T00:00:00Z").toISOString().split('T')[0]

  var matches = data.filter(function (cur, idx) {
    return new Date(cur.dueOn).toISOString().split('T')[0] = input;
  });
  return matches.map(function (_ref5) {
    var state = _ref5.state,
        issue_title = _ref5.issue_title;
    return {
      type: state === "OPEN" ? 'success' : 'error',
      content: issue_title
    };
  });
}

var calendarReducer = function calendarReducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      {
        return {
          auth: action.auth,
          data: action.data,
          loaded: true
        };
      }

    case 'FILTER':
      {
        console.log("FILTER FIRED: ");

        if (state.loaded) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state, {
            data: getListData(state.data, action.date)
          });
        } else {
          return {
            data: []
          };
        }
      }

    default:
      return state;
  }
};

var example_response = {
  "data": {
    "repository": {
      "issues": {
        "edges": [{
          "node": {
            "id": "MDU6SXNzdWU0NTgwNTc2Mjc=",
            "title": "testing back-log",
            "url": "https://github.com/loganpowell/embeds/issues/2",
            "assignees": {
              "edges": [{
                "node": {
                  "id": "MDQ6VXNlcjM0MDgxOTE=",
                  "name": "Logan Powell",
                  "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
                }
              }]
            },
            "author": {
              "login": "loganpowell",
              "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
            },
            "milestone": {
              "id": "MDk6TWlsZXN0b25lNDQyNDU2NA==",
              "dueOn": "2019-06-28T00:00:00Z"
            },
            "state": "OPEN",
            "labels": {
              "edges": []
            },
            "projectCards": {
              "nodes": [{
                "column": {
                  "name": "back-log",
                  "createdAt": "2019-06-19T14:44:59Z"
                }
              }],
              "edges": [{
                "node": {
                  "id": "MDExOlByb2plY3RDYXJkMjI5NzM4MjY=",
                  "note": null,
                  "url": "https://github.com/loganpowell/embeds/projects/1#card-22973826"
                }
              }]
            }
          }
        }, {
          "node": {
            "id": "MDU6SXNzdWU0NTgwNTk4MDY=",
            "title": "testing wip",
            "url": "https://github.com/loganpowell/embeds/issues/3",
            "assignees": {
              "edges": []
            },
            "author": {
              "login": "loganpowell",
              "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
            },
            "milestone": {
              "id": "MDk6TWlsZXN0b25lNDQyNDU2NA==",
              "dueOn": "2019-06-28T00:00:00Z"
            },
            "state": "OPEN",
            "labels": {
              "edges": [{
                "node": {
                  "id": "MDU6TGFiZWwxNDAzNTE5MzIw",
                  "color": "d73a4a",
                  "name": "bug"
                }
              }]
            },
            "projectCards": {
              "nodes": [{
                "column": {
                  "name": "WIP",
                  "createdAt": "2019-06-19T14:45:06Z"
                }
              }],
              "edges": [{
                "node": {
                  "id": "MDExOlByb2plY3RDYXJkMjI5NzQwNDU=",
                  "note": null,
                  "url": "https://github.com/loganpowell/embeds/projects/1#card-22974045"
                }
              }]
            }
          }
        }, {
          "node": {
            "id": "MDU6SXNzdWU0NTgwNjAzNTQ=",
            "title": "testing done",
            "url": "https://github.com/loganpowell/embeds/issues/4",
            "assignees": {
              "edges": []
            },
            "author": {
              "login": "loganpowell",
              "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
            },
            "milestone": {
              "id": "MDk6TWlsZXN0b25lNDQyNDU2NA==",
              "dueOn": "2019-06-28T00:00:00Z"
            },
            "state": "CLOSED",
            "labels": {
              "edges": [{
                "node": {
                  "id": "MDU6TGFiZWwxNDAzNTE5MzIz",
                  "color": "a2eeef",
                  "name": "enhancement"
                }
              }]
            },
            "projectCards": {
              "nodes": [{
                "column": {
                  "name": "Done",
                  "createdAt": "2019-06-19T14:45:11Z"
                }
              }],
              "edges": [{
                "node": {
                  "id": "MDExOlByb2plY3RDYXJkMjI5NzQxMTc=",
                  "note": null,
                  "url": "https://github.com/loganpowell/embeds/projects/1#card-22974117"
                }
              }]
            }
          }
        }]
      }
    }
  }
};
var Context = react__WEBPACK_IMPORTED_MODULE_11___default.a.createContext();

var DataCells = function DataCells(_ref6) {
  var value = _ref6.value;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_11__["useContext"])(Context),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  if (!state) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, "loading");
  } else {
    var _dispatch = dispatch({
      type: 'FILTER',
      date: value
    }),
        issues = _dispatch.data;

    console.log('issues: ' + issues); // console.log("state: " + state )

    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
      className: "jsx-210777900" + " " + "events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, issues.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
        key: item.content,
        className: "jsx-210777900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_4___default.a, {
        status: item.type,
        text: item.content,
        className: "ant-badge-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }));
    }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: "210777900",
      __self: this
    }, ".events.jsx-210777900{list-style:none;margin:0;padding:0;}.events.jsx-210777900 .ant-badge-status.jsx-210777900{overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlWb0IsQUFHMkIsQUFLQSxnQkFKUCxBQUtVLFNBSlQsVUFDWixBQUlhLFdBQ1ksdUJBQ1IsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UgfSBmcm9tICdhbnRkJztcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFBhZ2VSb3V0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQYWdlUm91dGVyJ1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICduYW5vZ3JhcGhxbCdcclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHtcclxuLy8gICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxyXG5cclxuLy8gfSlcclxuXHJcbmNvbnN0IElTU1VFU19RVUVSWSA9IGdxbGBcclxucXVlcnkgKCRuYW1lOiBTdHJpbmchLCAkb3duZXI6IFN0cmluZyEpIHsgXHJcbiAgcmVwb3NpdG9yeShuYW1lOiAkbmFtZSwgb3duZXI6ICRvd25lcil7XHJcbiAgICBpc3N1ZXMobGFzdDoxMDApe1xyXG4gICAgICBlZGdlc3tcclxuICAgICAgICBub2Rle1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGFzc2lnbmVlcyAoZmlyc3Q6MTApe1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhdXRob3J7XHJcbiAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWlsZXN0b25lIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZHVlT25cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBsYWJlbHMoZmlyc3Q6MTApIHtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9qZWN0Q2FyZHN7XHJcbiAgICAgICAgICAgIG5vZGVze1xyXG4gICAgICAgICAgICAgIGNvbHVtbntcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBub3RlXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKGF1dGgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBcInRva2VuIFwiICsgYXV0aCB9LFxyXG4gICAgYm9keTogSVNTVUVTX1FVRVJZKHsgbmFtZTogXCJlbWJlZHNcIiwgb3duZXI6IFwibG9nYW5wb3dlbGxcIiB9KVxyXG4gIH0pXHJcbiBcclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9fX0gfSA9IHByaW1lXHJcbiAgY29uc29sZS5sb2cocHJpbWUpXHJcbiAgXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgbWlsZXN0b25lOiB7IGR1ZU9uIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBsYWJlbHM6IHsgZWRnZXM6IGxhYmVsX2VkZ2VzIH0sXHJcbiAgICAgIHByb2plY3RDYXJkczogeyBcclxuICAgICAgICBub2RlczogW3sgY29sdW1uOiB7IG5hbWU6IGNvbHVtbl9uYW1lIH19XSwgXHJcbiAgICAgICAgZWRnZXM6IFt7IG5vZGU6IHsgbm90ZTogY2FyZF9ub3RlLCB1cmw6IGNhcmRfdXJsfX1dIFxyXG4gICAgICB9XHJcbiAgICB9ID0gbm9kZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleTogaWR4LFxyXG4gICAgICBpc3N1ZV90aXRsZTogdGl0bGUsXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBkdWVPbixcclxuICAgICAgaXNzdWVfYXV0aG9yOiB7dXNlcl9pZDogbG9naW4sIGF1dGhvckF2YXRhcn0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9fSkgPT4gKHsgbmFtZSwgYXZhdGFyVXJsIH0pKSxcclxuICAgICAgbGFiZWxzOiBsYWJlbF9lZGdlcy5tYXAoKHsgbm9kZTogeyBjb2xvciwgbmFtZSB9fSkgPT4gKHsgY29sb3IsIG5hbWUgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gIH0pIFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aDogXCJsb2FkaW5nLi4uXCIsXHJcbiAgbG9hZGVkOiBmYWxzZSxcclxuICBpc3N1ZXM6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpc3REYXRhKGRhdGEsIHZhbHVlKSB7XHJcbiAgLy8gbGV0IGxpc3REYXRhO1xyXG4gIGxldCBpbnB1dCA9IG5ldyBEYXRlKHZhbHVlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuXHJcbiAgLy8gbGV0IGZldGNoZWREYXRlID0gbmV3IERhdGUoXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICBsZXQgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKChjdXIsIGlkeCkgPT4gbmV3IERhdGUoY3VyLmR1ZU9uKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gPSBpbnB1dClcclxuICByZXR1cm4gbWF0Y2hlcy5tYXAoKHsgc3RhdGUsIGlzc3VlX3RpdGxlIH0pID0+ICh7XHJcbiAgICB0eXBlOiBzdGF0ZSA9PT0gXCJPUEVOXCIgPyAnc3VjY2VzcycgOiAnZXJyb3InLFxyXG4gICAgY29udGVudDogaXNzdWVfdGl0bGVcclxuICB9KSlcclxufVxyXG5cclxuY29uc3QgY2FsZW5kYXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0FEJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IGFjdGlvbi5hdXRoLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdGSUxURVInOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRklMVEVSIEZJUkVEOiBcIilcclxuICAgICAgaWYgKHN0YXRlLmxvYWRlZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGRhdGE6IGdldExpc3REYXRhKHN0YXRlLmRhdGEsIGFjdGlvbi5kYXRlKSBcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcclxuICB9XHJcbn0gXHJcblxyXG5cclxubGV0IGV4YW1wbGVfcmVzcG9uc2UgPSB7XHJcbiAgXCJkYXRhXCI6IHtcclxuICAgIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICAgIFwiaXNzdWVzXCI6IHtcclxuICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlNYTnpkV1UwTlRnd05UYzJNamM9XCIsXHJcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcInRlc3RpbmcgYmFjay1sb2dcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzJcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURRNlZYTmxjak0wTURneE9URT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxvZ2FuIFBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibG9naW5cIjogXCJsb2dhbnBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWlsZXN0b25lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRGs2VFdsc1pYTjBiMjVsTkRReU5EVTJOQT09XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIk9QRU5cIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInByb2plY3RDYXJkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJhY2stbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTktMDYtMTlUMTQ6NDQ6NTlaXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURFeE9sQnliMnBsWTNSRFlYSmtNakk1TnpNNE1qWT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3MzgyNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TlRrNE1EWT1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyB3aXBcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzNcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImxvZ2luXCI6IFwibG9nYW5wb3dlbGxcIixcclxuICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1pbGVzdG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURrNlRXbHNaWE4wYjI1bE5EUXlORFUyTkE9PVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWVPblwiOiBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic3RhdGVcIjogXCJPUEVOXCIsXHJcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZUR0ZpWld3eE5EQXpOVEU1TXpJd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImQ3M2E0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnVnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicHJvamVjdENhcmRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV0lQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTktMDYtMTlUMTQ6NDU6MDZaXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURFeE9sQnliMnBsWTNSRFlYSmtNakk1TnpRd05EVT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3NDA0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TmpBek5UUT1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyBkb25lXCIsXHJcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL2lzc3Vlcy80XCIsXHJcbiAgICAgICAgICAgICAgXCJhc3NpZ25lZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsb2dpblwiOiBcImxvZ2FucG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtaWxlc3RvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EazZUV2xzWlhOMGIyNWxORFF5TkRVMk5BPT1cIixcclxuICAgICAgICAgICAgICAgIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiQ0xPU0VEXCIsXHJcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZUR0ZpWld3eE5EQXpOVEU1TXpJelwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImEyZWVlZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZW5oYW5jZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwcm9qZWN0Q2FyZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJub2Rlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTktMDYtMTlUMTQ6NDU6MTFaXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURFeE9sQnliMnBsWTNSRFlYSmtNakk1TnpReE1UYz1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3NDExN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBEYXRhQ2VsbHMgPSAoe3ZhbHVlfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgXHJcbiAgaWYgKCFzdGF0ZSkge1xyXG4gICAgcmV0dXJuIDxwPmxvYWRpbmc8L3A+XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHsgZGF0YTogaXNzdWVzIH0gPSBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdGSUxURVInLFxyXG4gICAgICBkYXRlOiB2YWx1ZVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ2lzc3VlczogJyArIGlzc3VlcylcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2coXCJzdGF0ZTogXCIgKyBzdGF0ZSApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XHJcbiAgICAgICAge2lzc3Vlcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZXZlbnRzIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuY29uc3QgZGF0ZUNlbGxSZW5kZXIgPSB2YWx1ZSA9PiA8RGF0YUNlbGxzIHZhbHVlPXt2YWx1ZX0vPlxyXG5cclxuZnVuY3Rpb24gZ2V0TW9udGhEYXRhKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlLm1vbnRoKCkgPT09IDgpIHtcclxuICAgIHJldHVybiAxMzk0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhDZWxsUmVuZGVyKHZhbHVlKSB7XHJcbiAgY29uc3QgbnVtID0gZ2V0TW9udGhEYXRhKHZhbHVlKTtcclxuICByZXR1cm4gbnVtID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3Rlcy1tb250aFwiPlxyXG4gICAgICA8c2VjdGlvbj57bnVtfTwvc2VjdGlvbj5cclxuICAgICAgPHNwYW4+QmFja2xvZyBudW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm5vdGVzLW1vbnRoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGNhbGVuZGFyUmVkdWNlcilcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBmZXRjaERhdGEoYXV0aClcclxuICB9LCBbXSlcclxuICBcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSwgZGlzcGF0Y2h9fT5cclxuICAgICAgPENhbGVuZGFyIGRhdGVDZWxsUmVuZGVyPXtkYXRlQ2VsbFJlbmRlcn0gbW9udGhDZWxsUmVuZGVyPXttb250aENlbGxSZW5kZXJ9Lz5cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZVJvdXRlcihJbmRleCkiXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
  }

  return null;
};

var dateCellRender = function dateCellRender(value) {
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DataCells, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  });
};

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  var num = getMonthData(value);
  return num ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "jsx-2153197830" + " " + "notes-month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, num), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "Backlog number"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "2153197830",
    __self: this
  }, ".notes-month.jsx-2153197830{text-align:center;font-size:28px;}.notes-month.jsx-2153197830 section.jsx-2153197830{font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ya0IsQUFHMkIsQUFJSCxlQUNqQixHQUppQixlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxvZ2FuXFxQcm9qZWN0c1xcY2Vuc3VzXFxtYXJrZXRpbmdcXHBhZ2VzXFxjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyLCBCYWRnZSB9IGZyb20gJ2FudGQnO1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUGFnZVJvdXRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFBhZ2VSb3V0ZXInXHJcblxyXG5pbXBvcnQgZ3FsIGZyb20gJ25hbm9ncmFwaHFsJ1xyXG5cclxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4vLyAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsXHJcblxyXG4vLyB9KVxyXG5cclxuY29uc3QgSVNTVUVTX1FVRVJZID0gZ3FsYFxyXG5xdWVyeSAoJG5hbWU6IFN0cmluZyEsICRvd25lcjogU3RyaW5nISkgeyBcclxuICByZXBvc2l0b3J5KG5hbWU6ICRuYW1lLCBvd25lcjogJG93bmVyKXtcclxuICAgIGlzc3VlcyhsYXN0OjEwMCl7XHJcbiAgICAgIGVkZ2Vze1xyXG4gICAgICAgIG5vZGV7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYXNzaWduZWVzIChmaXJzdDoxMCl7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF1dGhvcntcclxuICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtaWxlc3RvbmUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBkdWVPblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGxhYmVscyhmaXJzdDoxMCkge1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByb2plY3RDYXJkc3tcclxuICAgICAgICAgICAgbm9kZXN7XHJcbiAgICAgICAgICAgICAgY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5vdGVcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoYXV0aCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IFwidG9rZW4gXCIgKyBhdXRoIH0sXHJcbiAgICBib2R5OiBJU1NVRVNfUVVFUlkoeyBuYW1lOiBcImVtYmVkc1wiLCBvd25lcjogXCJsb2dhbnBvd2VsbFwiIH0pXHJcbiAgfSlcclxuIFxyXG4gIGNvbnN0IHByaW1lID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxyXG4gIGNvbnNvbGUubG9nKFwicHJpbWU6XCIpXHJcbiAgY29uc3QgeyBkYXRhOiB7IHJlcG9zaXRvcnk6IHsgaXNzdWVzOiB7IGVkZ2VzIH19fSB9ID0gcHJpbWVcclxuICBjb25zb2xlLmxvZyhwcmltZSlcclxuICBcclxuICByZXR1cm4gZWRnZXMubWFwKCh7IG5vZGUgfSwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogeyBlZGdlczogYXNzaWduZWVfZWRnZXMgfSxcclxuICAgICAgYXV0aG9yOiB7IGxvZ2luLCBhdmF0YXJVcmw6IGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBtaWxlc3RvbmU6IHsgZHVlT24gfSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGxhYmVsczogeyBlZGdlczogbGFiZWxfZWRnZXMgfSxcclxuICAgICAgcHJvamVjdENhcmRzOiB7IFxyXG4gICAgICAgIG5vZGVzOiBbeyBjb2x1bW46IHsgbmFtZTogY29sdW1uX25hbWUgfX1dLCBcclxuICAgICAgICBlZGdlczogW3sgbm9kZTogeyBub3RlOiBjYXJkX25vdGUsIHVybDogY2FyZF91cmx9fV0gXHJcbiAgICAgIH1cclxuICAgIH0gPSBub2RlXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBpZHgsXHJcbiAgICAgIGlzc3VlX3RpdGxlOiB0aXRsZSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGR1ZU9uLFxyXG4gICAgICBpc3N1ZV9hdXRob3I6IHt1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyfSxcclxuICAgICAgaXNzdWVfdXJsOiB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogYXNzaWduZWVfZWRnZXMubWFwKCh7IG5vZGU6IHsgbmFtZSwgYXZhdGFyVXJsIH19KSA9PiAoeyBuYW1lLCBhdmF0YXJVcmwgfSkpLFxyXG4gICAgICBsYWJlbHM6IGxhYmVsX2VkZ2VzLm1hcCgoeyBub2RlOiB7IGNvbG9yLCBuYW1lIH19KSA9PiAoeyBjb2xvciwgbmFtZSB9KSksXHJcbiAgICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlLCBjYXJkX3VybCB9XHJcbiAgICB9XHJcbiAgfSkgXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoOiBcImxvYWRpbmcuLi5cIixcclxuICBsb2FkZWQ6IGZhbHNlLFxyXG4gIGlzc3VlczogW11cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpIHtcclxuICAvLyBsZXQgbGlzdERhdGE7XHJcbiAgbGV0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG5cclxuICAvLyBsZXQgZmV0Y2hlZERhdGUgPSBuZXcgRGF0ZShcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gIGxldCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoKGN1ciwgaWR4KSA9PiBuZXcgRGF0ZShjdXIuZHVlT24pLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSA9IGlucHV0KVxyXG4gIHJldHVybiBtYXRjaGVzLm1hcCgoeyBzdGF0ZSwgaXNzdWVfdGl0bGUgfSkgPT4gKHtcclxuICAgIHR5cGU6IHN0YXRlID09PSBcIk9QRU5cIiA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXHJcbiAgICBjb250ZW50OiBpc3N1ZV90aXRsZVxyXG4gIH0pKVxyXG59XHJcblxyXG5jb25zdCBjYWxlbmRhclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQUQnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogYWN0aW9uLmF1dGgsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ0ZJTFRFUic6IHtcclxuICAgICAgY29uc29sZS5sb2coXCJGSUxURVIgRklSRUQ6IFwiKVxyXG4gICAgICBpZiAoc3RhdGUubG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZGF0YTogZ2V0TGlzdERhdGEoc3RhdGUuZGF0YSwgYWN0aW9uLmRhdGUpIFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZGF0YTogW11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufSBcclxuXHJcblxyXG5sZXQgZXhhbXBsZV9yZXNwb25zZSA9IHtcclxuICBcImRhdGFcIjoge1xyXG4gICAgXCJyZXBvc2l0b3J5XCI6IHtcclxuICAgICAgXCJpc3N1ZXNcIjoge1xyXG4gICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TlRjMk1qYz1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyBiYWNrLWxvZ1wiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvMlwiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRFE2VlhObGNqTTBNRGd4T1RFPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9nYW4gUG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsb2dpblwiOiBcImxvZ2FucG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtaWxlc3RvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EazZUV2xzWlhOMGIyNWxORFF5TkRVMk5BPT1cIixcclxuICAgICAgICAgICAgICAgIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiT1BFTlwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicHJvamVjdENhcmRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmFjay1sb2dcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NDo1OVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOek00TWpZPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTczODI2XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOVGs0TURZPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIHdpcFwiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvM1wiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibG9naW5cIjogXCJsb2dhbnBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWlsZXN0b25lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRGs2VFdsc1pYTjBiMjVsTkRReU5EVTJOQT09XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIk9QRU5cIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlRHRmlaV3d4TkRBek5URTVNekl3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiZDczYTRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJidWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwcm9qZWN0Q2FyZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJub2Rlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXSVBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NTowNlpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOelF3TkRVPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTc0MDQ1XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOakF6TlRRPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIGRvbmVcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzRcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImxvZ2luXCI6IFwibG9nYW5wb3dlbGxcIixcclxuICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1pbGVzdG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURrNlRXbHNaWE4wYjI1bE5EUXlORFUyTkE9PVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWVPblwiOiBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic3RhdGVcIjogXCJDTE9TRURcIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlRHRmlaV3d4TkRBek5URTVNekl6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiYTJlZWVmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJlbmhhbmNlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInByb2plY3RDYXJkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NToxMVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOelF4TVRjPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTc0MTE3XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IERhdGFDZWxscyA9ICh7dmFsdWV9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBcclxuICBpZiAoIXN0YXRlKSB7XHJcbiAgICByZXR1cm4gPHA+bG9hZGluZzwvcD5cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgeyBkYXRhOiBpc3N1ZXMgfSA9IGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0ZJTFRFUicsXHJcbiAgICAgIGRhdGU6IHZhbHVlXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnaXNzdWVzOiAnICsgaXNzdWVzKVxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHN0YXRlIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uY29udGVudH0+XHJcbiAgICAgICAgICAgIDxCYWRnZSBzdGF0dXM9e2l0ZW0udHlwZX0gdGV4dD17aXRlbS5jb250ZW50fSBjbGFzc05hbWU9XCJhbnQtYmFkZ2Utc3RhdHVzXCIgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ldmVudHMge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ldmVudHMgLmFudC1iYWRnZS1zdGF0dXMge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5jb25zdCBkYXRlQ2VsbFJlbmRlciA9IHZhbHVlID0+IDxEYXRhQ2VsbHMgdmFsdWU9e3ZhbHVlfS8+XHJcblxyXG5mdW5jdGlvbiBnZXRNb250aERhdGEodmFsdWUpIHtcclxuICBpZiAodmFsdWUubW9udGgoKSA9PT0gOCkge1xyXG4gICAgcmV0dXJuIDEzOTQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb250aENlbGxSZW5kZXIodmFsdWUpIHtcclxuICBjb25zdCBudW0gPSBnZXRNb250aERhdGEodmFsdWUpO1xyXG4gIHJldHVybiBudW0gPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzLW1vbnRoXCI+XHJcbiAgICAgIDxzZWN0aW9uPntudW19PC9zZWN0aW9uPlxyXG4gICAgICA8c3Bhbj5CYWNrbG9nIG51bWJlcjwvc3Bhbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubm90ZXMtbW9udGgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHJvdXRlcjogeyBxdWVyeTogeyBhdXRoIH0gfSB9KSA9PiB7XHJcbiAgY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoY2FsZW5kYXJSZWR1Y2VyKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoYXV0aCkgPT4gZmV0Y2hlcihhdXRoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BRCcsXHJcbiAgICAgICAgZGF0YTogcmVzLFxyXG4gICAgICAgIGF1dGg6IGF1dGhcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coXCJyZXM6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGZldGNoRGF0YShhdXRoKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxyXG4gICAgICA8Q2FsZW5kYXIgZGF0ZUNlbGxSZW5kZXI9e2RhdGVDZWxsUmVuZGVyfSBtb250aENlbGxSZW5kZXI9e21vbnRoQ2VsbFJlbmRlcn0vPlxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICkgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQYWdlUm91dGVyKEluZGV4KSJdfQ== */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */")) : null;
}

var Index = function Index(_ref7) {
  var auth = _ref7.router.query.auth;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_11__["useReducer"])(calendarReducer),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    var fetchData = function fetchData(auth) {
      return fetcher(auth).then(function (res) {
        dispatch({
          type: 'LOAD',
          data: res,
          auth: auth
        });
        console.log("res: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(res));
      });
    };

    fetchData(auth);
  }, []); // console.log("DATA: " + JSON.stringify(state))

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    dateCellRender: dateCellRender,
    monthCellRender: monthCellRender,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withPageRouter__WEBPACK_IMPORTED_MODULE_12__["withPageRouter"])(Index));

/***/ })

})
//# sourceMappingURL=calendar.js.e9e3285b567141ae976b.hot-update.js.map