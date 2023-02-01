// Define custom JSX-like components to enable easier scaffolding
const customComponents = {
	flex: {
		type: 'div',
	},
	grid: {
		type: 'div',
	},
};

// Create DOM element object by taking HTML element name,
// props, and an array of children and returning as
// formatted object
export function createElem(typeArg, propArg, ...childrenArgs) {

	// TESTING
	console.log(`Creating element: ${type}`);
	console.log(propArg);
	console.log(...childrenArgs);

	let children = null;
	let props = null;
	let type = null;

	// If type is custom, convert to standard DOM node using customComponents obj array
	if (Object.keys(customComponents).includes(typeArg)) {
		type = customComponents[typeArg].type;
	} else {
		type = typeArg;
	}

	// If propArg are an object, assign them to props
	if (typeof propArg === 'object') {
		props = {
			...propArg,
		};
	}

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

// Recursively create VDOM from given element and container
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
		Object.keys(element.props)
			.forEach( key => {
				vdomNode[key] = element.props[key];
			});
	}

	// Recursively call render for each of the element's children;
	// if child is not object, createTextNode
	element.children.forEach((child) => (typeof child !== 'object'
		? vdomNode.append(document.createTextNode(child))
		: render(child, vdomNode)));

	// Append element to container
	container.appendChild(vdomNode);
}
