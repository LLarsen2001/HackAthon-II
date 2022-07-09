class Api::UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    def index
        render json: User.all
    end
    def show
        render json: user = User.find(params[:id])
    end
    def destroy
        render json: User.destroy
    end

    private
    def set_user
        @author = User.find(params[:id])
    end


end
