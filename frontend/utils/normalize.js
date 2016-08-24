export default array => {
	let result = {};
	array.forEach( el => {
		result[el.id] = el;
	});
	return result;
};