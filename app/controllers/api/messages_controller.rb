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
      ActionCable.server.broadcast 'messages',
        id: @message.id,
        text: @message.text,
        user_id: @message.user_id,
        username: @message.user.username,
        created_at: @message.created_at.strftime("%I:%M%p on %B %d, %Y"),
        sub_channel_id: @message.sub_channel_id
      head :ok
    else
      render json: ["Invalid Message"], status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :user_id, :sub_channel_id)
  end
end
