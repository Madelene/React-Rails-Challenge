Rails.application.routes.draw do

  root to: "welcomes#home"

  namespace :api, defaults: { format: :json } do
    resources :posts
    get '/posts/:id/disable' => 'posts#disable'
  end

end
