# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def fetch_remote_data(should_run = false)
	return unless should_run
	response = HTTParty.get('https://data.sfgov.org/api/views/yitu-d5am/rows.json')
	puts response.body, response.code, response.message, response.headers.inspect
end

fetch_remote_data(true)