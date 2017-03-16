class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    @message.user = current_user

    if @message.save
      render :show
    else
      render json: ["Invalid Message"], status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :user_id, :sub_channel_id, :direct_message_id)
  end
end
