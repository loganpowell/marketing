webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/table/style */ "./node_modules/antd/lib/table/style/index.js");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_withPageRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/withPageRouter */ "./components/withPageRouter.js");







var _jsxFileName = "C:\\Users\\logan\\Projects\\census\\embeds\\usajobs-widget\\pages\\index.js";



// import { KEY } from 'babel-dotenv'
// dotenv.config()
// const Index = () => (
//   <div>
//     <p>Hello Next.js</p>
//     <DatePicker />
//   </div>
// )
var Column = antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a.Column,
    ColumnGroup = antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a.ColumnGroup;

var fetcher =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(url, key) {
    var result, prime, SearchResultItems;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                'Authorization-Key': key,
                'User-Agent': "loganpowell@gmail.com",
                'Host': 'data.usajobs.gov'
              }
            });

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.json();

          case 5:
            prime = _context.sent;
            console.log("api call: " + url); // console.log("SearchResult:")

            SearchResultItems = prime.SearchResult.SearchResultItems; // console.log(SearchResultItems)

            return _context.abrupt("return", SearchResultItems.map(function (_ref2, idx) {
              var MatchedObjectDescriptor = _ref2.MatchedObjectDescriptor;

              var ApplicationCloseDate = MatchedObjectDescriptor.ApplicationCloseDate,
                  _MatchedObjectDescrip = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(MatchedObjectDescriptor.ApplyURI, 1),
                  applyLink = _MatchedObjectDescrip[0],
                  DepartmentName = MatchedObjectDescriptor.DepartmentName,
                  _MatchedObjectDescrip2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(MatchedObjectDescriptor.JobCategory, 1),
                  catagory = _MatchedObjectDescrip2[0].Name,
                  OrganizationName = MatchedObjectDescriptor.OrganizationName,
                  applyBy = MatchedObjectDescriptor.PositionEndDate,
                  _MatchedObjectDescrip3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(MatchedObjectDescriptor.PositionLocation, 1),
                  _MatchedObjectDescrip4 = _MatchedObjectDescrip3[0],
                  CityName = _MatchedObjectDescrip4.CityName,
                  CountryCode = _MatchedObjectDescrip4.CountryCode,
                  CountrySubDivisionCode = _MatchedObjectDescrip4.CountrySubDivisionCode,
                  Latitude = _MatchedObjectDescrip4.Latitude,
                  LocationName = _MatchedObjectDescrip4.LocationName,
                  Longitude = _MatchedObjectDescrip4.Longitude,
                  _MatchedObjectDescrip5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(MatchedObjectDescriptor.PositionOfferingType, 1),
                  appointmentType = _MatchedObjectDescrip5[0].Name,
                  _MatchedObjectDescrip6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(MatchedObjectDescriptor.PositionRemuneration, 1),
                  _MatchedObjectDescrip7 = _MatchedObjectDescrip6[0],
                  minPay = _MatchedObjectDescrip7.MinimumRange,
                  maxPay = _MatchedObjectDescrip7.MaximumRange,
                  per = _MatchedObjectDescrip7.RateIntervalCode,
                  PositionTitle = MatchedObjectDescriptor.PositionTitle,
                  PositionURI = MatchedObjectDescriptor.PositionURI;

              return {
                key: idx,
                positionTitle: PositionTitle,
                deadline: applyBy,
                location: LocationName,
                tags: DepartmentName,
                link: applyLink,
                payRange: "$".concat(Number(minPay).toFixed(0), " to $").concat(Number(maxPay).toFixed(0), " ").concat(per)
              };
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // console.log(data)
// const data = [
//   {
//     key: '1',
//     positionTitle: 'John',
//     deadline: 'Brown',
//     age: 32,
//     location: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     positionTitle: 'Jim',
//     deadline: 'Green',
//     age: 42,
//     location: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     positionTitle: 'Joe',
//     deadline: 'Black',
//     age: 32,
//     location: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];


var Index = function Index(_ref3) {
  var key = _ref3.router.query.key;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // WARNING IN CONSOLE:
  // useEffect(async () => {
  //   const res = await fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202")
  //   setData(res)
  // }, [])


  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(key) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202", key);

              case 2:
                res = _context2.sent;
                setData(res);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData(_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    fetchData(key);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_6___default.a, {
    dataSource: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Column, {
    title: "Position",
    dataIndex: "positionTitle",
    key: "positionTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Column, {
    title: "Apply By:",
    dataIndex: "deadline",
    key: "deadline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Column, {
    title: "Pay Range",
    dataIndex: "payRange",
    key: "payRange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Column, {
    title: "Location",
    dataIndex: "location",
    key: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Column, {
    title: "Apply Here:",
    dataIndex: "tags",
    key: "tags",
    render: function render(text, record) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
        color: "black",
        key: record.key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: record.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, record.tags)));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }));
};

Index.getInitialProps; // const Index = fetcher("https://data.usajobs.gov/api/Search?Organization=CM63&Page=1&LocationName=22202").then(r => tabular(r))

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withPageRouter__WEBPACK_IMPORTED_MODULE_8__["withPageRouter"])(Index));

/***/ })

})
//# sourceMappingURL=index.js.e6d17f77c87807d4b985.hot-update.js.map