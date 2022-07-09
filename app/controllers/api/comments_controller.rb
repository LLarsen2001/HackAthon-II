class Api::CommentsController < ApplicationController
  before_action :set_user
  before_action :set_post

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
    params.require(:comment).permit(:text)
  end
end
