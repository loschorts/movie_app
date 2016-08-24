export const locationsArray = (state) => (
	Object.keys(state.locations).map( (id, loc) => (
		loc
	))
);