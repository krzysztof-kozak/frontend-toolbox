"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend_toolbox"] = self["webpackChunkfrontend_toolbox"] || []).push([["index"],{

/***/ 487:
/*!**************************!*\
  !*** ./source/button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ button)\n/* harmony export */ });\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.module.scss */ 262);\n// These styles are scoped to this .js file.\n// These are essentially CSS modules thanks to our webpack configuration.\n\nfunction button() {\n  var btn = document.createElement('button');\n  btn.textContent = 'Click Me!';\n  btn.classList.add(_button_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button);\n  btn.addEventListener('click', function () {\n    return printMe();\n  });\n  return btn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg3LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9idXR0b24uanM/NTgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGVzZSBzdHlsZXMgYXJlIHNjb3BlZCB0byB0aGlzIC5qcyBmaWxlLlxuLy8gVGhlc2UgYXJlIGVzc2VudGlhbGx5IENTUyBtb2R1bGVzIHRoYW5rcyB0byBvdXIgd2VicGFjayBjb25maWd1cmF0aW9uLlxuaW1wb3J0IHN0eWxlIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uKCkge1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YnRuLnRleHRDb250ZW50ID0gJ0NsaWNrIE1lISc7XG5cdGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlLmJ1dHRvbik7XG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHByaW50TWUoKSk7XG5cblx0cmV0dXJuIGJ0bjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///487\n");

/***/ }),

/***/ 361:
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ 409);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ 487);\n/* harmony import */ var _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/box.svg */ 867);\n/* provided dependency */ var _ = __webpack_require__(/*! lodash */ 486);\n// These are global styles (a default css behaviour)\n\n\n\n[1, 2, 3].map(function (n) {\n  return n + 1;\n});\n\nfunction header() {\n  var h1 = document.createElement('h1');\n  h1.classList.add('font-700');\n  var boxLogo = new Image();\n  boxLogo.src = _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_2__;\n  boxLogo.classList.add('logo-svg');\n  var paragraph = document.createElement('p');\n  paragraph.textContent = _.join(['Hello', 'Webpack'], ' ');\n  h1.appendChild(boxLogo);\n  h1.appendChild(paragraph);\n  return h1;\n}\n\ndocument.body.appendChild(header());\ndocument.body.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYxLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC10b29sYm94Ly4vc291cmNlL2luZGV4LmpzP2QzOTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlc2UgYXJlIGdsb2JhbCBzdHlsZXMgKGEgZGVmYXVsdCBjc3MgYmVoYXZpb3VyKVxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuaW1wb3J0IEJveFN2ZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvYm94LnN2Zyc7XG5cblsxLCAyLCAzXS5tYXAoKG4pID0+IG4gKyAxKTtcblxuZnVuY3Rpb24gaGVhZGVyKCkge1xuXHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdGgxLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtNzAwJyk7XG5cblx0Y29uc3QgYm94TG9nbyA9IG5ldyBJbWFnZSgpO1xuXHRib3hMb2dvLnNyYyA9IEJveFN2Zztcblx0Ym94TG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvLXN2ZycpO1xuXG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID0gXy5qb2luKFsnSGVsbG8nLCAnV2VicGFjayddLCAnICcpO1xuXG5cdGgxLmFwcGVuZENoaWxkKGJveExvZ28pO1xuXHRoMS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdHJldHVybiBoMTtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///361\n");

/***/ }),

/***/ 409:
/*!***************************!*\
  !*** ./source/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA5LmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLXRvb2xib3gvLi9zb3VyY2Uvc3R5bGUuc2Nzcz8zMjVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///409\n");

/***/ }),

/***/ 262:
/*!***********************************!*\
  !*** ./source/button.module.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"button\":\"tFu_reGHFm06qOfZwuQf\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9idXR0b24ubW9kdWxlLnNjc3M/MTg5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJ1dHRvblwiOlwidEZ1X3JlR0hGbTA2cU9mWnd1UWZcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///262\n");

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
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(361)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);