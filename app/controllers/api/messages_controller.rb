class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
  end


  def show
    @message = Message.find(params[:id])
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: ["Invalid Message"], status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :user_id, :sub_channel_id)
  end
end
