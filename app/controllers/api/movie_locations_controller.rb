class Api::MovieLocationsController < ApplicationController

	# These are the permitted filter fields. They are used in multiple places and
	# therefore set as a global variable of this controller.
	FIELDS = [
		:north, :south, :east, :west, :mappable, 
		:actor_1, :actor_2, :actor_3, :director, 
		:locations, :production_company, :release_year, 
		:title, :writer, :distributor, :fun_facts
	]

	def index
		# the 'main' API hook for fetching locations. Accepts filters params. Limits
		# are employed to 1) save bandwidth and 2) minimize UI clutter on the front-
		# end.
		render json: MovieLocation.filter_by_params(query_params).limit(30)
	end

	def query_params
		params.permit(*FIELDS)
	end

	def suggest
		# the API hook for fetching auto-complete suggestions. Fetches search
		# suggestions for a single filter field.

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

		value = params[field]

		# Converts the query result into an array of strings for front-end use
		render json: MovieLocation.suggest(field, value).limit(10).map(&field.to_sym)
	end

end