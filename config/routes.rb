Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
  	resources :movie_locations,
  		defaults: {format: :json}, 
  		only: [:index]

  	get "suggestions", to: "movie_locations#suggest"
  end

  root to: "pages#root", defaults: {format: :html}
end
