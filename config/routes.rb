Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    get '/posts', to: 'posts#all'
    get '/users', to: 'users#index'
    get '/users/:user_id/posts', to:'posts#index'
    get '/users/:id', to: 'users#show'
    get '/users/:user_id/posts/:post_id', to: 'posts#show'
    get '/users/:user_id/posts/:post_id/comments', to: 'comments#index'
    get '/users/:user_id/all_comments', to: 'comments#all_user_comments'
    post '/users/:user_id', to: 'posts#create'
    post '/users/:user_id/posts/:post_id/comments', to: 'comments#create'
    delete '/users/:id/posts/:id', to: 'posts#destroy'
    delete '/users/:id', to: 'post#destroy'
    # delete '/users/:user_id/posts/:post_id/comments/:comment_id'
  end
end
