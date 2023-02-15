// Define custom JSX-like components to enable easier scaffolding
export const customComponentsFixedProps = {
	flex: {
		type: 'div',
		props: {
			style: {
				display: "flex"
			}
		}
	},
	grid: {
		type: 'div',
		props: {
			style: {
				display: "grid"
			}
		}
	},
};

// For variable props, keys representing user-input prop map to 
// standard JS equivalents
export const customComponentsVariableProps = {
	flex: {
		dir: 'flexDirection',
		ac: 'alignContent',
		jc: 'justifyContent',
		ai: 'alignItems',
		ji: 'justifyItems'
	},
	grid: {
		rows: 'gridTemplateRows',
		cols: 'gridTemplateColumns',
		temp: 'gridTemplate',
		ac: 'alignContent',
		jc: 'justifyContent',
		ai: 'alignItems',
		ji: 'justifyItems'
	}
}
