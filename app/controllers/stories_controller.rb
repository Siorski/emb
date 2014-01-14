class StoriesController < ApplicationController
	def index
		render json: Story.all
	end

	def show
		render json: Story.find(params[:id]);
	end

	def create
		sleep 1;
		render json: Story.create(story);	
	end

	def update
		sleep 1;
		render json: Story.find(params[:id]).tap { |s| s.update_attributes(story) };
	end

	def destroy
		Story.find(params[:id]).destroy
		head 204
	end
	
private
	def story
		params[:story].permit(:title, :body, :author, :published);
	end

end
