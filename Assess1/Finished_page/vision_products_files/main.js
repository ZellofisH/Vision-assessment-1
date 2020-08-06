webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.37fbc1a7a332a0b7d13c.hot-update.js.map