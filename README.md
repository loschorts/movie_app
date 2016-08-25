# Movie Filter Application

This is a Rails/React/Redux application that shows Movie Locations. Users can
browse movie locations via filter fields with suggestions/auto-complete,
perusing an index, or dragging and clicking on a Google Map.

# Design Choices

## Rails Backend

I opted to use a Rails server with a Postgresql database over querying the API
directly from the client side. Movie location data is seeded by requesting data
from two APIs, one to fetch the movie location information, and a second to
convert the textual information into mappable coordinates. These external API
requests are toggle-able in the `seeds.rb`, and can (though not currently) be
set up to run automatically at custom intervals.

**Advantages:**
- Scalability: 
	- No API rate limitations
	- Able to create and store new data, whether from Users or other APIs
- Stability: 
	- Availability not dependent on external services
	- Control over information formatting and content
	- Ensures lasting compatibility of front-end API interface code
-	Better Querying:
	- Leverages ActiveRecord query speed and flexibility

**Disadvantages:**
- Hosting costs
- Lack of 'real-time' updates (though data not likely to change rapidly) 

## React / Redux Frontend

I decided to use a React / Redux framework for the UI because of the importance
of real-time user interactivity. Because the interface involves several components
manipulating a single data source, Redux's centralized state is ideal.

The application state (primarily a list of movie locations) is dependent on
information that is acted upon (sometimes simultaneously) by all the app's
components. Centralizing parameters such as the map bounds and the filter values
keeps the app in sync and responsive to user input in real time. The components
are almost entirely stateless to facilitate the above implementation.

## Mappable Locations Only

Of the movie locations provided by the SODA API, 33% could not be geocoded
(mapped to coordinates) by the API I used. While still in the database, I don't
expose these entries via the API. However, both front and back-end interfaces
have some scaffolding that would allow these un-mappable locations to be used in
the future, for example as part of the Index but not the Map.

## Notable Files To Peruse

**Seed Files**
- `db/seeds.rb` and `db/seeds_helper.rb`

**API***
- `app/controllers/api/movie_locations_controller.rb`
- `app/models/movie_location.rb`

**Frontend Components**
- `frontend/components/app.jsx`
- `frontend/components/app_container.jsx`
- `frontend/components/form.jsx`
- `frontend/components/map.jsx`
- `frontend/components/suggestions.jsx`

**Frontend DataFlow**
- `frontend/middlewares/locations.js`
- `frontend/reducers/index.js`

# Pre-Install Dependencies 

- `ruby`
- `gem`
- `bundler`
- `rails`
- `postgresql`
-	`node`
- `webpack`

# Installation

- `git clone git@github.com:loschorts/movie_app.git && cd movie_app`
- `./install.sh`
- `http://localhost:3000`

# Features

-	Filter Form with Suggestion / Auto-Complete
- Index of Visible Locations
- Detail View for Single Location
	- Detail shown on Index Item or Marker Click
- Interactive Map
	- Map-Bounded API Requests on Drag
	- Highlighted Marker of Detail Location

# Zip File

[zip](https://github.com/loschorts/movie_app/archive/master.zip)

