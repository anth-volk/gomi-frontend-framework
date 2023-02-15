/**
 * Function that recursively flattens multi-dimensional arrays to one dimension
 * @param {Array} input
 * @returns {Array}
 */
export function flattenArrays(input) {
	// Reduce array (to allow for use of spread syntax)
	// For each item, if it is an array, run it through flattenArrays,
	// then spread output (since return value is an array)
	// Otherwise, just return item within accumulator

	return input.reduce((accu, item) => {
		return !Array.isArray(item)
			? [...accu, item]
			: [...accu, ...flattenArrays(item)]
	}, []);
}
