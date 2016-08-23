class Api::MovieLocationsController < ApplicationController

	def index
		render json: MovieLocation.filter_by_params(query_params)
	end

	def query_params

		unpermitted_params = [:lat, :lng, :created_at, :updated_at]
		permitted_params = 
			MovieLocation.column_names.map(&:to_sym) - unpermitted_params
			
		params.permit(permitted_params)
	end

end