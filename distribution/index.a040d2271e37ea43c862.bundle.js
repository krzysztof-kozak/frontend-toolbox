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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ button)\n/* harmony export */ });\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.css */ 581);\n\nfunction button() {\n  var btn = document.createElement('button');\n  btn.textContent = 'Click Me!';\n  btn.classList.add(_button_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button);\n  btn.addEventListener('click', function () {\n    return printMe();\n  });\n  return btn;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg3LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC10b29sYm94Ly4vc291cmNlL2J1dHRvbi5qcz81ODE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uKCkge1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0YnRuLnRleHRDb250ZW50ID0gJ0NsaWNrIE1lISc7XG5cdGJ0bi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5idXR0b24pO1xuXHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwcmludE1lKCkpO1xuXG5cdHJldHVybiBidG47XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///487\n");

/***/ }),

/***/ 361:
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ 487);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ 376);\n/* harmony import */ var _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/box.svg */ 867);\n/* provided dependency */ var _ = __webpack_require__(/*! lodash */ 486);\n\n\n\n[1, 2, 3].map(function (n) {\n  return n + 1;\n});\n\nfunction header() {\n  var h1 = document.createElement('h1');\n  h1.classList.add('font-700');\n  var boxLogo = new Image();\n  boxLogo.src = _assets_images_box_svg__WEBPACK_IMPORTED_MODULE_2__;\n  boxLogo.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"logo-svg\"]);\n  var paragraph = document.createElement('p');\n  paragraph.textContent = _.join(['Hello', 'Webpack'], ' ');\n  h1.appendChild(boxLogo);\n  h1.appendChild(paragraph);\n  return h1;\n}\n\ndocument.body.appendChild(header());\ndocument.body.appendChild((0,_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYxLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9pbmRleC5qcz9kMzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBCb3hTdmcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2JveC5zdmcnO1xuXG5bMSwgMiwgM10ubWFwKChuKSA9PiBuICsgMSk7XG5cbmZ1bmN0aW9uIGhlYWRlcigpIHtcblx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXHRoMS5jbGFzc0xpc3QuYWRkKCdmb250LTcwMCcpO1xuXG5cdGNvbnN0IGJveExvZ28gPSBuZXcgSW1hZ2UoKTtcblx0Ym94TG9nby5zcmMgPSBCb3hTdmc7XG5cdGJveExvZ28uY2xhc3NMaXN0LmFkZChzdHlsZXNbJ2xvZ28tc3ZnJ10pO1xuXG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID0gXy5qb2luKFsnSGVsbG8nLCAnV2VicGFjayddLCAnICcpO1xuXG5cdGgxLmFwcGVuZENoaWxkKGJveExvZ28pO1xuXHRoMS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdHJldHVybiBoMTtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///361\n");

/***/ }),

/***/ 581:
/*!***************************!*\
  !*** ./source/button.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"button\":\"XUe7_so3RVrKavwO7I9F\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTgxLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9idXR0b24uY3NzPzY4YjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJidXR0b25cIjpcIlhVZTdfc28zUlZyS2F2d083STlGXCJ9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///581\n");

/***/ }),

/***/ 376:
/*!**************************!*\
  !*** ./source/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"font-400\":\"DvNYUdAKdUPAr6n4deLo\",\"font-700\":\"zlWEJnaawif338uXH_Vs\",\"logo-svg\":\"W53mMk4kB_BN1Z3jwUPk\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzc2LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtdG9vbGJveC8uL3NvdXJjZS9zdHlsZS5jc3M/ZTY5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImZvbnQtNDAwXCI6XCJEdk5ZVWRBS2RVUEFyNm40ZGVMb1wiLFwiZm9udC03MDBcIjpcInpsV0VKbmFhd2lmMzM4dVhIX1ZzXCIsXCJsb2dvLXN2Z1wiOlwiVzUzbU1rNGtCX0JOMVozandVUGtcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///376\n");

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