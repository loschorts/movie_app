class Api::MovieLocationsController < ApplicationController

	FIELDS = [:actor_1,
		:actor_2,
		:actor_3,
		:director,
		:locations,
		:production_company,
		:release_year,
		:title,
		:writer,
		:distributor,
		:fun_facts]

	def index
		@movies = MovieLocations.all
		ml_params.each do |field, value|
			
		end

	end

	def ml_params
		params.require(:movie_location).permit(*FIELDS)
	end
end


