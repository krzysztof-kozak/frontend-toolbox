"use strict";
(self["webpackChunkfrontend_toolbox"] = self["webpackChunkfrontend_toolbox"] || []).push([["index"],{

/***/ "./source/button.css":
/*!***************************!*\
  !*** ./source/button.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"XUe7_so3RVrKavwO7I9F"});

/***/ }),

/***/ "./source/style.css":
/*!**************************!*\
  !*** ./source/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"font-400":"DvNYUdAKdUPAr6n4deLo","font-700":"zlWEJnaawif338uXH_Vs","logo-svg":"W53mMk4kB_BN1Z3jwUPk"});

/***/ }),

/***/ "./source/button.js":
/*!**************************!*\
  !*** ./source/button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ button)
/* harmony export */ });
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ "./source/button.css");


function button() {
  const btn = document.createElement("button");
  btn.textContent = "Click Me!";
  btn.classList.add(_button_css__WEBPACK_IMPORTED_MODULE_0__["default"].button);
  btn.addEventListener("click", () => printMe());

  return btn;
}


/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./source/button.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./source/style.css");
/* harmony import */ var _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/box.svg */ "./source/assets/images/box.svg");






function header() {
  const h1 = document.createElement("h1");
  h1.classList.add("font-700");

  const boxLogo = new Image();
  boxLogo.src = _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_3__;
  boxLogo.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_2__["default"]["logo-svg"]);

  const paragraph = document.createElement("p");
  paragraph.textContent = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["Hello", "Webpack"], " ");

  h1.appendChild(boxLogo);
  h1.appendChild(paragraph);

  return h1;
}

document.body.appendChild(header());
document.body.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_1__["default"])());


/***/ }),

/***/ "./source/assets/images/box.svg":
/*!**************************************!*\
  !*** ./source/assets/images/box.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fc79e76df6735ab245d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./source/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlLENBQUMsZ0NBQWdDOzs7Ozs7Ozs7Ozs7OztBQ0RoRDtBQUNBLGlFQUFlLENBQUMsc0dBQXNHOzs7Ozs7Ozs7Ozs7Ozs7QUNEcEY7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBLG9CQUFvQiwwREFBYTtBQUNqQzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R1QjtBQUNPO0FBQ0c7O0FBRVk7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtREFBTTtBQUN0Qix3QkFBd0IsOERBQWtCOztBQUUxQztBQUNBLDBCQUEwQixrREFBTTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1EQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9idXR0b24uY3NzP2RjYmUiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9zdHlsZS5jc3M/OTBmNSIsIndlYnBhY2s6Ly9mcm9udGVuZC10b29sYm94Ly4vc291cmNlL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC10b29sYm94Ly4vc291cmNlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYnV0dG9uXCI6XCJYVWU3X3NvM1JWckthdndPN0k5RlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImZvbnQtNDAwXCI6XCJEdk5ZVWRBS2RVUEFyNm40ZGVMb1wiLFwiZm9udC03MDBcIjpcInpsV0VKbmFhd2lmMzM4dVhIX1ZzXCIsXCJsb2dvLXN2Z1wiOlwiVzUzbU1rNGtCX0JOMVozandVUGtcIn07IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9idXR0b24uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1dHRvbigpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJDbGljayBNZSFcIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmJ1dHRvbik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcHJpbnRNZSgpKTtcblxuICByZXR1cm4gYnRuO1xufVxuIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IGJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBCb3hTdmcgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9ib3guc3ZnXCI7XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLmNsYXNzTGlzdC5hZGQoXCJmb250LTcwMFwiKTtcblxuICBjb25zdCBib3hMb2dvID0gbmV3IEltYWdlKCk7XG4gIGJveExvZ28uc3JjID0gQm94U3ZnO1xuICBib3hMb2dvLmNsYXNzTGlzdC5hZGQoc3R5bGVzW1wibG9nby1zdmdcIl0pO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBfLmpvaW4oW1wiSGVsbG9cIiwgXCJXZWJwYWNrXCJdLCBcIiBcIik7XG5cbiAgaDEuYXBwZW5kQ2hpbGQoYm94TG9nbyk7XG4gIGgxLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgcmV0dXJuIGgxO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9