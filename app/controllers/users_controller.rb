class UsersController < ApplicationController
	def index
		render json: User.all
	end

	def create
		sleep 1;
		render json: User.create(user);		
	end

private
	def user
		params[:user].permit(:name, :password);
	end
end
