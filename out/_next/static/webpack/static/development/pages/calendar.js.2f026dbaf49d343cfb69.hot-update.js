webpackHotUpdate("static\\development\\pages\\calendar.js",{

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
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/badge/style */ "./node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
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
      dispatch = _useContext.dispatch; // const [ state, dispatch ] = useReducer(calendarReducer)


  console.log("state: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(state));
  dispatch({
    type: 'FILTER',
    date: value
  });
  var result = state.data; // console.log("state: " + state )

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("ul", {
    className: "jsx-3127708945" + " " + "events",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, result.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("li", {
      key: item.content,
      className: "jsx-3127708945",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
      status: item.type,
      text: item.content,
      className: "ant-badge-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }));
  }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "3127708945",
    __self: this
  }, ".events.jsx-3127708945{list-style:none;margin:0;padding:0;}.events.jsx-3127708945 .ant-badge-status.jsx-3127708945{overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdWa0IsQUFHeUIsQUFLQSxnQkFKUCxBQUtVLFNBSlQsVUFDWixBQUlhLFdBQ1ksdUJBQ1IsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb2dhblxcUHJvamVjdHNcXGNlbnN1c1xcbWFya2V0aW5nXFxwYWdlc1xcY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYWxlbmRhciwgQmFkZ2UgfSBmcm9tICdhbnRkJztcclxuLy8gaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFBhZ2VSb3V0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQYWdlUm91dGVyJ1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICduYW5vZ3JhcGhxbCdcclxuXHJcbi8vIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KHtcclxuLy8gICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLFxyXG5cclxuLy8gfSlcclxuXHJcbmNvbnN0IElTU1VFU19RVUVSWSA9IGdxbGBcclxucXVlcnkgKCRuYW1lOiBTdHJpbmchLCAkb3duZXI6IFN0cmluZyEpIHsgXHJcbiAgcmVwb3NpdG9yeShuYW1lOiAkbmFtZSwgb3duZXI6ICRvd25lcil7XHJcbiAgICBpc3N1ZXMobGFzdDoxMDApe1xyXG4gICAgICBlZGdlc3tcclxuICAgICAgICBub2Rle1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICAgIGFzc2lnbmVlcyAoZmlyc3Q6MTApe1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhdXRob3J7XHJcbiAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgIGF2YXRhclVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWlsZXN0b25lIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgZHVlT25cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBsYWJlbHMoZmlyc3Q6MTApIHtcclxuICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGNvbG9yXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcm9qZWN0Q2FyZHN7XHJcbiAgICAgICAgICAgIG5vZGVze1xyXG4gICAgICAgICAgICAgIGNvbHVtbntcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlZGdlc3tcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBub3RlXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1gXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKGF1dGgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9ncmFwaHFsJywge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBcInRva2VuIFwiICsgYXV0aCB9LFxyXG4gICAgYm9keTogSVNTVUVTX1FVRVJZKHsgbmFtZTogXCJlbWJlZHNcIiwgb3duZXI6IFwibG9nYW5wb3dlbGxcIiB9KVxyXG4gIH0pXHJcbiBcclxuICBjb25zdCBwcmltZSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICBjb25zb2xlLmxvZyhcInByaW1lOlwiKVxyXG4gIGNvbnN0IHsgZGF0YTogeyByZXBvc2l0b3J5OiB7IGlzc3VlczogeyBlZGdlcyB9fX0gfSA9IHByaW1lXHJcbiAgY29uc29sZS5sb2cocHJpbWUpXHJcbiAgXHJcbiAgcmV0dXJuIGVkZ2VzLm1hcCgoeyBub2RlIH0sIGlkeCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IHsgZWRnZXM6IGFzc2lnbmVlX2VkZ2VzIH0sXHJcbiAgICAgIGF1dGhvcjogeyBsb2dpbiwgYXZhdGFyVXJsOiBhdXRob3JBdmF0YXIgfSxcclxuICAgICAgbWlsZXN0b25lOiB7IGR1ZU9uIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBsYWJlbHM6IHsgZWRnZXM6IGxhYmVsX2VkZ2VzIH0sXHJcbiAgICAgIHByb2plY3RDYXJkczogeyBcclxuICAgICAgICBub2RlczogW3sgY29sdW1uOiB7IG5hbWU6IGNvbHVtbl9uYW1lIH19XSwgXHJcbiAgICAgICAgZWRnZXM6IFt7IG5vZGU6IHsgbm90ZTogY2FyZF9ub3RlLCB1cmw6IGNhcmRfdXJsfX1dIFxyXG4gICAgICB9XHJcbiAgICB9ID0gbm9kZVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtleTogaWR4LFxyXG4gICAgICBpc3N1ZV90aXRsZTogdGl0bGUsXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBkdWVPbixcclxuICAgICAgaXNzdWVfYXV0aG9yOiB7dXNlcl9pZDogbG9naW4sIGF1dGhvckF2YXRhcn0sXHJcbiAgICAgIGlzc3VlX3VybDogdXJsLFxyXG4gICAgICBhc3NpZ25lZXM6IGFzc2lnbmVlX2VkZ2VzLm1hcCgoeyBub2RlOiB7IG5hbWUsIGF2YXRhclVybCB9fSkgPT4gKHsgbmFtZSwgYXZhdGFyVXJsIH0pKSxcclxuICAgICAgbGFiZWxzOiBsYWJlbF9lZGdlcy5tYXAoKHsgbm9kZTogeyBjb2xvciwgbmFtZSB9fSkgPT4gKHsgY29sb3IsIG5hbWUgfSkpLFxyXG4gICAgICBjb2x1bW5fbmFtZSxcclxuICAgICAgY2FyZF9pbmZvOiB7IGNhcmRfbm90ZSwgY2FyZF91cmwgfVxyXG4gICAgfVxyXG4gIH0pIFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYXV0aDogXCJsb2FkaW5nLi4uXCIsXHJcbiAgbG9hZGVkOiBmYWxzZSxcclxuICBpc3N1ZXM6IFtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpc3REYXRhKGRhdGEsIHZhbHVlKSB7XHJcbiAgLy8gbGV0IGxpc3REYXRhO1xyXG4gIGxldCBpbnB1dCA9IG5ldyBEYXRlKHZhbHVlKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuXHJcbiAgLy8gbGV0IGZldGNoZWREYXRlID0gbmV3IERhdGUoXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cclxuICBsZXQgbWF0Y2hlcyA9IGRhdGEuZmlsdGVyKChjdXIsIGlkeCkgPT4gbmV3IERhdGUoY3VyLmR1ZU9uKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0gPSBpbnB1dClcclxuICByZXR1cm4gbWF0Y2hlcy5tYXAoKHsgc3RhdGUsIGlzc3VlX3RpdGxlIH0pID0+ICh7XHJcbiAgICB0eXBlOiBzdGF0ZSA9PT0gXCJPUEVOXCIgPyAnc3VjY2VzcycgOiAnZXJyb3InLFxyXG4gICAgY29udGVudDogaXNzdWVfdGl0bGVcclxuICB9KSlcclxufVxyXG5cclxuY29uc3QgY2FsZW5kYXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdMT0FEJzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IGFjdGlvbi5hdXRoLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdGSUxURVInOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRklMVEVSIEZJUkVEOiBcIilcclxuICAgICAgaWYgKHN0YXRlLmxvYWRlZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGRhdGE6IGdldExpc3REYXRhKHN0YXRlLmRhdGEsIGFjdGlvbi5kYXRlKSBcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcclxuICB9XHJcbn0gXHJcblxyXG5cclxubGV0IGV4YW1wbGVfcmVzcG9uc2UgPSB7XHJcbiAgXCJkYXRhXCI6IHtcclxuICAgIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICAgIFwiaXNzdWVzXCI6IHtcclxuICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlNYTnpkV1UwTlRnd05UYzJNamM9XCIsXHJcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcInRlc3RpbmcgYmFjay1sb2dcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzJcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURRNlZYTmxjak0wTURneE9URT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxvZ2FuIFBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibG9naW5cIjogXCJsb2dhbnBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWlsZXN0b25lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRGs2VFdsc1pYTjBiMjVsTkRReU5EVTJOQT09XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIk9QRU5cIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInByb2plY3RDYXJkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImJhY2stbG9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTktMDYtMTlUMTQ6NDQ6NTlaXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURFeE9sQnliMnBsWTNSRFlYSmtNakk1TnpNNE1qWT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3MzgyNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TlRrNE1EWT1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyB3aXBcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzNcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImxvZ2luXCI6IFwibG9nYW5wb3dlbGxcIixcclxuICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1pbGVzdG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURrNlRXbHNaWE4wYjI1bE5EUXlORFUyTkE9PVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWVPblwiOiBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic3RhdGVcIjogXCJPUEVOXCIsXHJcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZUR0ZpWld3eE5EQXpOVEU1TXpJd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImQ3M2E0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnVnXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicHJvamVjdENhcmRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV0lQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTktMDYtMTlUMTQ6NDU6MDZaXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURFeE9sQnliMnBsWTNSRFlYSmtNakk1TnpRd05EVT1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3NDA0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TmpBek5UUT1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyBkb25lXCIsXHJcbiAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL2lzc3Vlcy80XCIsXHJcbiAgICAgICAgICAgICAgXCJhc3NpZ25lZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsb2dpblwiOiBcImxvZ2FucG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtaWxlc3RvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EazZUV2xzWlhOMGIyNWxORFF5TkRVMk5BPT1cIixcclxuICAgICAgICAgICAgICAgIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiQ0xPU0VEXCIsXHJcbiAgICAgICAgICAgICAgXCJsYWJlbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlZGdlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZUR0ZpWld3eE5EQXpOVEU1TXpJelwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImEyZWVlZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZW5oYW5jZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwcm9qZWN0Q2FyZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJub2Rlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEb25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMTktMDYtMTlUMTQ6NDU6MTFaXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURFeE9sQnliMnBsWTNSRFlYSmtNakk1TnpReE1UYz1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibm90ZVwiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9nYW5wb3dlbGwvZW1iZWRzL3Byb2plY3RzLzEjY2FyZC0yMjk3NDExN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBEYXRhQ2VsbHMgPSAoe3ZhbHVlfSkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgLy8gY29uc3QgWyBzdGF0ZSwgZGlzcGF0Y2ggXSA9IHVzZVJlZHVjZXIoY2FsZW5kYXJSZWR1Y2VyKVxyXG4gIGNvbnNvbGUubG9nKFwic3RhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gIFxyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6ICdGSUxURVInLFxyXG4gICAgZGF0ZTogdmFsdWVcclxuICB9KVxyXG4gIFxyXG4gIGNvbnN0IHJlc3VsdCA9IHN0YXRlLmRhdGFcclxuICBcclxuICAvLyBjb25zb2xlLmxvZyhcInN0YXRlOiBcIiArIHN0YXRlIClcclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c1wiPlxyXG4gICAgICB7cmVzdWx0Lm1hcChpdGVtID0+IChcclxuICAgICAgICA8bGkga2V5PXtpdGVtLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPEJhZGdlIHN0YXR1cz17aXRlbS50eXBlfSB0ZXh0PXtpdGVtLmNvbnRlbnR9IGNsYXNzTmFtZT1cImFudC1iYWRnZS1zdGF0dXNcIiAvPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5ldmVudHMge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC91bD5cclxuICApO1xyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmNvbnN0IGRhdGVDZWxsUmVuZGVyID0gdmFsdWUgPT4gPERhdGFDZWxscyB2YWx1ZT17dmFsdWV9Lz5cclxuXHJcbmZ1bmN0aW9uIGdldE1vbnRoRGF0YSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZS5tb250aCgpID09PSA4KSB7XHJcbiAgICByZXR1cm4gMTM5NDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbnRoQ2VsbFJlbmRlcih2YWx1ZSkge1xyXG4gIGNvbnN0IG51bSA9IGdldE1vbnRoRGF0YSh2YWx1ZSk7XHJcbiAgcmV0dXJuIG51bSA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZXMtbW9udGhcIj5cclxuICAgICAgPHNlY3Rpb24+e251bX08L3NlY3Rpb24+XHJcbiAgICAgIDxzcGFuPkJhY2tsb2cgbnVtYmVyPC9zcGFuPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5ub3Rlcy1tb250aCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgfVxyXG4gICAgICAubm90ZXMtbW9udGggc2VjdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcm91dGVyOiB7IHF1ZXJ5OiB7IGF1dGggfSB9IH0pID0+IHtcclxuICBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IChhdXRoKSA9PiBmZXRjaGVyKGF1dGgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdMT0FEJyxcclxuICAgICAgICBkYXRhOiByZXMsXHJcbiAgICAgICAgYXV0aDogYXV0aFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcInJlczogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgZmV0Y2hEYXRhKGF1dGgpXHJcbiAgfSwgW10pXHJcbiAgXHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKFwiREFUQTogXCIgKyBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsIGRpc3BhdGNofX0+XHJcbiAgICAgIDxDYWxlbmRhciBkYXRlQ2VsbFJlbmRlcj17ZGF0ZUNlbGxSZW5kZXJ9IG1vbnRoQ2VsbFJlbmRlcj17bW9udGhDZWxsUmVuZGVyfS8+XHJcbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhZ2VSb3V0ZXIoSW5kZXgpIl19 */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */"));
  return null;
};

var dateCellRender = function dateCellRender(value) {
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(DataCells, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
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
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, num), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    className: "jsx-2153197830",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, "Backlog number"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "2153197830",
    __self: this
  }, ".notes-month.jsx-2153197830{text-align:center;font-size:28px;}.notes-month.jsx-2153197830 section.jsx-2153197830{font-size:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9nYW5cXFByb2plY3RzXFxjZW5zdXNcXG1hcmtldGluZ1xccGFnZXNcXGNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtYa0IsQUFHMkIsQUFJSCxlQUNqQixHQUppQixlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxvZ2FuXFxQcm9qZWN0c1xcY2Vuc3VzXFxtYXJrZXRpbmdcXHBhZ2VzXFxjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbGVuZGFyLCBCYWRnZSB9IGZyb20gJ2FudGQnO1xyXG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUGFnZVJvdXRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFBhZ2VSb3V0ZXInXHJcblxyXG5pbXBvcnQgZ3FsIGZyb20gJ25hbm9ncmFwaHFsJ1xyXG5cclxuLy8gY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoe1xyXG4vLyAgIHVybDogJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZ3JhcGhxbCcsXHJcblxyXG4vLyB9KVxyXG5cclxuY29uc3QgSVNTVUVTX1FVRVJZID0gZ3FsYFxyXG5xdWVyeSAoJG5hbWU6IFN0cmluZyEsICRvd25lcjogU3RyaW5nISkgeyBcclxuICByZXBvc2l0b3J5KG5hbWU6ICRuYW1lLCBvd25lcjogJG93bmVyKXtcclxuICAgIGlzc3VlcyhsYXN0OjEwMCl7XHJcbiAgICAgIGVkZ2Vze1xyXG4gICAgICAgIG5vZGV7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgICAgYXNzaWduZWVzIChmaXJzdDoxMCl7XHJcbiAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGF1dGhvcntcclxuICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgYXZhdGFyVXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtaWxlc3RvbmUge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBkdWVPblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGxhYmVscyhmaXJzdDoxMCkge1xyXG4gICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgY29sb3JcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHByb2plY3RDYXJkc3tcclxuICAgICAgICAgICAgbm9kZXN7XHJcbiAgICAgICAgICAgICAgY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5vdGVcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufWBcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAoYXV0aCkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL2dyYXBocWwnLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6IFwidG9rZW4gXCIgKyBhdXRoIH0sXHJcbiAgICBib2R5OiBJU1NVRVNfUVVFUlkoeyBuYW1lOiBcImVtYmVkc1wiLCBvd25lcjogXCJsb2dhbnBvd2VsbFwiIH0pXHJcbiAgfSlcclxuIFxyXG4gIGNvbnN0IHByaW1lID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxyXG4gIGNvbnNvbGUubG9nKFwicHJpbWU6XCIpXHJcbiAgY29uc3QgeyBkYXRhOiB7IHJlcG9zaXRvcnk6IHsgaXNzdWVzOiB7IGVkZ2VzIH19fSB9ID0gcHJpbWVcclxuICBjb25zb2xlLmxvZyhwcmltZSlcclxuICBcclxuICByZXR1cm4gZWRnZXMubWFwKCh7IG5vZGUgfSwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogeyBlZGdlczogYXNzaWduZWVfZWRnZXMgfSxcclxuICAgICAgYXV0aG9yOiB7IGxvZ2luLCBhdmF0YXJVcmw6IGF1dGhvckF2YXRhciB9LFxyXG4gICAgICBtaWxlc3RvbmU6IHsgZHVlT24gfSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGxhYmVsczogeyBlZGdlczogbGFiZWxfZWRnZXMgfSxcclxuICAgICAgcHJvamVjdENhcmRzOiB7IFxyXG4gICAgICAgIG5vZGVzOiBbeyBjb2x1bW46IHsgbmFtZTogY29sdW1uX25hbWUgfX1dLCBcclxuICAgICAgICBlZGdlczogW3sgbm9kZTogeyBub3RlOiBjYXJkX25vdGUsIHVybDogY2FyZF91cmx9fV0gXHJcbiAgICAgIH1cclxuICAgIH0gPSBub2RlXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiBpZHgsXHJcbiAgICAgIGlzc3VlX3RpdGxlOiB0aXRsZSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGR1ZU9uLFxyXG4gICAgICBpc3N1ZV9hdXRob3I6IHt1c2VyX2lkOiBsb2dpbiwgYXV0aG9yQXZhdGFyfSxcclxuICAgICAgaXNzdWVfdXJsOiB1cmwsXHJcbiAgICAgIGFzc2lnbmVlczogYXNzaWduZWVfZWRnZXMubWFwKCh7IG5vZGU6IHsgbmFtZSwgYXZhdGFyVXJsIH19KSA9PiAoeyBuYW1lLCBhdmF0YXJVcmwgfSkpLFxyXG4gICAgICBsYWJlbHM6IGxhYmVsX2VkZ2VzLm1hcCgoeyBub2RlOiB7IGNvbG9yLCBuYW1lIH19KSA9PiAoeyBjb2xvciwgbmFtZSB9KSksXHJcbiAgICAgIGNvbHVtbl9uYW1lLFxyXG4gICAgICBjYXJkX2luZm86IHsgY2FyZF9ub3RlLCBjYXJkX3VybCB9XHJcbiAgICB9XHJcbiAgfSkgXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhdXRoOiBcImxvYWRpbmcuLi5cIixcclxuICBsb2FkZWQ6IGZhbHNlLFxyXG4gIGlzc3VlczogW11cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlzdERhdGEoZGF0YSwgdmFsdWUpIHtcclxuICAvLyBsZXQgbGlzdERhdGE7XHJcbiAgbGV0IGlucHV0ID0gbmV3IERhdGUodmFsdWUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG5cclxuICAvLyBsZXQgZmV0Y2hlZERhdGUgPSBuZXcgRGF0ZShcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCIpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gIGxldCBtYXRjaGVzID0gZGF0YS5maWx0ZXIoKGN1ciwgaWR4KSA9PiBuZXcgRGF0ZShjdXIuZHVlT24pLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSA9IGlucHV0KVxyXG4gIHJldHVybiBtYXRjaGVzLm1hcCgoeyBzdGF0ZSwgaXNzdWVfdGl0bGUgfSkgPT4gKHtcclxuICAgIHR5cGU6IHN0YXRlID09PSBcIk9QRU5cIiA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXHJcbiAgICBjb250ZW50OiBpc3N1ZV90aXRsZVxyXG4gIH0pKVxyXG59XHJcblxyXG5jb25zdCBjYWxlbmRhclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPQUQnOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogYWN0aW9uLmF1dGgsXHJcbiAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgJ0ZJTFRFUic6IHtcclxuICAgICAgY29uc29sZS5sb2coXCJGSUxURVIgRklSRUQ6IFwiKVxyXG4gICAgICBpZiAoc3RhdGUubG9hZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZGF0YTogZ2V0TGlzdERhdGEoc3RhdGUuZGF0YSwgYWN0aW9uLmRhdGUpIFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZGF0YTogW11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufSBcclxuXHJcblxyXG5sZXQgZXhhbXBsZV9yZXNwb25zZSA9IHtcclxuICBcImRhdGFcIjoge1xyXG4gICAgXCJyZXBvc2l0b3J5XCI6IHtcclxuICAgICAgXCJpc3N1ZXNcIjoge1xyXG4gICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5vZGVcIjoge1xyXG4gICAgICAgICAgICAgIFwiaWRcIjogXCJNRFU2U1hOemRXVTBOVGd3TlRjMk1qYz1cIixcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGVzdGluZyBiYWNrLWxvZ1wiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvMlwiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRFE2VlhObGNqTTBNRGd4T1RFPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9nYW4gUG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJhdXRob3JcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJsb2dpblwiOiBcImxvZ2FucG93ZWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhclVybFwiOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzQwODE5MT92PTRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJtaWxlc3RvbmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EazZUV2xzWlhOMGIyNWxORFF5TkRVMk5BPT1cIixcclxuICAgICAgICAgICAgICAgIFwiZHVlT25cIjogXCIyMDE5LTA2LTI4VDAwOjAwOjAwWlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiT1BFTlwiLFxyXG4gICAgICAgICAgICAgIFwibGFiZWxzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicHJvamVjdENhcmRzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibm9kZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYmFjay1sb2dcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NDo1OVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOek00TWpZPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTczODI2XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOVGs0TURZPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIHdpcFwiLFxyXG4gICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xvZ2FucG93ZWxsL2VtYmVkcy9pc3N1ZXMvM1wiLFxyXG4gICAgICAgICAgICAgIFwiYXNzaWduZWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW11cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiYXV0aG9yXCI6IHtcclxuICAgICAgICAgICAgICAgIFwibG9naW5cIjogXCJsb2dhbnBvd2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJVcmxcIjogXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzM0MDgxOTE/dj00XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwibWlsZXN0b25lXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNRGs2VFdsc1pYTjBiMjVsTkRReU5EVTJOQT09XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1ZU9uXCI6IFwiMjAxOS0wNi0yOFQwMDowMDowMFpcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJzdGF0ZVwiOiBcIk9QRU5cIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlRHRmlaV3d4TkRBek5URTVNekl3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiZDczYTRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJidWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJwcm9qZWN0Q2FyZHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJub2Rlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXSVBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NTowNlpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOelF3TkRVPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTc0MDQ1XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIk1EVTZTWE56ZFdVME5UZ3dOakF6TlRRPVwiLFxyXG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJ0ZXN0aW5nIGRvbmVcIixcclxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvaXNzdWVzLzRcIixcclxuICAgICAgICAgICAgICBcImFzc2lnbmVlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcImF1dGhvclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImxvZ2luXCI6IFwibG9nYW5wb3dlbGxcIixcclxuICAgICAgICAgICAgICAgIFwiYXZhdGFyVXJsXCI6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8zNDA4MTkxP3Y9NFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIm1pbGVzdG9uZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURrNlRXbHNaWE4wYjI1bE5EUXlORFUyTkE9PVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWVPblwiOiBcIjIwMTktMDYtMjhUMDA6MDA6MDBaXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwic3RhdGVcIjogXCJDTE9TRURcIixcclxuICAgICAgICAgICAgICBcImxhYmVsc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVkZ2VzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwibm9kZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiTURVNlRHRmlaV3d4TkRBek5URTVNekl6XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiYTJlZWVmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJlbmhhbmNlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInByb2plY3RDYXJkc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5vZGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAxOS0wNi0xOVQxNDo0NToxMVpcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFwiZWRnZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJub2RlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJNREV4T2xCeWIycGxZM1JEWVhKa01qSTVOelF4TVRjPVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJub3RlXCI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dhbnBvd2VsbC9lbWJlZHMvcHJvamVjdHMvMSNjYXJkLTIyOTc0MTE3XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IERhdGFDZWxscyA9ICh7dmFsdWV9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dClcclxuICAvLyBjb25zdCBbIHN0YXRlLCBkaXNwYXRjaCBdID0gdXNlUmVkdWNlcihjYWxlbmRhclJlZHVjZXIpXHJcbiAgY29uc29sZS5sb2coXCJzdGF0ZTogXCIgKyBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgXHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogJ0ZJTFRFUicsXHJcbiAgICBkYXRlOiB2YWx1ZVxyXG4gIH0pXHJcbiAgXHJcbiAgY29uc3QgcmVzdWx0ID0gc3RhdGUuZGF0YVxyXG4gIFxyXG4gIC8vIGNvbnNvbGUubG9nKFwic3RhdGU6IFwiICsgc3RhdGUgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XHJcbiAgICAgIHtyZXN1bHQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2l0ZW0uY29udGVudH0+XHJcbiAgICAgICAgICA8QmFkZ2Ugc3RhdHVzPXtpdGVtLnR5cGV9IHRleHQ9e2l0ZW0uY29udGVudH0gY2xhc3NOYW1lPVwiYW50LWJhZGdlLXN0YXR1c1wiIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmV2ZW50cyB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuY29uc3QgZGF0ZUNlbGxSZW5kZXIgPSB2YWx1ZSA9PiA8RGF0YUNlbGxzIHZhbHVlPXt2YWx1ZX0vPlxyXG5cclxuZnVuY3Rpb24gZ2V0TW9udGhEYXRhKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlLm1vbnRoKCkgPT09IDgpIHtcclxuICAgIHJldHVybiAxMzk0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhDZWxsUmVuZGVyKHZhbHVlKSB7XHJcbiAgY29uc3QgbnVtID0gZ2V0TW9udGhEYXRhKHZhbHVlKTtcclxuICByZXR1cm4gbnVtID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3Rlcy1tb250aFwiPlxyXG4gICAgICA8c2VjdGlvbj57bnVtfTwvc2VjdGlvbj5cclxuICAgICAgPHNwYW4+QmFja2xvZyBudW1iZXI8L3NwYW4+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm5vdGVzLW1vbnRoIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb3V0ZXI6IHsgcXVlcnk6IHsgYXV0aCB9IH0gfSkgPT4ge1xyXG4gIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKGNhbGVuZGFyUmVkdWNlcilcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKGF1dGgpID0+IGZldGNoZXIoYXV0aCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ0xPQUQnLFxyXG4gICAgICAgIGRhdGE6IHJlcyxcclxuICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBmZXRjaERhdGEoYXV0aClcclxuICB9LCBbXSlcclxuICBcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSwgZGlzcGF0Y2h9fT5cclxuICAgICAgPENhbGVuZGFyIGRhdGVDZWxsUmVuZGVyPXtkYXRlQ2VsbFJlbmRlcn0gbW9udGhDZWxsUmVuZGVyPXttb250aENlbGxSZW5kZXJ9Lz5cclxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICApIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUGFnZVJvdXRlcihJbmRleCkiXX0= */\n/*@ sourceURL=C:\\Users\\logan\\Projects\\census\\marketing\\pages\\calendar.js */")) : null;
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
        console.log("res: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(res));
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
      lineNumber: 407
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    dateCellRender: dateCellRender,
    monthCellRender: monthCellRender,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withPageRouter__WEBPACK_IMPORTED_MODULE_12__["withPageRouter"])(Index));

/***/ })

})
//# sourceMappingURL=calendar.js.2f026dbaf49d343cfb69.hot-update.js.map