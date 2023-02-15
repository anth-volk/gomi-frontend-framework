import { customComponentsFixedProps  } from './customComponents/data.js';
import { convertCustomProps, convertCustomType } from './customComponents/handlers.js';
import { flattenArrays } from './utils/utils.js';

/**
 * Reference to rendered HTML DOM tree that will be updated each time page is re-rendered
 */
let $currentPageRef = null;

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
 * Compares two nodes and returns whether or not they are different
 * @param {JSX.Element} newNode New node being added using render()
 * @param {JSX.Element} oldNode Existing node that is being compared
 * @returns {boolean}
 */
export function diffNodes(newNode, oldNode) {
	return typeof oldNode !== typeof newNode ||
		typeof oldNode === 'string' && newNode !== oldNode ||
		newNode.type !== oldNode.type;
}

/**
 * Render a Gomi component
 * @param {HTMLElement} $rootElem 
 * @param {JSX.Element} component 
 */
export function render($rootElem, component) {
	$currentPageRef = updateDOM($rootElem, component)
}

/**
 * Recursively renders VDOM tree from elements and their children;
 * the initial code for this function is based heavily on the article at 
 * https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060
 * and is meant as a learning exercise
 * @param {HTMLElement} $containerElem DOM element that JSX element will be appended to
 * @param {JSX.Element} newNode JSX element to be created and appended to DOM
 * @param {JSX.Element} [oldNode] Existing JSX element, against which newElem will be compared when updating DOM
 * @param {number} [index] Element index, which will be used in removing nodes
 */
export function updateDOM($containerElem, newNode, oldNode, index = 0) {

	// Check if container set to document.body, and if so, display console error
	if ($containerElem === document.body) {
		console.error('It is recommended to '
			+ 'create a separate container within document.body to '
			+ 'hold the application');
	}

	let $newElem = null;

	// If no oldNode, then:
	if (!oldNode) {

		// Create new element
		$newElem = createElem(newNode);
		$containerElem.append($newElem);

	} 
	else if (!newNode) {

		// Delete child of parent that corresponds with old node
		$containerElem.removeChild($containerElem.childNodes[index]);

	}
	else if (diffNodes(newNode, oldNode)) {

		$containerElem.replaceChild(createElem(newNode), $containerElem.childNodes[index]);
	}
	else if (typeof newNode === 'object') {

		for (let i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {

			render($containerElem.childNodes[index], newNode.children[i], oldNode.children[i]);
		};
	}

	return $containerElem;
		
}