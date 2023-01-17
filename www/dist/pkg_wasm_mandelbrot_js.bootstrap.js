"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["pkg_wasm_mandelbrot_js"],{

/***/ "../pkg/wasm_mandelbrot.js":
/*!*********************************!*\
  !*** ../pkg/wasm_mandelbrot.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate_julia_set\": () => (/* reexport safe */ _wasm_mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.generate_julia_set),\n/* harmony export */   \"generate_mandelbrot_set\": () => (/* reexport safe */ _wasm_mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.generate_mandelbrot_set)\n/* harmony export */ });\n/* harmony import */ var _wasm_mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_mandelbrot_bg.js */ \"../pkg/wasm_mandelbrot_bg.js\");\n\n\n\n//# sourceURL=webpack://create-wasm-app/../pkg/wasm_mandelbrot.js?");

/***/ }),

/***/ "../pkg/wasm_mandelbrot_bg.js":
/*!************************************!*\
  !*** ../pkg/wasm_mandelbrot_bg.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate_julia_set\": () => (/* binding */ generate_julia_set),\n/* harmony export */   \"generate_mandelbrot_set\": () => (/* binding */ generate_mandelbrot_set)\n/* harmony export */ });\n/* harmony import */ var _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_mandelbrot_bg.wasm */ \"../pkg/wasm_mandelbrot_bg.wasm\");\n\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n* @param {number} width\n* @param {number} height\n* @param {number} x_min\n* @param {number} x_max\n* @param {number} y_min\n* @param {number} y_max\n* @param {number} max_iter\n* @param {number} real\n* @param {number} imaginary\n* @returns {Uint8Array}\n*/\nfunction generate_julia_set(width, height, x_min, x_max, y_min, y_max, max_iter, real, imaginary) {\n    try {\n        const retptr = _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);\n        _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.generate_julia_set(retptr, width, height, x_min, x_max, y_min, y_max, max_iter, real, imaginary);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v0 = getArrayU8FromWasm0(r0, r1).slice();\n        _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 1);\n        return v0;\n    } finally {\n        _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\n/**\n* @param {number} width\n* @param {number} height\n* @param {number} x_min\n* @param {number} x_max\n* @param {number} y_min\n* @param {number} y_max\n* @param {number} max_iter\n* @param {number} real\n* @param {number} imaginary\n* @returns {Uint8Array}\n*/\nfunction generate_mandelbrot_set(width, height, x_min, x_max, y_min, y_max, max_iter, real, imaginary) {\n    try {\n        const retptr = _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);\n        _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.generate_mandelbrot_set(retptr, width, height, x_min, x_max, y_min, y_max, max_iter, real, imaginary);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v0 = getArrayU8FromWasm0(r0, r1).slice();\n        _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 1);\n        return v0;\n    } finally {\n        _wasm_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\n\n\n//# sourceURL=webpack://create-wasm-app/../pkg/wasm_mandelbrot_bg.js?");

/***/ }),

/***/ "../pkg/wasm_mandelbrot_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/wasm_mandelbrot_bg.wasm ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"\"]()\n\n//# sourceURL=webpack://create-wasm-app/../pkg/wasm_mandelbrot_bg.wasm?");

/***/ })

}]);