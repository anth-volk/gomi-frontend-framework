/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gomi"] = factory();
	else
		root["gomi"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/customComponents/data.js":
/*!**************************************!*\
  !*** ./src/customComponents/data.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"customComponentsFixedProps\": () => (/* binding */ customComponentsFixedProps),\n/* harmony export */   \"customComponentsVariableProps\": () => (/* binding */ customComponentsVariableProps)\n/* harmony export */ });\n// Define custom JSX-like components to enable easier scaffolding\nvar customComponentsFixedProps = {\n  flex: {\n    type: 'div',\n    props: {\n      style: {\n        display: \"flex\"\n      }\n    }\n  },\n  grid: {\n    type: 'div',\n    props: {\n      style: {\n        display: \"grid\"\n      }\n    }\n  }\n};\n\n// For variable props, keys representing user-input prop map to \n// standard JS equivalents\nvar customComponentsVariableProps = {\n  flex: {\n    dir: 'flexDirection',\n    ac: 'alignContent',\n    jc: 'justifyContent',\n    ai: 'alignItems',\n    ji: 'justifyItems'\n  },\n  grid: {\n    rows: 'gridTemplateRows',\n    cols: 'gridTemplateColumns',\n    temp: 'gridTemplate',\n    ac: 'alignContent',\n    jc: 'justifyContent',\n    ai: 'alignItems',\n    ji: 'justifyItems'\n  }\n};\n\n//# sourceURL=webpack://gomi/./src/customComponents/data.js?");

/***/ }),

/***/ "./src/customComponents/handlers.js":
/*!******************************************!*\
  !*** ./src/customComponents/handlers.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertCustomProps\": () => (/* binding */ convertCustomProps),\n/* harmony export */   \"convertCustomType\": () => (/* binding */ convertCustomType)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/customComponents/data.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n/**\n * Returns VDOM node type that corresponds with custom declaration in customComponentsFixedProps obj\n * @param {string} typeArg\n * @returns {string}\n */\nfunction convertCustomType(typeArg) {\n  return _data_js__WEBPACK_IMPORTED_MODULE_0__.customComponentsFixedProps[typeArg].type;\n}\n\n/**\n * Returns props object with standard HTML props when passed object that contains custom props\n * @param {string} typeArg\n * @param {Object} propArgs\n * @returns {Object}\n */\nfunction convertCustomProps(typeArg, propArgs) {\n  var props = {};\n\n  // First, assign props listed in customComponentsFixedProps to \n  // props obj, as these are fixed for all custom components of that type\n  props = _objectSpread({}, _data_js__WEBPACK_IMPORTED_MODULE_0__.customComponentsFixedProps[typeArg].props);\n\n  // Next, reassign variable-prop key shortcuts to their standard keys and\n  // place these into a style object, itself inside props\n  Object.keys(propArgs).forEach(function (key) {\n    if (_data_js__WEBPACK_IMPORTED_MODULE_0__.customComponentsVariableProps[typeArg].hasOwnProperty(key)) {\n      var keyToInsert = _data_js__WEBPACK_IMPORTED_MODULE_0__.customComponentsVariableProps[typeArg][key];\n      props = _objectSpread(_objectSpread({}, props), {}, {\n        style: _objectSpread(_objectSpread({}, props.style), {}, _defineProperty({}, keyToInsert, propArgs[key]))\n      });\n    }\n    // Unless props are standard, in which case, simply add them to props\n    else {\n      props = _objectSpread(_objectSpread({}, props), {}, _defineProperty({}, key, propArgs[key]));\n    }\n  });\n  return props;\n}\n\n//# sourceURL=webpack://gomi/./src/customComponents/handlers.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assignProps\": () => (/* binding */ assignProps),\n/* harmony export */   \"createElem\": () => (/* binding */ createElem),\n/* harmony export */   \"createNode\": () => (/* binding */ createNode),\n/* harmony export */   \"diffNodes\": () => (/* binding */ diffNodes),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _customComponents_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customComponents/data.js */ \"./src/customComponents/data.js\");\n/* harmony import */ var _customComponents_handlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customComponents/handlers.js */ \"./src/customComponents/handlers.js\");\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils.js */ \"./src/utils/utils.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\n\n/**\n * Iterates through a new HTML element's props and recursively assigns them to element\n * @param {HTMLElement} $newElem\n * @param {object} elemProps\n */\nfunction assignProps($newElem, elemProps) {\n  // Recursively assign props to VDOM nodes\n  Object.keys(elemProps).forEach(function (key) {\n    if (_typeof(elemProps[key]) !== 'object') {\n      $newElem[key] = elemProps[key];\n    } else {\n      assignProps($newElem[key], elemProps[key]);\n    }\n  });\n}\n\n/**\n * Creates DOM node by taking HTML element type,\n * props, and array of children from JSX transpiler\n * and returning formatted object\n * @param {string} typeArg\n * @param {object} propArgs\n * @param  {...any} childrenArgs\n * @returns {object}\n */\nfunction createNode(typeArg, propArgs) {\n  var type = null;\n  var props = {};\n  var children = null;\n\n  // If type is custom, process both type and props\n  if (Object.keys(_customComponents_data_js__WEBPACK_IMPORTED_MODULE_0__.customComponentsFixedProps).includes(typeArg)) {\n    type = (0,_customComponents_handlers_js__WEBPACK_IMPORTED_MODULE_1__.convertCustomType)(typeArg);\n    if (_typeof(propArgs) === 'object') {\n      props = (0,_customComponents_handlers_js__WEBPACK_IMPORTED_MODULE_1__.convertCustomProps)(typeArg, propArgs);\n    }\n  }\n  // Otherwise, assign type and props of standard elements\n  else {\n    type = typeArg;\n    if (_typeof(propArgs) === 'object') {\n      props = _objectSpread({}, propArgs);\n    }\n  }\n\n  // If children args are present...\n  for (var _len = arguments.length, childrenArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    childrenArgs[_key - 2] = arguments[_key];\n  }\n  if (childrenArgs.length > 0) {\n    // Flatten any arrays created by JSX interpolation, then set children to output\n    children = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.flattenArrays)(childrenArgs);\n  }\n  return {\n    type: type,\n    props: props,\n    children: children\n  };\n}\n\n/**\n * Recursively create HTML elements and their children from given node\n * @param {JSX.Element} node\n * @returns {HTMLElement}\n */\nfunction createElem(node) {\n  // First, create new HTML element\n  var $newElem = document.createElement(node.type);\n\n  // Map over props and assign them to element\n  if (node.props) {\n    assignProps($newElem, node.props);\n  }\n\n  // Recursively call createElem for each of the new element's children;\n  // if child is not object, createTextNode\n\n  if (node.children) {\n    node.children.forEach(function (child) {\n      return _typeof(child) !== 'object' ? $newElem.append(document.createTextNode(child)) : $newElem.append(createElem(child));\n    });\n  }\n  return $newElem;\n}\n\n/**\n * Compares two nodes and returns whether or not they are different\n * @param {JSX.Element} newNode New node being added using render()\n * @param {JSX.Element} oldNode Existing node that is being compared\n * @returns {boolean}\n */\nfunction diffNodes(newNode, oldNode) {\n  return _typeof(oldNode) !== _typeof(newNode) || typeof oldNode === 'string' && newNode !== oldNode || newNode.type !== oldNode.type;\n}\n\n/**\n * Recursively renders VDOM tree from elements and their children;\n * the initial code for this function is based heavily on the article at \n * https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060\n * and is meant as a learning exercise\n * @param {HTMLElement} $containerElem DOM element that JSX element will be appended to\n * @param {JSX.Element} newNode JSX element to be created and appended to DOM\n * @param {JSX.Element} [oldNode] Existing JSX element, against which newElem will be compared when updating DOM\n * @param {number} [index] Element index, which will be used in removing nodes\n */\nfunction render($containerElem, newNode, oldNode) {\n  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  // Check if container set to document.body, and if so, display console error\n  if ($containerElem === document.body) {\n    console.error('It is recommended to ' + 'create a separate container within document.body to ' + 'hold the application');\n  }\n  var $newElem = null;\n\n  // If no oldNode, then:\n  if (!oldNode) {\n    // Create new element\n    $newElem = createElem(newNode);\n    $containerElem.append($newElem);\n  } else if (!newNode) {\n    // Delete child of parent that corresponds with old node\n    $containerElem.removeChild($containerElem.childNodes[index]);\n  } else if (diffNodes(newNode, oldNode)) {\n    $containerElem.replaceChild(createElem(newNode), $containerElem.childNodes[index]);\n  } else if (_typeof(newNode) === 'object') {\n    for (var i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {\n      render($containerElem.childNodes[index], newNode.children[i], oldNode.children[i]);\n    }\n    ;\n  }\n}\n\n// else if type is different or props are different, then update (children will be walked recursively)\n\n/* TESTING\n// Recursively call render for children\nfor (let i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {\n\trender(\n\t\t$containerElem.childNodes[i],\n\t\tnewNode.children[i],\n\t\toldNode.children[i]\n\t);\n}\n*/\n\n/*\nif (newNode && newNode.children) {\n\tnewNode.children.forEach((child) => (typeof child !== 'object'\n\t\t? $newElem.append(document.createTextNode(child))\n\t\t: render($newElem, child, )\n\t\t\n\t\t))\n}\n*/\n\n/* TESTING\n// Append new element to container\nif ($newElem) {\n\t$containerElem.appendChild($newElem);\n}\n*/\n\n//# sourceURL=webpack://gomi/./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation.js */ \"./src/domManipulation.js\");\n/** @jsx createNode */\n\nvar testArr = ['value1', 'value2', 'value3'];\nvar testJSX = testArr.map(function (item) {\n  return (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, item);\n});\nvar content = (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"div\", null, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"ul\", {\n  id: \"testUpdateElem\"\n}, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 1\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 2\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 3\")));\nvar updateContentOne = (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"div\", null, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"ul\", {\n  id: \"testUpdateElem\"\n}, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 1\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 2\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 3\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"li\", null, \"Item 4\")), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"grid\", {\n  cols: \"repeat(3, 1fr)\"\n}, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"div\", null, \"Text 1\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"div\", null, \"Text 1\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createNode)(\"div\", null, \"Text 1\")));\nvar root = document.getElementById('root');\n(0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.render)(root, content);\nvar updateButton = document.getElementById('testUpdateButton');\nupdateButton.addEventListener('click', function () {\n  return (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.render)(root, updateContentOne, content);\n});\n\n//# sourceURL=webpack://gomi/./src/index.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flattenArrays\": () => (/* binding */ flattenArrays)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/**\n * Function that recursively flattens multi-dimensional arrays to one dimension\n * @param {Array} input\n * @returns {Array}\n */\nfunction flattenArrays(input) {\n  // Reduce array (to allow for use of spread syntax)\n  // For each item, if it is an array, run it through flattenArrays,\n  // then spread output (since return value is an array)\n  // Otherwise, just return item within accumulator\n\n  return input.reduce(function (accu, item) {\n    return !Array.isArray(item) ? [].concat(_toConsumableArray(accu), [item]) : [].concat(_toConsumableArray(accu), _toConsumableArray(flattenArrays(item)));\n  }, []);\n}\n\n//# sourceURL=webpack://gomi/./src/utils/utils.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});