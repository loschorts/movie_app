class CreateMovieLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :movie_locations do |t|
    	t.string :actor_1
    	t.string :actor_2
    	t.string :actor_3
    	t.string :director
    	t.string :locations
    	t.string :production_company
    	t.string :release_year
    	t.string :title
    	t.string :writer
    	t.string :distributor
      t.timestamps
    end

		add_index :movie_locations, :actor_1
		add_index :movie_locations, :actor_2
		add_index :movie_locations, :actor_3
		add_index :movie_locations, :director
		add_index :movie_locations, :locations
		add_index :movie_locations, :production_company
		add_index :movie_locations, :release_year
		add_index :movie_locations, :title
		add_index :movie_locations, :writer 
		add_index :movie_locations, :distributor
  end
end
