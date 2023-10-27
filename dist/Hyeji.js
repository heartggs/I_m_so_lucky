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

/***/ "./src/Hyeji.css":
/*!***********************!*\
  !*** ./src/Hyeji.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lucky/./src/Hyeji.css?");

/***/ }),

/***/ "./src/Hyeji.js":
/*!**********************!*\
  !*** ./src/Hyeji.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knowHyeji_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowHyeji.js */ \"./src/knowHyeji.js\");\n/* harmony import */ var _Hyeji_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hyeji.css */ \"./src/Hyeji.css\");\n/* harmony import */ var _image_person_me_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/person_me.png */ \"./image/person_me.png\");\n/* harmony import */ var _image_shirt_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/shirt.png */ \"./image/shirt.png\");\n/* harmony import */ var _image_jeans_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/jeans.png */ \"./image/jeans.png\");\n/* harmony import */ var _image_t_shirt_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/t-shirt.png */ \"./image/t-shirt.png\");\n/* harmony import */ var _image_hoodie_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image/hoodie.png */ \"./image/hoodie.png\");\n/* harmony import */ var _image_shoe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/shoe.png */ \"./image/shoe.png\");\n/* harmony import */ var _image_cap_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image/cap.png */ \"./image/cap.png\");\n/* harmony import */ var _image_shirt_me_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image/shirt_me.png */ \"./image/shirt_me.png\");\n/* harmony import */ var _image_jeans_me_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image/jeans_me.png */ \"./image/jeans_me.png\");\n/* harmony import */ var _image_t_shirt_me_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image/t-shirt_me.png */ \"./image/t-shirt_me.png\");\n/* harmony import */ var _image_hoodie_me_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image/hoodie_me.png */ \"./image/hoodie_me.png\");\n/* harmony import */ var _image_shoe_me_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../image/shoe_me.png */ \"./image/shoe_me.png\");\n/* harmony import */ var _image_cap_me_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../image/cap_me.png */ \"./image/cap_me.png\");\n/* harmony import */ var _image_cotton_canvastextures_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../image/cotton-canvastextures.jpg */ \"./image/cotton-canvastextures.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst clothingAreas = document.querySelectorAll(\".area\");\nconst popupContent = document.querySelector(\".popupContent\");\nconst closeButton = document.querySelector(\".closeButton\");\nconst explanationPopupElement = document.querySelector(\".explanation_popup\");\n\nfunction showExplanation(content) {\n  explanationPopupElement.style.display = \"flex\";\n  popupContent.innerHTML = content;\n}\n\nfunction hideExplanation() {\n  explanationPopupElement.style.display = \"none\";\n}\n\nclothingAreas.forEach((area) => {\n  area.addEventListener(\"click\", () => {\n    const firstClassName = area.classList[0];\n    const clothing = _knowHyeji_js__WEBPACK_IMPORTED_MODULE_0__.explanationPopup[firstClassName];\n    const meImage = document.querySelector(\".me\");\n\n    meImage.setAttribute(\"src\", clothing.img);\n\n    const addContent = clothing.content\n      .map((item, index, array) => {\n        if (\n          index === array.length - 1 &&\n          (firstClassName === \"shoe\" || firstClassName === \"cap\")\n        ) {\n          return `<a href=\"${item}\">[링크] ${item}</a>`;\n        } else {\n          return `<p>${item}</p>`;\n        }\n      })\n      .join(\"\");\n\n    showExplanation(`<h3>${clothing.title}</h3>\n    ${addContent}`);\n  });\n});\n\ncloseButton.addEventListener(\"click\", hideExplanation);\n\n//css hover효과를 javascript로 사용해보기\nconst clothElements = document.querySelectorAll(\".cloth\");\nconst hoverEffectElements = document.querySelectorAll(\".hover_effect\");\nconst hoverTxtElements = document.querySelectorAll(\".hover_txt\");\n\nfunction handleClothHover(event) {\n  const index = Array.from(clothElements).indexOf(event.target);\n\n  hoverEffectElements[index].style.display = \"block\";\n  hoverTxtElements[index].style.display = \"block\";\n}\n\nfunction handleClothMouseOut(event) {\n  const index = Array.from(clothElements).indexOf(event.target);\n  hoverEffectElements[index].style.display = \"none\";\n  hoverTxtElements[index].style.display = \"none\";\n}\n\nclothElements.forEach((cloth) => {\n  cloth.addEventListener(\"mouseenter\", handleClothHover);\n  cloth.addEventListener(\"mouseleave\", handleClothMouseOut);\n});\n\n\n//# sourceURL=webpack://lucky/./src/Hyeji.js?");

/***/ }),

/***/ "./src/knowHyeji.js":
/*!**************************!*\
  !*** ./src/knowHyeji.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   explanationPopup: () => (/* binding */ explanationPopup)\n/* harmony export */ });\nconst explanationPopup = {\n  hyeji: {\n    title: \"정혜지\",\n    content: [\n      \"Name : 정혜지\",\n      \"Phone : 010 - 3192 - 6407\",\n      \"E-Mail : jounghj0806@naver.com\",\n      \"Blog : https://blog.naver.com/heather_blog\",\n      \"Github : https://github.com/heartggs\",\n    ],\n    img: \"/person_me.png\",\n  },\n  shirt: {\n    title: \"SI프로젝트 1년 경력 (조직 경험 보유)\",\n    content: [\n      \"si프로젝트를 퍼블리셔로 활동한 경력있음\",\n      \"기획 / 디자인 / 개발자와 같은 타 직무군과의 대화를 통해 프로젝트를 경험\",\n      \"소통과 협업능력이 다른 신입에 비해 좀 더 뛰어날 것으로 예상\",\n    ],\n    img: \"/shirt_me.png\",\n  },\n  pants: {\n    title: \"프론트엔드개발자 정혜지\",\n    content: [\n      \"코딩은 한번에 정적 / 동적인 것을 만들수 있다\",\n      \"이러한 점이 흥미롭게 다가와 프론트엔드 개발자를 선택\",\n      \"프론트엔드 개발자가 되기 위해 열심히 노력중\",\n    ],\n    img: \"/jeans_me.png\",\n  },\n  jacket: {\n    title: \"동적인 것에 큰 호기심\",\n    content: [\n      \"동적인 인터랙티브 웹 만들기에 큰 호기심을 가지고 있다\",\n      \"세상에서 가장 멋진 인터랙티브 웹을 만들것이다\",\n    ],\n    img: \"/t-shirt_me.png\",\n  },\n  dress: {\n    title: \"백엔드와의 팀프로젝트를 경험\",\n    content: [\n      \"RestfulAPI를 활용하여 서비스 구축\",\n      \"스프링을 주 언어로 사용한 백엔드와 기획부터, 개발, 배포까지 전과정 경험\",\n      \"화면크기에 따른 반응형 웹페이지로 개발\",\n    ],\n    img: \"/hoodie_me.png\",\n  },\n  shoe: {\n    title: \"팀프로젝트(Pop-it!)\",\n    content: [\n      \"팝업스토어 소재의 이커머스 서비스\",\n      \"사용스택 : React, Typescript, tailwindCSS, Axios, Json data, Vite\",\n      \"참여인원 : 프론트엔드 3명 / 백엔드 4명\",\n      \"https://silent-mile-eee.notion.site/POP-IT-47e72bd78e994767b01ae94fcdaa2cf4?pvs=4\",\n    ],\n    img: \"/shoe_me.png\",\n  },\n  cap: {\n    title: \"개인프로젝트(caff캪caff)\",\n    content: [\n      \"카페인에 관심이 많은 사람들을 위해\",\n      \"음료의 카페인 함량과 개인의 권장 섭취량 비율을 확인할 수 있는 서비스\",\n      \"사용스택 : React, Typescript, Axios, React-router-dom, vite, Firebase\",\n      \"https://silent-mile-eee.notion.site/caff-caff-0358eda68b0749f7ace1a340a04bb01f?pvs=4\",\n    ],\n    img: \"/cap_me.png\",\n  },\n};\n\n\n\n\n//# sourceURL=webpack://lucky/./src/knowHyeji.js?");

/***/ }),

/***/ "./image/cap.png":
/*!***********************!*\
  !*** ./image/cap.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6d2a8bab485f352b8a9.png\";\n\n//# sourceURL=webpack://lucky/./image/cap.png?");

/***/ }),

/***/ "./image/cap_me.png":
/*!**************************!*\
  !*** ./image/cap_me.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4fdcfa5139625ebc22b8.png\";\n\n//# sourceURL=webpack://lucky/./image/cap_me.png?");

/***/ }),

/***/ "./image/cotton-canvastextures.jpg":
/*!*****************************************!*\
  !*** ./image/cotton-canvastextures.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"70915096ff60ae6a9701.jpg\";\n\n//# sourceURL=webpack://lucky/./image/cotton-canvastextures.jpg?");

/***/ }),

/***/ "./image/hoodie.png":
/*!**************************!*\
  !*** ./image/hoodie.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e67b035071246f692f49.png\";\n\n//# sourceURL=webpack://lucky/./image/hoodie.png?");

/***/ }),

/***/ "./image/hoodie_me.png":
/*!*****************************!*\
  !*** ./image/hoodie_me.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b7511bc12fc7d386009a.png\";\n\n//# sourceURL=webpack://lucky/./image/hoodie_me.png?");

/***/ }),

/***/ "./image/jeans.png":
/*!*************************!*\
  !*** ./image/jeans.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed34ddfa5eb8dcd8944e.png\";\n\n//# sourceURL=webpack://lucky/./image/jeans.png?");

/***/ }),

/***/ "./image/jeans_me.png":
/*!****************************!*\
  !*** ./image/jeans_me.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddc7cab67268fbd32b1b.png\";\n\n//# sourceURL=webpack://lucky/./image/jeans_me.png?");

/***/ }),

/***/ "./image/person_me.png":
/*!*****************************!*\
  !*** ./image/person_me.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1ab91e72bea6ecbbadc.png\";\n\n//# sourceURL=webpack://lucky/./image/person_me.png?");

/***/ }),

/***/ "./image/shirt.png":
/*!*************************!*\
  !*** ./image/shirt.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"083ccbcaba65e61c7134.png\";\n\n//# sourceURL=webpack://lucky/./image/shirt.png?");

/***/ }),

/***/ "./image/shirt_me.png":
/*!****************************!*\
  !*** ./image/shirt_me.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c523f41c078e7992fb5.png\";\n\n//# sourceURL=webpack://lucky/./image/shirt_me.png?");

/***/ }),

/***/ "./image/shoe.png":
/*!************************!*\
  !*** ./image/shoe.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f15ddf735db1aa64fd23.png\";\n\n//# sourceURL=webpack://lucky/./image/shoe.png?");

/***/ }),

/***/ "./image/shoe_me.png":
/*!***************************!*\
  !*** ./image/shoe_me.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d06de101122d0bb4511d.png\";\n\n//# sourceURL=webpack://lucky/./image/shoe_me.png?");

/***/ }),

/***/ "./image/t-shirt.png":
/*!***************************!*\
  !*** ./image/t-shirt.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7e2bb395f2842bbbf84.png\";\n\n//# sourceURL=webpack://lucky/./image/t-shirt.png?");

/***/ }),

/***/ "./image/t-shirt_me.png":
/*!******************************!*\
  !*** ./image/t-shirt_me.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf782b97c7bca12ce710.png\";\n\n//# sourceURL=webpack://lucky/./image/t-shirt_me.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Hyeji.js");
/******/ 	
/******/ })()
;