Rails.application.routes.draw do

  root to: "welcomes#home"

  namespace :api, defaults: { format: :json } do
    resources :posts
  end

end
