class Api::MovieLocationsController < ApplicationController

	def index
		render json: MovieLocation.filter_by_params(query_params).first(30)
	end

	def query_params
		params.permit(
			:north, :south, :east, :west, :mappable, 
			:actor_1, :actor_2, :actor_3, :director, 
			:locations, :production_company, :release_year, 
			:title, :writer, :distributor, :fun_facts)
	end

end