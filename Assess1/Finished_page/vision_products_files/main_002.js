(this["webpackJsonpvision"] = this["webpackJsonpvision"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_item */ "./src/product_item.js");
var _jsxFileName = "C:\\Users\\Jackson\\Documents\\vision\\vision\\src\\App.js";




function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_product_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\Users\\Jackson\\Documents\\vision\\vision\\src\\index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/product.json":
/*!**************************!*\
  !*** ./src/product.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Verizon Wireless 4G LTE USB Modem 551L\",\"product_id\":3868,\"product_type\":\"Connection Card\",\"retail_price\":249.99,\"adjusted_price\":0,\"network\":\"Verizon\"},{\"name\":\"AT&T Mobile Hotspot Liberate 4G\",\"product_id\":4770,\"product_type\":\"Other\",\"retail_price\":199.99,\"adjusted_price\":29.99,\"network\":\"ATT\"},{\"name\":\"Apple iPhone 5S 16GB\",\"product_id\":6831,\"product_type\":\"Phone\",\"retail_price\":0,\"adjusted_price\":0,\"network\":\"ATT\"},{\"name\":\"Apple iPhone 11 64GB\",\"product_id\":11756,\"product_type\":\"Phone\",\"retail_price\":699.99,\"adjusted_price\":249.99,\"network\":\"Verizon\"},{\"name\":\"Apple iPhone 11 64GB\",\"product_id\":11757,\"product_type\":\"Phone\",\"retail_price\":699.99,\"adjusted_price\":249.99,\"network\":\"Sprint\"},{\"name\":\"Apple iPhone 11 Pro 64GB\",\"product_id\":11760,\"product_type\":\"Phone\",\"retail_price\":999.99,\"adjusted_price\":549.99,\"network\":\"Verizon\"},{\"name\":\"Apple iPhone 11 Pro 64GB\",\"product_id\":11761,\"product_type\":\"Phone\",\"retail_price\":999.99,\"adjusted_price\":549.99,\"network\":\"Sprint\"},{\"name\":\"Apple iPhone 11 Pro Max 64GB\",\"product_id\":11764,\"product_type\":\"Phone\",\"retail_price\":1099.99,\"adjusted_price\":null,\"network\":\"Verizon\"},{\"name\":\"Apple iPhone 11 Pro Max 64GB\",\"product_id\":11765,\"product_type\":\"Phone\",\"retail_price\":1099.99,\"adjusted_price\":null,\"network\":\"Sprint\"},{\"name\":\"Apple iPhone XR 64GB\",\"product_id\":11768,\"product_type\":\"Phone\",\"retail_price\":0,\"adjusted_price\":0,\"network\":\"Verizon\"},{\"name\":\"Apple iPhone XR 64GB\",\"product_id\":11769,\"product_type\":\"Phone\",\"retail_price\":0,\"adjusted_price\":0,\"network\":\"Sprint\"},{\"name\":\"Samsung Galaxy Note 10 256GB\",\"product_id\":11771,\"product_type\":\"Phone\",\"retail_price\":949.99,\"adjusted_price\":449.99,\"network\":\"Verizon\"},{\"name\":\"Samsung Galaxy Note 10 256GB\",\"product_id\":11774,\"product_type\":\"Phone\",\"retail_price\":949.99,\"adjusted_price\":449.99,\"network\":\"Sprint\"},{\"name\":\"Samsung Galaxy Note 10 Plus 256GB\",\"product_id\":11775,\"product_type\":\"Phone\",\"retail_price\":1099.99,\"adjusted_price\":599.99,\"network\":\"Verizon\"},{\"name\":\"Samsung Galaxy Note 10 Plus 256GB\",\"product_id\":11778,\"product_type\":\"Phone\",\"retail_price\":1099.99,\"adjusted_price\":599.99,\"network\":\"Sprint\"},{\"name\":\"Samsung Galaxy S10 128GB\",\"product_id\":11779,\"product_type\":\"Phone\",\"retail_price\":899.99,\"adjusted_price\":399.99,\"network\":\"Verizon\"},{\"name\":\"Samsung Galaxy S10 128GB\",\"product_id\":11782,\"product_type\":\"Phone\",\"retail_price\":899.99,\"adjusted_price\":399.99,\"network\":\"Sprint\"},{\"name\":\"Samsung Galaxy S10 Plus 128GB\",\"product_id\":11783,\"product_type\":\"Phone\",\"retail_price\":999.99,\"adjusted_price\":499.99,\"network\":\"Verizon\"},{\"name\":\"Samsung Galaxy S10 Plus 128GB\",\"product_id\":11786,\"product_type\":\"Phone\",\"retail_price\":999.99,\"adjusted_price\":499.99,\"network\":\"Sprint\"},{\"name\":\"Samsung Galaxy S10e 128GB\",\"product_id\":11787,\"product_type\":\"Phone\",\"retail_price\":749.99,\"adjusted_price\":249.99,\"network\":\"Verizon\"},{\"name\":\"Samsung Galaxy S10e 128GB\",\"product_id\":11790,\"product_type\":\"Phone\",\"retail_price\":749.99,\"adjusted_price\":249.99,\"network\":\"Sprint\"},{\"name\":\"Sonim XP5s\",\"product_id\":11791,\"product_type\":\"Phone\",\"retail_price\":288,\"adjusted_price\":99.99,\"network\":\"Sprint\"},{\"name\":\"Sonim XP5s\",\"product_id\":11792,\"product_type\":\"Phone\",\"retail_price\":288,\"adjusted_price\":99.99,\"network\":\"ATT\"},{\"name\":\"Sonim XP5s\",\"product_id\":11794,\"product_type\":\"Phone\",\"retail_price\":288,\"adjusted_price\":99.99,\"network\":\"Verizon\"},{\"name\":\"Kyocera DuraXV LTE\",\"product_id\":11795,\"product_type\":\"Phone\",\"retail_price\":264,\"adjusted_price\":149.99,\"network\":\"Verizon\"},{\"name\":\"Kyocera DuraXV LTE\",\"product_id\":11796,\"product_type\":\"Phone\",\"retail_price\":264,\"adjusted_price\":149.99,\"network\":\"ATT\"},{\"name\":\"Kyocera DuraXV LTE\",\"product_id\":11798,\"product_type\":\"Phone\",\"retail_price\":264,\"adjusted_price\":149.99,\"network\":\"Sprint\"},{\"name\":\"Apple iPad 10.2 inch 128GB (7th Gen)\",\"product_id\":11800,\"product_type\":\"Tablet\",\"retail_price\":559.99,\"adjusted_price\":459.99,\"network\":\"Sprint\"},{\"name\":\"Samsung Galaxy Tab A\",\"product_id\":11803,\"product_type\":\"Tablet\",\"retail_price\":249.99,\"adjusted_price\":149.99,\"network\":\"Sprint\"},{\"name\":\"Apple iPad Mini 5 64GB\",\"product_id\":11808,\"product_type\":\"Tablet\",\"retail_price\":529.99,\"adjusted_price\":429.99,\"network\":\"Sprint\"},{\"name\":\"Mifi 8000 Mobile Hotspot\",\"product_id\":11812,\"product_type\":\"Connection Card\",\"retail_price\":240,\"adjusted_price\":140,\"network\":\"Sprint\"},{\"name\":\"Coolpad Surf\",\"product_id\":11813,\"product_type\":\"Connection Card\",\"retail_price\":144,\"adjusted_price\":0,\"network\":\"Sprint\"},{\"name\":\"2GB Data Share Plan\",\"product_id\":11820,\"product_type\":\"Rate Plan\",\"retail_price\":19.99,\"adjusted_price\":null,\"network\":null},{\"name\":\"Unlimited Talk/Text 2GB plan\",\"product_id\":11821,\"product_type\":\"Rate Plan\",\"retail_price\":19.99,\"adjusted_price\":null,\"network\":null},{\"name\":\"Direct/Ind 2-Day Shipping\",\"product_id\":1945,\"product_type\":\"Shipping\",\"retail_price\":0,\"adjusted_price\":null,\"network\":null},{\"name\":\"Overnight Shipping\",\"product_id\":890,\"product_type\":\"Shipping\",\"retail_price\":12,\"adjusted_price\":null,\"network\":null}]");

/***/ }),

/***/ "./src/product_item.js":
/*!*****************************!*\
  !*** ./src/product_item.js ***!
  \*****************************/
/*! exports provided: product_item, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product_item", function() { return product_item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.json */ "./src/product.json");
var _product_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./product.json */ "./src/product.json", 1);
var _jsxFileName = "C:\\Users\\Jackson\\Documents\\vision\\vision\\src\\product_item.js";


_product_json__WEBPACK_IMPORTED_MODULE_1__.sort((a, b) => a.product_type > b.product_type ? 1 : -1);
console.log(_product_json__WEBPACK_IMPORTED_MODULE_1__);
class product_item extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, "Connection Card"), _product_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (data) {
      if (data.product_type === "Connection Card") {
        return true;
      }

      return false;
    }).map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 34
      }
    }, e.name, " $", e.adjusted_price != null && e.adjusted_price, e.adjusted_price == null && e.retail_price, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 149
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, "Other"), _product_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (data) {
      if (data.product_type === "Other") {
        return true;
      }

      return false;
    }).map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 34
      }
    }, e.name, " $", e.adjusted_price != null && e.adjusted_price, e.adjusted_price == null && e.retail_price, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 149
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, "Phone"), _product_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (data) {
      if (data.product_type === "Phone") {
        return true;
      }

      return false;
    }).map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 34
      }
    }, e.name, " $", e.adjusted_price != null && e.adjusted_price, e.adjusted_price == null && e.retail_price, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 149
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, "Rate Plan"), _product_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (data) {
      if (data.product_type === "Rate Plan") {
        return true;
      }

      return false;
    }).map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 34
      }
    }, e.name, " $", e.adjusted_price != null && e.adjusted_price, e.adjusted_price == null && e.retail_price, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 149
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Tablet"), _product_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (data) {
      if (data.product_type === "Tablet") {
        return true;
      }

      return false;
    }).map((e, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 34
      }
    }, e.name, " $", e.adjusted_price != null && e.adjusted_price, e.adjusted_price == null && e.retail_price, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 149
      }
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (product_item);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Jackson\Documents\vision\vision\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Jackson\Documents\vision\vision\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Jackson\Documents\vision\vision\src\index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map