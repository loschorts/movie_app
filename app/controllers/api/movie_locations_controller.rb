class Api::MovieLocationsController < ApplicationController

	def index
		result = MovieLocation.filter_by_params(query_params).first(30)
		p result
		render json: result
	end

	def query_params

		unpermitted_params = [:lat, :lng, :created_at, :updated_at]
		permitted_params = 
			MovieLocation.column_names.map(&:to_sym) - unpermitted_params
			
		params.permit(permitted_params)
	end

end