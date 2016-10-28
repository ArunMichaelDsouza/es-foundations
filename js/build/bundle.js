/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	/* 
		Arrow Functions
	*/
	var square = function square(num) {
		return num * num;
	};
	console.log(square(10));

	var calculate = function calculate(a, b) {
		++b;
		return a + b;
	};
	console.log(calculate(1, 2));

	var arr = [1, 2, 3, 4, 5].map(function (i) {
		return i * 2;
	});
	console.log(arr);

	var reducedValue = [1, 2, 3, 4, 5].reduce(function (i, j) {
		return i + j;
	});
	console.log(reducedValue);

	/*
		Lexical this
	*/
	var obj = {
		arr: [1, 2, 3, 4, 5],
		getDoubled: function getDoubled() {
			return this.arr.map(function (i) {
				return i * 2;
			});
		}
	};
	console.log(obj.getDoubled());

/***/ }
/******/ ]);