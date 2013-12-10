class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :token
end
