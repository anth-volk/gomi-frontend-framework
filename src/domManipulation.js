// Define custom JSX-like components to enable easier scaffolding
const customComponents = {
	flex: {
		type: 'div',
	},
	grid: {
		type: 'div',
	},
};

/**
 * Returns VDOM node type that corresponds with custom declaration in customComponents obj
 * @param {string} typeArg 
 * @returns {string} 
 */
export function convertCustomType(typeArg) {
	return customComponents[typeArg].type;
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
 * props, and array of children from JSX transpiler (in this case, Babel)
 * and returns formatted object
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
	let props = null;
	let children = null;

	// If type is custom, convert to standard DOM node using customComponents obj array
	if (Object.keys(customComponents).includes(typeArg)) {
		type = convertCustomType(typeArg);
	} else {
		type = typeArg;
	}

	// If propArgs are an object, assign them to props
	if (typeof propArgs === 'object') {
		props = {
			...propArgs,
		};
	}

	// TODO: Determine how to handle custom props

	// If children args are present, set children to them
	if (childrenArgs.length > 0) {
		children = childrenArgs;
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

	// Old - TESTING
	/*
		// For each property, assign recursively if value is object

		Object.keys(element.props)
		.forEach(key => {
			// TESTING
			console.log(`Key: ${key}`);
			console.log(`Value: ${element.props[key]}`);
			console.log(element.props[key]);
			vdomNode[key] = element.props[key];
		});
	*/

	// Recursively call render for each of the element's children;
	// if child is not object, createTextNode
	element.children.forEach((child) => (typeof child !== 'object'
		? vdomNode.append(document.createTextNode(child))
		: render(child, vdomNode)));

	// Append element to container
	container.appendChild(vdomNode);
}
