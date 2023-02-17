import { createElem } from './domManipulation.js';

// TESTING
//let diffList = [];

// Overview:

// Process
// * On function call, walk old vDOM, new vDOM, and view
// * Use diff creator function (or something like it) to push items to a diff list using HTML elements from rendered view
// * At later point, call updater function to make all adjustments


// TODO: Refactor and/or remove this function
// TESTING: This function should be moved inside...something else?

/**
 * Compares two nodes and returns whether or not they are different
 * @param {JSX.Element} newNode New node being added using render()
 * @param {JSX.Element} oldNode Existing node that is being compared
 * @returns {boolean}
 */

export function isNodeReplaceable(newNode, oldNode) {
	return typeof oldNode !== typeof newNode ||
		typeof oldNode === 'string' && newNode !== oldNode ||
		newNode.type !== oldNode.type;
}

// TODO: Refactor below functions so that diffList doesn't need to be declared globally
let diffList = [];

// TODO: Rewrite function, rewrite docs
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
export function diff($containerElem, newNode, oldNode, index = 0) {

	// TESTING
	console.log('Container elem:');
	console.log($containerElem);
	console.log('New node:');
	console.log(newNode);
	console.log('Old node:');
	console.log(oldNode);
	console.log('Index:');
	console.log(index);
	console.log('Diff list:');
	console.log(diffList);

	if (!oldNode) {

		diffList = [
			...diffList,
			{
				type: 'INSERT',
				$containerElem: $containerElem,
				newNode: newNode
			}
		];

	}
	else if (!newNode) {

		diffList = [
			...diffList,
			{
				type: 'REMOVE',
				$containerElem: $containerElem,
				index: index
			}
		];

	}
	else if (isNodeReplaceable(newNode, oldNode)) {

		diffList = [
			...diffList,
			{
				type: 'REPLACE',
				$containerElem: $containerElem,
				newNode: newNode,
				index: index
			}
		];

	}
	else if (typeof newNode === 'object') {

		// TESTING
		console.log('Option 4');
		console.log('Container elem:');
		console.log($containerElem);
		console.log('New node:');
		console.log(newNode);
		console.log('Old node:');
		console.log(oldNode);
		console.log('Index:');
		console.log(index);
		console.log('Diff list:');
		console.log(diffList);

		for (let i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {

			diff($containerElem.childNodes[index], newNode.children[i], oldNode.children[i], i);
		};
	}

	// TESTING
	console.log('Final diff list:');
	console.log(diffList);

	// TESTING: May need to change below value
	return diffList;
		
}

export function updateView($containerElem, newNode, oldNode, index = 0) {

	// Generate list of diffs
	const diffList = diff($containerElem, newNode, oldNode, index = 0);

	// TESTING
	console.log("diffList inside updateView:");
	console.log(diffList);


	diffList.forEach( (diff) => {

		if (diff.type === 'INSERT') {
			const $newElem = createElem(diff.newNode);
			diff.$containerElem.append($newElem);
		}
		else if (diff.type === 'REMOVE') {

			diff.$containerElem.removeChild(diff.$containerElem.childNodes[diff.index]);
		}
		else if (diff.type === 'REPLACE') {
			diff.$containerElem.replaceChild(createElem(newNode), diff.$containerElem.childNodes[diff.index]);
		}

	});

	// TESTING
	console.log('Updated view');

}




/* TESTING: Old

export function diff($containerElem, newNode, oldNode, index = 0) {

	// TODO: Like to remove this
	let $newElem = null;

	// If no oldNode, then:
	if (!oldNode) {

		batchedDiffUpdate = batchedDiffUpdate.append(diffInsert($containerElem, newNode));

	} 
	else if (!newNode) {

		batchedDiffUpdate = batchedDiffUpdate.append(diffRemove($containerElem, index));

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

*/