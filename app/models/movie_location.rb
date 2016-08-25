class MovieLocation < ApplicationRecord

	def self.filter_by_params(params)

		# This is the 'main' querying method, which creates a chain of
		# `MovieLocation#where()` queries to return locations filtered by the params
		# given. `result` starts at `MovieLocation.all` in case no params are given.

		result = self.all

		# Matches all textual params to their query values
		params.each do |field, query|

			# Skips non-textual params
			next if [ :mappable, :north, :south, :east, :west ].include?(field.to_sym)

			result = result.where("#{field} like ?", "%#{query}%")
		end

		# Allows for queries that are mappable agnostic
		return result if !params[:mappable]

		# Filters by map bounds and returns mappable results
		if params[:mappable] == "true"
			north, south, east, west = params[:north], params[:south], params[:east], params[:west]
			result = result.where(mappable: true)
			result = result.where(lat: south..north).where(lng: west..east)
		elsif params[:mappable] == "false"
			result = result.where(mappable: false)
		end
		result
	end

	def self.suggest(field, query)
		# Returns values containing the query-params 
		self.where(" #{field} like ? ", "%#{query}%").where(mappable: true)
			.select(field.to_sym).distinct
	end


end