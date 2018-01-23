class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :disable]
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.active
  end

  def show
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def factorial_calculation
    number = rand(1..10)
    result = (1..number).inject(:*) || 1
    result
  end

  def create
    @post = Post.create(post_params)
    render json: { post: @post }
    # @post.update(factorial: factorial_calculation)
  end

  def update
    @post.update(post_params)
    # @post.update(factorial: factorial_calculation)
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def disable
    @post.update(is_active: false)
  end

  def home
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :published, :factorial)
  end
end
