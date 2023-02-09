import { customComponentsFixedProps  } from './customComponents/data.js';
import { convertCustomProps, convertCustomType } from './customComponents/handlers.js';
import { flattenArrays } from './utils/utils.js';

/**
 * Iterates through a new HTML element's props and recursively assigns them to element
 * @param {HTMLElement} $newElem
 * @param {object} elemProps
 */
export function assignProps($newElem, elemProps) {
	// Recursively assign props to VDOM nodes
	Object.keys(elemProps)
		.forEach((key) => {
			if (typeof elemProps[key] !== 'object') {
				$newElem[key] = elemProps[key];
			} else {
				assignProps($newElem[key], elemProps[key]);
			}
		});
}

/**
 * Creates DOM node by taking HTML element type,
 * props, and array of children from JSX transpiler
 * and returning formatted object
 * @param {string} typeArg
 * @param {object} propArgs
 * @param  {...any} childrenArgs
 * @returns {object}
 */
export function createNode(typeArg, propArgs, ...childrenArgs) {

	let type = null;
	let props = {};
	let children = null;

	// If type is custom, process both type and props
	if (Object.keys(customComponentsFixedProps).includes(typeArg)) {
		type = convertCustomType(typeArg);
		if (typeof propArgs === 'object') {
			props = convertCustomProps(typeArg, propArgs);
		}
	} 
	// Otherwise, assign type and props of standard elements
	else {
		type = typeArg;
		if (typeof propArgs === 'object') {
			props = {
				...propArgs
			}
		}
	}

	// If children args are present...
	if (childrenArgs.length > 0) {
		// Flatten any arrays created by JSX interpolation, then set children to output
		children = flattenArrays(childrenArgs);
	}

	return {
		type,
		props,
		children,
	};
}

/**
 * Recursively renders VDOM tree from elements and their children
 * @param {HTMLElement} $containerElem DOM element that JSX element will be appended to
 * @param {JSX.Element} newNode JSX element to be created and appended to DOM
 * @param {JSX.Element} [oldNode] Existing JSX element, against which newElem will be compared when updating DOM
 */
export function render($containerElem, newNode, oldNode) {

	// Check if container set to document.body, and if so, display console error
	if ($containerElem === document.body) {
		console.error('It is recommended to '
			+ 'create a separate container within document.body to '
			+ 'hold the application');
	}

	console.log($containerElem);
	console.log(newNode);
	console.log(oldNode);

	// If no oldNode, then:
	if (!oldNode) {

		// First, create element
		const $newElem = document.createElement(newNode.type);

		// Map over props and assign them to element
		if (newNode.props) {
			assignProps($newElem, newNode.props);
		}

		// Recursively call render for each of the new node's children;
		// if child is not object, createTextNode
		if (newNode.children) {
			newNode.children.forEach((child) => (typeof child !== 'object'
				? $newElem.append(document.createTextNode(child))
				: render($newElem, child)));
		}

		// Append new element to container
		$containerElem.appendChild($newElem);

	}



}
