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
