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

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assignProps\": () => (/* binding */ assignProps),\n/* harmony export */   \"convertCustomType\": () => (/* binding */ convertCustomType),\n/* harmony export */   \"createElem\": () => (/* binding */ createElem),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n// Define custom JSX-like components to enable easier scaffolding\nvar customComponents = {\n  flex: {\n    type: 'div'\n  },\n  grid: {\n    type: 'div'\n  }\n};\nfunction convertCustomType(typeArg) {\n  return customComponents[typeArg].type;\n}\n\n/**\n * @param {HTMLElement} vdomNode\n * @param {object} elemProps\n */\nfunction assignProps(vdomNode, elemProps) {\n  // Iterate through propObj keys\n  Object.keys(elemProps).forEach(function (key) {\n    if (_typeof(elemProps[key]) !== 'object') {\n      console.log(\"Level: \".concat(key));\n      console.log(vdomNode);\n      console.log(elemProps);\n      console.log(key);\n      console.log(elemProps[key]);\n      vdomNode[key] = elemProps[key];\n    } else {\n      console.log('Moving level downward');\n      console.log(vdomNode);\n      console.log(elemProps);\n      console.log(vdomNode[key]);\n      console.log(elemProps[key]);\n      assignProps(vdomNode[key], elemProps[key]);\n    }\n  });\n}\n\n// Create DOM element object by taking HTML element name,\n// props, and an array of children and returning as\n// formatted object\nfunction createElem(typeArg, propArgs) {\n  var _console;\n  // TESTING\n  console.log(\"Creating element: \".concat(typeArg));\n  console.log(propArgs);\n  for (var _len = arguments.length, childrenArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    childrenArgs[_key - 2] = arguments[_key];\n  }\n  (_console = console).log.apply(_console, childrenArgs);\n  var type = null;\n  var props = null;\n  var children = null;\n\n  // If type is custom, convert to standard DOM node using customComponents obj array\n  if (Object.keys(customComponents).includes(typeArg)) {\n    type = convertCustomType(typeArg);\n  } else {\n    type = typeArg;\n  }\n\n  // If propArgs are an object, assign them to props\n  if (_typeof(propArgs) === 'object') {\n    props = _objectSpread({}, propArgs);\n  }\n\n  // TODO: Determine how to handle custom props\n\n  // If children args are present, set children to them\n  if (childrenArgs.length > 0) {\n    children = childrenArgs;\n  }\n\n  // TESTING\n  console.log(props);\n  console.log(children);\n  return {\n    type: type,\n    props: props,\n    children: children\n  };\n}\n\n// Recursively create VDOM from given element and container\nfunction render(element, container) {\n  // If no container provided, create a default container on document.body\n  if (!container) {\n    var root = document.createElement('div');\n    // eslint-disable-next-line no-param-reassign\n    container = document.body.appendChild(root);\n  }\n\n  // Check if container set to document.body, and if so, raise console error\n  if (container === document.body) {\n    console.error('It is recommended to ' + 'create a separate container within document.body to ' + 'hold the application; alternatively, call ' + 'render without a second parameter, and the function ' + 'will create a new container at the end of document.body ' + 'to hold the application');\n  }\n\n  // First, create element\n  var vdomNode = document.createElement(element.type);\n\n  // Map over props and assign them to element\n  if (element.props) {\n    assignProps(vdomNode, element.props);\n  }\n\n  // Old - TESTING\n  /*\n  \t// For each property, assign recursively if value is object\n  \t\tObject.keys(element.props)\n  \t.forEach(key => {\n  \t\t// TESTING\n  \t\tconsole.log(`Key: ${key}`);\n  \t\tconsole.log(`Value: ${element.props[key]}`);\n  \t\tconsole.log(element.props[key]);\n  \t\tvdomNode[key] = element.props[key];\n  \t});\n  */\n\n  // Recursively call render for each of the element's children;\n  // if child is not object, createTextNode\n  element.children.forEach(function (child) {\n    return _typeof(child) !== 'object' ? vdomNode.append(document.createTextNode(child)) : render(child, vdomNode);\n  });\n\n  // Append element to container\n  container.appendChild(vdomNode);\n}\n\n//# sourceURL=webpack://gomi/./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation.js */ \"./src/domManipulation.js\");\n/** @jsx createElem */\n\nvar testArr = ['value1', 'value2', 'value3'];\n\n// TESTING\n/*\nconst testJSX = testArr.map((item) =>\n\t<li>{item}</li>\n);\n\nconst content = (\n\t<div id=\"testing\">\n\t\t<h1 className=\"big\">Welcome</h1>\n\t\t<p>Welcome to this example webpage! This is meant to illustrate the Gomi framework.</p>\n\t\t<ul>\n\t\t\t<li>List item 1</li>\n\t\t\t<li>List item 2</li>\n\t\t\t<li>List item 3</li>\n\t\t</ul>\n\t\t<grid>Grid value</grid>\n\t\t<flex>Flex value</flex>\n\t\t<div style={{display: 'grid', gridTemplateRows: 2}}>Test grid</div>\n\t</div>\n);\n*/\n\nvar content = (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"div\", {\n  id: \"container\"\n}, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"div\", {\n  id: \"testGridElem\",\n  style: {\n    display: 'grid',\n    gridTemplateColumns: '1fr 1fr',\n    gap: '50px',\n    color: 'red'\n  }\n}, (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"div\", {\n  id: \"col1\",\n  style: {\n    width: '100%'\n  }\n}, \"col1\"), (0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"div\", {\n  id: \"col2\",\n  style: {\n    width: '100%'\n  }\n}, \"col2\")));\n(0,_domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.render)(content, document.getElementById('root'));\n// TESTING\nconsole.log(document.getElementById('testGridElem'));\nconsole.log(document.getElementById('sampleHTMLElem'));\n\n//# sourceURL=webpack://gomi/./src/index.js?");

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