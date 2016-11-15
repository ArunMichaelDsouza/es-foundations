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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _console, _console2;

	var _templateObject = _taggedTemplateLiteral(['Its ', ' ', ' ', ''], ['Its ', ' ', ' ', '']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

	var data = {
		id: 11,
		name: 'User'
	};
	(_console2 = console).log.apply(_console2, _toConsumableArray(data));

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
	var template = string + '  \n\n\t\tString templates can be multi-line \n';
	console.log(template); // 

	var evalutate = '10 + 23 = ' + (10 + 23);
	console.log(evalutate);

	console.log('' + new Date()); // Expressions in string templates

	var stringFn = function stringFn(string) {
		return '' + string[0] + (arguments.length <= 1 ? undefined : arguments[1]) + '-' + (arguments.length <= 2 ? undefined : arguments[2]) + '-' + (arguments.length <= 3 ? undefined : arguments[3]);
	};

	var tmpl = stringFn(_templateObject, new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear());
	console.log(tmpl);

	/* 
		Destructuring 
	*/
	var i = {
		id: 111
	};

	var id = i.id;

	console.log(id);

	var j = {
		no: 222
	};

	var userId = j.no; // Alias to use object property

	console.log(userId);

	var getDestructured = function getDestructured(props) {
		var id = props.id,
		    name = props.name;


		return 'Id of ' + name + ' is : ' + id;
	};

	var o = { id: 333, name: 'Test' };
	console.log(getDestructured(o));

	var users = ['Dave', 'Erica', 'James', 'Alan'];
	var destrcutedArray1 = users[0],
	    destrcutedArray2 = users[1],
	    destrcutedArray3 = users[3]; // Destructuring an array

	console.log(destrcutedArray1);
	console.log(destrcutedArray2);
	console.log(destrcutedArray3);

	var userList = [{
		id: 1,
		email: 'a@a.com'
	}, {
		id: 2,
		email: 'b@a.com'
	}, {
		id: 3,
		email: 'c@a.com'
	}];

	userList.forEach(function (_ref) {
		var email = _ref.email;
		// Destructuring array element property
		console.log(email);
	});

	/*
		Modules

		ES6 Modules implementation is performed in the following branches - 
		1) modules-object-library
		2) modules-individual-export
		3) modules-direct-export
		4) modules-export-from
	*/

	/* 
		Array.from 
	*/
	var listItems = document.querySelectorAll('li'),
	    listItemsArray = Array.from(listItems); // Convert nodelist to array

	listItemsArray.forEach(function (item) {
		item.innerHTML < 10 ? item.style.color = 'red' : '';
	});

	/*
		ES6 Promises 
	*/
	var asyncOperation = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();
		}, 2000);
	});

	// Async operation result to be obtained here
	asyncOperation.then(function () {
		console.log('Promise resolved');
	}).catch(function () {
		console.log('Promise rejected');
	});

	/* 
		ES6 Maps
	*/
	var map = new Map();
	map.set('id', 12432);
	map.set('type', 'user');
	console.log(map);
	console.log(map.get('id'));
	console.log(map.size);

	map.clear();
	console.log(map);

	map.set('id', 12432);
	map.set('type', 'user');
	console.log(map.has('id'));

	console.log(map.entries()); // Map iterators
	console.log(map.keys());
	console.log(map.values());

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = map.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    mapKey = _step$value[0],
			    mapValue = _step$value[1];

			// For of implementation
			console.log(mapKey + ' : ' + mapValue);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var mapId = 'id',
	    newMap = new Map();

	newMap.set(mapId, 66534); // Set primitives as map keys i.e. string, number etc.
	console.log(newMap.get(mapId));

	/*
		ES6 WeakMaps
	*/
	var weakMap = new WeakMap(),
	    wkobj = {};
	weakMap.set(wkobj, 213456); // No primitive types allowed as keys
	console.log(weakMap.get(wkobj));
	//console.log(weakMap.entries()); // Not available as weakmaps are immutable

/***/ }
/******/ ]);