Rails.application.routes.draw do

  root to: "posts#home"
  
  namespace :api, defaults: { format: :json } do
    resources :posts, only: [ :show ]
  end

end
