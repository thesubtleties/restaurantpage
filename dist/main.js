/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nconst contact = () => {\n    let oldDiv = document.getElementById('contentArea');\n    let newDiv = document.createElement('div');\n    newDiv.innerHTML = `<div class = \"homeText\">We love to hear from our patien... patrons. Please contact us at 555-432-1234 or noreply@covidcafe.com</div>`;\n    newDiv.setAttribute('class', 'homePage');\n    oldDiv.appendChild(newDiv);\n}\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: contentArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contentArea\", function() { return contentArea; });\nconst contentArea = () => {\n    let oldDiv = document.getElementById('contentArea');\n    let newDiv = document.createElement('div');\n    newDiv.innerHTML = `<div class = \"homeText\">Founded in 2019, Covid Cafe offers an unparalled menu of chef and crowd favorites. Globally inspired and locally sourced, we are laser focused on delivering a unique dining experience. \n    Whether you are in the mood for our signature 'Mask it or Casket' hand crafted cocktail, or our 1.5lb, USA#1 Burger - we deliver with pride. Remember, just because you can't taste, don't mean our shit don't taste good. </div>`\n    newDiv.setAttribute('class', 'homePage');\n    oldDiv.appendChild(newDiv);\n}\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nObject(_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"pageLoader\"])();\nconst clearArea = () => {\n    const oldDiv = document.getElementById('contentArea');\n    oldDiv.innerHTML = '';\n\n}\nconst navLinker = (() => {\n    let menuArea = document.querySelectorAll('.menuLink');\n    menuArea.forEach((div) => {\n        div.addEventListener('click', () => {\n            if (div.getAttribute('id') == 'home') {\n                clearArea();\n                Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"contentArea\"])();\n            }\n            else if (div.getAttribute('id') == 'menu') {\n                clearArea();\n                Object(_menu__WEBPACK_IMPORTED_MODULE_3__[\"menu\"])();\n            }\n            else if (div.getAttribute('id') == 'contact') {\n                clearArea();\n                Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"contact\"])();\n            }\n        })\n    })\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\nconst menu = () => {\n    let oldDiv = document.getElementById('contentArea');\n    oldDiv.innerHTML = `<div class = \"menuPage\"><div id = \"menuTitle\">Menu</div><div class = \"menuItem\" id = \"item1\">Wuhan Wontons<br>12</div><div class = \"menuItem\" id = \"item2\">Lockdownsagna<br>15</div><div class = \"menuItem\" id = \"item3\">Did it Right Pizza Pie<br>11</div>\n    <div class = \"menuItem\" id = \"item4\">AZ 5K Quasadaya<br>9</div><div class = \"menuItem\" id = \"item5\">Florida Man<br>(Natty Light and Marlboro Red)<br>6</div><div class = \"menuItem\" id = \"item6\">2nd Wave Bloody Mary<br>8</div></div>`;\n\n}\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/*! exports provided: pageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageLoader\", function() { return pageLoader; });\nconst pageLoader = () => {\n    let contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = `<div class = \"restName\">Covid Cafe</div>\n    <div class = \"menuBar\">\n      <div class = \"menuLink\" id = \"home\">Home</div>\n      <div class = \"menuLink\" id = \"menu\">Menu</div>\n      <div class = \"menuLink\" id = \"contact\">Contact</div>\n    </div>\n    <div class = \"contentArea\" id = \"contentArea\">\n    <div class = \"homePage\"><div class = \"homeText\">Founded in 2019, Covid Cafe offers an unparalled menu of chef and crowd favorites. Globally inspired and locally sourced, we are laser focused on delivering a unique dining experience. \n      Whether you are in the mood for our signature 'Mask it or Casket' hand crafted cocktail, or our 1.5lb, USA#1 Burger - we deliver with pride. Remember, just because you can't taste, don't mean our shit don't taste good. </div></div>\n    </div>`;\n    \n    };\n\n\n\n\n//# sourceURL=webpack:///./src/pageLoad.js?");

/***/ })

/******/ });