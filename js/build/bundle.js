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

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _console;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/* 
		Arrow Functions
	*/
	var square = function square(num) {
		return num * num;
	}; // Arrow shorthand method
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
			}); // Access parent scope directly using 'this'
		}
	};
	console.log(obj.getDoubled());

	/*
		const and let + block scoping 
	*/
	var int = 10;
	var char = 'Text1';
	{
		var _char = 'Text2'; // 'let' and 'const' enables block scoping
	}
	//int = 12; // Not allowed, int is read-only
	console.log(char);
	{
		var b = 'b';
	}
	//console.log(b); // undefined


	/* 
		Default parameters
	*/
	var fn = function fn(greet) {
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';
		return greet + ' ' + name;
	};
	console.log(fn('Hello'));
	console.log(fn('Hello', 'guys'));

	/*
		Object shorthand properties
	*/
	var firstName = 'Arun',
	    lastName = 'Dsouza',
	    func = function func() {
		return 'Func!';
	};
	var user = { firstName: firstName, lastName: lastName, func: func }; // Sets key name as that of variable
	console.log(user);
	console.log(user.func());

	/* 
		Spread operator
	*/
	var list = [5, 6, 7, 8, 9];
	(_console = console).log.apply(_console, list); // Spreads out to individual items

	var add = function add(a, b, c) {
		return a + b + c;
	};
	console.log(add.apply(undefined, [1, 2, 3]));

	var key = 'info',
	    info = { id: 12, num: 1244 };
	var userInfo = {
		name: 'test',
		email: 'a@a.com'
	};
	var detail = _extends({}, userInfo, _defineProperty({}, key, info)); // Spread out objects to add new key/value pairs
	console.log(detail);

	/* 
		String templates
	*/
	var string = 'This is a string';
	var template = string + '  \n\n\t\tString templates can be multi-line\n';
	console.log(template);

/***/ }
/******/ ]);