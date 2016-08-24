export const fetchLocations = (queries, success, error) => {
	$.ajax({
		url: 'api/movie_locations',
		data: queries,
		success,
		error
	});
};

export const handleError = (error) => {
	console.log(error.responseJSON);
};

export const fetchSuggestions = (field, value, success, error) => {
	$.ajax({
		url: 'api/suggestions',
		data: {[field]: value},
		success,
		error
	});
};