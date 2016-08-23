class AddCoordinates < ActiveRecord::Migration[5.0]
  def change
  	add_column :movie_locations, :lat, :float
  	add_column :movie_locations, :lng, :float

  	add_index :movie_locations, :lat
  	add_index :movie_locations, :lng
  end
end
