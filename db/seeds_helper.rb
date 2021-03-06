def fetch_movie_locations(should_run = false)
	return unless should_run
	
	MovieLocation.destroy_all
	ActiveRecord::Base.connection.reset_pk_sequence!("movie_locations")

	response = HTTParty.get(
		'https://data.sfgov.org/resource/wwmu-gmzc.json?$select')
	# Note: The `$select` query tag leaves out meta-data, returning the full subset
	# of movie location listings
	results = JSON.parse(response.body)

	results.each do |result|
		p MovieLocation.create(result);
	end
end

def fetch_geocodes(should_run = false)
	return unless should_run

	# Sets each MovieLocation's `mappable` property after sending its `locations` to a Google Maps Geocoding API. Coordinates are saved if the location is mappable.
	MovieLocation.all.each do |ml|
		if ml.locations.nil?
			puts ml.id.to_s + " unmappable"
			ml.mappable = false
			ml.save
			next
		end

		address_query = {address: ml.locations}.to_query
		res = JSON.parse(HTTParty.get('https://maps.googleapis.com/maps/api/geocode/json?&' + address_query).body)

		if res["results"].empty?
			puts ml.id.to_s + " unmappable"
			ml.mappable = false
			ml.save
			next
		end
			
		coords = res["results"][0]["geometry"]["location"]
		lat = coords["lat"]
		lng = coords["lng"]

		ml.lat, ml.lng, ml.mappable = lat, lng, true
		ml.save
		puts ml.id.to_s + " mapped"
		p [ml.lat, ml.lng]
		
	end

end