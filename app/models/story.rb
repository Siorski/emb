class Story < ActiveRecord::Base
	validates :title, presence: true
	validates :body, presence: true
	validates :author, presence: true
end
