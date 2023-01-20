/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function draw(context, canvas_w, canvas_h, data) {\n    // This function draws arrays.\n    let img = new ImageData(new Uint8ClampedArray(data), canvas_w, canvas_h);\n    context.putImageData(img, 0, 0);\n}\n\nconsole.log(\"[INFO] Start loading WASM 🚀\");\nconst wasm = __webpack_require__.e(/*! import() */ \"pkg_wasm_fractal_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../pkg */ \"../pkg/wasm_fractal.js\")).catch(console.error);\nconsole.log(\"[INFO] End loading WASM ✅\");\n\nPromise.all([wasm]).then(async function (\n    [{ generate_mandelbrot_set }]) {\n    const X_MIN = -2.0;\n    const X_MAX = 1.0;\n    const Y_MIN = -1.0;\n    const Y_MAX = 1.0;\n    const MAX_ITER = 300;\n    // Initial value of z_0\n    const REAL = 0.0;\n    const IMAGINARY = 0.0;\n    {\n        let result_mandelbrot = null;\n        const CANVAS_ID = \"canvas_mandelbrot\";\n        let canvas = document.getElementById(CANVAS_ID);\n\n        if (canvas != null) {\n            let context = canvas.getContext(\"2d\");\n            const canvasWidth = canvas.clientWidth;\n            const canvasHeight = canvas.clientHeight;\n\n            console.log(\"[INFO] Draw: Mandelbrot set\");\n            const start_time = Date.now();\n\n            result_mandelbrot = generate_mandelbrot_set(canvasWidth, canvasHeight, X_MIN, X_MAX, Y_MIN, Y_MAX, MAX_ITER, REAL, IMAGINARY);\n            draw(context, canvasWidth, canvasHeight, result_mandelbrot);\n\n            const end_time = Date.now();\n            const elapsed = end_time - start_time;\n            console.log(`[INFO] Elapsed: ${elapsed}[ms] for Mandelbrot set`);\n        }\n    }\n});\n\nPromise.all([wasm]).then(async function (\n    [{ generate_julia_set }]) {\n    const X_MIN = -2.0;\n    const X_MAX = 2.0;\n    const Y_MIN = -1.5;\n    const Y_MAX = 1.5;\n    const MAX_ITER = 1000;\n    // Initial value of c\n    const REAL = -0.7269;\n    const IMAGINARY = 0.1889;\n    {\n        let result_julia = null;\n        const CANVAS_ID = \"canvas_julia\";\n        let canvas = document.getElementById(CANVAS_ID);\n\n        if (canvas != null) {\n            let context = canvas.getContext(\"2d\");\n            const canvasWidth = canvas.clientWidth;\n            const canvasHeight = canvas.clientHeight;\n\n            console.log(\"[INFO] Draw: Julia set\");\n            const start_time = Date.now();\n\n            result_julia = generate_julia_set(canvasWidth, canvasHeight, X_MIN, X_MAX, Y_MIN, Y_MAX, MAX_ITER, REAL, IMAGINARY);\n            draw(context, canvasWidth, canvasHeight, result_julia);\n\n            const end_time = Date.now();\n            const elapsed = end_time - start_time;\n            console.log(`[INFO] Elapsed: ${elapsed}[ms] for Julia set`);\n        }\n    }\n});\n\n\n//# sourceURL=webpack://create-wasm-app/./index.js?");

/***/ })

}]);