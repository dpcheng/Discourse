class Api::SubChannelsController < ApplicationController
  def index
    @sub_channels = SubChannel.where("channel_id = #{params[:channel_id]}")
    render :index
  end

  def show
    @sub_channel = SubChannel.find(params[:id])
    render :show
  end

  def create
    @sub_channel = SubChannel.new(sub_channel_params)

    if @sub_channel.save
      if @sub_channel.channel_id == nil
        current_user.direct_messages.push(@sub_channel.id)
        current_user.save
      end
      discourse = User.find_by(username: "Discourse")
      Message.create(text: "Welcome to the beginning of the #{@sub_channel.name} channel!", user_id: discourse.id, sub_channel_id: @sub_channel.id)
      render :show
    else
      render json: @sub_channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @sub_channel = SubChannel.find(params[:id])
    @sub_channel.destroy
    render :show
  end

  private

  def sub_channel_params
    params.require(:sub_channel).permit(:name, :channel_id)
  end
end
