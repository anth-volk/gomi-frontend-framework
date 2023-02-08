import { customComponentsFixedProps, customComponentsVariableProps } from "./data.js";

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

	// Next, reassign variable-prop key shortcuts to their standard keys and
	// place these into a style object, itself inside props
	Object.keys(propArgs).forEach((key) => {
		if (customComponentsVariableProps[typeArg].hasOwnProperty(key)) {
			const keyToInsert = customComponentsVariableProps[typeArg][key];
			props = {
				...props,
				style: {
					...props.style,
					[keyToInsert]: propArgs[key]
				}
			};
		} 
		// Unless props are standard, in which case, simply add them to props
		else {
			props = {
				...props,
				[key]: propArgs[key]
			}
		}
	});

	return props;

}