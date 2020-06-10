Rails.application.routes.draw do
  root 'profile#index'

  resources :profile, only: :index
end
