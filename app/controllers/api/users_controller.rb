class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    past_direct_messages = []
    if @user
      past_direct_messages = @user.direct_messages
    end

    if @user.update(user_params)
      @user.direct_messages += past_direct_messages
      @user.direct_messages = @user.direct_messages.uniq
      @user.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :direct_messages)
  end
end
