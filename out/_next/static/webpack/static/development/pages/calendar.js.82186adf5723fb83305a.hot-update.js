webpackHotUpdate("static\\development\\pages\\calendar.js",{

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/drawer/style */ "./node_modules/antd/lib/drawer/style/index.js");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/calendar/style */ "./node_modules/antd/lib/calendar/style/index.js");
/* harmony import */ var antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/calendar */ "./node_modules/antd/lib/calendar/index.js");
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_progress_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/progress/style */ "./node_modules/antd/lib/progress/style/index.js");
/* harmony import */ var antd_lib_progress_style__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress_style__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/progress */ "./node_modules/antd/lib/progress/index.js");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/badge/style */ "./node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_withPageRouter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/withPageRouter */ "./components/withPageRouter.js");
/* harmony import */ var react_json_to_csv__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-json-to-csv */ "./node_modules/react-json-to-csv/dist/index.js");
/* harmony import */ var react_json_to_csv__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_json_to_csv__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! nanographql */ "./node_modules/nanographql/index.js");
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(nanographql__WEBPACK_IMPORTED_MODULE_29__);
























var _jsxFileName = "C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_23__["default"])(["\nquery ($name: String!, $owner: String!) { \n  repository(name: $name, owner: $owner){\n    issues(last:100){\n      edges{\n        node{\n          id\n          title\n          createdAt\n          url\n          bodyText\n          bodyHTML\n          body\n          assignees (first:10){\n            edges {\n              node {\n                id\n                name\n                avatarUrl\n              }\n            }\n          }\n          author{\n            login\n            avatarUrl\n          }\n          milestone {\n            id\n            dueOn\n          }\n          state\n          labels(first:10) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n          projectCards{\n            nodes{\n              column{\n                name\n                createdAt\n              }\n            }\n            edges{\n              node {\n                id\n                note\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // import { Fragment } from 'react';


 // import { Parser } from 'json2csv'


 // const client = new GraphQLClient({
//   url: 'https://api.github.com/graphql',
// })

var ISSUES_QUERY = nanographql__WEBPACK_IMPORTED_MODULE_29___default()(_templateObject());

var fetcher =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_22__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_20___default.a.mark(function _callee(auth) {
    var result, prime, edges;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_20___default.a.wrap(function _callee$(_context) {
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
            // console.log("prime:")
            edges = prime.data.repository.issues.edges; // console.log(prime)

            return _context.abrupt("return", edges.map(function (_ref2, idx) {
              var node = _ref2.node;

              var title = node.title,
                  url = node.url,
                  assignee_edges = node.assignees.edges,
                  _node$author = node.author,
                  login = _node$author.login,
                  authorAvatar = _node$author.avatarUrl,
                  bodyText = node.bodyText,
                  createdAt = node.createdAt,
                  bodyHTML = node.bodyHTML,
                  body = node.body,
                  dueOn = node.milestone.dueOn,
                  state = node.state,
                  label_edges = node.labels.edges,
                  _node$projectCards = node.projectCards,
                  _node$projectCards$no = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_21__["default"])(_node$projectCards.nodes, 1),
                  column_name = _node$projectCards$no[0].column.name,
                  _node$projectCards$ed = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_21__["default"])(_node$projectCards.edges, 1),
                  _node$projectCards$ed2 = _node$projectCards$ed[0].node,
                  card_note = _node$projectCards$ed2.note,
                  card_url = _node$projectCards$ed2.url;

              return {
                key: idx,
                issue_title: title,
                createdAt: createdAt,
                bodyText: bodyText,
                bodyHTML: bodyHTML,
                body: body,
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
                      name = _ref4$node.name,
                      id = _ref4$node.id;
                  return {
                    color: "#".concat(color),
                    name: name,
                    id: id
                  };
                }),
                column_name: column_name,
                card_info: {
                  card_note: card_note,
                  card_url: card_url
                }
              };
            }));

          case 8:
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

function getListData(data, value) {
  var input = new Date(value).setHours(0, 0, 0, 0); // console.log("value: " + value)
  // let fetchedDate = new Date("2019-06-28T00:00:00Z").toISOString().split('T')[0]

  var matches = data.filter(function (cur, idx) {
    return new Date(cur.dueOn).setHours(0, 0, 0, 0) === input;
  });
  return matches.map(function (_ref5) {
    var state = _ref5.state,
        issue_title = _ref5.issue_title;
    return {
      type: state === "OPEN" ? 'error' : 'success',
      content: issue_title
    };
  });
}

var DataCells = function DataCells(_ref6) {
  var value = _ref6.value;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_25__["useContext"])(Context),
      data = _useContext.state.data;

  if (!data) {
    return null;
  } else {
    var filteredIssues = getListData(data, value); // console.log('issues: ' + data)
    // console.log("state: " + state )

    return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("ul", {
      className: "jsx-210777900" + " " + "events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, filteredIssues.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("li", {
        key: item.content,
        className: "jsx-210777900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
        status: item.type,
        text: item.content,
        className: "ant-badge-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }));
    }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
      id: "210777900",
      __self: this
    }, ".events.jsx-210777900{list-style:none;margin:0;padding:0;}.events.jsx-210777900 .ant-badge-status.jsx-210777900{overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLb0IsQUFHMkIsQUFLQSxnQkFKUCxBQUtVLFNBSlQsVUFDWixBQUlhLFdBQ1ksdUJBQ1IsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UsIERyYXdlciwgTGlzdCwgQXZhdGFyLCBDYXJkLCBJY29uLCBSb3csIENvbCwgVGFnLCBQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFBhZ2VSb3V0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQYWdlUm91dGVyJ1xyXG4vLyBpbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdqc29uMmNzdidcclxuaW1wb3J0IENzdkRvd25sb2FkIGZyb20gJ3JlYWN0LWpzb24tdG8tY3N2J1xyXG5pbXBvcnQgZ3FsIGZyb20gJ25hbm9ncmFwaHFsJ1xyXG5cclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHtcclxuLy8gICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxyXG5cclxuLy8gfSlcclxuXHJcbmNvbnN0IElTU1VFU19RVUVSWSA9IGdxbGBcclxucXVlcnkgKCRuYW1lOiBTdHJpbmchLCAkb3duZXI6IFN0cmluZyEpIHsgXHJcbiAgcmVwb3NpdG9yeShuYW1lOiAkbmFtZSwgb3duZXI6ICRvd25lcil7XHJcbiAgICBpc3N1ZXMobGFzdDoxMDApe1xyXG4gICAgICBlZGdlc3tcclxuICAgICAgICBub2Rle1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYm9keVRleHRcclxuICAgICAgICAgIGJvZHlIVE1MXHJcbiAgICAgICAgICBib2R5XHJcbiAgICAgICAgICBhc3NpZ25lZXMgKGZpcnN0OjEwKXtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aG9ye1xyXG4gICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1pbGVzdG9uZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGR1ZU9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgbGFiZWxzKGZpcnN0OjEwKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvamVjdENhcmRze1xyXG4gICAgICAgICAgICBub2Rlc3tcclxuICAgICAgICAgICAgICBjb2x1bW57XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbm90ZVxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChhdXRoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogXCJ0b2tlbiBcIiArIGF1dGggfSxcclxuICAgIGJvZHk6IElTU1VFU19RVUVSWSh7IG5hbWU6IFwiZW1iZWRzXCIsIG93bmVyOiBcImxvZ2FucG93ZWxsXCIgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9IH0gfSB9ID0gcHJpbWVcclxuICAvLyBjb25zb2xlLmxvZyhwcmltZSlcclxuXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgYm9keUhUTUwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIG1pbGVzdG9uZTogeyBkdWVPbiB9LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgbGFiZWxzOiB7IGVkZ2VzOiBsYWJlbF9lZGdlcyB9LFxyXG4gICAgICBwcm9qZWN0Q2FyZHM6IHtcclxuICAgICAgICBub2RlczogW3sgY29sdW1uOiB7IG5hbWU6IGNvbHVtbl9uYW1lIH0gfV0sXHJcbiAgICAgICAgZWRnZXM6IFt7IG5vZGU6IHsgbm90ZTogY2FyZF9ub3RlLCB1cmw6IGNhcmRfdXJsIH0gfV1cclxuICAgICAgfVxyXG4gICAgfSA9IG5vZGVcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGlkeCxcclxuICAgICAgaXNzdWVfdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjcmVhdGVkQXQsXHJcbiAgICAgIGJvZHlUZXh0LFxyXG4gICAgICBib2R5SFRNTCxcclxuICAgICAgYm9keSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGR1ZU9uLFxyXG4gICAgICBpc3N1ZV9hdXRob3I6IHsgdXNlcl9pZDogbG9naW4sIGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBpc3N1ZV91cmw6IHVybCxcclxuICAgICAgYXNzaWduZWVzOiBhc3NpZ25lZV9lZGdlcy5tYXAoKHsgbm9kZTogeyBuYW1lLCBhdmF0YXJVcmwgfSB9KSA9PiAoeyBuYW1lLCBhdmF0YXJVcmwgfSkpLFxyXG4gICAgICBsYWJlbHM6IGxhYmVsX2VkZ2VzLm1hcCgoeyBub2RlOiB7IGNvbG9yLCBuYW1lLCBpZCB9IH0pID0+ICh7IGNvbG9yIDogYCMke2NvbG9yfWAsIG5hbWUsIGlkIH0pKSxcclxuICAgICAgY29sdW1uX25hbWUsXHJcbiAgICAgIGNhcmRfaW5mbzogeyBjYXJkX25vdGUsIGNhcmRfdXJsIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpIHtcclxuXHJcbiAgbGV0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZTogXCIgKyB2YWx1ZSlcclxuXHJcbiAgLy8gbGV0IGZldGNoZWREYXRlID0gbmV3IERhdGUoXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICBsZXQgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKChjdXIsIGlkeCkgPT4gbmV3IERhdGUoY3VyLmR1ZU9uKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gaW5wdXQpXHJcbiAgcmV0dXJuIG1hdGNoZXMubWFwKCh7IHN0YXRlLCBpc3N1ZV90aXRsZSB9KSA9PiAoe1xyXG4gICAgdHlwZTogc3RhdGUgPT09IFwiT1BFTlwiID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyxcclxuICAgIGNvbnRlbnQ6IGlzc3VlX3RpdGxlXHJcbiAgfSkpXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgRGF0YUNlbGxzID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGU6IHsgZGF0YSB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZmlsdGVyZWRJc3N1ZXMgPSBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnaXNzdWVzOiAnICsgZGF0YSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHN0YXRlIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuICAgICAgICB7ZmlsdGVyZWRJc3N1ZXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5jb250ZW50fT5cclxuICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS50eXBlfSB0ZXh0PXtpdGVtLmNvbnRlbnR9IGNsYXNzTmFtZT1cImFudC1iYWRnZS1zdGF0dXNcIiAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmV2ZW50cyB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkYXRlQ2VsbFJlbmRlciA9IHZhbHVlID0+IDxEYXRhQ2VsbHMgdmFsdWU9e3ZhbHVlfSAvPlxyXG5cclxuZnVuY3Rpb24gZ2V0TW9udGhEYXRhKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlLm1vbnRoKCkgPT09IDgpIHtcclxuICAgIHJldHVybiAxMzk0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhDZWxsUmVuZGVyKHZhbHVlKSB7XHJcbiAgY29uc3QgbnVtID0gZ2V0TW9udGhEYXRhKHZhbHVlKTtcclxuICByZXR1cm4gbnVtID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3Rlcy1tb250aFwiPlxyXG4gICAgICA8c2VjdGlvbj57bnVtfTwvc2VjdGlvbj5cclxuICAgICAgPHNwYW4+QmFja2xvZyBudW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm5vdGVzLW1vbnRoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcblxyXG5cclxuLy8gUkVEVUNFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY2FsZW5kYXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0FEJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IGFjdGlvbi5hdXRoLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdPUEVOX0RSQVdFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkcmF3ZXJPcGVuOiB0cnVlLFxyXG4gICAgICAgIGRyYXdlckNvbnRlbnRzOiBhY3Rpb24uY29udGVudHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSAnQ0xPU0VfRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDT05URVhUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5cclxuLy8gSU5JVElBTCBTVEFURSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoOiBcImxvYWRpbmcuLi5cIixcclxuICBsb2FkZWQ6IGZhbHNlLFxyXG4gIGRhdGE6IFtdLFxyXG4gIGRyYXdlck9wZW46IGZhbHNlLFxyXG4gIGRyYXdlckNvbnRlbnRzOiBbXVxyXG59XHJcblxyXG5jb25zdCByZXRyaWV2ZU1hdGNoZXMgPSAoZGF0YSwgZGF0ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBkYXRhLmZpbHRlcihkYXR1bSA9PiBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gbmV3IERhdGUoZGF0dW0uZHVlT24pLnNldEhvdXJzKDAsIDAsIDAsIDApKVxyXG4gIHJldHVybiBtYXRjaGVzXHJcbn1cclxuXHJcblxyXG5jb25zdCBTdGF0QmFyID0gKHsgYm9keSwgcGVyY2VudERvbmUsIHRhZ3MgfSkgPT4ge1xyXG4gIGNvbnN0IGJvZHlJbWdzUmVnZXggPSAvKFxcIVxcWykoLio/KShcXCkpL2dcclxuICBjb25zdCBjbGVhbmVkQm9keSA9IGJvZHkucmVwbGFjZShib2R5SW1nc1JlZ2V4LCBcIlwiKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiBcclxuICAgIHsgcGVyY2VudERvbmUgPT09IDEwMCA/IDxkaXY+PFByb2dyZXNzIHBlcmNlbnQ9e3BlcmNlbnREb25lfSBzaXplPVwic21hbGxcIiAvPjxici8+PC9kaXY+XHJcbiAgICA6IHBlcmNlbnREb25lID4gMCA/IDxkaXY+PFByb2dyZXNzIHBlcmNlbnQ9e3BlcmNlbnREb25lfSBzaXplPVwic21hbGxcIiBzdGF0dXM9XCJhY3RpdmVcIi8+PGJyLz48L2Rpdj5cclxuICAgIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHsgdGFncy5sZW5ndGggPiAwID8gdGFncy5tYXAodGFnID0+IChcclxuICAgICAgPGRpdiBrZXk9e3RhZy5pZH0gY2xhc3NOYW1lPVwid3JhcC10YWdcIiA+PFRhZyBjb2xvcj17dGFnLmNvbG9yfT57dGFnLm5hbWV9PC9UYWc+PC9kaXY+KVxyXG4gICAgKVxyXG4gICAgOiBudWxsXHJcbiAgICB9XHJcbiAgICA8TWFya2Rvd24gc291cmNlPXtjbGVhbmVkQm9keX0vPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzt9XHJcbiAgICAgLndyYXAtdGFnIHsgbWFyZ2luLWJvdHRvbTogM3B4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7IFxyXG4gICAgIH1gfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj4gIFxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZFxyXG5cclxuXHJcbmNvbnN0IElzc3VlQ2FyZCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHN0YXRlOiB7IGRhdGEgfSB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IHtcclxuICAgIGNhcmRfaW5mbzogeyBjYXJkX3VybCB9LFxyXG4gICAgaXNzdWVfYXV0aG9yOiB7IGF1dGhvckF2YXRhciB9LFxyXG4gICAgaXNzdWVfdGl0bGUsXHJcbiAgICBpc3N1ZV91cmwsXHJcbiAgICBzdGF0ZSxcclxuICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgbGFiZWxzLFxyXG4gICAgYXNzaWduZWVzLFxyXG4gICAgYm9keVRleHQsXHJcbiAgICBib2R5LFxyXG4gICAgYm9keUhUTUwsXHJcbiAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlIH1cclxuICB9ID0gaXNzdWVcclxuXHJcbiAgY29uc29sZS5sb2coXCJsYWJlbHM6IFwiICsgSlNPTi5zdHJpbmdpZnkobGFiZWxzKSlcclxuICBjb25zdCBpbWFnZVRhZ3NSZWdleCA9IC88aW1nIFtePl0qc3JjPVwiW15cIl0qXCJbXj5dKj4vZ21cclxuICBjb25zdCBpbWFnZVNyY1JlZ2V4ID0gLy4qc3JjPVwiKFteXCJdKilcIi4qL1xyXG4gIGNvbnN0IGltYWdlcyA9IGJvZHlIVE1MLmxlbmd0aCA+IDAgPyBib2R5SFRNTC5tYXRjaChpbWFnZVRhZ3NSZWdleCkgOiBudWxsXHJcbiAgY29uc3QgYmFubmVyU3JjID0gaW1hZ2VzICE9PSBudWxsID8gaW1hZ2VzLm1hcChpbWcgPT4gaW1nLnJlcGxhY2UoaW1hZ2VTcmNSZWdleCwgJyQxJykpWzBdIDogXCJcIlxyXG5cclxuICBjb25zdCBhbGxCcmFja2V0c1JlZ2V4ID0gL1xcWy5cXF0vZ1xyXG4gIGNvbnN0IGRvbmVCcmFja2V0c1JlZ2V4ID0gL1xcW3hcXF0vZ1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicmVnZXggbGVuZ3RoOiBcIiArIGJvZHkubWF0Y2goYWxsQnJhY2tldHNSZWdleCkpXHJcbiAgY29uc3QgdG9kb3NDb3VudCA9IGJvZHkubGVuZ3RoID4gMCA/IGJvZHkubWF0Y2goYWxsQnJhY2tldHNSZWdleCkgOiAwXHJcbiAgY29uc3QgZG9uZUNvdW50ID0gYm9keS5sZW5ndGggPiAwID8gYm9keS5tYXRjaChkb25lQnJhY2tldHNSZWdleCkgOiAwXHJcbiAgY29uc3QgcGVyY2VudERvbmUgPSB0b2Rvc0NvdW50ICE9PSBudWxsID8gTWF0aC5mbG9vcigoZG9uZUNvdW50Lmxlbmd0aCAvIHRvZG9zQ291bnQubGVuZ3RoKSAqIDEwMCkgOiBudWxsXHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcImJhbm5lclNyYzogXCIgKyBiYW5uZXJTcmMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgIGNvdmVyPXtiYW5uZXJTcmMgIT09IFwiXCIgP1xyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD17aXNzdWVfdGl0bGV9XHJcbiAgICAgICAgICBzcmM9e2Jhbm5lclNyY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8YSBocmVmPXtjYXJkX3VybH0+XHJcbiAgICAgICAgICA8SWNvbiB0eXBlPVwicHJvamVjdFwiLz5cclxuICAgICAgICA8L2E+LFxyXG4gICAgICAgIDxhIGhyZWY9e2lzc3VlX3VybH0+XHJcbiAgICAgICAgICA8SWNvbiB0eXBlPVwiZWRpdFwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgLFxyXG4gICAgICAgIC8vIDxJY29uIHR5cGU9XCJlbGxpcHNpc1wiPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXsgYXNzaWduZWVzLmxlbmd0aCA+IDAgPyBhc3NpZ25lZXNbMF0uYXZhdGFyVXJsIDogXCJcIiB9IHNpemU9e1wic21hbGxcIn0vPlxyXG4gICAgICAgIC8vIDwvSWNvbj5cclxuXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxNZXRhXHJcbiAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17YXV0aG9yQXZhdGFyfSAvPn1cclxuICAgICAgICB0aXRsZT17aXNzdWVfdGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249ezxTdGF0QmFyIGJvZHk9e2JvZHl9IHBlcmNlbnREb25lPXtwZXJjZW50RG9uZX0gdGFncz17bGFiZWxzfS8+fVxyXG4gICAgICAvPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG4vKlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBpZHgsXHJcbiAgICAgIGlzc3VlX3RpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgZHVlT24sXHJcbiAgICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9IH0pID0+ICh7IG5hbWUsIGF2YXRhclVybCB9KSksXHJcbiAgICAgIGxhYmVsczogbGFiZWxfZWRnZXMubWFwKCh7IG5vZGU6IHsgY29sb3IsIG5hbWUsIGlkIH0gfSkgPT4gKHsgY29sb3IgOiBgIyR7Y29sb3J9YCwgbmFtZSwgaWQgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gICovXHJcblxyXG4gZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZSgpIHtcclxuICB2YXIgdG9kYXlUaW1lID0gbmV3IERhdGUoKTtcclxuICB2YXIgbW9udGggPSB0b2RheVRpbWUuZ2V0TW9udGgoKSArIDE7XHJcbiAgdmFyIGRheSA9IHRvZGF5VGltZS5nZXREYXRlKCk7XHJcbiAgdmFyIHllYXIgPSB0b2RheVRpbWUuZ2V0RnVsbFllYXIoKTtcclxuICByZXR1cm4gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcjtcclxufVxyXG5cclxuLy8gbGV0IHRlc3REYXRlQ3JlYXRlZCA9IFwiMjAxOS0wNi0xOVQxNDo0NTozMlpcIlxyXG4vLyBsZXQgdGVzdERhdGVEdWUgPSBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIgXHJcblxyXG4vLyBsZXQgZm9ybWF0Q3JlYXRlZERhdGUgPSBHZXRGb3JtYXR0ZWREYXRlKHRlc3REYXRlQ3JlYXRlZCkgLy8/XHJcblxyXG5jb25zdCBkbGNzdiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc3QgZmllbGRzID0gWydkdWVPbicsICdpc3N1ZV90aXRsZScsXVxyXG4gIC8vIGNvbnN0IGpzb24yY3N2UGFyc2VyID0gbmV3IFBhcnNlcih7IGZpZWxkcyB9KVxyXG4gIC8vIGNvbnN0IGNzdiA9IGpzb24yY3N2UGFyc2VyLnBhcnNlKGRhdGEpXHJcbiAgLy8gY29uc3QgZmlsZURhdGEgPSB7XHJcbiAgLy8gICBtaW1lOiBcInRleHQvcGxhaW47Y2hhcnNldD11dGYtOFwiLFxyXG4gIC8vICAgZmlsZW5hbWU6IFwiZW1iZWRzLmNzdlwiLFxyXG4gIC8vICAgY29udGVudDogY3N2XHJcbiAgLy8gfVxyXG4gIGNvbnN0IGZpbGVEYXRhID0gZGF0YS5tYXAoKHsgXHJcbiAgICBkdWVPbixcclxuICAgIGlzc3VlX3RpdGxlLFxyXG4gICAgY3JlYXRlZEF0LFxyXG4gICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSB9LFxyXG4gICAgbGFiZWxzLFxyXG4gICAgYm9keVRleHQsXHJcbiAgICBpc3N1ZV9hdXRob3I6IHsgdXNlcl9pZCB9LFxyXG4gICAgaXNzdWVfdXJsXHJcbiAgfSkgPT4gKHtcclxuICAgICdFdmVudCBOYW1lJzogaXNzdWVfdGl0bGUsXHJcbiAgICAnU3RhcnQgRGF0ZSc6IGAke2dldEZvcm1hdHRlZERhdGUoY3JlYXRlZEF0KX0gMTI6MDBgLFxyXG4gICAgJ0VuZCBEYXRlJzogYCR7Z2V0Rm9ybWF0dGVkRGF0ZShkdWVPbil9IDEyOjAwYCxcclxuICAgICdDYW1wYWlnbic6IGNhcmRfbm90ZSA/IGNhcmRfbm90ZSA6IFwiXCIsXHJcbiAgICAnRGVzY3JpcHRpb24nOiBib2R5VGV4dCxcclxuICAgICdDb21tdW5pY2F0aW9uIFR5cGUnOiBcIkVtYWlsIE1hcmtldGluZ1wiICsgbGFiZWxzLmxlbmd0aCA+IDAgPyBsYWJlbHMubWFwKGxhYmVsID0+IGxhYmVsLm5hbWUpIDogXCJcIixcclxuICAgICdEZWNjZW5pYWwgUmVsYXRlZCc6ICBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsLm5hbWUgPT09ICdkZWNlbm5pYWwnKS5sZW5ndGggPiAwID8gXCJUUlVFXCIgOiBcIkZBTFNFXCIsXHJcbiAgICAnS2V5IERhdGUnOiAgbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbC5uYW1lID09PSAna2V5IGRhdGUnKS5sZW5ndGggPiAwID8gXCJUUlVFXCIgOiBcIkZBTFNFXCIsXHJcbiAgICAnUG9zdCB0byBwdWJsaWMgY2FsZW5kYXInOiBcIkZBTFNFXCIsXHJcbiAgICAnQ2Vuc3VzIFBPQyc6IHVzZXJfaWQsXHJcbiAgICAnSXRlbSBUeXBlJzogXCJJdGVtXCIsXHJcbiAgICAnUGF0aCc6IGlzc3VlX3VybFxyXG4gIH0pKVxyXG4gIHJldHVybiBmaWxlRGF0YVxyXG59XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG5cclxuICAgIGZldGNoRGF0YShhdXRoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGZpcmVEYXRlU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZS5fZDogXCIgKyBuZXcgRGF0ZShlLl9kKS5zZXRIb3VycygwLDAsMCwwKSlcclxuICAgIGNvbnN0IG1hdGNoZWQgPSByZXRyaWV2ZU1hdGNoZXMoc3RhdGUuZGF0YSwgZS5fZClcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ09QRU5fRFJBV0VSJyxcclxuICAgICAgY29udGVudHM6IG1hdGNoZWRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xPU0VfRFJBV0VSJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxDYWxlbmRhciBkYXRlQ2VsbFJlbmRlcj17ZGF0ZUNlbGxSZW5kZXJ9IG1vbnRoQ2VsbFJlbmRlcj17bW9udGhDZWxsUmVuZGVyfSBvblNlbGVjdD17ZmlyZURhdGVTZWxlY3Rpb259IC8+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB0aXRsZT1cIklzc3VlczpcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZURyYXdlcn1cclxuICAgICAgICB2aXNpYmxlPXtzdGF0ZS5kcmF3ZXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXtcIjMwMHB4XCJ9XHJcbiAgICAgID5cclxuICAgICAge3N0YXRlLmRyYXdlckNvbnRlbnRzID8gc3RhdGUuZHJhd2VyQ29udGVudHMubWFwKChpc3N1ZSwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxJc3N1ZUNhcmQga2V5PXtpc3N1ZS5rZXl9IGlzc3VlPXtpc3N1ZX0gLz48YnIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKSA6IFwiXCJ9XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICB7c3RhdGUuZGF0YS5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgPENzdkRvd25sb2FkIGRhdGE9e2RsY3N2KHN0YXRlLmRhdGEpfT5cclxuICAgICAgICAgIDxCdXR0b24gaWNvbj1cImRvd25sb2FkXCIgc2l6ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICBEb3dubG9hZCBDYWxlbmRhciAuY3N2XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NzdkRvd25sb2FkPlxyXG4gICAgICAgIDogXCJcIn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZVJvdXRlcihJbmRleCkiXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
  }
};

var dateCellRender = function dateCellRender(value) {
  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(DataCells, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
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
  return num ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    className: "jsx-2153197830" + " " + "notes-month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("section", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, num), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("span", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Backlog number"), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
    id: "2153197830",
    __self: this
  }, ".notes-month.jsx-2153197830{text-align:center;font-size:28px;}.notes-month.jsx-2153197830 section.jsx-2153197830{font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtNa0IsQUFHMkIsQUFJSCxlQUNqQixHQUppQixlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxvZ2FuXFxQcm9qZWN0c1xcY2Vuc3VzXFxtYXJrZXRpbmdcXHBhZ2VzXFxjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyLCBCYWRnZSwgRHJhd2VyLCBMaXN0LCBBdmF0YXIsIENhcmQsIEljb24sIFJvdywgQ29sLCBUYWcsIFByb2dyZXNzLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUGFnZVJvdXRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFBhZ2VSb3V0ZXInXHJcbi8vIGltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2pzb24yY3N2J1xyXG5pbXBvcnQgQ3N2RG93bmxvYWQgZnJvbSAncmVhY3QtanNvbi10by1jc3YnXHJcbmltcG9ydCBncWwgZnJvbSAnbmFub2dyYXBocWwnXHJcblxyXG5cclxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4vLyAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsXHJcblxyXG4vLyB9KVxyXG5cclxuY29uc3QgSVNTVUVTX1FVRVJZID0gZ3FsYFxyXG5xdWVyeSAoJG5hbWU6IFN0cmluZyEsICRvd25lcjogU3RyaW5nISkgeyBcclxuICByZXBvc2l0b3J5KG5hbWU6ICRuYW1lLCBvd25lcjogJG93bmVyKXtcclxuICAgIGlzc3VlcyhsYXN0OjEwMCl7XHJcbiAgICAgIGVkZ2Vze1xyXG4gICAgICAgIG5vZGV7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgICBib2R5VGV4dFxyXG4gICAgICAgICAgYm9keUhUTUxcclxuICAgICAgICAgIGJvZHlcclxuICAgICAgICAgIGFzc2lnbmVlcyAoZmlyc3Q6MTApe1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhdXRob3J7XHJcbiAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWlsZXN0b25lIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZHVlT25cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBsYWJlbHMoZmlyc3Q6MTApIHtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9qZWN0Q2FyZHN7XHJcbiAgICAgICAgICAgIG5vZGVze1xyXG4gICAgICAgICAgICAgIGNvbHVtbntcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBub3RlXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKGF1dGgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBcInRva2VuIFwiICsgYXV0aCB9LFxyXG4gICAgYm9keTogSVNTVUVTX1FVRVJZKHsgbmFtZTogXCJlbWJlZHNcIiwgb3duZXI6IFwibG9nYW5wb3dlbGxcIiB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHByaW1lID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJpbWU6XCIpXHJcbiAgY29uc3QgeyBkYXRhOiB7IHJlcG9zaXRvcnk6IHsgaXNzdWVzOiB7IGVkZ2VzIH0gfSB9IH0gPSBwcmltZVxyXG4gIC8vIGNvbnNvbGUubG9nKHByaW1lKVxyXG5cclxuICByZXR1cm4gZWRnZXMubWFwKCh7IG5vZGUgfSwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogeyBlZGdlczogYXNzaWduZWVfZWRnZXMgfSxcclxuICAgICAgYXV0aG9yOiB7IGxvZ2luLCBhdmF0YXJVcmw6IGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBib2R5VGV4dCxcclxuICAgICAgY3JlYXRlZEF0LFxyXG4gICAgICBib2R5SFRNTCxcclxuICAgICAgYm9keSxcclxuICAgICAgbWlsZXN0b25lOiB7IGR1ZU9uIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBsYWJlbHM6IHsgZWRnZXM6IGxhYmVsX2VkZ2VzIH0sXHJcbiAgICAgIHByb2plY3RDYXJkczoge1xyXG4gICAgICAgIG5vZGVzOiBbeyBjb2x1bW46IHsgbmFtZTogY29sdW1uX25hbWUgfSB9XSxcclxuICAgICAgICBlZGdlczogW3sgbm9kZTogeyBub3RlOiBjYXJkX25vdGUsIHVybDogY2FyZF91cmwgfSB9XVxyXG4gICAgICB9XHJcbiAgICB9ID0gbm9kZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleTogaWR4LFxyXG4gICAgICBpc3N1ZV90aXRsZTogdGl0bGUsXHJcbiAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgZHVlT24sXHJcbiAgICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9IH0pID0+ICh7IG5hbWUsIGF2YXRhclVybCB9KSksXHJcbiAgICAgIGxhYmVsczogbGFiZWxfZWRnZXMubWFwKCh7IG5vZGU6IHsgY29sb3IsIG5hbWUsIGlkIH0gfSkgPT4gKHsgY29sb3IgOiBgIyR7Y29sb3J9YCwgbmFtZSwgaWQgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSkge1xyXG5cclxuICBsZXQgaW5wdXQgPSBuZXcgRGF0ZSh2YWx1ZSkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAvLyBjb25zb2xlLmxvZyhcInZhbHVlOiBcIiArIHZhbHVlKVxyXG5cclxuICAvLyBsZXQgZmV0Y2hlZERhdGUgPSBuZXcgRGF0ZShcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gIGxldCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoKGN1ciwgaWR4KSA9PiBuZXcgRGF0ZShjdXIuZHVlT24pLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBpbnB1dClcclxuICByZXR1cm4gbWF0Y2hlcy5tYXAoKHsgc3RhdGUsIGlzc3VlX3RpdGxlIH0pID0+ICh7XHJcbiAgICB0eXBlOiBzdGF0ZSA9PT0gXCJPUEVOXCIgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnLFxyXG4gICAgY29udGVudDogaXNzdWVfdGl0bGVcclxuICB9KSlcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBEYXRhQ2VsbHMgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZTogeyBkYXRhIH0gfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZElzc3VlcyA9IGdldExpc3REYXRhKGRhdGEsIHZhbHVlKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdpc3N1ZXM6ICcgKyBkYXRhKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhdGU6IFwiICsgc3RhdGUgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4gICAgICAgIHtmaWx0ZXJlZElzc3Vlcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZXZlbnRzIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRhdGVDZWxsUmVuZGVyID0gdmFsdWUgPT4gPERhdGFDZWxscyB2YWx1ZT17dmFsdWV9IC8+XHJcblxyXG5mdW5jdGlvbiBnZXRNb250aERhdGEodmFsdWUpIHtcclxuICBpZiAodmFsdWUubW9udGgoKSA9PT0gOCkge1xyXG4gICAgcmV0dXJuIDEzOTQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb250aENlbGxSZW5kZXIodmFsdWUpIHtcclxuICBjb25zdCBudW0gPSBnZXRNb250aERhdGEodmFsdWUpO1xyXG4gIHJldHVybiBudW0gPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzLW1vbnRoXCI+XHJcbiAgICAgIDxzZWN0aW9uPntudW19PC9zZWN0aW9uPlxyXG4gICAgICA8c3Bhbj5CYWNrbG9nIG51bWJlcjwvc3Bhbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubm90ZXMtbW9udGgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBSRURVQ0VSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjYWxlbmRhclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQUQnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogYWN0aW9uLmF1dGgsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ09QRU5fRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IHRydWUsXHJcbiAgICAgICAgZHJhd2VyQ29udGVudHM6IGFjdGlvbi5jb250ZW50c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdDTE9TRV9EUkFXRVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZHJhd2VyT3BlbjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDogcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENPTlRFWFQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyBJTklUSUFMIFNUQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGF1dGg6IFwibG9hZGluZy4uLlwiLFxyXG4gIGxvYWRlZDogZmFsc2UsXHJcbiAgZGF0YTogW10sXHJcbiAgZHJhd2VyT3BlbjogZmFsc2UsXHJcbiAgZHJhd2VyQ29udGVudHM6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHJldHJpZXZlTWF0Y2hlcyA9IChkYXRhLCBkYXRlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IG5ldyBEYXRlKGRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBuZXcgRGF0ZShkYXR1bS5kdWVPbikuc2V0SG91cnMoMCwgMCwgMCwgMCkpXHJcbiAgcmV0dXJuIG1hdGNoZXNcclxufVxyXG5cclxuXHJcbmNvbnN0IFN0YXRCYXIgPSAoeyBib2R5LCBwZXJjZW50RG9uZSwgdGFncyB9KSA9PiB7XHJcbiAgY29uc3QgYm9keUltZ3NSZWdleCA9IC8oXFwhXFxbKSguKj8pKFxcKSkvZ1xyXG4gIGNvbnN0IGNsZWFuZWRCb2R5ID0gYm9keS5yZXBsYWNlKGJvZHlJbWdzUmVnZXgsIFwiXCIpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+IFxyXG4gICAgeyBwZXJjZW50RG9uZSA9PT0gMTAwID8gPGRpdj48UHJvZ3Jlc3MgcGVyY2VudD17cGVyY2VudERvbmV9IHNpemU9XCJzbWFsbFwiIC8+PGJyLz48L2Rpdj5cclxuICAgIDogcGVyY2VudERvbmUgPiAwID8gPGRpdj48UHJvZ3Jlc3MgcGVyY2VudD17cGVyY2VudERvbmV9IHNpemU9XCJzbWFsbFwiIHN0YXR1cz1cImFjdGl2ZVwiLz48YnIvPjwvZGl2PlxyXG4gICAgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgeyB0YWdzLmxlbmd0aCA+IDAgPyB0YWdzLm1hcCh0YWcgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17dGFnLmlkfSBjbGFzc05hbWU9XCJ3cmFwLXRhZ1wiID48VGFnIGNvbG9yPXt0YWcuY29sb3J9Pnt0YWcubmFtZX08L1RhZz48L2Rpdj4pXHJcbiAgICApXHJcbiAgICA6IG51bGxcclxuICAgIH1cclxuICAgIDxNYXJrZG93biBzb3VyY2U9e2NsZWFuZWRCb2R5fS8+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGltZyB7IG1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvO31cclxuICAgICAud3JhcC10YWcgeyBtYXJnaW4tYm90dG9tOiAzcHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogbm9uZTsgXHJcbiAgICAgfWB9PC9zdHlsZT5cclxuICAgIDwvZGl2PiAgXHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkXHJcblxyXG5cclxuY29uc3QgSXNzdWVDYXJkID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgc3RhdGU6IHsgZGF0YSB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgY29uc3Qge1xyXG4gICAgY2FyZF9pbmZvOiB7IGNhcmRfdXJsIH0sXHJcbiAgICBpc3N1ZV9hdXRob3I6IHsgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICBpc3N1ZV90aXRsZSxcclxuICAgIGlzc3VlX3VybCxcclxuICAgIHN0YXRlLFxyXG4gICAgY29sdW1uX25hbWUsXHJcbiAgICBsYWJlbHMsXHJcbiAgICBhc3NpZ25lZXMsXHJcbiAgICBib2R5VGV4dCxcclxuICAgIGJvZHksXHJcbiAgICBib2R5SFRNTCxcclxuICAgIGNhcmRfaW5mbzogeyBjYXJkX25vdGUgfVxyXG4gIH0gPSBpc3N1ZVxyXG5cclxuICBjb25zb2xlLmxvZyhcImxhYmVsczogXCIgKyBKU09OLnN0cmluZ2lmeShsYWJlbHMpKVxyXG4gIGNvbnN0IGltYWdlVGFnc1JlZ2V4ID0gLzxpbWcgW14+XSpzcmM9XCJbXlwiXSpcIltePl0qPi9nbVxyXG4gIGNvbnN0IGltYWdlU3JjUmVnZXggPSAvLipzcmM9XCIoW15cIl0qKVwiLiovXHJcbiAgY29uc3QgaW1hZ2VzID0gYm9keUhUTUwubGVuZ3RoID4gMCA/IGJvZHlIVE1MLm1hdGNoKGltYWdlVGFnc1JlZ2V4KSA6IG51bGxcclxuICBjb25zdCBiYW5uZXJTcmMgPSBpbWFnZXMgIT09IG51bGwgPyBpbWFnZXMubWFwKGltZyA9PiBpbWcucmVwbGFjZShpbWFnZVNyY1JlZ2V4LCAnJDEnKSlbMF0gOiBcIlwiXHJcblxyXG4gIGNvbnN0IGFsbEJyYWNrZXRzUmVnZXggPSAvXFxbLlxcXS9nXHJcbiAgY29uc3QgZG9uZUJyYWNrZXRzUmVnZXggPSAvXFxbeFxcXS9nXHJcbiAgLy8gY29uc29sZS5sb2coXCJyZWdleCBsZW5ndGg6IFwiICsgYm9keS5tYXRjaChhbGxCcmFja2V0c1JlZ2V4KSlcclxuICBjb25zdCB0b2Rvc0NvdW50ID0gYm9keS5sZW5ndGggPiAwID8gYm9keS5tYXRjaChhbGxCcmFja2V0c1JlZ2V4KSA6IDBcclxuICBjb25zdCBkb25lQ291bnQgPSBib2R5Lmxlbmd0aCA+IDAgPyBib2R5Lm1hdGNoKGRvbmVCcmFja2V0c1JlZ2V4KSA6IDBcclxuICBjb25zdCBwZXJjZW50RG9uZSA9IHRvZG9zQ291bnQgIT09IG51bGwgPyBNYXRoLmZsb29yKChkb25lQ291bnQubGVuZ3RoIC8gdG9kb3NDb3VudC5sZW5ndGgpICogMTAwKSA6IG51bGxcclxuXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiYmFubmVyU3JjOiBcIiArIGJhbm5lclNyYylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgY292ZXI9e2Jhbm5lclNyYyAhPT0gXCJcIiA/XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PXtpc3N1ZV90aXRsZX1cclxuICAgICAgICAgIHNyYz17YmFubmVyU3JjfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgIDxhIGhyZWY9e2NhcmRfdXJsfT5cclxuICAgICAgICAgIDxJY29uIHR5cGU9XCJwcm9qZWN0XCIvPlxyXG4gICAgICAgIDwvYT4sXHJcbiAgICAgICAgPGEgaHJlZj17aXNzdWVfdXJsfT5cclxuICAgICAgICAgIDxJY29uIHR5cGU9XCJlZGl0XCIvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICAsXHJcbiAgICAgICAgLy8gPEljb24gdHlwZT1cImVsbGlwc2lzXCI+XHJcbiAgICAgICAgPEF2YXRhciBzcmM9eyBhc3NpZ25lZXMubGVuZ3RoID4gMCA/IGFzc2lnbmVlc1swXS5hdmF0YXJVcmwgOiBcIlwiIH0gc2l6ZT17XCJzbWFsbFwifS8+XHJcbiAgICAgICAgLy8gPC9JY29uPlxyXG5cclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPE1ldGFcclxuICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXthdXRob3JBdmF0YXJ9IC8+fVxyXG4gICAgICAgIHRpdGxlPXtpc3N1ZV90aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17PFN0YXRCYXIgYm9keT17Ym9keX0gcGVyY2VudERvbmU9e3BlcmNlbnREb25lfSB0YWdzPXtsYWJlbHN9Lz59XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcbi8qXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGlkeCxcclxuICAgICAgaXNzdWVfdGl0bGU6IHRpdGxlLFxyXG4gICAgICBib2R5VGV4dCxcclxuICAgICAgYm9keUhUTUwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBkdWVPbixcclxuICAgICAgaXNzdWVfYXV0aG9yOiB7IHVzZXJfaWQ6IGxvZ2luLCBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgaXNzdWVfdXJsOiB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogYXNzaWduZWVfZWRnZXMubWFwKCh7IG5vZGU6IHsgbmFtZSwgYXZhdGFyVXJsIH0gfSkgPT4gKHsgbmFtZSwgYXZhdGFyVXJsIH0pKSxcclxuICAgICAgbGFiZWxzOiBsYWJlbF9lZGdlcy5tYXAoKHsgbm9kZTogeyBjb2xvciwgbmFtZSwgaWQgfSB9KSA9PiAoeyBjb2xvciA6IGAjJHtjb2xvcn1gLCBuYW1lLCBpZCB9KSksXHJcbiAgICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlLCBjYXJkX3VybCB9XHJcbiAgICB9XHJcbiAgKi9cclxuXHJcbiBmdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKCkge1xyXG4gIHZhciB0b2RheVRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBtb250aCA9IHRvZGF5VGltZS5nZXRNb250aCgpICsgMTtcclxuICB2YXIgZGF5ID0gdG9kYXlUaW1lLmdldERhdGUoKTtcclxuICB2YXIgeWVhciA9IHRvZGF5VGltZS5nZXRGdWxsWWVhcigpO1xyXG4gIHJldHVybiBtb250aCArIFwiL1wiICsgZGF5ICsgXCIvXCIgKyB5ZWFyO1xyXG59XHJcblxyXG4vLyBsZXQgdGVzdERhdGVDcmVhdGVkID0gXCIyMDE5LTA2LTE5VDE0OjQ1OjMyWlwiXHJcbi8vIGxldCB0ZXN0RGF0ZUR1ZSA9IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIiBcclxuXHJcbi8vIGxldCBmb3JtYXRDcmVhdGVkRGF0ZSA9IEdldEZvcm1hdHRlZERhdGUodGVzdERhdGVDcmVhdGVkKSAvLz9cclxuXHJcbmNvbnN0IGRsY3N2ID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zdCBmaWVsZHMgPSBbJ2R1ZU9uJywgJ2lzc3VlX3RpdGxlJyxdXHJcbiAgLy8gY29uc3QganNvbjJjc3ZQYXJzZXIgPSBuZXcgUGFyc2VyKHsgZmllbGRzIH0pXHJcbiAgLy8gY29uc3QgY3N2ID0ganNvbjJjc3ZQYXJzZXIucGFyc2UoZGF0YSlcclxuICAvLyBjb25zdCBmaWxlRGF0YSA9IHtcclxuICAvLyAgIG1pbWU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04XCIsXHJcbiAgLy8gICBmaWxlbmFtZTogXCJlbWJlZHMuY3N2XCIsXHJcbiAgLy8gICBjb250ZW50OiBjc3ZcclxuICAvLyB9XHJcbiAgY29uc3QgZmlsZURhdGEgPSBkYXRhLm1hcCgoeyBcclxuICAgIGR1ZU9uLFxyXG4gICAgaXNzdWVfdGl0bGUsXHJcbiAgICBjcmVhdGVkQXQsXHJcbiAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlIH0sXHJcbiAgICBsYWJlbHMsXHJcbiAgICBib2R5VGV4dCxcclxuICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkIH0sXHJcbiAgICBpc3N1ZV91cmxcclxuICB9KSA9PiAoe1xyXG4gICAgJ0V2ZW50IE5hbWUnOiBpc3N1ZV90aXRsZSxcclxuICAgICdTdGFydCBEYXRlJzogYCR7Z2V0Rm9ybWF0dGVkRGF0ZShjcmVhdGVkQXQpfSAxMjowMGAsXHJcbiAgICAnRW5kIERhdGUnOiBgJHtnZXRGb3JtYXR0ZWREYXRlKGR1ZU9uKX0gMTI6MDBgLFxyXG4gICAgJ0NhbXBhaWduJzogY2FyZF9ub3RlID8gY2FyZF9ub3RlIDogXCJcIixcclxuICAgICdEZXNjcmlwdGlvbic6IGJvZHlUZXh0LFxyXG4gICAgJ0NvbW11bmljYXRpb24gVHlwZSc6IFwiRW1haWwgTWFya2V0aW5nXCIgKyBsYWJlbHMubGVuZ3RoID4gMCA/IGxhYmVscy5tYXAobGFiZWwgPT4gbGFiZWwubmFtZSkgOiBcIlwiLFxyXG4gICAgJ0RlY2NlbmlhbCBSZWxhdGVkJzogIGxhYmVscy5maWx0ZXIobGFiZWwgPT4gbGFiZWwubmFtZSA9PT0gJ2RlY2VubmlhbCcpLmxlbmd0aCA+IDAgPyBcIlRSVUVcIiA6IFwiRkFMU0VcIixcclxuICAgICdLZXkgRGF0ZSc6ICBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsLm5hbWUgPT09ICdrZXkgZGF0ZScpLmxlbmd0aCA+IDAgPyBcIlRSVUVcIiA6IFwiRkFMU0VcIixcclxuICAgICdQb3N0IHRvIHB1YmxpYyBjYWxlbmRhcic6IFwiRkFMU0VcIixcclxuICAgICdDZW5zdXMgUE9DJzogdXNlcl9pZCxcclxuICAgICdJdGVtIFR5cGUnOiBcIkl0ZW1cIixcclxuICAgICdQYXRoJzogaXNzdWVfdXJsXHJcbiAgfSkpXHJcbiAgcmV0dXJuIGZpbGVEYXRhXHJcbn1cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHJvdXRlcjogeyBxdWVyeTogeyBhdXRoIH0gfSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhbGVuZGFyUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoYXV0aCkgPT4gZmV0Y2hlcihhdXRoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BRCcsXHJcbiAgICAgICAgZGF0YTogcmVzLFxyXG4gICAgICAgIGF1dGg6IGF1dGhcclxuICAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXM6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgIH0pXHJcblxyXG4gICAgZmV0Y2hEYXRhKGF1dGgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgZmlyZURhdGVTZWxlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJlLl9kOiBcIiArIG5ldyBEYXRlKGUuX2QpLnNldEhvdXJzKDAsMCwwLDApKVxyXG4gICAgY29uc3QgbWF0Y2hlZCA9IHJldHJpZXZlTWF0Y2hlcyhzdGF0ZS5kYXRhLCBlLl9kKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnT1BFTl9EUkFXRVInLFxyXG4gICAgICBjb250ZW50czogbWF0Y2hlZFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgY2xvc2VEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdDTE9TRV9EUkFXRVInXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiREFUQTogXCIgKyBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAgPENhbGVuZGFyIGRhdGVDZWxsUmVuZGVyPXtkYXRlQ2VsbFJlbmRlcn0gbW9udGhDZWxsUmVuZGVyPXttb250aENlbGxSZW5kZXJ9IG9uU2VsZWN0PXtmaXJlRGF0ZVNlbGVjdGlvbn0gLz5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHRpdGxlPVwiSXNzdWVzOlwiXHJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlRHJhd2VyfVxyXG4gICAgICAgIHZpc2libGU9e3N0YXRlLmRyYXdlck9wZW59XHJcbiAgICAgICAgd2lkdGg9e1wiMzAwcHhcIn1cclxuICAgICAgPlxyXG4gICAgICB7c3RhdGUuZHJhd2VyQ29udGVudHMgPyBzdGF0ZS5kcmF3ZXJDb250ZW50cy5tYXAoKGlzc3VlLCBpZHgpID0+IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPElzc3VlQ2FyZCBrZXk9e2lzc3VlLmtleX0gaXNzdWU9e2lzc3VlfSAvPjxici8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpIDogXCJcIn1cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIHtzdGF0ZS5kYXRhLmxlbmd0aCA+IDAgPyBcclxuICAgICAgICA8Q3N2RG93bmxvYWQgZGF0YT17ZGxjc3Yoc3RhdGUuZGF0YSl9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBpY29uPVwiZG93bmxvYWRcIiBzaXplPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgIERvd25sb2FkIENhbGVuZGFyIC5jc3ZcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ3N2RG93bmxvYWQ+XHJcbiAgICAgICAgOiBcIlwifVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQYWdlUm91dGVyKEluZGV4KSJdfQ== */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */")) : null;
} // REDUCER =================================


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

    case 'OPEN_DRAWER':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_17__["default"])({}, state, {
          drawerOpen: true,
          drawerContents: action.contents
        });
      }

    case 'CLOSE_DRAWER':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_17__["default"])({}, state, {
          drawerOpen: false
        });
      }

    default:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_17__["default"])({}, state);
  }
}; // CONTEXT ==================================


var Context = react__WEBPACK_IMPORTED_MODULE_25___default.a.createContext(); // INITIAL STATE ============================

var initialState = {
  auth: "loading...",
  loaded: false,
  data: [],
  drawerOpen: false,
  drawerContents: []
};

var retrieveMatches = function retrieveMatches(data, date) {
  var matches = data.filter(function (datum) {
    return new Date(date).setHours(0, 0, 0, 0) === new Date(datum.dueOn).setHours(0, 0, 0, 0);
  });
  return matches;
};

var StatBar = function StatBar(_ref7) {
  var body = _ref7.body,
      percentDone = _ref7.percentDone,
      tags = _ref7.tags;
  var bodyImgsRegex = /(\!\[)(.*?)(\))/g;
  var cleanedBody = body.replace(bodyImgsRegex, "");
  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    className: "jsx-454151085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, percentDone === 100 ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    className: "jsx-454151085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_progress__WEBPACK_IMPORTED_MODULE_16___default.a, {
    percent: percentDone,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("br", {
    className: "jsx-454151085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  })) : percentDone > 0 ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    className: "jsx-454151085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_progress__WEBPACK_IMPORTED_MODULE_16___default.a, {
    percent: percentDone,
    size: "small",
    status: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("br", {
    className: "jsx-454151085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })) : null, tags.length > 0 ? tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
      key: tag.id,
      className: "jsx-454151085" + " " + "wrap-tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_14___default.a, {
      color: tag.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, tag.name));
  }) : null, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_26___default.a, {
    source: cleanedBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
    id: "454151085",
    __self: this
  }, "img.jsx-454151085{max-width:100%;height:auto;}.wrap-tag.jsx-454151085{margin-bottom:3px;border:none;background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStRZ0IsQUFFMkIsQUFDUSxlQURLLEdBQ1EsU0FEUCxHQUN3QixnQkFDM0QiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UsIERyYXdlciwgTGlzdCwgQXZhdGFyLCBDYXJkLCBJY29uLCBSb3csIENvbCwgVGFnLCBQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFBhZ2VSb3V0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQYWdlUm91dGVyJ1xyXG4vLyBpbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdqc29uMmNzdidcclxuaW1wb3J0IENzdkRvd25sb2FkIGZyb20gJ3JlYWN0LWpzb24tdG8tY3N2J1xyXG5pbXBvcnQgZ3FsIGZyb20gJ25hbm9ncmFwaHFsJ1xyXG5cclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHtcclxuLy8gICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxyXG5cclxuLy8gfSlcclxuXHJcbmNvbnN0IElTU1VFU19RVUVSWSA9IGdxbGBcclxucXVlcnkgKCRuYW1lOiBTdHJpbmchLCAkb3duZXI6IFN0cmluZyEpIHsgXHJcbiAgcmVwb3NpdG9yeShuYW1lOiAkbmFtZSwgb3duZXI6ICRvd25lcil7XHJcbiAgICBpc3N1ZXMobGFzdDoxMDApe1xyXG4gICAgICBlZGdlc3tcclxuICAgICAgICBub2Rle1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYm9keVRleHRcclxuICAgICAgICAgIGJvZHlIVE1MXHJcbiAgICAgICAgICBib2R5XHJcbiAgICAgICAgICBhc3NpZ25lZXMgKGZpcnN0OjEwKXtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aG9ye1xyXG4gICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1pbGVzdG9uZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGR1ZU9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgbGFiZWxzKGZpcnN0OjEwKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvamVjdENhcmRze1xyXG4gICAgICAgICAgICBub2Rlc3tcclxuICAgICAgICAgICAgICBjb2x1bW57XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbm90ZVxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChhdXRoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogXCJ0b2tlbiBcIiArIGF1dGggfSxcclxuICAgIGJvZHk6IElTU1VFU19RVUVSWSh7IG5hbWU6IFwiZW1iZWRzXCIsIG93bmVyOiBcImxvZ2FucG93ZWxsXCIgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9IH0gfSB9ID0gcHJpbWVcclxuICAvLyBjb25zb2xlLmxvZyhwcmltZSlcclxuXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgYm9keUhUTUwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIG1pbGVzdG9uZTogeyBkdWVPbiB9LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgbGFiZWxzOiB7IGVkZ2VzOiBsYWJlbF9lZGdlcyB9LFxyXG4gICAgICBwcm9qZWN0Q2FyZHM6IHtcclxuICAgICAgICBub2RlczogW3sgY29sdW1uOiB7IG5hbWU6IGNvbHVtbl9uYW1lIH0gfV0sXHJcbiAgICAgICAgZWRnZXM6IFt7IG5vZGU6IHsgbm90ZTogY2FyZF9ub3RlLCB1cmw6IGNhcmRfdXJsIH0gfV1cclxuICAgICAgfVxyXG4gICAgfSA9IG5vZGVcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGlkeCxcclxuICAgICAgaXNzdWVfdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjcmVhdGVkQXQsXHJcbiAgICAgIGJvZHlUZXh0LFxyXG4gICAgICBib2R5SFRNTCxcclxuICAgICAgYm9keSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGR1ZU9uLFxyXG4gICAgICBpc3N1ZV9hdXRob3I6IHsgdXNlcl9pZDogbG9naW4sIGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBpc3N1ZV91cmw6IHVybCxcclxuICAgICAgYXNzaWduZWVzOiBhc3NpZ25lZV9lZGdlcy5tYXAoKHsgbm9kZTogeyBuYW1lLCBhdmF0YXJVcmwgfSB9KSA9PiAoeyBuYW1lLCBhdmF0YXJVcmwgfSkpLFxyXG4gICAgICBsYWJlbHM6IGxhYmVsX2VkZ2VzLm1hcCgoeyBub2RlOiB7IGNvbG9yLCBuYW1lLCBpZCB9IH0pID0+ICh7IGNvbG9yIDogYCMke2NvbG9yfWAsIG5hbWUsIGlkIH0pKSxcclxuICAgICAgY29sdW1uX25hbWUsXHJcbiAgICAgIGNhcmRfaW5mbzogeyBjYXJkX25vdGUsIGNhcmRfdXJsIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpIHtcclxuXHJcbiAgbGV0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZTogXCIgKyB2YWx1ZSlcclxuXHJcbiAgLy8gbGV0IGZldGNoZWREYXRlID0gbmV3IERhdGUoXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICBsZXQgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKChjdXIsIGlkeCkgPT4gbmV3IERhdGUoY3VyLmR1ZU9uKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gaW5wdXQpXHJcbiAgcmV0dXJuIG1hdGNoZXMubWFwKCh7IHN0YXRlLCBpc3N1ZV90aXRsZSB9KSA9PiAoe1xyXG4gICAgdHlwZTogc3RhdGUgPT09IFwiT1BFTlwiID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyxcclxuICAgIGNvbnRlbnQ6IGlzc3VlX3RpdGxlXHJcbiAgfSkpXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgRGF0YUNlbGxzID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGU6IHsgZGF0YSB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZmlsdGVyZWRJc3N1ZXMgPSBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnaXNzdWVzOiAnICsgZGF0YSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHN0YXRlIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuICAgICAgICB7ZmlsdGVyZWRJc3N1ZXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5jb250ZW50fT5cclxuICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS50eXBlfSB0ZXh0PXtpdGVtLmNvbnRlbnR9IGNsYXNzTmFtZT1cImFudC1iYWRnZS1zdGF0dXNcIiAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmV2ZW50cyB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkYXRlQ2VsbFJlbmRlciA9IHZhbHVlID0+IDxEYXRhQ2VsbHMgdmFsdWU9e3ZhbHVlfSAvPlxyXG5cclxuZnVuY3Rpb24gZ2V0TW9udGhEYXRhKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlLm1vbnRoKCkgPT09IDgpIHtcclxuICAgIHJldHVybiAxMzk0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhDZWxsUmVuZGVyKHZhbHVlKSB7XHJcbiAgY29uc3QgbnVtID0gZ2V0TW9udGhEYXRhKHZhbHVlKTtcclxuICByZXR1cm4gbnVtID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3Rlcy1tb250aFwiPlxyXG4gICAgICA8c2VjdGlvbj57bnVtfTwvc2VjdGlvbj5cclxuICAgICAgPHNwYW4+QmFja2xvZyBudW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm5vdGVzLW1vbnRoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcblxyXG5cclxuLy8gUkVEVUNFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY2FsZW5kYXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0FEJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IGFjdGlvbi5hdXRoLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdPUEVOX0RSQVdFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkcmF3ZXJPcGVuOiB0cnVlLFxyXG4gICAgICAgIGRyYXdlckNvbnRlbnRzOiBhY3Rpb24uY29udGVudHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSAnQ0xPU0VfRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDT05URVhUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5cclxuLy8gSU5JVElBTCBTVEFURSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoOiBcImxvYWRpbmcuLi5cIixcclxuICBsb2FkZWQ6IGZhbHNlLFxyXG4gIGRhdGE6IFtdLFxyXG4gIGRyYXdlck9wZW46IGZhbHNlLFxyXG4gIGRyYXdlckNvbnRlbnRzOiBbXVxyXG59XHJcblxyXG5jb25zdCByZXRyaWV2ZU1hdGNoZXMgPSAoZGF0YSwgZGF0ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBkYXRhLmZpbHRlcihkYXR1bSA9PiBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gbmV3IERhdGUoZGF0dW0uZHVlT24pLnNldEhvdXJzKDAsIDAsIDAsIDApKVxyXG4gIHJldHVybiBtYXRjaGVzXHJcbn1cclxuXHJcblxyXG5jb25zdCBTdGF0QmFyID0gKHsgYm9keSwgcGVyY2VudERvbmUsIHRhZ3MgfSkgPT4ge1xyXG4gIGNvbnN0IGJvZHlJbWdzUmVnZXggPSAvKFxcIVxcWykoLio/KShcXCkpL2dcclxuICBjb25zdCBjbGVhbmVkQm9keSA9IGJvZHkucmVwbGFjZShib2R5SW1nc1JlZ2V4LCBcIlwiKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiBcclxuICAgIHsgcGVyY2VudERvbmUgPT09IDEwMCA/IDxkaXY+PFByb2dyZXNzIHBlcmNlbnQ9e3BlcmNlbnREb25lfSBzaXplPVwic21hbGxcIiAvPjxici8+PC9kaXY+XHJcbiAgICA6IHBlcmNlbnREb25lID4gMCA/IDxkaXY+PFByb2dyZXNzIHBlcmNlbnQ9e3BlcmNlbnREb25lfSBzaXplPVwic21hbGxcIiBzdGF0dXM9XCJhY3RpdmVcIi8+PGJyLz48L2Rpdj5cclxuICAgIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHsgdGFncy5sZW5ndGggPiAwID8gdGFncy5tYXAodGFnID0+IChcclxuICAgICAgPGRpdiBrZXk9e3RhZy5pZH0gY2xhc3NOYW1lPVwid3JhcC10YWdcIiA+PFRhZyBjb2xvcj17dGFnLmNvbG9yfT57dGFnLm5hbWV9PC9UYWc+PC9kaXY+KVxyXG4gICAgKVxyXG4gICAgOiBudWxsXHJcbiAgICB9XHJcbiAgICA8TWFya2Rvd24gc291cmNlPXtjbGVhbmVkQm9keX0vPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzt9XHJcbiAgICAgLndyYXAtdGFnIHsgbWFyZ2luLWJvdHRvbTogM3B4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7IFxyXG4gICAgIH1gfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj4gIFxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZFxyXG5cclxuXHJcbmNvbnN0IElzc3VlQ2FyZCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHN0YXRlOiB7IGRhdGEgfSB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IHtcclxuICAgIGNhcmRfaW5mbzogeyBjYXJkX3VybCB9LFxyXG4gICAgaXNzdWVfYXV0aG9yOiB7IGF1dGhvckF2YXRhciB9LFxyXG4gICAgaXNzdWVfdGl0bGUsXHJcbiAgICBpc3N1ZV91cmwsXHJcbiAgICBzdGF0ZSxcclxuICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgbGFiZWxzLFxyXG4gICAgYXNzaWduZWVzLFxyXG4gICAgYm9keVRleHQsXHJcbiAgICBib2R5LFxyXG4gICAgYm9keUhUTUwsXHJcbiAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlIH1cclxuICB9ID0gaXNzdWVcclxuXHJcbiAgY29uc29sZS5sb2coXCJsYWJlbHM6IFwiICsgSlNPTi5zdHJpbmdpZnkobGFiZWxzKSlcclxuICBjb25zdCBpbWFnZVRhZ3NSZWdleCA9IC88aW1nIFtePl0qc3JjPVwiW15cIl0qXCJbXj5dKj4vZ21cclxuICBjb25zdCBpbWFnZVNyY1JlZ2V4ID0gLy4qc3JjPVwiKFteXCJdKilcIi4qL1xyXG4gIGNvbnN0IGltYWdlcyA9IGJvZHlIVE1MLmxlbmd0aCA+IDAgPyBib2R5SFRNTC5tYXRjaChpbWFnZVRhZ3NSZWdleCkgOiBudWxsXHJcbiAgY29uc3QgYmFubmVyU3JjID0gaW1hZ2VzICE9PSBudWxsID8gaW1hZ2VzLm1hcChpbWcgPT4gaW1nLnJlcGxhY2UoaW1hZ2VTcmNSZWdleCwgJyQxJykpWzBdIDogXCJcIlxyXG5cclxuICBjb25zdCBhbGxCcmFja2V0c1JlZ2V4ID0gL1xcWy5cXF0vZ1xyXG4gIGNvbnN0IGRvbmVCcmFja2V0c1JlZ2V4ID0gL1xcW3hcXF0vZ1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicmVnZXggbGVuZ3RoOiBcIiArIGJvZHkubWF0Y2goYWxsQnJhY2tldHNSZWdleCkpXHJcbiAgY29uc3QgdG9kb3NDb3VudCA9IGJvZHkubGVuZ3RoID4gMCA/IGJvZHkubWF0Y2goYWxsQnJhY2tldHNSZWdleCkgOiAwXHJcbiAgY29uc3QgZG9uZUNvdW50ID0gYm9keS5sZW5ndGggPiAwID8gYm9keS5tYXRjaChkb25lQnJhY2tldHNSZWdleCkgOiAwXHJcbiAgY29uc3QgcGVyY2VudERvbmUgPSB0b2Rvc0NvdW50ICE9PSBudWxsID8gTWF0aC5mbG9vcigoZG9uZUNvdW50Lmxlbmd0aCAvIHRvZG9zQ291bnQubGVuZ3RoKSAqIDEwMCkgOiBudWxsXHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcImJhbm5lclNyYzogXCIgKyBiYW5uZXJTcmMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgIGNvdmVyPXtiYW5uZXJTcmMgIT09IFwiXCIgP1xyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD17aXNzdWVfdGl0bGV9XHJcbiAgICAgICAgICBzcmM9e2Jhbm5lclNyY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8YSBocmVmPXtjYXJkX3VybH0+XHJcbiAgICAgICAgICA8SWNvbiB0eXBlPVwicHJvamVjdFwiLz5cclxuICAgICAgICA8L2E+LFxyXG4gICAgICAgIDxhIGhyZWY9e2lzc3VlX3VybH0+XHJcbiAgICAgICAgICA8SWNvbiB0eXBlPVwiZWRpdFwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgLFxyXG4gICAgICAgIC8vIDxJY29uIHR5cGU9XCJlbGxpcHNpc1wiPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXsgYXNzaWduZWVzLmxlbmd0aCA+IDAgPyBhc3NpZ25lZXNbMF0uYXZhdGFyVXJsIDogXCJcIiB9IHNpemU9e1wic21hbGxcIn0vPlxyXG4gICAgICAgIC8vIDwvSWNvbj5cclxuXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxNZXRhXHJcbiAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17YXV0aG9yQXZhdGFyfSAvPn1cclxuICAgICAgICB0aXRsZT17aXNzdWVfdGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249ezxTdGF0QmFyIGJvZHk9e2JvZHl9IHBlcmNlbnREb25lPXtwZXJjZW50RG9uZX0gdGFncz17bGFiZWxzfS8+fVxyXG4gICAgICAvPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG4vKlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBpZHgsXHJcbiAgICAgIGlzc3VlX3RpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgZHVlT24sXHJcbiAgICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9IH0pID0+ICh7IG5hbWUsIGF2YXRhclVybCB9KSksXHJcbiAgICAgIGxhYmVsczogbGFiZWxfZWRnZXMubWFwKCh7IG5vZGU6IHsgY29sb3IsIG5hbWUsIGlkIH0gfSkgPT4gKHsgY29sb3IgOiBgIyR7Y29sb3J9YCwgbmFtZSwgaWQgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gICovXHJcblxyXG4gZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZSgpIHtcclxuICB2YXIgdG9kYXlUaW1lID0gbmV3IERhdGUoKTtcclxuICB2YXIgbW9udGggPSB0b2RheVRpbWUuZ2V0TW9udGgoKSArIDE7XHJcbiAgdmFyIGRheSA9IHRvZGF5VGltZS5nZXREYXRlKCk7XHJcbiAgdmFyIHllYXIgPSB0b2RheVRpbWUuZ2V0RnVsbFllYXIoKTtcclxuICByZXR1cm4gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcjtcclxufVxyXG5cclxuLy8gbGV0IHRlc3REYXRlQ3JlYXRlZCA9IFwiMjAxOS0wNi0xOVQxNDo0NTozMlpcIlxyXG4vLyBsZXQgdGVzdERhdGVEdWUgPSBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIgXHJcblxyXG4vLyBsZXQgZm9ybWF0Q3JlYXRlZERhdGUgPSBHZXRGb3JtYXR0ZWREYXRlKHRlc3REYXRlQ3JlYXRlZCkgLy8/XHJcblxyXG5jb25zdCBkbGNzdiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc3QgZmllbGRzID0gWydkdWVPbicsICdpc3N1ZV90aXRsZScsXVxyXG4gIC8vIGNvbnN0IGpzb24yY3N2UGFyc2VyID0gbmV3IFBhcnNlcih7IGZpZWxkcyB9KVxyXG4gIC8vIGNvbnN0IGNzdiA9IGpzb24yY3N2UGFyc2VyLnBhcnNlKGRhdGEpXHJcbiAgLy8gY29uc3QgZmlsZURhdGEgPSB7XHJcbiAgLy8gICBtaW1lOiBcInRleHQvcGxhaW47Y2hhcnNldD11dGYtOFwiLFxyXG4gIC8vICAgZmlsZW5hbWU6IFwiZW1iZWRzLmNzdlwiLFxyXG4gIC8vICAgY29udGVudDogY3N2XHJcbiAgLy8gfVxyXG4gIGNvbnN0IGZpbGVEYXRhID0gZGF0YS5tYXAoKHsgXHJcbiAgICBkdWVPbixcclxuICAgIGlzc3VlX3RpdGxlLFxyXG4gICAgY3JlYXRlZEF0LFxyXG4gICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSB9LFxyXG4gICAgbGFiZWxzLFxyXG4gICAgYm9keVRleHQsXHJcbiAgICBpc3N1ZV9hdXRob3I6IHsgdXNlcl9pZCB9LFxyXG4gICAgaXNzdWVfdXJsXHJcbiAgfSkgPT4gKHtcclxuICAgICdFdmVudCBOYW1lJzogaXNzdWVfdGl0bGUsXHJcbiAgICAnU3RhcnQgRGF0ZSc6IGAke2dldEZvcm1hdHRlZERhdGUoY3JlYXRlZEF0KX0gMTI6MDBgLFxyXG4gICAgJ0VuZCBEYXRlJzogYCR7Z2V0Rm9ybWF0dGVkRGF0ZShkdWVPbil9IDEyOjAwYCxcclxuICAgICdDYW1wYWlnbic6IGNhcmRfbm90ZSA/IGNhcmRfbm90ZSA6IFwiXCIsXHJcbiAgICAnRGVzY3JpcHRpb24nOiBib2R5VGV4dCxcclxuICAgICdDb21tdW5pY2F0aW9uIFR5cGUnOiBcIkVtYWlsIE1hcmtldGluZ1wiICsgbGFiZWxzLmxlbmd0aCA+IDAgPyBsYWJlbHMubWFwKGxhYmVsID0+IGxhYmVsLm5hbWUpIDogXCJcIixcclxuICAgICdEZWNjZW5pYWwgUmVsYXRlZCc6ICBsYWJlbHMuZmlsdGVyKGxhYmVsID0+IGxhYmVsLm5hbWUgPT09ICdkZWNlbm5pYWwnKS5sZW5ndGggPiAwID8gXCJUUlVFXCIgOiBcIkZBTFNFXCIsXHJcbiAgICAnS2V5IERhdGUnOiAgbGFiZWxzLmZpbHRlcihsYWJlbCA9PiBsYWJlbC5uYW1lID09PSAna2V5IGRhdGUnKS5sZW5ndGggPiAwID8gXCJUUlVFXCIgOiBcIkZBTFNFXCIsXHJcbiAgICAnUG9zdCB0byBwdWJsaWMgY2FsZW5kYXInOiBcIkZBTFNFXCIsXHJcbiAgICAnQ2Vuc3VzIFBPQyc6IHVzZXJfaWQsXHJcbiAgICAnSXRlbSBUeXBlJzogXCJJdGVtXCIsXHJcbiAgICAnUGF0aCc6IGlzc3VlX3VybFxyXG4gIH0pKVxyXG4gIHJldHVybiBmaWxlRGF0YVxyXG59XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG5cclxuICAgIGZldGNoRGF0YShhdXRoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGZpcmVEYXRlU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZS5fZDogXCIgKyBuZXcgRGF0ZShlLl9kKS5zZXRIb3VycygwLDAsMCwwKSlcclxuICAgIGNvbnN0IG1hdGNoZWQgPSByZXRyaWV2ZU1hdGNoZXMoc3RhdGUuZGF0YSwgZS5fZClcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ09QRU5fRFJBV0VSJyxcclxuICAgICAgY29udGVudHM6IG1hdGNoZWRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xPU0VfRFJBV0VSJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxDYWxlbmRhciBkYXRlQ2VsbFJlbmRlcj17ZGF0ZUNlbGxSZW5kZXJ9IG1vbnRoQ2VsbFJlbmRlcj17bW9udGhDZWxsUmVuZGVyfSBvblNlbGVjdD17ZmlyZURhdGVTZWxlY3Rpb259IC8+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB0aXRsZT1cIklzc3VlczpcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZURyYXdlcn1cclxuICAgICAgICB2aXNpYmxlPXtzdGF0ZS5kcmF3ZXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXtcIjMwMHB4XCJ9XHJcbiAgICAgID5cclxuICAgICAge3N0YXRlLmRyYXdlckNvbnRlbnRzID8gc3RhdGUuZHJhd2VyQ29udGVudHMubWFwKChpc3N1ZSwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxJc3N1ZUNhcmQga2V5PXtpc3N1ZS5rZXl9IGlzc3VlPXtpc3N1ZX0gLz48YnIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKSA6IFwiXCJ9XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICB7c3RhdGUuZGF0YS5sZW5ndGggPiAwID8gXHJcbiAgICAgICAgPENzdkRvd25sb2FkIGRhdGE9e2RsY3N2KHN0YXRlLmRhdGEpfT5cclxuICAgICAgICAgIDxCdXR0b24gaWNvbj1cImRvd25sb2FkXCIgc2l6ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICBEb3dubG9hZCBDYWxlbmRhciAuY3N2XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0NzdkRvd25sb2FkPlxyXG4gICAgICAgIDogXCJcIn1cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZVJvdXRlcihJbmRleCkiXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
};

var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_12___default.a.Meta;

var IssueCard = function IssueCard(_ref8) {
  var issue = _ref8.issue;
  // const { state: { data } } = useContext(Context)
  var card_url = issue.card_info.card_url,
      authorAvatar = issue.issue_author.authorAvatar,
      issue_title = issue.issue_title,
      issue_url = issue.issue_url,
      state = issue.state,
      column_name = issue.column_name,
      labels = issue.labels,
      assignees = issue.assignees,
      bodyText = issue.bodyText,
      body = issue.body,
      bodyHTML = issue.bodyHTML,
      card_note = issue.card_info.card_note;
  console.log("labels: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default()(labels));
  var imageTagsRegex = /<img [^>]*src="[^"]*"[^>]*>/gm;
  var imageSrcRegex = /.*src="([^"]*)".*/;
  var images = bodyHTML.length > 0 ? bodyHTML.match(imageTagsRegex) : null;
  var bannerSrc = images !== null ? images.map(function (img) {
    return img.replace(imageSrcRegex, '$1');
  })[0] : "";
  var allBracketsRegex = /\[.\]/g;
  var doneBracketsRegex = /\[x\]/g; // console.log("regex length: " + body.match(allBracketsRegex))

  var todosCount = body.length > 0 ? body.match(allBracketsRegex) : 0;
  var doneCount = body.length > 0 ? body.match(doneBracketsRegex) : 0;
  var percentDone = todosCount !== null ? Math.floor(doneCount.length / todosCount.length * 100) : null; // console.log("bannerSrc: " + bannerSrc)

  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      width: '100%'
    },
    cover: bannerSrc !== "" ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("img", {
      alt: issue_title,
      src: bannerSrc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }) : null,
    actions: [react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("a", {
      href: card_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("a", {
      href: issue_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    })), // <Icon type="ellipsis">
    react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      src: assignees.length > 0 ? assignees[0].avatarUrl : "",
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }) // </Icon>
    ],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      src: authorAvatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }),
    title: issue_title,
    description: react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(StatBar, {
      body: body,
      percentDone: percentDone,
      tags: labels,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }));
};
/*
    return {
      key: idx,
      issue_title: title,
      bodyText,
      bodyHTML,
      body,
      state,
      dueOn,
      issue_author: { user_id: login, authorAvatar },
      issue_url: url,
      assignees: assignee_edges.map(({ node: { name, avatarUrl } }) => ({ name, avatarUrl })),
      labels: label_edges.map(({ node: { color, name, id } }) => ({ color : `#${color}`, name, id })),
      column_name,
      card_info: { card_note, card_url }
    }
  */


function getFormattedDate() {
  var todayTime = new Date();
  var month = todayTime.getMonth() + 1;
  var day = todayTime.getDate();
  var year = todayTime.getFullYear();
  return month + "/" + day + "/" + year;
} // let testDateCreated = "2019-06-19T14:45:32Z"
// let testDateDue = "2019-06-28T00:00:00Z" 
// let formatCreatedDate = GetFormattedDate(testDateCreated) //?


var dlcsv = function dlcsv(data) {
  // const fields = ['dueOn', 'issue_title',]
  // const json2csvParser = new Parser({ fields })
  // const csv = json2csvParser.parse(data)
  // const fileData = {
  //   mime: "text/plain;charset=utf-8",
  //   filename: "embeds.csv",
  //   content: csv
  // }
  var fileData = data.map(function (_ref9) {
    var dueOn = _ref9.dueOn,
        issue_title = _ref9.issue_title,
        createdAt = _ref9.createdAt,
        card_note = _ref9.card_info.card_note,
        labels = _ref9.labels,
        bodyText = _ref9.bodyText,
        user_id = _ref9.issue_author.user_id,
        issue_url = _ref9.issue_url;
    return {
      'Event Name': issue_title,
      'Start Date': "".concat(getFormattedDate(createdAt), " 12:00"),
      'End Date': "".concat(getFormattedDate(dueOn), " 12:00"),
      'Campaign': card_note ? card_note : "",
      'Description': bodyText,
      'Communication Type': "Email Marketing" + labels.length > 0 ? labels.map(function (label) {
        return label.name;
      }) : "",
      'Deccenial Related': labels.filter(function (label) {
        return label.name === 'decennial';
      }).length > 0 ? "TRUE" : "FALSE",
      'Key Date': labels.filter(function (label) {
        return label.name === 'key date';
      }).length > 0 ? "TRUE" : "FALSE",
      'Post to public calendar': "FALSE",
      'Census POC': user_id,
      'Item Type': "Item",
      'Path': issue_url
    };
  });
  return fileData;
};

var Index = function Index(_ref10) {
  var auth = _ref10.router.query.auth;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_25__["useReducer"])(calendarReducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_21__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_25__["useEffect"])(function () {
    var fetchData = function fetchData(auth) {
      return fetcher(auth).then(function (res) {
        dispatch({
          type: 'LOAD',
          data: res,
          auth: auth
        }); // console.log("res: " + JSON.stringify(res))
      });
    };

    fetchData(auth);
  }, []);

  var fireDateSelection = function fireDateSelection(e) {
    // console.log("e._d: " + new Date(e._d).setHours(0,0,0,0))
    var matched = retrieveMatches(state.data, e._d);
    dispatch({
      type: 'OPEN_DRAWER',
      contents: matched
    });
  };

  var closeDrawer = function closeDrawer() {
    dispatch({
      type: 'CLOSE_DRAWER'
    });
  }; // console.log("DATA: " + JSON.stringify(state))


  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    dateCellRender: dateCellRender,
    monthCellRender: monthCellRender,
    onSelect: fireDateSelection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Issues:",
    placement: "right",
    closable: true,
    onClose: closeDrawer,
    visible: state.drawerOpen,
    width: "300px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, state.drawerContents ? state.drawerContents.map(function (issue, idx) {
    return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(IssueCard, {
      key: issue.key,
      issue: issue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }));
  }) : ""), state.data.length > 0 ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(react_json_to_csv__WEBPACK_IMPORTED_MODULE_28___default.a, {
    data: dlcsv(state.data),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    icon: "download",
    size: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, "Download Calendar .csv")) : "");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withPageRouter__WEBPACK_IMPORTED_MODULE_27__["withPageRouter"])(Index));

/***/ })

})
//# sourceMappingURL=calendar.js.82186adf5723fb83305a.hot-update.js.map