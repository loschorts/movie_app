class MovieLocation < ApplicationRecord

	def self.filter_by_params(params)
		result = self.all

		params.each do |field, query|
			next if [:mappable, :north, :south, :east, :west, :fuzzy_search].include?(field.to_sym)
			result = result.where("#{field} like ?", "%#{query}%")
		end

		return result if !params[:mappable]

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

		self.where(" #{field} like ? ", "%#{query}%").where(mappable: true)
			.select(field.to_sym).distinct
	end


end