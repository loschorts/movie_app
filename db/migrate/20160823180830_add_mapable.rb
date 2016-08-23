class AddMapable < ActiveRecord::Migration[5.0]
  def change
  	add_column :movie_locations, :mappable, :boolean
  	add_index :movie_locations, :mappable
  end
end
