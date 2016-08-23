# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def fetch_remote_data(should_run = false)
	return unless should_run

	response = HTTParty.get(
		'https://data.sfgov.org/resource/wwmu-gmzc.json?$select')
	# Note: The `$select` query tag leaves out meta-data, returning the full subset of movie location listings
	results = JSON.parse(response.body)

	results.each do |result|
		MovieLocation.create(result);
	end
end

fetch_remote_data(true)