Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    get '/users', to: 'users#index'
    get '/users/:user_id/posts', to:'posts#index'
    get '/users/:id', to: 'users#show'
    get '/users/:user_id/posts/:post_id', to: 'posts#show'
    post '/users/:user_id', to: 'posts#create'
    delete '/users/:id/posts/:id', to: 'posts#destroy'
    delete '/users/:id', to: 'post#destroy'
  end
end
