class WelcomesController < ApplicationController

  def home
    @posts = Post.all
  end

end