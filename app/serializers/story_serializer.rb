class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :author, :published
end
