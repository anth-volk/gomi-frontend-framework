import { customComponentsFixedProps } from './customComponents.js';
import { flattenArrays } from './utils/utils.js';
// TODO: add customProps, as well

/**
 * Returns VDOM node type that corresponds with custom declaration in customComponentsFixedProps obj
 * @param {string} typeArg
 * @returns {string}
 */
export function convertCustomType(typeArg) {
	return customComponentsFixedProps[typeArg].type;
}

/**
 * Returns props object with standard HTML props when passed object that contains custom props
 * @param {string} typeArg
 * @param {Object} propArgs
 * @returns {Object}
 */
export function convertCustomProps(typeArg, propArgs) {
	let props = {};

	// First, assign props listed in customComponentsFixedProps to 
	// props obj, as these are fixed for all custom components of that type
	props = {
		...customComponentsFixedProps[typeArg].props
	};

	// TESTING
	console.log(props);

	// Map over array of prop keys
	// TESTING - TODO: Add variable props afterwards
	/*
	Object.keys(propArgs)
		.forEach((key) => {
			// If key is in customComponentsFixedProps, then 
		})
	*/

	return props;

}

/**
 * Iterates through VDOM props and recursively assigns them to node
 * @param {HTMLElement} vdomNode
 * @param {object} elemProps
 */
export function assignProps(vdomNode, elemProps) {
	// Recursively assign props to VDOM nodes
	Object.keys(elemProps)
		.forEach((key) => {
			if (typeof elemProps[key] !== 'object') {
				vdomNode[key] = elemProps[key];
			} else {
				assignProps(vdomNode[key], elemProps[key]);
			}
		});
}

/**
 * Creates HTML element by taking element name,
 * props, and array of children from JSX transpiler
 * and returning formatted object
 * @param {string} typeArg
 * @param {object} propArgs
 * @param  {...any} childrenArgs
 * @returns {object}
 */
export function createElem(typeArg, propArgs, ...childrenArgs) {
	// TESTING
	console.log(`Creating element: ${typeArg}`);
	console.log(propArgs);
	console.log(...childrenArgs);

	let type = null;
	let props = {};
	let children = null;

	// If type is custom, preprocess both type and props
	if (Object.keys(customComponentsFixedProps).includes(typeArg)) {
		type = convertCustomType(typeArg);
		// TESTING
		console.log(`Converting custom props for ${typeArg}`);
		props = convertCustomProps(typeArg, propArgs);
		console.log(props);
	} else {
		type = typeArg;
	}

	// If propArgs are an object, assign them to props
	if (typeof propArgs === 'object') {
		props = {
			...props,
			...propArgs,
		};
	}

	// TODO: Determine how to handle custom props

	// If children args are present...
	if (childrenArgs.length > 0) {
		// Flatten any arrays created by JSX interpolation, then set children to output
		children = flattenArrays(childrenArgs);
	}

	// TESTING
	console.log(props);
	console.log(children);

	return {
		type,
		props,
		children,
	};
}

/**
 * Recursively renders VDOM tree from elements and their children
 * @param {HTMLElement} element
 * @param {HTMLElement} container
 */
export function render(element, container) {
	// If no container provided, create a default container on document.body
	if (!container) {
		const root = document.createElement('div');
		// eslint-disable-next-line no-param-reassign
		container = document.body.appendChild(root);
	}

	// Check if container set to document.body, and if so, raise console error
	if (container === document.body) {
		console.error('It is recommended to '
			+ 'create a separate container within document.body to '
			+ 'hold the application; alternatively, call '
			+ 'render without a second parameter, and the function '
			+ 'will create a new container at the end of document.body '
			+ 'to hold the application');
	}

	// First, create element
	const vdomNode = document.createElement(element.type);

	// Map over props and assign them to element
	if (element.props) {
		assignProps(vdomNode, element.props);
	}

	// Recursively call render for each of the element's children;
	// if child is not object, createTextNode
	element.children.forEach((child) => (typeof child !== 'object'
		? vdomNode.append(document.createTextNode(child))
		: render(child, vdomNode)));

	// Append element to container
	container.appendChild(vdomNode);
}
