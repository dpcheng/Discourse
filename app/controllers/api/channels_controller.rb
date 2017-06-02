class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      sub_channel = SubChannel.create(name: "#general", channel_id: @channel.id)
      discourse = User.find_by(username: "Discourse")
      Message.create(text: "Welcome to the beginning of the #{sub_channel.name} channel!", user_id: discourse.id, sub_channel_id: sub_channel.id)
      render :show
    else
      render json: ["Invalid Channel"], status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :image_url)
  end
end
