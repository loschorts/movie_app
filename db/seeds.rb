# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative './seeds_helper.rb'


# Requests all data from the SODA API and stores the result in MovieLocation 
# instances (set `false` to disable)
fetch_movie_locations(true)

# Passes each MovieLocation to a geo-coder API and records the coordinates
# returned, if any, along with a `mappable` status (`false` to disable)
fetch_geocodes(true)