Emb::Application.routes.draw do
  resources :stories

  root :to => 'assets#index'
  get "assets/index"
  post :token, :to => "session#create"

end
