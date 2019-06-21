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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/list/style */ "./node_modules/antd/lib/list/style/index.js");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar/style */ "./node_modules/antd/lib/avatar/style/index.js");
/* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/calendar/style */ "./node_modules/antd/lib/calendar/style/index.js");
/* harmony import */ var antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/calendar */ "./node_modules/antd/lib/calendar/index.js");
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/badge/style */ "./node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_withPageRouter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/withPageRouter */ "./components/withPageRouter.js");
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! nanographql */ "./node_modules/nanographql/index.js");
/* harmony import */ var nanographql__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(nanographql__WEBPACK_IMPORTED_MODULE_19__);
















var _jsxFileName = "C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_15__["default"])(["\nquery ($name: String!, $owner: String!) { \n  repository(name: $name, owner: $owner){\n    issues(last:100){\n      edges{\n        node{\n          id\n          title\n          url\n          assignees (first:10){\n            edges {\n              node {\n                id\n                name\n                avatarUrl\n              }\n            }\n          }\n          author{\n            login\n            avatarUrl\n          }\n          milestone {\n            id\n            dueOn\n          }\n          state\n          labels(first:10) {\n            edges {\n              node {\n                id\n                color\n                name\n              }\n            }\n          }\n          projectCards{\n            nodes{\n              column{\n                name\n                createdAt\n              }\n            }\n            edges{\n              node {\n                id\n                note\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import { Fragment } from 'react';


 // const client = new GraphQLClient({
//   url: 'https://api.github.com/graphql',
// })

var ISSUES_QUERY = nanographql__WEBPACK_IMPORTED_MODULE_19___default()(_templateObject());

var fetcher =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_14__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.mark(function _callee(auth) {
    var result, prime, edges;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_12___default.a.wrap(function _callee$(_context) {
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
                  dueOn = node.milestone.dueOn,
                  state = node.state,
                  label_edges = node.labels.edges,
                  _node$projectCards = node.projectCards,
                  _node$projectCards$no = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__["default"])(_node$projectCards.nodes, 1),
                  column_name = _node$projectCards$no[0].column.name,
                  _node$projectCards$ed = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__["default"])(_node$projectCards.edges, 1),
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

var DataCells = function DataCells(_ref6) {
  var value = _ref6.value;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_17__["useContext"])(Context),
      data = _useContext.state.data;

  if (!data) {
    return null;
  } else {
    var filteredIssues = getListData(data, value); // console.log('issues: ' + data)
    // console.log("state: " + state )

    return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("ul", {
      className: "jsx-210777900" + " " + "events",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, filteredIssues.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("li", {
        key: item.content,
        className: "jsx-210777900",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_11___default.a, {
        status: item.type,
        text: item.content,
        className: "ant-badge-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }));
    }), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_16___default.a, {
      id: "210777900",
      __self: this
    }, ".events.jsx-210777900{list-style:none;margin:0;padding:0;}.events.jsx-210777900 .ant-badge-status.jsx-210777900{overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdUb0IsQUFHMkIsQUFLQSxnQkFKUCxBQUtVLFNBSlQsVUFDWixBQUlhLFdBQ1ksdUJBQ1IsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UsIERyYXdlciwgTGlzdCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhQYWdlUm91dGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy93aXRoUGFnZVJvdXRlcidcclxuXHJcbmltcG9ydCBncWwgZnJvbSAnbmFub2dyYXBocWwnXHJcblxyXG5cclxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4vLyAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsXHJcblxyXG4vLyB9KVxyXG5cclxuY29uc3QgSVNTVUVTX1FVRVJZID0gZ3FsYFxyXG5xdWVyeSAoJG5hbWU6IFN0cmluZyEsICRvd25lcjogU3RyaW5nISkgeyBcclxuICByZXBvc2l0b3J5KG5hbWU6ICRuYW1lLCBvd25lcjogJG93bmVyKXtcclxuICAgIGlzc3VlcyhsYXN0OjEwMCl7XHJcbiAgICAgIGVkZ2Vze1xyXG4gICAgICAgIG5vZGV7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYXNzaWduZWVzIChmaXJzdDoxMCl7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF1dGhvcntcclxuICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtaWxlc3RvbmUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBkdWVPblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGxhYmVscyhmaXJzdDoxMCkge1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByb2plY3RDYXJkc3tcclxuICAgICAgICAgICAgbm9kZXN7XHJcbiAgICAgICAgICAgICAgY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5vdGVcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoYXV0aCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IFwidG9rZW4gXCIgKyBhdXRoIH0sXHJcbiAgICBib2R5OiBJU1NVRVNfUVVFUlkoeyBuYW1lOiBcImVtYmVkc1wiLCBvd25lcjogXCJsb2dhbnBvd2VsbFwiIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcHJpbWUgPSBhd2FpdCByZXN1bHQuanNvbigpXHJcbiAgLy8gY29uc29sZS5sb2coXCJwcmltZTpcIilcclxuICBjb25zdCB7IGRhdGE6IHsgcmVwb3NpdG9yeTogeyBpc3N1ZXM6IHsgZWRnZXMgfSB9IH0gfSA9IHByaW1lXHJcbiAgLy8gY29uc29sZS5sb2cocHJpbWUpXHJcblxyXG4gIHJldHVybiBlZGdlcy5tYXAoKHsgbm9kZSB9LCBpZHgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHVybCxcclxuICAgICAgYXNzaWduZWVzOiB7IGVkZ2VzOiBhc3NpZ25lZV9lZGdlcyB9LFxyXG4gICAgICBhdXRob3I6IHsgbG9naW4sIGF2YXRhclVybDogYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIG1pbGVzdG9uZTogeyBkdWVPbiB9LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgbGFiZWxzOiB7IGVkZ2VzOiBsYWJlbF9lZGdlcyB9LFxyXG4gICAgICBwcm9qZWN0Q2FyZHM6IHtcclxuICAgICAgICBub2RlczogW3sgY29sdW1uOiB7IG5hbWU6IGNvbHVtbl9uYW1lIH0gfV0sXHJcbiAgICAgICAgZWRnZXM6IFt7IG5vZGU6IHsgbm90ZTogY2FyZF9ub3RlLCB1cmw6IGNhcmRfdXJsIH0gfV1cclxuICAgICAgfVxyXG4gICAgfSA9IG5vZGVcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBrZXk6IGlkeCxcclxuICAgICAgaXNzdWVfdGl0bGU6IHRpdGxlLFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgZHVlT24sXHJcbiAgICAgIGlzc3VlX2F1dGhvcjogeyB1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyIH0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9IH0pID0+ICh7IG5hbWUsIGF2YXRhclVybCB9KSksXHJcbiAgICAgIGxhYmVsczogbGFiZWxfZWRnZXMubWFwKCh7IG5vZGU6IHsgY29sb3IsIG5hbWUgfSB9KSA9PiAoeyBjb2xvciwgbmFtZSB9KSksXHJcbiAgICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlLCBjYXJkX3VybCB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldExpc3REYXRhKGRhdGEsIHZhbHVlKSB7XHJcblxyXG4gIGxldCBpbnB1dCA9IG5ldyBEYXRlKHZhbHVlKS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gIC8vIGNvbnNvbGUubG9nKFwidmFsdWU6IFwiICsgdmFsdWUpXHJcblxyXG4gIC8vIGxldCBmZXRjaGVkRGF0ZSA9IG5ldyBEYXRlKFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIikudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXHJcbiAgbGV0IG1hdGNoZXMgPSBkYXRhLmZpbHRlcigoY3VyLCBpZHgpID0+IG5ldyBEYXRlKGN1ci5kdWVPbikuc2V0SG91cnMoMCwgMCwgMCwgMCkgPT09IGlucHV0KVxyXG4gIHJldHVybiBtYXRjaGVzLm1hcCgoeyBzdGF0ZSwgaXNzdWVfdGl0bGUgfSkgPT4gKHtcclxuICAgIHR5cGU6IHN0YXRlID09PSBcIk9QRU5cIiA/ICdlcnJvcicgOiAnc3VjY2VzcycsXHJcbiAgICBjb250ZW50OiBpc3N1ZV90aXRsZVxyXG4gIH0pKVxyXG59XHJcblxyXG5sZXQgZXhhbXBsZV9yZXNwb25zZSA9IHtcclxuICBcImRhdGFcIjoge1xyXG4gICAgXCJyZXBvc2l0b3J5XCI6IHtcclxuICAgICAgXCJpc3N1ZXNcIjoge1xyXG4gICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TlRjMk1qYz1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyBiYWNrLWxvZ1wiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvMlwiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRFE2VlhObGNqTTBNRGd4T1RFPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9nYW4gUG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsb2dpblwiOiBcImxvZ2FucG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtaWxlc3RvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EazZUV2xzWlhOMGIyNWxORFF5TkRVMk5BPT1cIixcclxuICAgICAgICAgICAgICAgIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiT1BFTlwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicHJvamVjdENhcmRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmFjay1sb2dcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NDo1OVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOek00TWpZPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTczODI2XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOVGs0TURZPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIHdpcFwiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvM1wiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibG9naW5cIjogXCJsb2dhbnBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWlsZXN0b25lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRGs2VFdsc1pYTjBiMjVsTkRReU5EVTJOQT09XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIk9QRU5cIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlRHRmlaV3d4TkRBek5URTVNekl3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiZDczYTRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJidWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwcm9qZWN0Q2FyZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJub2Rlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXSVBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NTowNlpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOelF3TkRVPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTc0MDQ1XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOakF6TlRRPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIGRvbmVcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzRcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImxvZ2luXCI6IFwibG9nYW5wb3dlbGxcIixcclxuICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1pbGVzdG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURrNlRXbHNaWE4wYjI1bE5EUXlORFUyTkE9PVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWVPblwiOiBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic3RhdGVcIjogXCJDTE9TRURcIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlRHRmlaV3d4TkRBek5URTVNekl6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiYTJlZWVmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJlbmhhbmNlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInByb2plY3RDYXJkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NToxMVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOelF4TVRjPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTc0MTE3XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgRGF0YUNlbGxzID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGU6IHsgZGF0YSB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgZmlsdGVyZWRJc3N1ZXMgPSBnZXRMaXN0RGF0YShkYXRhLCB2YWx1ZSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnaXNzdWVzOiAnICsgZGF0YSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHN0YXRlIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuICAgICAgICB7ZmlsdGVyZWRJc3N1ZXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5jb250ZW50fT5cclxuICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS50eXBlfSB0ZXh0PXtpdGVtLmNvbnRlbnR9IGNsYXNzTmFtZT1cImFudC1iYWRnZS1zdGF0dXNcIiAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmV2ZW50cyB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmNvbnN0IGRhdGVDZWxsUmVuZGVyID0gdmFsdWUgPT4gPERhdGFDZWxscyB2YWx1ZT17dmFsdWV9IC8+XHJcblxyXG5mdW5jdGlvbiBnZXRNb250aERhdGEodmFsdWUpIHtcclxuICBpZiAodmFsdWUubW9udGgoKSA9PT0gOCkge1xyXG4gICAgcmV0dXJuIDEzOTQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb250aENlbGxSZW5kZXIodmFsdWUpIHtcclxuICBjb25zdCBudW0gPSBnZXRNb250aERhdGEodmFsdWUpO1xyXG4gIHJldHVybiBudW0gPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzLW1vbnRoXCI+XHJcbiAgICAgIDxzZWN0aW9uPntudW19PC9zZWN0aW9uPlxyXG4gICAgICA8c3Bhbj5CYWNrbG9nIG51bWJlcjwvc3Bhbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubm90ZXMtbW9udGgge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG4vLyBSRURVQ0VSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjYWxlbmRhclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQUQnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogYWN0aW9uLmF1dGgsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ09QRU5fRFJBV0VSJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRyYXdlck9wZW46IHRydWUsXHJcbiAgICAgICAgZHJhd2VyQ29udGVudHM6IGFjdGlvbi5jb250ZW50c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdDTE9TRV9EUkFXRVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZHJhd2VyT3BlbjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDogcmV0dXJuIHtcclxuICAgICAgLi4uc3RhdGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIENPTlRFWFQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG4vLyBJTklUSUFMIFNUQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGF1dGg6IFwibG9hZGluZy4uLlwiLFxyXG4gIGxvYWRlZDogZmFsc2UsXHJcbiAgZGF0YTogW10sXHJcbiAgZHJhd2VyT3BlbjogZmFsc2UsXHJcbiAgZHJhd2VyQ29udGVudHM6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHJldHJpZXZlTWF0Y2hlcyA9IChkYXRhLCBkYXRlKSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKGRhdHVtID0+IG5ldyBEYXRlKGRhdGUpLnNldEhvdXJzKDAsIDAsIDAsIDApID09PSBuZXcgRGF0ZShkYXR1bS5kdWVPbikuc2V0SG91cnMoMCwgMCwgMCwgMCkpXHJcbiAgcmV0dXJuIG1hdGNoZXNcclxufVxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcm91dGVyOiB7IHF1ZXJ5OiB7IGF1dGggfSB9IH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FsZW5kYXJSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IChhdXRoKSA9PiBmZXRjaGVyKGF1dGgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FEJyxcclxuICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgYXV0aDogYXV0aFxyXG4gICAgICB9KVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJlczogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgfSlcclxuXHJcbiAgICBmZXRjaERhdGEoYXV0aClcclxuICB9LCBbXSlcclxuICBjb25zdCBmaXJlRGF0ZVNlbGVjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImUuX2Q6IFwiICsgbmV3IERhdGUoZS5fZCkuc2V0SG91cnMoMCwwLDAsMCkpXHJcbiAgICBjb25zdCBtYXRjaGVkID0gcmV0cmlldmVNYXRjaGVzKHN0YXRlLmRhdGEsIGUuX2QpXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdPUEVOX0RSQVdFUicsXHJcbiAgICAgIGNvbnRlbnRzOiBtYXRjaGVkXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBjbG9zZURyYXdlciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ0NMT1NFX0RSQVdFUidcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICA8Q2FsZW5kYXIgZGF0ZUNlbGxSZW5kZXI9e2RhdGVDZWxsUmVuZGVyfSBtb250aENlbGxSZW5kZXI9e21vbnRoQ2VsbFJlbmRlcn0gb25TZWxlY3Q9e2ZpcmVEYXRlU2VsZWN0aW9ufSAvPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdGl0bGU9XCJJc3N1ZXM6XCJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgb25DbG9zZT17Y2xvc2VEcmF3ZXJ9XHJcbiAgICAgICAgdmlzaWJsZT17c3RhdGUuZHJhd2VyT3Blbn1cclxuICAgICAgICB3aWR0aD17NjAwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7c3RhdGUuZHJhd2VyQ29udGVudHMgPyBzdGF0ZS5kcmF3ZXJDb250ZW50cy5tYXAoKGlzc3VlLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpc3N1ZS5pc3N1ZV9hdXRob3IuYXV0aG9yQXZhdGFyfSAvPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpc3N1ZS5pc3N1ZV91cmx9Pntpc3N1ZS5pc3N1ZV90aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5TdGF0dXM6IHtpc3N1ZS5zdGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7aXNzdWUubGFiZWxzID8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBMYWJlbHM6IHtpc3N1ZS5sYWJlbHMubWFwKChsYWJlbCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGtleT17aWR4fSBcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2xhYmVsLm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2AjJHtsYWJlbC5jb2xvcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgOiA8cD5ub25lPC9wPn1cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAge2lzc3VlLmFzc2lnbmVlcyA/IFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzPkFzc2lnbmVlczogPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IGlzc3VlLmFzc2lnbmVlcy5tYXAoKGFzc2lnbmVlLCBpZHgpID0+IDxkaXY+PEF2YXRhciBzcmM9e2Fzc2lnbmVlLmF2YXRhclVybH0vPjxwPnthc3NpZ25lZS5uYW1lfTwvcD48L2Rpdj4pIH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGlzc3VlKX1cclxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICApKSA6IFwiXCJ9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbi8vIDx1bCBjbGFzc05hbWU9XCJldmVudHNcIj5cclxuLy8gICAgICAgICB7ZmlsdGVyZWRJc3N1ZXMubWFwKGl0ZW0gPT4gKFxyXG4vLyAgICAgICAgICAgPGxpIGtleT17aXRlbS5jb250ZW50fT5cclxuLy8gICAgICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS50eXBlfSB0ZXh0PXtpdGVtLmNvbnRlbnR9IGNsYXNzTmFtZT1cImFudC1iYWRnZS1zdGF0dXNcIiAvPlxyXG4vLyAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICApKX1cclxuLy8gICAgICAgICA8c3R5bGUganN4PntgXHJcbi8vICAgICAgICAgLmV2ZW50cyB7XHJcbi8vICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4vLyAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XHJcbi8vICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGB9XHJcbi8vICAgICAgICAgPC9zdHlsZT5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhQYWdlUm91dGVyKEluZGV4KVxyXG5cclxubGV0IGV4YW1wbGUgPSB7XHJcbiAgXCJrZXlcIjogMCxcclxuICBcImlzc3VlX3RpdGxlXCI6IFwidGVzdGluZyBiYWNrLWxvZ1wiLCBcclxuICBcInN0YXRlXCI6IFwiT1BFTlwiLCBcclxuICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIixcclxuICBcImlzc3VlX2F1dGhvclwiOiB7IFwidXNlcl9pZFwiOiBcImxvZ2FucG93ZWxsXCIsIFwiYXV0aG9yQXZhdGFyXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiIH0sXHJcbiAgXCJpc3N1ZV91cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL2lzc3Vlcy8yXCIsXHJcbiAgXCJhc3NpZ25lZXNcIjogW3sgXCJuYW1lXCI6IFwiTG9nYW4gUG93ZWxsXCIsIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiIH1dLFxyXG4gIFwibGFiZWxzXCI6IFtdLFxyXG4gIFwiY29sdW1uX25hbWVcIjogXCJiYWNrLWxvZ1wiLFxyXG4gIFwiY2FyZF9pbmZvXCI6IHsgXCJjYXJkX25vdGVcIjogbnVsbCxcclxuICBcImNhcmRfdXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9wcm9qZWN0cy8xI2NhcmQtMjI5NzM4MjZcIiB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
  }

  return null;
};

var dateCellRender = function dateCellRender(value) {
  return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(DataCells, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
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
  return num ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
    className: "jsx-2153197830" + " " + "notes-month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("section", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, num), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "Backlog number"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_16___default.a, {
    id: "2153197830",
    __self: this
  }, ".notes-month.jsx-2153197830{text-align:center;font-size:28px;}.notes-month.jsx-2153197830 section.jsx-2153197830{font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Wa0IsQUFHMkIsQUFJSCxlQUNqQixHQUppQixlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxvZ2FuXFxQcm9qZWN0c1xcY2Vuc3VzXFxtYXJrZXRpbmdcXHBhZ2VzXFxjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyLCBCYWRnZSwgRHJhd2VyLCBMaXN0LCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFBhZ2VSb3V0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQYWdlUm91dGVyJ1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICduYW5vZ3JhcGhxbCdcclxuXHJcblxyXG4vLyBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCh7XHJcbi8vICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJyxcclxuXHJcbi8vIH0pXHJcblxyXG5jb25zdCBJU1NVRVNfUVVFUlkgPSBncWxgXHJcbnF1ZXJ5ICgkbmFtZTogU3RyaW5nISwgJG93bmVyOiBTdHJpbmchKSB7IFxyXG4gIHJlcG9zaXRvcnkobmFtZTogJG5hbWUsIG93bmVyOiAkb3duZXIpe1xyXG4gICAgaXNzdWVzKGxhc3Q6MTAwKXtcclxuICAgICAgZWRnZXN7XHJcbiAgICAgICAgbm9kZXtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgdXJsXHJcbiAgICAgICAgICBhc3NpZ25lZXMgKGZpcnN0OjEwKXtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aG9ye1xyXG4gICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1pbGVzdG9uZSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGR1ZU9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgbGFiZWxzKGZpcnN0OjEwKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJvamVjdENhcmRze1xyXG4gICAgICAgICAgICBub2Rlc3tcclxuICAgICAgICAgICAgICBjb2x1bW57XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWRnZXN7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbm90ZVxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59YFxyXG5cclxuY29uc3QgZmV0Y2hlciA9IGFzeW5jIChhdXRoKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogXCJ0b2tlbiBcIiArIGF1dGggfSxcclxuICAgIGJvZHk6IElTU1VFU19RVUVSWSh7IG5hbWU6IFwiZW1iZWRzXCIsIG93bmVyOiBcImxvZ2FucG93ZWxsXCIgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAvLyBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9IH0gfSB9ID0gcHJpbWVcclxuICAvLyBjb25zb2xlLmxvZyhwcmltZSlcclxuXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgbWlsZXN0b25lOiB7IGR1ZU9uIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBsYWJlbHM6IHsgZWRnZXM6IGxhYmVsX2VkZ2VzIH0sXHJcbiAgICAgIHByb2plY3RDYXJkczoge1xyXG4gICAgICAgIG5vZGVzOiBbeyBjb2x1bW46IHsgbmFtZTogY29sdW1uX25hbWUgfSB9XSxcclxuICAgICAgICBlZGdlczogW3sgbm9kZTogeyBub3RlOiBjYXJkX25vdGUsIHVybDogY2FyZF91cmwgfSB9XVxyXG4gICAgICB9XHJcbiAgICB9ID0gbm9kZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleTogaWR4LFxyXG4gICAgICBpc3N1ZV90aXRsZTogdGl0bGUsXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBkdWVPbixcclxuICAgICAgaXNzdWVfYXV0aG9yOiB7IHVzZXJfaWQ6IGxvZ2luLCBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgaXNzdWVfdXJsOiB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogYXNzaWduZWVfZWRnZXMubWFwKCh7IG5vZGU6IHsgbmFtZSwgYXZhdGFyVXJsIH0gfSkgPT4gKHsgbmFtZSwgYXZhdGFyVXJsIH0pKSxcclxuICAgICAgbGFiZWxzOiBsYWJlbF9lZGdlcy5tYXAoKHsgbm9kZTogeyBjb2xvciwgbmFtZSB9IH0pID0+ICh7IGNvbG9yLCBuYW1lIH0pKSxcclxuICAgICAgY29sdW1uX25hbWUsXHJcbiAgICAgIGNhcmRfaW5mbzogeyBjYXJkX25vdGUsIGNhcmRfdXJsIH1cclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpIHtcclxuXHJcbiAgbGV0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpLnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbiAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZTogXCIgKyB2YWx1ZSlcclxuXHJcbiAgLy8gbGV0IGZldGNoZWREYXRlID0gbmV3IERhdGUoXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICBsZXQgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKChjdXIsIGlkeCkgPT4gbmV3IERhdGUoY3VyLmR1ZU9uKS5zZXRIb3VycygwLCAwLCAwLCAwKSA9PT0gaW5wdXQpXHJcbiAgcmV0dXJuIG1hdGNoZXMubWFwKCh7IHN0YXRlLCBpc3N1ZV90aXRsZSB9KSA9PiAoe1xyXG4gICAgdHlwZTogc3RhdGUgPT09IFwiT1BFTlwiID8gJ2Vycm9yJyA6ICdzdWNjZXNzJyxcclxuICAgIGNvbnRlbnQ6IGlzc3VlX3RpdGxlXHJcbiAgfSkpXHJcbn1cclxuXHJcbmxldCBleGFtcGxlX3Jlc3BvbnNlID0ge1xyXG4gIFwiZGF0YVwiOiB7XHJcbiAgICBcInJlcG9zaXRvcnlcIjoge1xyXG4gICAgICBcImlzc3Vlc1wiOiB7XHJcbiAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOVGMyTWpjPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIGJhY2stbG9nXCIsXHJcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL2lzc3Vlcy8yXCIsXHJcbiAgICAgICAgICAgICAgXCJhc3NpZ25lZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EUTZWWE5sY2pNME1EZ3hPVEU9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMb2dhbiBQb3dlbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImxvZ2luXCI6IFwibG9nYW5wb3dlbGxcIixcclxuICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1pbGVzdG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURrNlRXbHNaWE4wYjI1bE5EUXlORFUyTkE9PVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWVPblwiOiBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic3RhdGVcIjogXCJPUEVOXCIsXHJcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwcm9qZWN0Q2FyZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJub2Rlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiYWNrLWxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE5LTA2LTE5VDE0OjQ0OjU5WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1ERXhPbEJ5YjJwbFkzUkRZWEprTWpJNU56TTRNalk9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9wcm9qZWN0cy8xI2NhcmQtMjI5NzM4MjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlNYTnpkV1UwTlRnd05UazRNRFk9XCIsXHJcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcInRlc3Rpbmcgd2lwXCIsXHJcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL2lzc3Vlcy8zXCIsXHJcbiAgICAgICAgICAgICAgXCJhc3NpZ25lZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsb2dpblwiOiBcImxvZ2FucG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtaWxlc3RvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EazZUV2xzWlhOMGIyNWxORFF5TkRVMk5BPT1cIixcclxuICAgICAgICAgICAgICAgIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiT1BFTlwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2VEdGaVpXd3hOREF6TlRFNU16SXdcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJkNzNhNGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJ1Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInByb2plY3RDYXJkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldJUFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE5LTA2LTE5VDE0OjQ1OjA2WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1ERXhPbEJ5YjJwbFkzUkRZWEprTWpJNU56UXdORFU9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9wcm9qZWN0cy8xI2NhcmQtMjI5NzQwNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlNYTnpkV1UwTlRnd05qQXpOVFE9XCIsXHJcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcInRlc3RpbmcgZG9uZVwiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvNFwiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibG9naW5cIjogXCJsb2dhbnBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWlsZXN0b25lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRGs2VFdsc1pYTjBiMjVsTkRReU5EVTJOQT09XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIkNMT1NFRFwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2VEdGaVpXd3hOREF6TlRFNU16SXpcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJhMmVlZWZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImVuaGFuY2VtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicHJvamVjdENhcmRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIjogXCIyMDE5LTA2LTE5VDE0OjQ1OjExWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1ERXhPbEJ5YjJwbFkzUkRZWEprTWpJNU56UXhNVGM9XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVcIjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9wcm9qZWN0cy8xI2NhcmQtMjI5NzQxMTdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBEYXRhQ2VsbHMgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZTogeyBkYXRhIH0gfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZElzc3VlcyA9IGdldExpc3REYXRhKGRhdGEsIHZhbHVlKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdpc3N1ZXM6ICcgKyBkYXRhKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhdGU6IFwiICsgc3RhdGUgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4gICAgICAgIHtmaWx0ZXJlZElzc3Vlcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZXZlbnRzIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuY29uc3QgZGF0ZUNlbGxSZW5kZXIgPSB2YWx1ZSA9PiA8RGF0YUNlbGxzIHZhbHVlPXt2YWx1ZX0gLz5cclxuXHJcbmZ1bmN0aW9uIGdldE1vbnRoRGF0YSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZS5tb250aCgpID09PSA4KSB7XHJcbiAgICByZXR1cm4gMTM5NDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbnRoQ2VsbFJlbmRlcih2YWx1ZSkge1xyXG4gIGNvbnN0IG51bSA9IGdldE1vbnRoRGF0YSh2YWx1ZSk7XHJcbiAgcmV0dXJuIG51bSA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZXMtbW9udGhcIj5cclxuICAgICAgPHNlY3Rpb24+e251bX08L3NlY3Rpb24+XHJcbiAgICAgIDxzcGFuPkJhY2tsb2cgbnVtYmVyPC9zcGFuPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5ub3Rlcy1tb250aCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICAubm90ZXMtbW9udGggc2VjdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbDtcclxufVxyXG5cclxuXHJcbi8vIFJFRFVDRVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNhbGVuZGFyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnTE9BRCc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoOiBhY3Rpb24uYXV0aCxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICBsb2FkZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSAnT1BFTl9EUkFXRVInOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZHJhd2VyT3BlbjogdHJ1ZSxcclxuICAgICAgICBkcmF3ZXJDb250ZW50czogYWN0aW9uLmNvbnRlbnRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ0NMT1NFX0RSQVdFUic6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkcmF3ZXJPcGVuOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ09OVEVYVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbi8vIElOSVRJQUwgU1RBVEUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aDogXCJsb2FkaW5nLi4uXCIsXHJcbiAgbG9hZGVkOiBmYWxzZSxcclxuICBkYXRhOiBbXSxcclxuICBkcmF3ZXJPcGVuOiBmYWxzZSxcclxuICBkcmF3ZXJDb250ZW50czogW11cclxufVxyXG5cclxuY29uc3QgcmV0cmlldmVNYXRjaGVzID0gKGRhdGEsIGRhdGUpID0+IHtcclxuICBjb25zdCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoZGF0dW0gPT4gbmV3IERhdGUoZGF0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCkgPT09IG5ldyBEYXRlKGRhdHVtLmR1ZU9uKS5zZXRIb3VycygwLCAwLCAwLCAwKSlcclxuICByZXR1cm4gbWF0Y2hlc1xyXG59XHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG5cclxuICAgIGZldGNoRGF0YShhdXRoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGZpcmVEYXRlU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZS5fZDogXCIgKyBuZXcgRGF0ZShlLl9kKS5zZXRIb3VycygwLDAsMCwwKSlcclxuICAgIGNvbnN0IG1hdGNoZWQgPSByZXRyaWV2ZU1hdGNoZXMoc3RhdGUuZGF0YSwgZS5fZClcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ09QRU5fRFJBV0VSJyxcclxuICAgICAgY29udGVudHM6IG1hdGNoZWRcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnQ0xPU0VfRFJBV0VSJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhcIkRBVEE6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxDYWxlbmRhciBkYXRlQ2VsbFJlbmRlcj17ZGF0ZUNlbGxSZW5kZXJ9IG1vbnRoQ2VsbFJlbmRlcj17bW9udGhDZWxsUmVuZGVyfSBvblNlbGVjdD17ZmlyZURhdGVTZWxlY3Rpb259IC8+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB0aXRsZT1cIklzc3VlczpcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXtjbG9zZURyYXdlcn1cclxuICAgICAgICB2aXNpYmxlPXtzdGF0ZS5kcmF3ZXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXs2MDB9XHJcbiAgICAgID5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtzdGF0ZS5kcmF3ZXJDb250ZW50cyA/IHN0YXRlLmRyYXdlckNvbnRlbnRzLm1hcCgoaXNzdWUsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2lzc3VlLmlzc3VlX2F1dGhvci5hdXRob3JBdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2lzc3VlLmlzc3VlX3VybH0+e2lzc3VlLmlzc3VlX3RpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2PlN0YXR1czoge2lzc3VlLnN0YXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHtpc3N1ZS5sYWJlbHMgPyBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIExhYmVsczoge2lzc3VlLmxhYmVscy5tYXAoKGxhYmVsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2Uga2V5PXtpZHh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17bGFiZWwubmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17YCMke2xhYmVsLmNvbG9yfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA6IDxwPm5vbmU8L3A+fVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICB7aXNzdWUuYXNzaWduZWVzID8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+QXNzaWduZWVzOiA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgaXNzdWUuYXNzaWduZWVzLm1hcCgoYXNzaWduZWUsIGlkeCkgPT4gPGRpdj48QXZhdGFyIHNyYz17YXNzaWduZWUuYXZhdGFyVXJsfS8+PHA+e2Fzc2lnbmVlLm5hbWV9PC9wPjwvZGl2PikgfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoaXNzdWUpfVxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICkpIDogXCJcIn1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuLy8gPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4vLyAgICAgICAgIHtmaWx0ZXJlZElzc3Vlcy5tYXAoaXRlbSA9PiAoXHJcbi8vICAgICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4vLyAgICAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbi8vICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICkpfVxyXG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuLy8gICAgICAgICAuZXZlbnRzIHtcclxuLy8gICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuLy8gICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgYH1cclxuLy8gICAgICAgICA8L3N0eWxlPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhZ2VSb3V0ZXIoSW5kZXgpXHJcblxyXG5sZXQgZXhhbXBsZSA9IHtcclxuICBcImtleVwiOiAwLFxyXG4gIFwiaXNzdWVfdGl0bGVcIjogXCJ0ZXN0aW5nIGJhY2stbG9nXCIsIFxyXG4gIFwic3RhdGVcIjogXCJPUEVOXCIsIFxyXG4gIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiLFxyXG4gIFwiaXNzdWVfYXV0aG9yXCI6IHsgXCJ1c2VyX2lkXCI6IFwibG9nYW5wb3dlbGxcIiwgXCJhdXRob3JBdmF0YXJcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCIgfSxcclxuICBcImlzc3VlX3VybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzJcIixcclxuICBcImFzc2lnbmVlc1wiOiBbeyBcIm5hbWVcIjogXCJMb2dhbiBQb3dlbGxcIiwgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCIgfV0sXHJcbiAgXCJsYWJlbHNcIjogW10sXHJcbiAgXCJjb2x1bW5fbmFtZVwiOiBcImJhY2stbG9nXCIsXHJcbiAgXCJjYXJkX2luZm9cIjogeyBcImNhcmRfbm90ZVwiOiBudWxsLFxyXG4gIFwiY2FyZF91cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3MzgyNlwiIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */")) : null;
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
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state, {
          drawerOpen: true,
          drawerContents: action.contents
        });
      }

    case 'CLOSE_DRAWER':
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state, {
          drawerOpen: false
        });
      }

    default:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_9__["default"])({}, state);
  }
}; // CONTEXT ==================================


var Context = react__WEBPACK_IMPORTED_MODULE_17___default.a.createContext(); // INITIAL STATE ============================

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

var Index = function Index(_ref7) {
  var auth = _ref7.router.query.auth;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_17__["useReducer"])(calendarReducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_17__["useEffect"])(function () {
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


  return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    dateCellRender: dateCellRender,
    monthCellRender: monthCellRender,
    onSelect: fireDateSelection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: "Issues:",
    placement: "right",
    closable: true,
    onClose: closeDrawer,
    visible: state.drawerOpen,
    width: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, state.drawerContents ? state.drawerContents.map(function (issue, idx) {
    return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item.Meta, {
      avatar: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        src: issue.issue_author.authorAvatar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }),
      title: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("a", {
        href: issue.issue_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, issue.issue_title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450
      },
      __self: this
    }, "Status: ", issue.state), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }), issue.labels ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, "Labels: ", issue.labels.map(function (label, idx) {
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_11___default.a, {
        key: idx,
        text: label.name,
        color: "#".concat(label.color),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      });
    })) : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461
      },
      __self: this
    }, "none"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462
      },
      __self: this
    }), issue.assignees ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466
      },
      __self: this
    }, "Assignees: "), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, issue.assignees.map(function (assignee, idx) {
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        src: assignee.avatarUrl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, assignee.name));
    }))) : "", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(issue));
  }) : "")));
}; // <ul className="events">
//         {filteredIssues.map(item => (
//           <li key={item.content}>
//             <Badge status={item.type} text={item.content} className="ant-badge-status" />
//           </li>
//         ))}
//         <style jsx>{`
//         .events {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }
//         .events .ant-badge-status {
//           overflow: hidden;
//           white-space: nowrap;
//           width: 100%;
//           text-overflow: ellipsis;
//           font-size: 12px;
//         }
//         `}
//         </style>


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withPageRouter__WEBPACK_IMPORTED_MODULE_18__["withPageRouter"])(Index));
var example = {
  "key": 0,
  "issue_title": "testing back-log",
  "state": "OPEN",
  "dueOn": "2019-06-28T00:00:00Z",
  "issue_author": {
    "user_id": "loganpowell",
    "authorAvatar": "https://avatars1.githubusercontent.com/u/3408191?v=4"
  },
  "issue_url": "https://github.com/loganpowell/embeds/issues/2",
  "assignees": [{
    "name": "Logan Powell",
    "avatarUrl": "https://avatars1.githubusercontent.com/u/3408191?v=4"
  }],
  "labels": [],
  "column_name": "back-log",
  "card_info": {
    "card_note": null,
    "card_url": "https://github.com/loganpowell/embeds/projects/1#card-22973826"
  }
};

/***/ })

})
//# sourceMappingURL=calendar.js.321debffb727135cdbb9.hot-update.js.map