webpackHotUpdate("static\\development\\pages\\calendar.js",{

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer/style */ "./node_modules/antd/lib/drawer/style/index.js");
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/list/style */ "./node_modules/antd/lib/list/style/index.js");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! nanographql */ "./node_modules/nanographql/index.js");
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(nanographql__WEBPACK_IMPORTED_MODULE_28__);
























var _jsxFileName = "C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_23__["default"])(["\nquery ($name: String!, $owner: String!) { \n  repository(name: $name, owner: $owner){\n    issues(last:100){\n      edges{\n        node{\n          id\n          title\n          url\n          bodyText\n          bodyHTML\n          body\n          assignees (first:10){\n            edges {\n              node {\n                id\n                name\n                avatarUrl\n              }\n            }\n          }\n          author{\n            login\n            avatarUrl\n          }\n          milestone {\n            id\n            dueOn\n          }\n          state\n          labels(first:10) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n          projectCards{\n            nodes{\n              column{\n                name\n                createdAt\n              }\n            }\n            edges{\n              node {\n                id\n                note\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // import { Fragment } from 'react';



 // const client = new GraphQLClient({
//   url: 'https://api.github.com/graphql',
// })

var ISSUES_QUERY = nanographql__WEBPACK_IMPORTED_MODULE_28___default()(_templateObject());

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
        lineNumber: 151
      },
      __self: this
    }, filteredIssues.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("li", {
        key: item.content,
        className: "jsx-210777900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_19___default.a, {
        status: item.type,
        text: item.content,
        className: "ant-badge-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }));
    }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
      id: "210777900",
      __self: this
    }, ".events.jsx-210777900{list-style:none;margin:0;padding:0;}.events.jsx-210777900 .ant-badge-status.jsx-210777900{overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKb0IsQUFHMkIsQUFLQSxnQkFKUCxBQUtVLFNBSlQsVUFDWixBQUlhLFdBQ1ksdUJBQ1IsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UsIERyYXdlciwgTGlzdCwgQXZhdGFyLCBDYXJkLCBJY29uLCBSb3csIENvbCwgVGFnLCBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhQYWdlUm91dGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy93aXRoUGFnZVJvdXRlcidcclxuXHJcbmltcG9ydCBncWwgZnJvbSAnbmFub2dyYXBocWwnXHJcblxyXG5cclxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4vLyAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsXHJcblxyXG4vLyB9KVxyXG5cclxuY29uc3QgSVNTVUVTX1FVRVJZID0gZ3FsYFxyXG5xdWVyeSAoJG5hbWU6IFN0cmluZyEsICRvd25lcjogU3RyaW5nISkgeyBcclxuICByZXBvc2l0b3J5KG5hbWU6ICRuYW1lLCBvd25lcjogJG93bmVyKXtcclxuICAgIGlzc3VlcyhsYXN0OjEwMCl7XHJcbiAgICAgIGVkZ2Vze1xyXG4gICAgICAgIG5vZGV7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYm9keVRleHRcclxuICAgICAgICAgIGJvZHlIVE1MXHJcbiAgICAgICAgICBib2R5XHJcbiAgICAgICAgICBhc3NpZ25lZXMgKGZpcnN0OjEwKXtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aG9ye1xyXG4gICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1pbGVzdG9uZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGR1ZU9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgbGFiZWxzKGZpcnN0OjEwKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvamVjdENhcmRze1xyXG4gICAgICAgICAgICBub2Rlc3tcclxuICAgICAgICAgICAgICBjb2x1bW57XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbm90ZVxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChhdXRoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogXCJ0b2tlbiBcIiArIGF1dGggfSxcclxuICAgIGJvZHk6IElTU1VFU19RVUVSWSh7IG5hbWU6IFwiZW1iZWRzXCIsIG93bmVyOiBcImxvZ2FucG93ZWxsXCIgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9IH0gfSB9ID0gcHJpbWVcclxuICAvLyBjb25zb2xlLmxvZyhwcmltZSlcclxuXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBtaWxlc3RvbmU6IHsgZHVlT24gfSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGxhYmVsczogeyBlZGdlczogbGFiZWxfZWRnZXMgfSxcclxuICAgICAgcHJvamVjdENhcmRzOiB7XHJcbiAgICAgICAgbm9kZXM6IFt7IGNvbHVtbjogeyBuYW1lOiBjb2x1bW5fbmFtZSB9IH1dLFxyXG4gICAgICAgIGVkZ2VzOiBbeyBub2RlOiB7IG5vdGU6IGNhcmRfbm90ZSwgdXJsOiBjYXJkX3VybCB9IH1dXHJcbiAgICAgIH1cclxuICAgIH0gPSBub2RlXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBpZHgsXHJcbiAgICAgIGlzc3VlX3RpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgZHVlT24sXHJcbiAgICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9IH0pID0+ICh7IG5hbWUsIGF2YXRhclVybCB9KSksXHJcbiAgICAgIGxhYmVsczogbGFiZWxfZWRnZXMubWFwKCh7IG5vZGU6IHsgY29sb3IsIG5hbWUsIGlkIH0gfSkgPT4gKHsgY29sb3IgOiBgIyR7Y29sb3J9YCwgbmFtZSwgaWQgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSkge1xyXG5cclxuICBsZXQgaW5wdXQgPSBuZXcgRGF0ZSh2YWx1ZSkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAvLyBjb25zb2xlLmxvZyhcInZhbHVlOiBcIiArIHZhbHVlKVxyXG5cclxuICAvLyBsZXQgZmV0Y2hlZERhdGUgPSBuZXcgRGF0ZShcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gIGxldCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoKGN1ciwgaWR4KSA9PiBuZXcgRGF0ZShjdXIuZHVlT24pLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBpbnB1dClcclxuICByZXR1cm4gbWF0Y2hlcy5tYXAoKHsgc3RhdGUsIGlzc3VlX3RpdGxlIH0pID0+ICh7XHJcbiAgICB0eXBlOiBzdGF0ZSA9PT0gXCJPUEVOXCIgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnLFxyXG4gICAgY29udGVudDogaXNzdWVfdGl0bGVcclxuICB9KSlcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBEYXRhQ2VsbHMgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZTogeyBkYXRhIH0gfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZElzc3VlcyA9IGdldExpc3REYXRhKGRhdGEsIHZhbHVlKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdpc3N1ZXM6ICcgKyBkYXRhKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhdGU6IFwiICsgc3RhdGUgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4gICAgICAgIHtmaWx0ZXJlZElzc3Vlcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZXZlbnRzIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRhdGVDZWxsUmVuZGVyID0gdmFsdWUgPT4gPERhdGFDZWxscyB2YWx1ZT17dmFsdWV9IC8+XHJcblxyXG5mdW5jdGlvbiBnZXRNb250aERhdGEodmFsdWUpIHtcclxuICBpZiAodmFsdWUubW9udGgoKSA9PT0gOCkge1xyXG4gICAgcmV0dXJuIDEzOTQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb250aENlbGxSZW5kZXIodmFsdWUpIHtcclxuICBjb25zdCBudW0gPSBnZXRNb250aERhdGEodmFsdWUpO1xyXG4gIHJldHVybiBudW0gPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzLW1vbnRoXCI+XHJcbiAgICAgIDxzZWN0aW9uPntudW19PC9zZWN0aW9uPlxyXG4gICAgICA8c3Bhbj5CYWNrbG9nIG51bWJlcjwvc3Bhbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubm90ZXMtbW9udGgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBSRURVQ0VSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjYWxlbmRhclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQUQnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogYWN0aW9uLmF1dGgsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ09QRU5fRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IHRydWUsXHJcbiAgICAgICAgZHJhd2VyQ29udGVudHM6IGFjdGlvbi5jb250ZW50c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdDTE9TRV9EUkFXRVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZHJhd2VyT3BlbjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDogcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENPTlRFWFQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyBJTklUSUFMIFNUQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGF1dGg6IFwibG9hZGluZy4uLlwiLFxyXG4gIGxvYWRlZDogZmFsc2UsXHJcbiAgZGF0YTogW10sXHJcbiAgZHJhd2VyT3BlbjogZmFsc2UsXHJcbiAgZHJhd2VyQ29udGVudHM6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHJldHJpZXZlTWF0Y2hlcyA9IChkYXRhLCBkYXRlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IG5ldyBEYXRlKGRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBuZXcgRGF0ZShkYXR1bS5kdWVPbikuc2V0SG91cnMoMCwgMCwgMCwgMCkpXHJcbiAgcmV0dXJuIG1hdGNoZXNcclxufVxyXG5cclxuXHJcbmNvbnN0IFN0YXRCYXIgPSAoeyBib2R5LCBwZXJjZW50RG9uZSwgdGFncyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+IFxyXG4gICAgeyBwZXJjZW50RG9uZSA9PT0gMTAwID8gPGRpdj48UHJvZ3Jlc3MgcGVyY2VudD17cGVyY2VudERvbmV9IHNpemU9XCJzbWFsbFwiIC8+PGJyLz48L2Rpdj5cclxuICAgIDogcGVyY2VudERvbmUgPiAwID8gPGRpdj48UHJvZ3Jlc3MgcGVyY2VudD17cGVyY2VudERvbmV9IHNpemU9XCJzbWFsbFwiIHN0YXR1cz1cImFjdGl2ZVwiLz48YnIvPjwvZGl2PlxyXG4gICAgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgeyB0YWdzLmxlbmd0aCA+IDAgPyB0YWdzLm1hcCh0YWcgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17dGFnLmlkfSBjbGFzc05hbWU9XCJ3cmFwLXRhZ1wiID48VGFnIGNvbG9yPXt0YWcuY29sb3J9Pnt0YWcubmFtZX08L1RhZz48c3R5bGUganN4PntgLndyYXAtdGFnIHsgbWFyZ2luLWJvdHRvbTogM3B4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7IH1gfTwvc3R5bGU+PC9kaXY+KVxyXG4gICAgKVxyXG4gICAgOiBudWxsXHJcbiAgICB9XHJcbiAgICA8TWFya2Rvd24gc291cmNlPXtib2R5fT48c3R5bGUganN4PntgaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87fWB9PC9zdHlsZT48L01hcmtkb3duPlxyXG4gICAgPC9kaXY+ICBcclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmRcclxuXHJcblxyXG5jb25zdCBJc3N1ZUNhcmQgPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgLy8gY29uc3QgeyBzdGF0ZTogeyBkYXRhIH0gfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBjb25zdCB7XHJcbiAgICBjYXJkX2luZm86IHsgY2FyZF91cmwgfSxcclxuICAgIGlzc3VlX2F1dGhvcjogeyBhdXRob3JBdmF0YXIgfSxcclxuICAgIGlzc3VlX3RpdGxlLFxyXG4gICAgaXNzdWVfdXJsLFxyXG4gICAgc3RhdGUsXHJcbiAgICBjb2x1bW5fbmFtZSxcclxuICAgIGxhYmVscyxcclxuICAgIGFzc2lnbmVlcyxcclxuICAgIGJvZHlUZXh0LFxyXG4gICAgYm9keSxcclxuICAgIGJvZHlIVE1MLFxyXG4gICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSB9XHJcbiAgfSA9IGlzc3VlXHJcblxyXG4gIGNvbnNvbGUubG9nKFwibGFiZWxzOiBcIiArIEpTT04uc3RyaW5naWZ5KGxhYmVscykpXHJcbiAgY29uc3QgaW1hZ2VUYWdzUmVnZXggPSAvPGltZyBbXj5dKnNyYz1cIlteXCJdKlwiW14+XSo+L2dtXHJcbiAgY29uc3QgaW1hZ2VTcmNSZWdleCA9IC8uKnNyYz1cIihbXlwiXSopXCIuKi9cclxuICBjb25zdCBpbWFnZXMgPSBib2R5SFRNTC5sZW5ndGggPiAwID8gYm9keUhUTUwubWF0Y2goaW1hZ2VUYWdzUmVnZXgpIDogbnVsbFxyXG4gIGNvbnN0IGJhbm5lclNyYyA9IGltYWdlcyAhPT0gbnVsbCA/IGltYWdlcy5tYXAoaW1nID0+IGltZy5yZXBsYWNlKGltYWdlU3JjUmVnZXgsICckMScpKVswXSA6IFwiXCJcclxuXHJcbiAgY29uc3QgYWxsQnJhY2tldHNSZWdleCA9IC9cXFsuXFxdL2dcclxuICBjb25zdCBkb25lQnJhY2tldHNSZWdleCA9IC9cXFt4XFxdL2dcclxuICAvLyBjb25zb2xlLmxvZyhcInJlZ2V4IGxlbmd0aDogXCIgKyBib2R5Lm1hdGNoKGFsbEJyYWNrZXRzUmVnZXgpKVxyXG4gIGNvbnN0IHRvZG9zQ291bnQgPSBib2R5Lmxlbmd0aCA+IDAgPyBib2R5Lm1hdGNoKGFsbEJyYWNrZXRzUmVnZXgpIDogMFxyXG4gIGNvbnN0IGRvbmVDb3VudCA9IGJvZHkubGVuZ3RoID4gMCA/IGJvZHkubWF0Y2goZG9uZUJyYWNrZXRzUmVnZXgpIDogMFxyXG4gIGNvbnN0IHBlcmNlbnREb25lID0gdG9kb3NDb3VudCAhPT0gbnVsbCA/IE1hdGguZmxvb3IoKGRvbmVDb3VudC5sZW5ndGggLyB0b2Rvc0NvdW50Lmxlbmd0aCkgKiAxMDApIDogbnVsbFxyXG5cclxuXHJcbiAgY29uc29sZS5sb2coXCJiYW5uZXJTcmM6IFwiICsgYmFubmVyU3JjKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICBjb3Zlcj17YmFubmVyU3JjICE9PSBcIlwiID9cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9e2lzc3VlX3RpdGxlfVxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJTcmN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgPGEgaHJlZj17Y2FyZF91cmx9PlxyXG4gICAgICAgICAgPEljb24gdHlwZT1cInByb2plY3RcIi8+XHJcbiAgICAgICAgPC9hPixcclxuICAgICAgICA8YSBocmVmPXtpc3N1ZV91cmx9PlxyXG4gICAgICAgICAgPEljb24gdHlwZT1cImVkaXRcIi8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgICxcclxuICAgICAgICAvLyA8SWNvbiB0eXBlPVwiZWxsaXBzaXNcIj5cclxuICAgICAgICA8QXZhdGFyIHNyYz17IGFzc2lnbmVlcy5sZW5ndGggPiAwID8gYXNzaWduZWVzWzBdLmF2YXRhclVybCA6IFwiXCIgfSBzaXplPXtcInNtYWxsXCJ9Lz5cclxuICAgICAgICAvLyA8L0ljb24+XHJcblxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICA8TWV0YVxyXG4gICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2F1dGhvckF2YXRhcn0gLz59XHJcbiAgICAgICAgdGl0bGU9e2lzc3VlX3RpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXs8U3RhdEJhciBib2R5PXtib2R5fSBwZXJjZW50RG9uZT17cGVyY2VudERvbmV9IHRhZ3M9e2xhYmVsc30vPn1cclxuICAgICAgLz5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG5cclxuICAgIGZldGNoRGF0YShhdXRoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGZpcmVEYXRlU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZS5fZDogXCIgKyBuZXcgRGF0ZShlLl9kKS5zZXRIb3VycygwLDAsMCwwKSlcclxuICAgIGNvbnN0IG1hdGNoZWQgPSByZXRyaWV2ZU1hdGNoZXMoc3RhdGUuZGF0YSwgZS5fZClcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ09QRU5fRFJBV0VSJyxcclxuICAgICAgY29udGVudHM6IG1hdGNoZWRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xPU0VfRFJBV0VSJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxDYWxlbmRhciBkYXRlQ2VsbFJlbmRlcj17ZGF0ZUNlbGxSZW5kZXJ9IG1vbnRoQ2VsbFJlbmRlcj17bW9udGhDZWxsUmVuZGVyfSBvblNlbGVjdD17ZmlyZURhdGVTZWxlY3Rpb259IC8+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB0aXRsZT1cIklzc3VlczpcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZURyYXdlcn1cclxuICAgICAgICB2aXNpYmxlPXtzdGF0ZS5kcmF3ZXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXtcIjMwMHB4XCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtzdGF0ZS5kcmF3ZXJDb250ZW50cyA/IHN0YXRlLmRyYXdlckNvbnRlbnRzLm1hcCgoaXNzdWUsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aXNzdWUua2V5fT5cclxuICAgICAgICAgICAgICA8SXNzdWVDYXJkIGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICApKSA6IFwiXCJ9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZVJvdXRlcihJbmRleCkiXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
  }
};

var dateCellRender = function dateCellRender(value) {
  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(DataCells, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
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
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("section", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, num), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("span", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Backlog number"), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
    id: "2153197830",
    __self: this
  }, ".notes-month.jsx-2153197830{text-align:center;font-size:28px;}.notes-month.jsx-2153197830 section.jsx-2153197830{font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThMa0IsQUFHMkIsQUFJSCxlQUNqQixHQUppQixlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxvZ2FuXFxQcm9qZWN0c1xcY2Vuc3VzXFxtYXJrZXRpbmdcXHBhZ2VzXFxjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyLCBCYWRnZSwgRHJhd2VyLCBMaXN0LCBBdmF0YXIsIENhcmQsIEljb24sIFJvdywgQ29sLCBUYWcsIFByb2dyZXNzIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFBhZ2VSb3V0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQYWdlUm91dGVyJ1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICduYW5vZ3JhcGhxbCdcclxuXHJcblxyXG4vLyBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh7XHJcbi8vICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJyxcclxuXHJcbi8vIH0pXHJcblxyXG5jb25zdCBJU1NVRVNfUVVFUlkgPSBncWxgXHJcbnF1ZXJ5ICgkbmFtZTogU3RyaW5nISwgJG93bmVyOiBTdHJpbmchKSB7IFxyXG4gIHJlcG9zaXRvcnkobmFtZTogJG5hbWUsIG93bmVyOiAkb3duZXIpe1xyXG4gICAgaXNzdWVzKGxhc3Q6MTAwKXtcclxuICAgICAgZWRnZXN7XHJcbiAgICAgICAgbm9kZXtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgICBib2R5VGV4dFxyXG4gICAgICAgICAgYm9keUhUTUxcclxuICAgICAgICAgIGJvZHlcclxuICAgICAgICAgIGFzc2lnbmVlcyAoZmlyc3Q6MTApe1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhdXRob3J7XHJcbiAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWlsZXN0b25lIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZHVlT25cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBsYWJlbHMoZmlyc3Q6MTApIHtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9qZWN0Q2FyZHN7XHJcbiAgICAgICAgICAgIG5vZGVze1xyXG4gICAgICAgICAgICAgIGNvbHVtbntcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBub3RlXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKGF1dGgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBcInRva2VuIFwiICsgYXV0aCB9LFxyXG4gICAgYm9keTogSVNTVUVTX1FVRVJZKHsgbmFtZTogXCJlbWJlZHNcIiwgb3duZXI6IFwibG9nYW5wb3dlbGxcIiB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHByaW1lID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJpbWU6XCIpXHJcbiAgY29uc3QgeyBkYXRhOiB7IHJlcG9zaXRvcnk6IHsgaXNzdWVzOiB7IGVkZ2VzIH0gfSB9IH0gPSBwcmltZVxyXG4gIC8vIGNvbnNvbGUubG9nKHByaW1lKVxyXG5cclxuICByZXR1cm4gZWRnZXMubWFwKCh7IG5vZGUgfSwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogeyBlZGdlczogYXNzaWduZWVfZWRnZXMgfSxcclxuICAgICAgYXV0aG9yOiB7IGxvZ2luLCBhdmF0YXJVcmw6IGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBib2R5VGV4dCxcclxuICAgICAgYm9keUhUTUwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIG1pbGVzdG9uZTogeyBkdWVPbiB9LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgbGFiZWxzOiB7IGVkZ2VzOiBsYWJlbF9lZGdlcyB9LFxyXG4gICAgICBwcm9qZWN0Q2FyZHM6IHtcclxuICAgICAgICBub2RlczogW3sgY29sdW1uOiB7IG5hbWU6IGNvbHVtbl9uYW1lIH0gfV0sXHJcbiAgICAgICAgZWRnZXM6IFt7IG5vZGU6IHsgbm90ZTogY2FyZF9ub3RlLCB1cmw6IGNhcmRfdXJsIH0gfV1cclxuICAgICAgfVxyXG4gICAgfSA9IG5vZGVcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGlkeCxcclxuICAgICAgaXNzdWVfdGl0bGU6IHRpdGxlLFxyXG4gICAgICBib2R5VGV4dCxcclxuICAgICAgYm9keUhUTUwsXHJcbiAgICAgIGJvZHksXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBkdWVPbixcclxuICAgICAgaXNzdWVfYXV0aG9yOiB7IHVzZXJfaWQ6IGxvZ2luLCBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgaXNzdWVfdXJsOiB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogYXNzaWduZWVfZWRnZXMubWFwKCh7IG5vZGU6IHsgbmFtZSwgYXZhdGFyVXJsIH0gfSkgPT4gKHsgbmFtZSwgYXZhdGFyVXJsIH0pKSxcclxuICAgICAgbGFiZWxzOiBsYWJlbF9lZGdlcy5tYXAoKHsgbm9kZTogeyBjb2xvciwgbmFtZSwgaWQgfSB9KSA9PiAoeyBjb2xvciA6IGAjJHtjb2xvcn1gLCBuYW1lLCBpZCB9KSksXHJcbiAgICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlLCBjYXJkX3VybCB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldExpc3REYXRhKGRhdGEsIHZhbHVlKSB7XHJcblxyXG4gIGxldCBpbnB1dCA9IG5ldyBEYXRlKHZhbHVlKS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gIC8vIGNvbnNvbGUubG9nKFwidmFsdWU6IFwiICsgdmFsdWUpXHJcblxyXG4gIC8vIGxldCBmZXRjaGVkRGF0ZSA9IG5ldyBEYXRlKFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIikudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgbGV0IG1hdGNoZXMgPSBkYXRhLmZpbHRlcigoY3VyLCBpZHgpID0+IG5ldyBEYXRlKGN1ci5kdWVPbikuc2V0SG91cnMoMCwgMCwgMCwgMCkgPT09IGlucHV0KVxyXG4gIHJldHVybiBtYXRjaGVzLm1hcCgoeyBzdGF0ZSwgaXNzdWVfdGl0bGUgfSkgPT4gKHtcclxuICAgIHR5cGU6IHN0YXRlID09PSBcIk9QRU5cIiA/ICdlcnJvcicgOiAnc3VjY2VzcycsXHJcbiAgICBjb250ZW50OiBpc3N1ZV90aXRsZVxyXG4gIH0pKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IERhdGFDZWxscyA9ICh7IHZhbHVlIH0pID0+IHtcclxuICBjb25zdCB7IHN0YXRlOiB7IGRhdGEgfSB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkSXNzdWVzID0gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2lzc3VlczogJyArIGRhdGEpXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJzdGF0ZTogXCIgKyBzdGF0ZSApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XHJcbiAgICAgICAge2ZpbHRlcmVkSXNzdWVzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uY29udGVudH0+XHJcbiAgICAgICAgICAgIDxCYWRnZSBzdGF0dXM9e2l0ZW0udHlwZX0gdGV4dD17aXRlbS5jb250ZW50fSBjbGFzc05hbWU9XCJhbnQtYmFkZ2Utc3RhdHVzXCIgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ldmVudHMge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ldmVudHMgLmFudC1iYWRnZS1zdGF0dXMge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGF0ZUNlbGxSZW5kZXIgPSB2YWx1ZSA9PiA8RGF0YUNlbGxzIHZhbHVlPXt2YWx1ZX0gLz5cclxuXHJcbmZ1bmN0aW9uIGdldE1vbnRoRGF0YSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZS5tb250aCgpID09PSA4KSB7XHJcbiAgICByZXR1cm4gMTM5NDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbnRoQ2VsbFJlbmRlcih2YWx1ZSkge1xyXG4gIGNvbnN0IG51bSA9IGdldE1vbnRoRGF0YSh2YWx1ZSk7XHJcbiAgcmV0dXJuIG51bSA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZXMtbW9udGhcIj5cclxuICAgICAgPHNlY3Rpb24+e251bX08L3NlY3Rpb24+XHJcbiAgICAgIDxzcGFuPkJhY2tsb2cgbnVtYmVyPC9zcGFuPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5ub3Rlcy1tb250aCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICAubm90ZXMtbW9udGggc2VjdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbDtcclxufVxyXG5cclxuXHJcbi8vIFJFRFVDRVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNhbGVuZGFyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnTE9BRCc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoOiBhY3Rpb24uYXV0aCxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICBsb2FkZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSAnT1BFTl9EUkFXRVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZHJhd2VyT3BlbjogdHJ1ZSxcclxuICAgICAgICBkcmF3ZXJDb250ZW50czogYWN0aW9uLmNvbnRlbnRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ0NMT1NFX0RSQVdFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkcmF3ZXJPcGVuOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ09OVEVYVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbi8vIElOSVRJQUwgU1RBVEUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aDogXCJsb2FkaW5nLi4uXCIsXHJcbiAgbG9hZGVkOiBmYWxzZSxcclxuICBkYXRhOiBbXSxcclxuICBkcmF3ZXJPcGVuOiBmYWxzZSxcclxuICBkcmF3ZXJDb250ZW50czogW11cclxufVxyXG5cclxuY29uc3QgcmV0cmlldmVNYXRjaGVzID0gKGRhdGEsIGRhdGUpID0+IHtcclxuICBjb25zdCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4gbmV3IERhdGUoZGF0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCkgPT09IG5ldyBEYXRlKGRhdHVtLmR1ZU9uKS5zZXRIb3VycygwLCAwLCAwLCAwKSlcclxuICByZXR1cm4gbWF0Y2hlc1xyXG59XHJcblxyXG5cclxuY29uc3QgU3RhdEJhciA9ICh7IGJvZHksIHBlcmNlbnREb25lLCB0YWdzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj4gXHJcbiAgICB7IHBlcmNlbnREb25lID09PSAxMDAgPyA8ZGl2PjxQcm9ncmVzcyBwZXJjZW50PXtwZXJjZW50RG9uZX0gc2l6ZT1cInNtYWxsXCIgLz48YnIvPjwvZGl2PlxyXG4gICAgOiBwZXJjZW50RG9uZSA+IDAgPyA8ZGl2PjxQcm9ncmVzcyBwZXJjZW50PXtwZXJjZW50RG9uZX0gc2l6ZT1cInNtYWxsXCIgc3RhdHVzPVwiYWN0aXZlXCIvPjxici8+PC9kaXY+XHJcbiAgICA6IG51bGxcclxuICAgIH0gXHJcbiAgICB7IHRhZ3MubGVuZ3RoID4gMCA/IHRhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXt0YWcuaWR9IGNsYXNzTmFtZT1cIndyYXAtdGFnXCIgPjxUYWcgY29sb3I9e3RhZy5jb2xvcn0+e3RhZy5uYW1lfTwvVGFnPjxzdHlsZSBqc3g+e2Aud3JhcC10YWcgeyBtYXJnaW4tYm90dG9tOiAzcHg7IGJvcmRlcjogbm9uZTsgYmFja2dyb3VuZDogbm9uZTsgfWB9PC9zdHlsZT48L2Rpdj4pXHJcbiAgICApXHJcbiAgICA6IG51bGxcclxuICAgIH1cclxuICAgIDxNYXJrZG93biBzb3VyY2U9e2JvZHl9PjxzdHlsZSBqc3g+e2BpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzt9YH08L3N0eWxlPjwvTWFya2Rvd24+XHJcbiAgICA8L2Rpdj4gIFxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZFxyXG5cclxuXHJcbmNvbnN0IElzc3VlQ2FyZCA9ICh7IGlzc3VlIH0pID0+IHtcclxuICAvLyBjb25zdCB7IHN0YXRlOiB7IGRhdGEgfSB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxyXG4gIGNvbnN0IHtcclxuICAgIGNhcmRfaW5mbzogeyBjYXJkX3VybCB9LFxyXG4gICAgaXNzdWVfYXV0aG9yOiB7IGF1dGhvckF2YXRhciB9LFxyXG4gICAgaXNzdWVfdGl0bGUsXHJcbiAgICBpc3N1ZV91cmwsXHJcbiAgICBzdGF0ZSxcclxuICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgbGFiZWxzLFxyXG4gICAgYXNzaWduZWVzLFxyXG4gICAgYm9keVRleHQsXHJcbiAgICBib2R5LFxyXG4gICAgYm9keUhUTUwsXHJcbiAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlIH1cclxuICB9ID0gaXNzdWVcclxuXHJcbiAgY29uc29sZS5sb2coXCJsYWJlbHM6IFwiICsgSlNPTi5zdHJpbmdpZnkobGFiZWxzKSlcclxuICBjb25zdCBpbWFnZVRhZ3NSZWdleCA9IC88aW1nIFtePl0qc3JjPVwiW15cIl0qXCJbXj5dKj4vZ21cclxuICBjb25zdCBpbWFnZVNyY1JlZ2V4ID0gLy4qc3JjPVwiKFteXCJdKilcIi4qL1xyXG4gIGNvbnN0IGltYWdlcyA9IGJvZHlIVE1MLmxlbmd0aCA+IDAgPyBib2R5SFRNTC5tYXRjaChpbWFnZVRhZ3NSZWdleCkgOiBudWxsXHJcbiAgY29uc3QgYmFubmVyU3JjID0gaW1hZ2VzICE9PSBudWxsID8gaW1hZ2VzLm1hcChpbWcgPT4gaW1nLnJlcGxhY2UoaW1hZ2VTcmNSZWdleCwgJyQxJykpWzBdIDogXCJcIlxyXG5cclxuICBjb25zdCBhbGxCcmFja2V0c1JlZ2V4ID0gL1xcWy5cXF0vZ1xyXG4gIGNvbnN0IGRvbmVCcmFja2V0c1JlZ2V4ID0gL1xcW3hcXF0vZ1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicmVnZXggbGVuZ3RoOiBcIiArIGJvZHkubWF0Y2goYWxsQnJhY2tldHNSZWdleCkpXHJcbiAgY29uc3QgdG9kb3NDb3VudCA9IGJvZHkubGVuZ3RoID4gMCA/IGJvZHkubWF0Y2goYWxsQnJhY2tldHNSZWdleCkgOiAwXHJcbiAgY29uc3QgZG9uZUNvdW50ID0gYm9keS5sZW5ndGggPiAwID8gYm9keS5tYXRjaChkb25lQnJhY2tldHNSZWdleCkgOiAwXHJcbiAgY29uc3QgcGVyY2VudERvbmUgPSB0b2Rvc0NvdW50ICE9PSBudWxsID8gTWF0aC5mbG9vcigoZG9uZUNvdW50Lmxlbmd0aCAvIHRvZG9zQ291bnQubGVuZ3RoKSAqIDEwMCkgOiBudWxsXHJcblxyXG5cclxuICBjb25zb2xlLmxvZyhcImJhbm5lclNyYzogXCIgKyBiYW5uZXJTcmMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgIGNvdmVyPXtiYW5uZXJTcmMgIT09IFwiXCIgP1xyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD17aXNzdWVfdGl0bGV9XHJcbiAgICAgICAgICBzcmM9e2Jhbm5lclNyY31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8YSBocmVmPXtjYXJkX3VybH0+XHJcbiAgICAgICAgICA8SWNvbiB0eXBlPVwicHJvamVjdFwiLz5cclxuICAgICAgICA8L2E+LFxyXG4gICAgICAgIDxhIGhyZWY9e2lzc3VlX3VybH0+XHJcbiAgICAgICAgICA8SWNvbiB0eXBlPVwiZWRpdFwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgLFxyXG4gICAgICAgIC8vIDxJY29uIHR5cGU9XCJlbGxpcHNpc1wiPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXsgYXNzaWduZWVzLmxlbmd0aCA+IDAgPyBhc3NpZ25lZXNbMF0uYXZhdGFyVXJsIDogXCJcIiB9IHNpemU9e1wic21hbGxcIn0vPlxyXG4gICAgICAgIC8vIDwvSWNvbj5cclxuXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxNZXRhXHJcbiAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17YXV0aG9yQXZhdGFyfSAvPn1cclxuICAgICAgICB0aXRsZT17aXNzdWVfdGl0bGV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249ezxTdGF0QmFyIGJvZHk9e2JvZHl9IHBlcmNlbnREb25lPXtwZXJjZW50RG9uZX0gdGFncz17bGFiZWxzfS8+fVxyXG4gICAgICAvPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICh7IHJvdXRlcjogeyBxdWVyeTogeyBhdXRoIH0gfSB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGNhbGVuZGFyUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoYXV0aCkgPT4gZmV0Y2hlcihhdXRoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnTE9BRCcsXHJcbiAgICAgICAgZGF0YTogcmVzLFxyXG4gICAgICAgIGF1dGg6IGF1dGhcclxuICAgICAgfSlcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXM6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgIH0pXHJcblxyXG4gICAgZmV0Y2hEYXRhKGF1dGgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgZmlyZURhdGVTZWxlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJlLl9kOiBcIiArIG5ldyBEYXRlKGUuX2QpLnNldEhvdXJzKDAsMCwwLDApKVxyXG4gICAgY29uc3QgbWF0Y2hlZCA9IHJldHJpZXZlTWF0Y2hlcyhzdGF0ZS5kYXRhLCBlLl9kKVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnT1BFTl9EUkFXRVInLFxyXG4gICAgICBjb250ZW50czogbWF0Y2hlZFxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgY2xvc2VEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdDTE9TRV9EUkFXRVInXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiREFUQTogXCIgKyBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAgPENhbGVuZGFyIGRhdGVDZWxsUmVuZGVyPXtkYXRlQ2VsbFJlbmRlcn0gbW9udGhDZWxsUmVuZGVyPXttb250aENlbGxSZW5kZXJ9IG9uU2VsZWN0PXtmaXJlRGF0ZVNlbGVjdGlvbn0gLz5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHRpdGxlPVwiSXNzdWVzOlwiXHJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlRHJhd2VyfVxyXG4gICAgICAgIHZpc2libGU9e3N0YXRlLmRyYXdlck9wZW59XHJcbiAgICAgICAgd2lkdGg9e1wiMzAwcHhcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAge3N0YXRlLmRyYXdlckNvbnRlbnRzID8gc3RhdGUuZHJhd2VyQ29udGVudHMubWFwKChpc3N1ZSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtpc3N1ZS5rZXl9PlxyXG4gICAgICAgICAgICAgIDxJc3N1ZUNhcmQgaXNzdWU9e2lzc3VlfSAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICkpIDogXCJcIn1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQYWdlUm91dGVyKEluZGV4KSJdfQ== */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */")) : null;
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
  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, percentDone === 100 ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_progress__WEBPACK_IMPORTED_MODULE_16___default.a, {
    percent: percentDone,
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })) : percentDone > 0 ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_progress__WEBPACK_IMPORTED_MODULE_16___default.a, {
    percent: percentDone,
    size: "small",
    status: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  })) : null, tags.length > 0 ? tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("div", {
      key: tag.id,
      className: "jsx-930026540" + " " + "wrap-tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_14___default.a, {
      color: tag.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, tag.name), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
      id: "930026540",
      __self: this
    }, ".wrap-tag.jsx-930026540{margin-bottom:3px;border:none;background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9RaUcsQUFDOEIsa0JBQWEsWUFBaUIsZ0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UsIERyYXdlciwgTGlzdCwgQXZhdGFyLCBDYXJkLCBJY29uLCBSb3csIENvbCwgVGFnLCBQcm9ncmVzcyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXHJcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhQYWdlUm91dGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy93aXRoUGFnZVJvdXRlcidcclxuXHJcbmltcG9ydCBncWwgZnJvbSAnbmFub2dyYXBocWwnXHJcblxyXG5cclxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4vLyAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsXHJcblxyXG4vLyB9KVxyXG5cclxuY29uc3QgSVNTVUVTX1FVRVJZID0gZ3FsYFxyXG5xdWVyeSAoJG5hbWU6IFN0cmluZyEsICRvd25lcjogU3RyaW5nISkgeyBcclxuICByZXBvc2l0b3J5KG5hbWU6ICRuYW1lLCBvd25lcjogJG93bmVyKXtcclxuICAgIGlzc3VlcyhsYXN0OjEwMCl7XHJcbiAgICAgIGVkZ2Vze1xyXG4gICAgICAgIG5vZGV7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYm9keVRleHRcclxuICAgICAgICAgIGJvZHlIVE1MXHJcbiAgICAgICAgICBib2R5XHJcbiAgICAgICAgICBhc3NpZ25lZXMgKGZpcnN0OjEwKXtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aG9ye1xyXG4gICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1pbGVzdG9uZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGR1ZU9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgbGFiZWxzKGZpcnN0OjEwKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvamVjdENhcmRze1xyXG4gICAgICAgICAgICBub2Rlc3tcclxuICAgICAgICAgICAgICBjb2x1bW57XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbm90ZVxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChhdXRoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogXCJ0b2tlbiBcIiArIGF1dGggfSxcclxuICAgIGJvZHk6IElTU1VFU19RVUVSWSh7IG5hbWU6IFwiZW1iZWRzXCIsIG93bmVyOiBcImxvZ2FucG93ZWxsXCIgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9IH0gfSB9ID0gcHJpbWVcclxuICAvLyBjb25zb2xlLmxvZyhwcmltZSlcclxuXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBtaWxlc3RvbmU6IHsgZHVlT24gfSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGxhYmVsczogeyBlZGdlczogbGFiZWxfZWRnZXMgfSxcclxuICAgICAgcHJvamVjdENhcmRzOiB7XHJcbiAgICAgICAgbm9kZXM6IFt7IGNvbHVtbjogeyBuYW1lOiBjb2x1bW5fbmFtZSB9IH1dLFxyXG4gICAgICAgIGVkZ2VzOiBbeyBub2RlOiB7IG5vdGU6IGNhcmRfbm90ZSwgdXJsOiBjYXJkX3VybCB9IH1dXHJcbiAgICAgIH1cclxuICAgIH0gPSBub2RlXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBpZHgsXHJcbiAgICAgIGlzc3VlX3RpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keVRleHQsXHJcbiAgICAgIGJvZHlIVE1MLFxyXG4gICAgICBib2R5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgZHVlT24sXHJcbiAgICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9IH0pID0+ICh7IG5hbWUsIGF2YXRhclVybCB9KSksXHJcbiAgICAgIGxhYmVsczogbGFiZWxfZWRnZXMubWFwKCh7IG5vZGU6IHsgY29sb3IsIG5hbWUsIGlkIH0gfSkgPT4gKHsgY29sb3IgOiBgIyR7Y29sb3J9YCwgbmFtZSwgaWQgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSkge1xyXG5cclxuICBsZXQgaW5wdXQgPSBuZXcgRGF0ZSh2YWx1ZSkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAvLyBjb25zb2xlLmxvZyhcInZhbHVlOiBcIiArIHZhbHVlKVxyXG5cclxuICAvLyBsZXQgZmV0Y2hlZERhdGUgPSBuZXcgRGF0ZShcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gIGxldCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoKGN1ciwgaWR4KSA9PiBuZXcgRGF0ZShjdXIuZHVlT24pLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBpbnB1dClcclxuICByZXR1cm4gbWF0Y2hlcy5tYXAoKHsgc3RhdGUsIGlzc3VlX3RpdGxlIH0pID0+ICh7XHJcbiAgICB0eXBlOiBzdGF0ZSA9PT0gXCJPUEVOXCIgPyAnZXJyb3InIDogJ3N1Y2Nlc3MnLFxyXG4gICAgY29udGVudDogaXNzdWVfdGl0bGVcclxuICB9KSlcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBEYXRhQ2VsbHMgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZTogeyBkYXRhIH0gfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZElzc3VlcyA9IGdldExpc3REYXRhKGRhdGEsIHZhbHVlKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdpc3N1ZXM6ICcgKyBkYXRhKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhdGU6IFwiICsgc3RhdGUgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4gICAgICAgIHtmaWx0ZXJlZElzc3Vlcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZXZlbnRzIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRhdGVDZWxsUmVuZGVyID0gdmFsdWUgPT4gPERhdGFDZWxscyB2YWx1ZT17dmFsdWV9IC8+XHJcblxyXG5mdW5jdGlvbiBnZXRNb250aERhdGEodmFsdWUpIHtcclxuICBpZiAodmFsdWUubW9udGgoKSA9PT0gOCkge1xyXG4gICAgcmV0dXJuIDEzOTQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb250aENlbGxSZW5kZXIodmFsdWUpIHtcclxuICBjb25zdCBudW0gPSBnZXRNb250aERhdGEodmFsdWUpO1xyXG4gIHJldHVybiBudW0gPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzLW1vbnRoXCI+XHJcbiAgICAgIDxzZWN0aW9uPntudW19PC9zZWN0aW9uPlxyXG4gICAgICA8c3Bhbj5CYWNrbG9nIG51bWJlcjwvc3Bhbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubm90ZXMtbW9udGgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBSRURVQ0VSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjYWxlbmRhclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQUQnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogYWN0aW9uLmF1dGgsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ09QRU5fRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IHRydWUsXHJcbiAgICAgICAgZHJhd2VyQ29udGVudHM6IGFjdGlvbi5jb250ZW50c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdDTE9TRV9EUkFXRVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZHJhd2VyT3BlbjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDogcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENPTlRFWFQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyBJTklUSUFMIFNUQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGF1dGg6IFwibG9hZGluZy4uLlwiLFxyXG4gIGxvYWRlZDogZmFsc2UsXHJcbiAgZGF0YTogW10sXHJcbiAgZHJhd2VyT3BlbjogZmFsc2UsXHJcbiAgZHJhd2VyQ29udGVudHM6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHJldHJpZXZlTWF0Y2hlcyA9IChkYXRhLCBkYXRlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IG5ldyBEYXRlKGRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBuZXcgRGF0ZShkYXR1bS5kdWVPbikuc2V0SG91cnMoMCwgMCwgMCwgMCkpXHJcbiAgcmV0dXJuIG1hdGNoZXNcclxufVxyXG5cclxuXHJcbmNvbnN0IFN0YXRCYXIgPSAoeyBib2R5LCBwZXJjZW50RG9uZSwgdGFncyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+IFxyXG4gICAgeyBwZXJjZW50RG9uZSA9PT0gMTAwID8gPGRpdj48UHJvZ3Jlc3MgcGVyY2VudD17cGVyY2VudERvbmV9IHNpemU9XCJzbWFsbFwiIC8+PGJyLz48L2Rpdj5cclxuICAgIDogcGVyY2VudERvbmUgPiAwID8gPGRpdj48UHJvZ3Jlc3MgcGVyY2VudD17cGVyY2VudERvbmV9IHNpemU9XCJzbWFsbFwiIHN0YXR1cz1cImFjdGl2ZVwiLz48YnIvPjwvZGl2PlxyXG4gICAgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgeyB0YWdzLmxlbmd0aCA+IDAgPyB0YWdzLm1hcCh0YWcgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17dGFnLmlkfSBjbGFzc05hbWU9XCJ3cmFwLXRhZ1wiID48VGFnIGNvbG9yPXt0YWcuY29sb3J9Pnt0YWcubmFtZX08L1RhZz48c3R5bGUganN4PntgLndyYXAtdGFnIHsgbWFyZ2luLWJvdHRvbTogM3B4OyBib3JkZXI6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7IH1gfTwvc3R5bGU+PC9kaXY+KVxyXG4gICAgKVxyXG4gICAgOiBudWxsXHJcbiAgICB9XHJcbiAgICA8TWFya2Rvd24gc291cmNlPXtib2R5fT48c3R5bGUganN4PntgaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87fWB9PC9zdHlsZT48L01hcmtkb3duPlxyXG4gICAgPC9kaXY+ICBcclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmRcclxuXHJcblxyXG5jb25zdCBJc3N1ZUNhcmQgPSAoeyBpc3N1ZSB9KSA9PiB7XHJcbiAgLy8gY29uc3QgeyBzdGF0ZTogeyBkYXRhIH0gfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICBjb25zdCB7XHJcbiAgICBjYXJkX2luZm86IHsgY2FyZF91cmwgfSxcclxuICAgIGlzc3VlX2F1dGhvcjogeyBhdXRob3JBdmF0YXIgfSxcclxuICAgIGlzc3VlX3RpdGxlLFxyXG4gICAgaXNzdWVfdXJsLFxyXG4gICAgc3RhdGUsXHJcbiAgICBjb2x1bW5fbmFtZSxcclxuICAgIGxhYmVscyxcclxuICAgIGFzc2lnbmVlcyxcclxuICAgIGJvZHlUZXh0LFxyXG4gICAgYm9keSxcclxuICAgIGJvZHlIVE1MLFxyXG4gICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSB9XHJcbiAgfSA9IGlzc3VlXHJcblxyXG4gIGNvbnNvbGUubG9nKFwibGFiZWxzOiBcIiArIEpTT04uc3RyaW5naWZ5KGxhYmVscykpXHJcbiAgY29uc3QgaW1hZ2VUYWdzUmVnZXggPSAvPGltZyBbXj5dKnNyYz1cIlteXCJdKlwiW14+XSo+L2dtXHJcbiAgY29uc3QgaW1hZ2VTcmNSZWdleCA9IC8uKnNyYz1cIihbXlwiXSopXCIuKi9cclxuICBjb25zdCBpbWFnZXMgPSBib2R5SFRNTC5sZW5ndGggPiAwID8gYm9keUhUTUwubWF0Y2goaW1hZ2VUYWdzUmVnZXgpIDogbnVsbFxyXG4gIGNvbnN0IGJhbm5lclNyYyA9IGltYWdlcyAhPT0gbnVsbCA/IGltYWdlcy5tYXAoaW1nID0+IGltZy5yZXBsYWNlKGltYWdlU3JjUmVnZXgsICckMScpKVswXSA6IFwiXCJcclxuXHJcbiAgY29uc3QgYWxsQnJhY2tldHNSZWdleCA9IC9cXFsuXFxdL2dcclxuICBjb25zdCBkb25lQnJhY2tldHNSZWdleCA9IC9cXFt4XFxdL2dcclxuICAvLyBjb25zb2xlLmxvZyhcInJlZ2V4IGxlbmd0aDogXCIgKyBib2R5Lm1hdGNoKGFsbEJyYWNrZXRzUmVnZXgpKVxyXG4gIGNvbnN0IHRvZG9zQ291bnQgPSBib2R5Lmxlbmd0aCA+IDAgPyBib2R5Lm1hdGNoKGFsbEJyYWNrZXRzUmVnZXgpIDogMFxyXG4gIGNvbnN0IGRvbmVDb3VudCA9IGJvZHkubGVuZ3RoID4gMCA/IGJvZHkubWF0Y2goZG9uZUJyYWNrZXRzUmVnZXgpIDogMFxyXG4gIGNvbnN0IHBlcmNlbnREb25lID0gdG9kb3NDb3VudCAhPT0gbnVsbCA/IE1hdGguZmxvb3IoKGRvbmVDb3VudC5sZW5ndGggLyB0b2Rvc0NvdW50Lmxlbmd0aCkgKiAxMDApIDogbnVsbFxyXG5cclxuXHJcbiAgY29uc29sZS5sb2coXCJiYW5uZXJTcmM6IFwiICsgYmFubmVyU3JjKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICBjb3Zlcj17YmFubmVyU3JjICE9PSBcIlwiID9cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9e2lzc3VlX3RpdGxlfVxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJTcmN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgPGEgaHJlZj17Y2FyZF91cmx9PlxyXG4gICAgICAgICAgPEljb24gdHlwZT1cInByb2plY3RcIi8+XHJcbiAgICAgICAgPC9hPixcclxuICAgICAgICA8YSBocmVmPXtpc3N1ZV91cmx9PlxyXG4gICAgICAgICAgPEljb24gdHlwZT1cImVkaXRcIi8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgICxcclxuICAgICAgICAvLyA8SWNvbiB0eXBlPVwiZWxsaXBzaXNcIj5cclxuICAgICAgICA8QXZhdGFyIHNyYz17IGFzc2lnbmVlcy5sZW5ndGggPiAwID8gYXNzaWduZWVzWzBdLmF2YXRhclVybCA6IFwiXCIgfSBzaXplPXtcInNtYWxsXCJ9Lz5cclxuICAgICAgICAvLyA8L0ljb24+XHJcblxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICA8TWV0YVxyXG4gICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2F1dGhvckF2YXRhcn0gLz59XHJcbiAgICAgICAgdGl0bGU9e2lzc3VlX3RpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXs8U3RhdEJhciBib2R5PXtib2R5fSBwZXJjZW50RG9uZT17cGVyY2VudERvbmV9IHRhZ3M9e2xhYmVsc30vPn1cclxuICAgICAgLz5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG5cclxuICAgIGZldGNoRGF0YShhdXRoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGZpcmVEYXRlU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZS5fZDogXCIgKyBuZXcgRGF0ZShlLl9kKS5zZXRIb3VycygwLDAsMCwwKSlcclxuICAgIGNvbnN0IG1hdGNoZWQgPSByZXRyaWV2ZU1hdGNoZXMoc3RhdGUuZGF0YSwgZS5fZClcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ09QRU5fRFJBV0VSJyxcclxuICAgICAgY29udGVudHM6IG1hdGNoZWRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xPU0VfRFJBV0VSJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxDYWxlbmRhciBkYXRlQ2VsbFJlbmRlcj17ZGF0ZUNlbGxSZW5kZXJ9IG1vbnRoQ2VsbFJlbmRlcj17bW9udGhDZWxsUmVuZGVyfSBvblNlbGVjdD17ZmlyZURhdGVTZWxlY3Rpb259IC8+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB0aXRsZT1cIklzc3VlczpcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZURyYXdlcn1cclxuICAgICAgICB2aXNpYmxlPXtzdGF0ZS5kcmF3ZXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXtcIjMwMHB4XCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtzdGF0ZS5kcmF3ZXJDb250ZW50cyA/IHN0YXRlLmRyYXdlckNvbnRlbnRzLm1hcCgoaXNzdWUsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aXNzdWUua2V5fT5cclxuICAgICAgICAgICAgICA8SXNzdWVDYXJkIGlzc3VlPXtpc3N1ZX0gLz5cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICApKSA6IFwiXCJ9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZVJvdXRlcihJbmRleCkiXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
  }) : null, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_26___default.a, {
    source: body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_24___default.a, {
    id: "615416380",
    __self: this
  }, "img.jsx-615416380{max-width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdRd0MsQUFDcUIsZUFBYSxZQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsZW5kYXIsIEJhZGdlLCBEcmF3ZXIsIExpc3QsIEF2YXRhciwgQ2FyZCwgSWNvbiwgUm93LCBDb2wsIFRhZywgUHJvZ3Jlc3MgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUGFnZVJvdXRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFBhZ2VSb3V0ZXInXHJcblxyXG5pbXBvcnQgZ3FsIGZyb20gJ25hbm9ncmFwaHFsJ1xyXG5cclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHtcclxuLy8gICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxyXG5cclxuLy8gfSlcclxuXHJcbmNvbnN0IElTU1VFU19RVUVSWSA9IGdxbGBcclxucXVlcnkgKCRuYW1lOiBTdHJpbmchLCAkb3duZXI6IFN0cmluZyEpIHsgXHJcbiAgcmVwb3NpdG9yeShuYW1lOiAkbmFtZSwgb3duZXI6ICRvd25lcil7XHJcbiAgICBpc3N1ZXMobGFzdDoxMDApe1xyXG4gICAgICBlZGdlc3tcclxuICAgICAgICBub2Rle1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGJvZHlUZXh0XHJcbiAgICAgICAgICBib2R5SFRNTFxyXG4gICAgICAgICAgYm9keVxyXG4gICAgICAgICAgYXNzaWduZWVzIChmaXJzdDoxMCl7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF1dGhvcntcclxuICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtaWxlc3RvbmUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBkdWVPblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGxhYmVscyhmaXJzdDoxMCkge1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByb2plY3RDYXJkc3tcclxuICAgICAgICAgICAgbm9kZXN7XHJcbiAgICAgICAgICAgICAgY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5vdGVcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoYXV0aCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IFwidG9rZW4gXCIgKyBhdXRoIH0sXHJcbiAgICBib2R5OiBJU1NVRVNfUVVFUlkoeyBuYW1lOiBcImVtYmVkc1wiLCBvd25lcjogXCJsb2dhbnBvd2VsbFwiIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcHJpbWUgPSBhd2FpdCByZXN1bHQuanNvbigpXHJcbiAgLy8gY29uc29sZS5sb2coXCJwcmltZTpcIilcclxuICBjb25zdCB7IGRhdGE6IHsgcmVwb3NpdG9yeTogeyBpc3N1ZXM6IHsgZWRnZXMgfSB9IH0gfSA9IHByaW1lXHJcbiAgLy8gY29uc29sZS5sb2cocHJpbWUpXHJcblxyXG4gIHJldHVybiBlZGdlcy5tYXAoKHsgbm9kZSB9LCBpZHgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHVybCxcclxuICAgICAgYXNzaWduZWVzOiB7IGVkZ2VzOiBhc3NpZ25lZV9lZGdlcyB9LFxyXG4gICAgICBhdXRob3I6IHsgbG9naW4sIGF2YXRhclVybDogYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGJvZHlUZXh0LFxyXG4gICAgICBib2R5SFRNTCxcclxuICAgICAgYm9keSxcclxuICAgICAgbWlsZXN0b25lOiB7IGR1ZU9uIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBsYWJlbHM6IHsgZWRnZXM6IGxhYmVsX2VkZ2VzIH0sXHJcbiAgICAgIHByb2plY3RDYXJkczoge1xyXG4gICAgICAgIG5vZGVzOiBbeyBjb2x1bW46IHsgbmFtZTogY29sdW1uX25hbWUgfSB9XSxcclxuICAgICAgICBlZGdlczogW3sgbm9kZTogeyBub3RlOiBjYXJkX25vdGUsIHVybDogY2FyZF91cmwgfSB9XVxyXG4gICAgICB9XHJcbiAgICB9ID0gbm9kZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleTogaWR4LFxyXG4gICAgICBpc3N1ZV90aXRsZTogdGl0bGUsXHJcbiAgICAgIGJvZHlUZXh0LFxyXG4gICAgICBib2R5SFRNTCxcclxuICAgICAgYm9keSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGR1ZU9uLFxyXG4gICAgICBpc3N1ZV9hdXRob3I6IHsgdXNlcl9pZDogbG9naW4sIGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBpc3N1ZV91cmw6IHVybCxcclxuICAgICAgYXNzaWduZWVzOiBhc3NpZ25lZV9lZGdlcy5tYXAoKHsgbm9kZTogeyBuYW1lLCBhdmF0YXJVcmwgfSB9KSA9PiAoeyBuYW1lLCBhdmF0YXJVcmwgfSkpLFxyXG4gICAgICBsYWJlbHM6IGxhYmVsX2VkZ2VzLm1hcCgoeyBub2RlOiB7IGNvbG9yLCBuYW1lLCBpZCB9IH0pID0+ICh7IGNvbG9yIDogYCMke2NvbG9yfWAsIG5hbWUsIGlkIH0pKSxcclxuICAgICAgY29sdW1uX25hbWUsXHJcbiAgICAgIGNhcmRfaW5mbzogeyBjYXJkX25vdGUsIGNhcmRfdXJsIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpIHtcclxuXHJcbiAgbGV0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZTogXCIgKyB2YWx1ZSlcclxuXHJcbiAgLy8gbGV0IGZldGNoZWREYXRlID0gbmV3IERhdGUoXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICBsZXQgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKChjdXIsIGlkeCkgPT4gbmV3IERhdGUoY3VyLmR1ZU9uKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gaW5wdXQpXHJcbiAgcmV0dXJuIG1hdGNoZXMubWFwKCh7IHN0YXRlLCBpc3N1ZV90aXRsZSB9KSA9PiAoe1xyXG4gICAgdHlwZTogc3RhdGUgPT09IFwiT1BFTlwiID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyxcclxuICAgIGNvbnRlbnQ6IGlzc3VlX3RpdGxlXHJcbiAgfSkpXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgRGF0YUNlbGxzID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGU6IHsgZGF0YSB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZmlsdGVyZWRJc3N1ZXMgPSBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnaXNzdWVzOiAnICsgZGF0YSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHN0YXRlIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuICAgICAgICB7ZmlsdGVyZWRJc3N1ZXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5jb250ZW50fT5cclxuICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS50eXBlfSB0ZXh0PXtpdGVtLmNvbnRlbnR9IGNsYXNzTmFtZT1cImFudC1iYWRnZS1zdGF0dXNcIiAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmV2ZW50cyB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkYXRlQ2VsbFJlbmRlciA9IHZhbHVlID0+IDxEYXRhQ2VsbHMgdmFsdWU9e3ZhbHVlfSAvPlxyXG5cclxuZnVuY3Rpb24gZ2V0TW9udGhEYXRhKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlLm1vbnRoKCkgPT09IDgpIHtcclxuICAgIHJldHVybiAxMzk0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhDZWxsUmVuZGVyKHZhbHVlKSB7XHJcbiAgY29uc3QgbnVtID0gZ2V0TW9udGhEYXRhKHZhbHVlKTtcclxuICByZXR1cm4gbnVtID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3Rlcy1tb250aFwiPlxyXG4gICAgICA8c2VjdGlvbj57bnVtfTwvc2VjdGlvbj5cclxuICAgICAgPHNwYW4+QmFja2xvZyBudW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm5vdGVzLW1vbnRoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcblxyXG5cclxuLy8gUkVEVUNFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY2FsZW5kYXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0FEJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IGFjdGlvbi5hdXRoLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdPUEVOX0RSQVdFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkcmF3ZXJPcGVuOiB0cnVlLFxyXG4gICAgICAgIGRyYXdlckNvbnRlbnRzOiBhY3Rpb24uY29udGVudHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSAnQ0xPU0VfRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHJldHVybiB7XHJcbiAgICAgIC4uLnN0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDT05URVhUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5cclxuLy8gSU5JVElBTCBTVEFURSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoOiBcImxvYWRpbmcuLi5cIixcclxuICBsb2FkZWQ6IGZhbHNlLFxyXG4gIGRhdGE6IFtdLFxyXG4gIGRyYXdlck9wZW46IGZhbHNlLFxyXG4gIGRyYXdlckNvbnRlbnRzOiBbXVxyXG59XHJcblxyXG5jb25zdCByZXRyaWV2ZU1hdGNoZXMgPSAoZGF0YSwgZGF0ZSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoZXMgPSBkYXRhLmZpbHRlcihkYXR1bSA9PiBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gbmV3IERhdGUoZGF0dW0uZHVlT24pLnNldEhvdXJzKDAsIDAsIDAsIDApKVxyXG4gIHJldHVybiBtYXRjaGVzXHJcbn1cclxuXHJcblxyXG5jb25zdCBTdGF0QmFyID0gKHsgYm9keSwgcGVyY2VudERvbmUsIHRhZ3MgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PiBcclxuICAgIHsgcGVyY2VudERvbmUgPT09IDEwMCA/IDxkaXY+PFByb2dyZXNzIHBlcmNlbnQ9e3BlcmNlbnREb25lfSBzaXplPVwic21hbGxcIiAvPjxici8+PC9kaXY+XHJcbiAgICA6IHBlcmNlbnREb25lID4gMCA/IDxkaXY+PFByb2dyZXNzIHBlcmNlbnQ9e3BlcmNlbnREb25lfSBzaXplPVwic21hbGxcIiBzdGF0dXM9XCJhY3RpdmVcIi8+PGJyLz48L2Rpdj5cclxuICAgIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHsgdGFncy5sZW5ndGggPiAwID8gdGFncy5tYXAodGFnID0+IChcclxuICAgICAgPGRpdiBrZXk9e3RhZy5pZH0gY2xhc3NOYW1lPVwid3JhcC10YWdcIiA+PFRhZyBjb2xvcj17dGFnLmNvbG9yfT57dGFnLm5hbWV9PC9UYWc+PHN0eWxlIGpzeD57YC53cmFwLXRhZyB7IG1hcmdpbi1ib3R0b206IDNweDsgYm9yZGVyOiBub25lOyBiYWNrZ3JvdW5kOiBub25lOyB9YH08L3N0eWxlPjwvZGl2PilcclxuICAgIClcclxuICAgIDogbnVsbFxyXG4gICAgfVxyXG4gICAgPE1hcmtkb3duIHNvdXJjZT17Ym9keX0+PHN0eWxlIGpzeD57YGltZyB7IG1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvO31gfTwvc3R5bGU+PC9NYXJrZG93bj5cclxuICAgIDwvZGl2PiAgXHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkXHJcblxyXG5cclxuY29uc3QgSXNzdWVDYXJkID0gKHsgaXNzdWUgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHsgc3RhdGU6IHsgZGF0YSB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgY29uc3Qge1xyXG4gICAgY2FyZF9pbmZvOiB7IGNhcmRfdXJsIH0sXHJcbiAgICBpc3N1ZV9hdXRob3I6IHsgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICBpc3N1ZV90aXRsZSxcclxuICAgIGlzc3VlX3VybCxcclxuICAgIHN0YXRlLFxyXG4gICAgY29sdW1uX25hbWUsXHJcbiAgICBsYWJlbHMsXHJcbiAgICBhc3NpZ25lZXMsXHJcbiAgICBib2R5VGV4dCxcclxuICAgIGJvZHksXHJcbiAgICBib2R5SFRNTCxcclxuICAgIGNhcmRfaW5mbzogeyBjYXJkX25vdGUgfVxyXG4gIH0gPSBpc3N1ZVxyXG5cclxuICBjb25zb2xlLmxvZyhcImxhYmVsczogXCIgKyBKU09OLnN0cmluZ2lmeShsYWJlbHMpKVxyXG4gIGNvbnN0IGltYWdlVGFnc1JlZ2V4ID0gLzxpbWcgW14+XSpzcmM9XCJbXlwiXSpcIltePl0qPi9nbVxyXG4gIGNvbnN0IGltYWdlU3JjUmVnZXggPSAvLipzcmM9XCIoW15cIl0qKVwiLiovXHJcbiAgY29uc3QgaW1hZ2VzID0gYm9keUhUTUwubGVuZ3RoID4gMCA/IGJvZHlIVE1MLm1hdGNoKGltYWdlVGFnc1JlZ2V4KSA6IG51bGxcclxuICBjb25zdCBiYW5uZXJTcmMgPSBpbWFnZXMgIT09IG51bGwgPyBpbWFnZXMubWFwKGltZyA9PiBpbWcucmVwbGFjZShpbWFnZVNyY1JlZ2V4LCAnJDEnKSlbMF0gOiBcIlwiXHJcblxyXG4gIGNvbnN0IGFsbEJyYWNrZXRzUmVnZXggPSAvXFxbLlxcXS9nXHJcbiAgY29uc3QgZG9uZUJyYWNrZXRzUmVnZXggPSAvXFxbeFxcXS9nXHJcbiAgLy8gY29uc29sZS5sb2coXCJyZWdleCBsZW5ndGg6IFwiICsgYm9keS5tYXRjaChhbGxCcmFja2V0c1JlZ2V4KSlcclxuICBjb25zdCB0b2Rvc0NvdW50ID0gYm9keS5sZW5ndGggPiAwID8gYm9keS5tYXRjaChhbGxCcmFja2V0c1JlZ2V4KSA6IDBcclxuICBjb25zdCBkb25lQ291bnQgPSBib2R5Lmxlbmd0aCA+IDAgPyBib2R5Lm1hdGNoKGRvbmVCcmFja2V0c1JlZ2V4KSA6IDBcclxuICBjb25zdCBwZXJjZW50RG9uZSA9IHRvZG9zQ291bnQgIT09IG51bGwgPyBNYXRoLmZsb29yKChkb25lQ291bnQubGVuZ3RoIC8gdG9kb3NDb3VudC5sZW5ndGgpICogMTAwKSA6IG51bGxcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKFwiYmFubmVyU3JjOiBcIiArIGJhbm5lclNyYylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgY292ZXI9e2Jhbm5lclNyYyAhPT0gXCJcIiA/XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PXtpc3N1ZV90aXRsZX1cclxuICAgICAgICAgIHNyYz17YmFubmVyU3JjfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgIDxhIGhyZWY9e2NhcmRfdXJsfT5cclxuICAgICAgICAgIDxJY29uIHR5cGU9XCJwcm9qZWN0XCIvPlxyXG4gICAgICAgIDwvYT4sXHJcbiAgICAgICAgPGEgaHJlZj17aXNzdWVfdXJsfT5cclxuICAgICAgICAgIDxJY29uIHR5cGU9XCJlZGl0XCIvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICAsXHJcbiAgICAgICAgLy8gPEljb24gdHlwZT1cImVsbGlwc2lzXCI+XHJcbiAgICAgICAgPEF2YXRhciBzcmM9eyBhc3NpZ25lZXMubGVuZ3RoID4gMCA/IGFzc2lnbmVlc1swXS5hdmF0YXJVcmwgOiBcIlwiIH0gc2l6ZT17XCJzbWFsbFwifS8+XHJcbiAgICAgICAgLy8gPC9JY29uPlxyXG5cclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPE1ldGFcclxuICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXthdXRob3JBdmF0YXJ9IC8+fVxyXG4gICAgICAgIHRpdGxlPXtpc3N1ZV90aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17PFN0YXRCYXIgYm9keT17Ym9keX0gcGVyY2VudERvbmU9e3BlcmNlbnREb25lfSB0YWdzPXtsYWJlbHN9Lz59XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcm91dGVyOiB7IHF1ZXJ5OiB7IGF1dGggfSB9IH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FsZW5kYXJSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IChhdXRoKSA9PiBmZXRjaGVyKGF1dGgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FEJyxcclxuICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgYXV0aDogYXV0aFxyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlczogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgfSlcclxuXHJcbiAgICBmZXRjaERhdGEoYXV0aClcclxuICB9LCBbXSlcclxuICBjb25zdCBmaXJlRGF0ZVNlbGVjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImUuX2Q6IFwiICsgbmV3IERhdGUoZS5fZCkuc2V0SG91cnMoMCwwLDAsMCkpXHJcbiAgICBjb25zdCBtYXRjaGVkID0gcmV0cmlldmVNYXRjaGVzKHN0YXRlLmRhdGEsIGUuX2QpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdPUEVOX0RSQVdFUicsXHJcbiAgICAgIGNvbnRlbnRzOiBtYXRjaGVkXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBjbG9zZURyYXdlciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0NMT1NFX0RSQVdFUidcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICA8Q2FsZW5kYXIgZGF0ZUNlbGxSZW5kZXI9e2RhdGVDZWxsUmVuZGVyfSBtb250aENlbGxSZW5kZXI9e21vbnRoQ2VsbFJlbmRlcn0gb25TZWxlY3Q9e2ZpcmVEYXRlU2VsZWN0aW9ufSAvPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdGl0bGU9XCJJc3N1ZXM6XCJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VEcmF3ZXJ9XHJcbiAgICAgICAgdmlzaWJsZT17c3RhdGUuZHJhd2VyT3Blbn1cclxuICAgICAgICB3aWR0aD17XCIzMDBweFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7c3RhdGUuZHJhd2VyQ29udGVudHMgPyBzdGF0ZS5kcmF3ZXJDb250ZW50cy5tYXAoKGlzc3VlLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2lzc3VlLmtleX0+XHJcbiAgICAgICAgICAgICAgPElzc3VlQ2FyZCBpc3N1ZT17aXNzdWV9IC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKSkgOiBcIlwifVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhZ2VSb3V0ZXIoSW5kZXgpIl19 */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */")));
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
  var percentDone = todosCount !== null ? Math.floor(doneCount.length / todosCount.length * 100) : null;
  console.log("bannerSrc: " + bannerSrc);
  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      width: '100%'
    },
    cover: bannerSrc !== "" ? react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("img", {
      alt: issue_title,
      src: bannerSrc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }) : null,
    actions: [react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("a", {
      href: card_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("a", {
      href: issue_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    })), // <Icon type="ellipsis">
    react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      src: assignees.length > 0 ? assignees[0].avatarUrl : "",
      size: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }) // </Icon>
    ],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      src: authorAvatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
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
        lineNumber: 334
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }));
};

var Index = function Index(_ref9) {
  var auth = _ref9.router.query.auth;

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
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    dateCellRender: dateCellRender,
    monthCellRender: monthCellRender,
    onSelect: fireDateSelection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Issues:",
    placement: "right",
    closable: true,
    onClose: closeDrawer,
    visible: state.drawerOpen,
    width: "300px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, state.drawerContents ? state.drawerContents.map(function (issue, idx) {
    return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      key: issue.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(IssueCard, {
      issue: issue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }));
  }) : "")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withPageRouter__WEBPACK_IMPORTED_MODULE_27__["withPageRouter"])(Index));

/***/ })

})
//# sourceMappingURL=calendar.js.34f30fe0cf6a636559fd.hot-update.js.map