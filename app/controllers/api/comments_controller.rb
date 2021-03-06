class Api::CommentsController < ApplicationController
  before_action :set_user
  before_action :set_post

  def index
    render json: @post.comments.all
  end

  def all_user_comments
    render json: @user.comments.all
  end

  def create 
    @comment = @post.comments.new(comment_params)
    if(@comment.save)
        render json: @comment
    else
        render json: @comment.errors.full_messages, status: 422
    end
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_post
    @post = @user.posts.find(params[:post_id])
  end

  def comment_params 
    params.require(:comment).permit(:comment, :user_id, :post_id)
  end
end
