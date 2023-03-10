import { customComponentsFixedProps  } from './customComponents/data.js';
import { convertCustomProps, convertCustomType } from './customComponents/handlers.js';
import { flattenArrays } from './utils/utils.js';

/**
 * Reference to the virtual DOM equivalent of the current page
 */
export let currentPageVDOMTopNode = null;

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
 * Recursively create HTML elements and their children from given node
 * @param {JSX.Element} node
 * @returns {HTMLElement}
 */
export function createElem(node) {

	// First, create new HTML element
	const $newElem = document.createElement(node.type);

	// Map over props and assign them to element
	if (node.props) {
		assignProps($newElem, node.props);
	}

	// Recursively call createElem for each of the new element's children;
	// if child is not object, createTextNode

	if (node.children) {
		node.children.forEach((child) => (typeof child !== 'object'
			? $newElem.append(document.createTextNode(child))
			: $newElem.append(createElem(child))
		));
	}

	return $newElem;
}

/**
 * Render a new Gomi component
 * @param {HTMLElement} $rootElem 
 * @param {JSX.Element} newNode
 */
export function render($rootElem, componentTopNode) {
	
	// Check if container set to document.body, and if so, display console error
	if ($rootElem === document.body) {
		console.error('It is recommended to '
			+ 'create a separate container within document.body to '
			+ 'hold the application');
	}

	// Create new element
	let $newElem = createElem(componentTopNode);
	$rootElem.append($newElem);

	// Store reference to componentTopNode in currentPageVDOM
	currentPageVDOMTopNode = componentTopNode;

}