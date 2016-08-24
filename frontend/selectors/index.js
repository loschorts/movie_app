export const locationsArray = ({locations}) => (
	Object.keys(locations).map( id => locations[id])
);