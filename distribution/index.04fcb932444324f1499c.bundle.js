"use strict";
(self["webpackChunkfrontend_toolbox"] = self["webpackChunkfrontend_toolbox"] || []).push([["index"],{

/***/ 411:
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

/***/ 793:
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

/***/ 266:
/*!**************************!*\
  !*** ./source/button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ button)
/* harmony export */ });
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ 411);


function button() {
	const btn = document.createElement('button');
	btn.textContent = 'Click Me!';
	btn.classList.add(_button_css__WEBPACK_IMPORTED_MODULE_0__["default"].button);
	btn.addEventListener('click', () => printMe());

	return btn;
}


/***/ }),

/***/ 430:
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ 266);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ 793);
/* harmony import */ var _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/box.svg */ 867);






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

/***/ 867:
/*!**************************************!*\
  !*** ./source/assets/images/box.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fc79e76df6735ab245d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(430)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDRmY2I5MzI0NDQzMjRmMTQ5OWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlLENBQUMsZ0NBQWdDOzs7Ozs7Ozs7Ozs7OztBQ0RoRDtBQUNBLGlFQUFlLENBQUMsc0dBQXNHOzs7Ozs7Ozs7Ozs7Ozs7QUNEcEY7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBLG1CQUFtQiwwREFBYTtBQUNoQzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R1QjtBQUNPO0FBQ0c7O0FBRVk7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbURBQU07QUFDckIsdUJBQXVCLDhEQUFrQjs7QUFFekM7QUFDQSx5QkFBeUIsa0RBQU07O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtREFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2UvYnV0dG9uLmNzcz9kY2JlIiwid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2Uvc3R5bGUuY3NzPzkwZjUiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJ1dHRvblwiOlwiWFVlN19zbzNSVnJLYXZ3TzdJOUZcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJmb250LTQwMFwiOlwiRHZOWVVkQUtkVVBBcjZuNGRlTG9cIixcImZvbnQtNzAwXCI6XCJ6bFdFSm5hYXdpZjMzOHVYSF9Wc1wiLFwibG9nby1zdmdcIjpcIlc1M21NazRrQl9CTjFaM2p3VVBrXCJ9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uKCkge1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YnRuLnRleHRDb250ZW50ID0gJ0NsaWNrIE1lISc7XG5cdGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5idXR0b24pO1xuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcmludE1lKCkpO1xuXG5cdHJldHVybiBidG47XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IEJveFN2ZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvYm94LnN2Zyc7XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRoMS5jbGFzc0xpc3QuYWRkKCdmb250LTcwMCcpO1xuXG5cdGNvbnN0IGJveExvZ28gPSBuZXcgSW1hZ2UoKTtcblx0Ym94TG9nby5zcmMgPSBCb3hTdmc7XG5cdGJveExvZ28uY2xhc3NMaXN0LmFkZChzdHlsZXNbJ2xvZ28tc3ZnJ10pO1xuXG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID0gXy5qb2luKFsnSGVsbG8nLCAnV2VicGFjayddLCAnICcpO1xuXG5cdGgxLmFwcGVuZENoaWxkKGJveExvZ28pO1xuXHRoMS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdHJldHVybiBoMTtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==