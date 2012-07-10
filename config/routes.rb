Versioneye::Application.routes.draw do
  
  root :to => "products#index"
  
  get   '/auth/github/callback',   :to => 'github#callback'
  get   '/auth/github/new',        :to => 'github#new'
  post  '/auth/github/create',     :to => 'github#create'
  
  get   '/auth/twitter/forward',   :to => 'twitter#forward'
  get   '/auth/twitter/callback',  :to => 'twitter#callback'
  get   '/auth/twitter/new',       :to => 'twitter#new'
  post  '/auth/twitter/create',    :to => 'twitter#create'

  get   '/auth/facebook/callback', :to => 'facebook#callback'

  
  resources :sessions, :only => [:new, :create, :destroy]
  get    '/signin',                :to => 'sessions#new'
  get    '/signout',               :to => 'sessions#destroy'
  post   '/androidregistrationid', :to => 'sessions#android_registrationid'


  resources :users, :key => :username do
    member do 
      get 'favoritepackages'
      get 'comments'
    end
  end
  get   '/signup',                       :to => 'users#new'
  get   '/users/:id/notifications',      :to => 'users#notifications'
  get   '/users/activate/:verification', :to => 'users#activate'
  get   '/iforgotmypassword',            :to => 'users#iforgotmypassword'
  post  '/resetpassword',                :to => 'users#resetpassword'
  get   '/home',                         :to => 'users#home'

  get  '/settings/profile',              :to => 'settings#profile'
  get  '/settings/name',                 :to => 'settings#name'
  get  '/settings/password',             :to => 'settings#password'
  get  '/settings/privacy',              :to => 'settings#privacy'
  get  '/settings/delete',               :to => 'settings#delete'
  get  '/settings/links',                :to => 'settings#links'
  post '/settings/updatenames',          :to => 'settings#updatenames'
  post '/settings/updatepassword',       :to => 'settings#updatepassword'
  post '/settings/updateprivacy',        :to => 'settings#updateprivacy'
  post '/settings/updateprofile',        :to => 'settings#updateprofile'
  post '/settings/updatelinks',          :to => 'settings#updatelinks'
  post '/settings/destroy',              :to => 'settings#destroy'

  
  get   '/search',                                      :to => 'products#search'
  get   '/package/name',                                :to => 'products#autocomplete_product_name'
  post  '/package/follow',                              :to => 'products#follow'
  post  '/package/unfollow',                            :to => 'products#unfollow'
  post  '/package/image_path',                          :to => 'products#image_path'
  post  '/package/upload_image',                        :to => 'products#upload_image'
  get   '/package/:key',                                :to => 'products#show', :as => 'products'
  get   '/package/:key/edit',                           :to => 'products#edit'
  post  '/package/:key/update',                         :to => 'products#update'
  post  '/package/:key/delete_link',                    :to => 'products#delete_link'
  get   '/package/:key/version/:version',               :to => 'products#show'
  post  '/package/:key/version/:version/dependencies',  :to => 'products#recursive_dependencies'
  post  '/package/:key/version/:version/lp_dependencies',  :to => 'products#lp_dependencies'

  get   '/product/:key',                                :to => 'products#show'
  get   '/product/:key/version/:version',               :to => 'products#show'

  get   '/package_visual/:key/version/:version',        :to => 'products#show_visual'

  get   '/packagelike/like_overall',    :to => 'productlikes#like_overall'
  get   '/packagelike/dislike_overall', :to => 'productlikes#dislike_overall'
  get   '/packagelike/like_docu',       :to => 'productlikes#like_docu'
  get   '/packagelike/dislike_docu',    :to => 'productlikes#dislike_docu'
  get   '/packagelike/like_support',    :to => 'productlikes#like_support'
  get   '/packagelike/dislike_support', :to => 'productlikes#dislike_support'


  resources :versioncomments
  get   '/vc/:id',                       :to => 'versioncomments#show'

  resources :versioncommentreplies
  
  namespace :user do 
    resources :projects do
      member do
        get 'follow'
        get 'unfollow'
      end
    end
  end

  get   '/news',               :to => 'news#news'
  get   '/mynews',             :to => 'news#mynews'
  get   '/hotnews',            :to => 'news#hotnews'
  
  resources :crawles
  get   '/crawles',             :to => 'crawles#index'
  get   '/group/:group',        :to => 'crawles#group'

  post  '/feedback',            :to => 'feedback#feedback'    

  get   '/about',               :to => 'page#about'
  get   '/impressum',           :to => 'page#impressum'
  get   '/imprint',             :to => 'page#imprint'
  get   '/nutzungsbedingungen', :to => 'page#nutzungsbedingungen'  
  get   '/terms',               :to => 'page#terms'
  get   '/datenschutz',         :to => 'page#datenschutz'
  get   '/dataprivacy',         :to => 'page#dataprivacy'
  get   '/datenerhebung',       :to => 'page#datenerhebung'
  get   '/datacollection',      :to => 'page#datacollection'
  get   '/disclaimer',          :to => 'page#disclaimer'
  get   '/pricing',             :to => 'page#pricing'
  get   '/apijson',             :to => 'page#apijson'  
  get   '/apijson_tools',       :to => 'page#apijson_tools'  
  get   '/apijson_libs',        :to => 'page#apijson_libs'
  get   '/newest/version',      :to => 'page#newest'
  get   '/current/version',     :to => 'page#newest'
  get   '/latest/version',      :to => 'page#newest'

  get   'site_map_01.xml',        :to => 'page#site_map_01'
  get   'site_map_02.xml',        :to => 'page#site_map_02'
  get   'site_map_03.xml',        :to => 'page#site_map_03'
  get   'site_map_04.xml',        :to => 'page#site_map_04'
  get   'site_map_05.xml',        :to => 'page#site_map_05'
  get   'site_map_06.xml',        :to => 'page#site_map_06'
  get   'site_map_07.xml',        :to => 'page#site_map_07'
  get   'site_map_08.xml',        :to => 'page#site_map_08'
  get   'site_map_09.xml',        :to => 'page#site_map_09'
  get   'site_map_10.xml',        :to => 'page#site_map_10'
  get   'site_map_11.xml',        :to => 'page#site_map_11'
  get   'site_map_12.xml',        :to => 'page#site_map_12'
  get   'site_map_13.xml',        :to => 'page#site_map_13'
  get   'site_map_14.xml',        :to => 'page#site_map_14'
  get   'site_map_15.xml',        :to => 'page#site_map_15'
  get   'site_map_16.xml',        :to => 'page#site_map_16'

  get   '*path', :to => 'page#routing_error'
  
end