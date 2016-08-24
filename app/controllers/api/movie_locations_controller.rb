class Api::MovieLocationsController < ApplicationController

	FIELDS = [
		:north, :south, :east, :west, :mappable, 
		:actor_1, :actor_2, :actor_3, :director, 
		:locations, :production_company, :release_year, 
		:title, :writer, :distributor, :fun_facts
	]

	def index
		render json: MovieLocation.filter_by_params(query_params).limit(30)
	end

	def query_params
		params.permit(*FIELDS)
	end

	def suggest
		query = params
		query.delete("controller")
		query.delete("action")

		if query.count == 0 
			render json: {error: "no query field provided"}, status: 400
			return
		end

		field = query.keys[0]

		if !FIELDS.include?(field.to_sym) 
			render json: {error: "unrecognized field"}, status: 400
			return
		end

		query = params[field]
		render json: MovieLocation.suggest(field, query).limit(10).map(&field.to_sym)
	end

end