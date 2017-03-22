Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :show, :create, :destroy]
    resources :sub_channels, only: [:index, :show, :create, :destroy]
    resources :channels, only: [:index, :show, :create, :destroy]
  end
end
