"use strict";
(self["webpackChunkfrontend_toolbox"] = self["webpackChunkfrontend_toolbox"] || []).push([["index"],{

/***/ "./source/button.css":
/*!***************************!*\
  !*** ./source/button.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/style.css":
/*!**************************!*\
  !*** ./source/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
  btn.classList.add("button");
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
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print */ "./source/print.js");







function header() {
  const h1 = document.createElement("h1");
  h1.classList.add("font-700");

  const boxLogo = new Image();
  boxLogo.src = _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_3__;
  boxLogo.classList.add("logo-svg");

  const paragraph = document.createElement("p");
  paragraph.textContent = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["Hello", "Webpack"], " ");

  h1.appendChild(boxLogo);
  h1.appendChild(paragraph);

  return h1;
}

document.body.appendChild(header());
document.body.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_1__["default"])());


/***/ }),

/***/ "./source/print.js":
/*!*************************!*\
  !*** ./source/print.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function printMe() {
  const fileName = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["print", "js"], ".");
  console.log(`I get called from ${fileName}!`);
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRVA7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdUI7QUFDTztBQUNUOztBQUV3QjtBQUNmOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbURBQU07QUFDdEI7O0FBRUE7QUFDQSwwQkFBMEIsa0RBQU07O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QlQ7O0FBRVI7QUFDZixtQkFBbUIsa0RBQU07QUFDekIsbUNBQW1DLFNBQVM7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC10b29sYm94Ly4vc291cmNlL2J1dHRvbi5jc3M/YzNkNSIsIndlYnBhY2s6Ly9mcm9udGVuZC10b29sYm94Ly4vc291cmNlL3N0eWxlLmNzcz8wYjRhIiwid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2UvYnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2J1dHRvbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uKCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIkNsaWNrIE1lIVwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcmludE1lKCkpO1xuXG4gIHJldHVybiBidG47XG59XG4iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgYnV0dG9uIGZyb20gXCIuL2J1dHRvblwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IEJveFN2ZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JveC5zdmdcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLmNsYXNzTGlzdC5hZGQoXCJmb250LTcwMFwiKTtcblxuICBjb25zdCBib3hMb2dvID0gbmV3IEltYWdlKCk7XG4gIGJveExvZ28uc3JjID0gQm94U3ZnO1xuICBib3hMb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvLXN2Z1wiKTtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXy5qb2luKFtcIkhlbGxvXCIsIFwiV2VicGFja1wiXSwgXCIgXCIpO1xuXG4gIGgxLmFwcGVuZENoaWxkKGJveExvZ28pO1xuICBoMS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBoMTtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbigpKTtcbiIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgY29uc3QgZmlsZU5hbWUgPSBfLmpvaW4oW1wicHJpbnRcIiwgXCJqc1wiXSwgXCIuXCIpO1xuICBjb25zb2xlLmxvZyhgSSBnZXQgY2FsbGVkIGZyb20gJHtmaWxlTmFtZX0hYCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=