/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lucky/./src/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _image_grass_1000_mm_architextures_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/grass-1000-mm-architextures.jpg */ \"./image/grass-1000-mm-architextures.jpg\");\n/* harmony import */ var _image_slot_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/slot_image.png */ \"./image/slot_image.png\");\n/* harmony import */ var _image_lucky_image_540_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/lucky_image_540.jpg */ \"./image/lucky_image_540.jpg\");\n/* harmony import */ var _image_lucky_image_320_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/lucky_image_320.jpg */ \"./image/lucky_image_320.jpg\");\n\n\n\n\n\n\nconst slot_wrapper = document.querySelector(\".slot_wrapper\");\nconst slot_boxes = document.querySelectorAll(\".slot_box\");\nconst start_btn = document.querySelector(\".start_btn\");\nconst more_know_btn = document.querySelector(\".to_know_hyeji_btn\");\nconst modal_popup = document.querySelector(\".popup_wrapper\");\n\nasync function startAnimation() {\n  const animationPromises = [];\n\n  for (let i = 0; i < slot_boxes.length; i++) {\n    const slotbox = slot_boxes[i];\n    slotbox.style.animation = \"slotAnimation 3s infinite linear\";\n\n    const animationPromise = new Promise((resolve) => {\n      setTimeout(() => {\n        stopSlotMachine(i);\n        resolve(); // 애니메이션 종료 후 Promise를 해결합니다.\n      }, (i + 1) * 1000);\n    });\n    animationPromises.push(animationPromise);\n  }\n\n  await Promise.all(animationPromises);\n  startConfettiAnimation();\n\n  await new Promise((resolve) => {\n    setTimeout(() => {\n      modal_popup.style.display = \"flex\";\n      resolve();\n    }, 1500);\n  });\n}\n\nfunction stopSlotMachine(index) {\n  const firstSlotBox = slot_boxes[0];\n  const computedStyle = getComputedStyle(firstSlotBox);\n  const backgroundImageHeight = computedStyle.backgroundSize;\n  const toNumber = parseFloat(backgroundImageHeight);\n\n  const slotbox = slot_boxes[index];\n  slotbox.style.animation = \"none\";\n  slotbox.style.backgroundPosition = `0 -${6 * toNumber}px`;\n}\n\nfunction startConfettiAnimation() {\n  const canvas = document.getElementById(\"custom_canvas\");\n  const jsConfetti = new JSConfetti({ canvas });\n  jsConfetti.addConfetti({\n    confettiColors: [\n      \"#ff0a54\",\n      \"#ff477e\",\n      \"#ff7096\",\n      \"#ff85a1\",\n      \"#fbb1bd\",\n      \"#f9bec7\",\n    ],\n  });\n}\n\nstart_btn.addEventListener(\"click\", startAnimation);\n\nmore_know_btn.addEventListener(\"click\", () => {\n  const newPageURL = \"knowHyeji.html\";\n  window.location.href = newPageURL;\n});\n\n\n//# sourceURL=webpack://lucky/./src/main.js?");

/***/ }),

/***/ "./image/grass-1000-mm-architextures.jpg":
/*!***********************************************!*\
  !*** ./image/grass-1000-mm-architextures.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4720c2d4d2323e29d500.jpg\";\n\n//# sourceURL=webpack://lucky/./image/grass-1000-mm-architextures.jpg?");

/***/ }),

/***/ "./image/lucky_image_320.jpg":
/*!***********************************!*\
  !*** ./image/lucky_image_320.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"418d633aba002bafb183.jpg\";\n\n//# sourceURL=webpack://lucky/./image/lucky_image_320.jpg?");

/***/ }),

/***/ "./image/lucky_image_540.jpg":
/*!***********************************!*\
  !*** ./image/lucky_image_540.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81ac3cfae9f20a1187a8.jpg\";\n\n//# sourceURL=webpack://lucky/./image/lucky_image_540.jpg?");

/***/ }),

/***/ "./image/slot_image.png":
/*!******************************!*\
  !*** ./image/slot_image.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bb207dfbdb49dafc450.png\";\n\n//# sourceURL=webpack://lucky/./image/slot_image.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;