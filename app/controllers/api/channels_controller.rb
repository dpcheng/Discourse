class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      SubChannel.create(name: "#general", channel_id: @channel.id)
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
    params.require(:channel).permit(:name)
  end
end
