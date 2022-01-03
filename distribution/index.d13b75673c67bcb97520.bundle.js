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
	const h1 = document.createElement('h1');
	h1.classList.add('font-700');

	const boxLogo = new Image();
	boxLogo.src = _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_3__;
	boxLogo.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_2__["default"]["logo-svg"]);

	const paragraph = document.createElement('p');
	paragraph.textContent = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'Webpack'], ' ');

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
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./source/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDEzYjc1NjczYzY3YmNiOTc1MjAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlLENBQUMsZ0NBQWdDOzs7Ozs7Ozs7Ozs7OztBQ0RoRDtBQUNBLGlFQUFlLENBQUMsc0dBQXNHOzs7Ozs7Ozs7Ozs7Ozs7QUNEcEY7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBLG9CQUFvQiwwREFBYTtBQUNqQzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R1QjtBQUNPO0FBQ0c7O0FBRVk7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbURBQU07QUFDckIsdUJBQXVCLDhEQUFrQjs7QUFFekM7QUFDQSx5QkFBeUIsa0RBQU07O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2UvYnV0dG9uLmNzcz9kY2JlIiwid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2Uvc3R5bGUuY3NzPzkwZjUiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJ1dHRvblwiOlwiWFVlN19zbzNSVnJLYXZ3TzdJOUZcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJmb250LTQwMFwiOlwiRHZOWVVkQUtkVVBBcjZuNGRlTG9cIixcImZvbnQtNzAwXCI6XCJ6bFdFSm5hYXdpZjMzOHVYSF9Wc1wiLFwibG9nby1zdmdcIjpcIlc1M21NazRrQl9CTjFaM2p3VVBrXCJ9OyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYnV0dG9uLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidXR0b24oKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiQ2xpY2sgTWUhXCI7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5idXR0b24pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByaW50TWUoKSk7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgQm94U3ZnIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9ib3guc3ZnJztcblxuZnVuY3Rpb24gaGVhZGVyKCkge1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdGgxLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtNzAwJyk7XG5cblx0Y29uc3QgYm94TG9nbyA9IG5ldyBJbWFnZSgpO1xuXHRib3hMb2dvLnNyYyA9IEJveFN2Zztcblx0Ym94TG9nby5jbGFzc0xpc3QuYWRkKHN0eWxlc1snbG9nby1zdmcnXSk7XG5cblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBfLmpvaW4oWydIZWxsbycsICdXZWJwYWNrJ10sICcgJyk7XG5cblx0aDEuYXBwZW5kQ2hpbGQoYm94TG9nbyk7XG5cdGgxLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cblx0cmV0dXJuIGgxO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9