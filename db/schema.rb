# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160823172058) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "movie_locations", force: :cascade do |t|
    t.string   "actor_1"
    t.string   "actor_2"
    t.string   "actor_3"
    t.string   "director"
    t.string   "locations"
    t.string   "production_company"
    t.string   "release_year"
    t.string   "title"
    t.string   "writer"
    t.string   "distributor"
    t.string   "fun_facts"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["actor_1"], name: "index_movie_locations_on_actor_1", using: :btree
    t.index ["actor_2"], name: "index_movie_locations_on_actor_2", using: :btree
    t.index ["actor_3"], name: "index_movie_locations_on_actor_3", using: :btree
    t.index ["director"], name: "index_movie_locations_on_director", using: :btree
    t.index ["distributor"], name: "index_movie_locations_on_distributor", using: :btree
    t.index ["fun_facts"], name: "index_movie_locations_on_fun_facts", using: :btree
    t.index ["locations"], name: "index_movie_locations_on_locations", using: :btree
    t.index ["production_company"], name: "index_movie_locations_on_production_company", using: :btree
    t.index ["release_year"], name: "index_movie_locations_on_release_year", using: :btree
    t.index ["title"], name: "index_movie_locations_on_title", using: :btree
    t.index ["writer"], name: "index_movie_locations_on_writer", using: :btree
  end

end
