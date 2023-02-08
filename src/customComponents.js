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
