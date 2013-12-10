Emb::Application.routes.draw do
  resources :users

  resources :stories

  root :to => 'assets#index'
  get "assets/index"
  post :token, :to => "session#create"

end
